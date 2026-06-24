// Bulk-add time entries to Turso from a pasted list of hours.
//
// Paste one entry per line in the PASTE block below, then run:
//   DRY_RUN=1 node --env-file=.env.local scripts/add-hours.mjs   # preview
//          node --env-file=.env.local scripts/add-hours.mjs       # insert
//
// Line format (parts separated by "|", extra spaces ok):
//   DATE | HOURS | PROJECT | DESCRIPTION
//   - DATE:    YYYY-MM-DD or DD.MM.YYYY
//   - HOURS:   number, optional trailing "h" (e.g. 8, 8h, 7.5)
//   - PROJECT: matched case-insensitively against your project names
//              (optional — falls back to DEFAULT_PROJECT)
//   - DESC:    optional free text
//
// Each entry is stored on the given calendar day at START_HOUR local time in
// TIMEZONE, with end_time = start + hours and duration in seconds, so it shows
// on the correct day in the dashboard and PDF report.
import { createClient } from "@libsql/client"

// ---- config ---------------------------------------------------------------
const USER_EMAIL = (process.env.MIGRATION_TARGET_EMAIL || "").trim().toLowerCase()
const TIMEZONE = process.env.TZ_OVERRIDE || "Europe/Berlin"
const START_HOUR = 9 // entries start at 09:00 local (time-of-day is cosmetic)
const DEFAULT_PROJECT = "Kinderversicherer"
const DRY_RUN = process.env.DRY_RUN === "1" || process.env.DRY_RUN === "true"

// ---- paste your hours here (one per line) ---------------------------------
const PASTE = `
2026-06-19 | 8 | Kinderversicherer | Harald
2026-06-17 | 5 | Kinderversicherer | Harald
2026-06-18 | 5 | Kinderversicherer | Harald
2026-06-24 | 7 | Kinderversicherer | Harald
`
// ---------------------------------------------------------------------------

const TURSO_URL = process.env.TURSO_DATABASE_URL
const TURSO_TOKEN = process.env.TURSO_AUTH_TOKEN
if (!TURSO_URL) {
  console.error("TURSO_DATABASE_URL is not set")
  process.exit(1)
}
const db = createClient({ url: TURSO_URL, authToken: TURSO_TOKEN })

const pad = (n) => String(n).padStart(2, "0")

// Offset (minutes) between UTC and `timeZone` at the given instant.
function tzOffsetMinutes(timeZone, date) {
  const utc = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }))
  const tz = new Date(date.toLocaleString("en-US", { timeZone }))
  return (utc.getTime() - tz.getTime()) / 60000
}

// Wall-clock (YYYY-MM-DD at hour:minute) in `timeZone` -> UTC ISO string.
function localWallclockToUTCISO(dateStr, hour, minute, timeZone) {
  const naive = new Date(`${dateStr}T${pad(hour)}:${pad(minute)}:00Z`)
  const offset = tzOffsetMinutes(timeZone, naive)
  naive.setMinutes(naive.getMinutes() + offset)
  return naive.toISOString()
}

// Normalize DD.MM.YYYY or YYYY-MM-DD -> YYYY-MM-DD.
function normalizeDate(raw) {
  const s = raw.trim()
  let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s)
  if (m) return `${m[1]}-${m[2]}-${m[3]}`
  m = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s)
  if (m) return `${m[3]}-${pad(+m[2])}-${pad(+m[1])}`
  return null
}

function parseLines(text) {
  const out = []
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trim()
    if (!line || line.startsWith("#")) continue
    const parts = line.split("|").map((p) => p.trim())
    const date = normalizeDate(parts[0] || "")
    const hours = parseFloat((parts[1] || "").replace(/h$/i, "").trim())
    const project = parts[2] || DEFAULT_PROJECT
    const description = parts[3] || null
    if (!date || !Number.isFinite(hours) || hours <= 0) {
      console.warn(`  SKIP unparseable line: "${line}"`)
      continue
    }
    out.push({ date, hours, project, description })
  }
  return out
}

async function run() {
  console.log(
    `\n=== add-hours ${DRY_RUN ? "(DRY RUN — no writes)" : "(LIVE)"} | tz=${TIMEZONE} ===\n`,
  )

  // Resolve target user.
  let userRow
  if (USER_EMAIL) {
    const r = await db.execute({
      sql: `SELECT id, email FROM "user" WHERE lower(email) = ? LIMIT 1`,
      args: [USER_EMAIL],
    })
    userRow = r.rows[0]
  } else {
    const r = await db.execute(`SELECT id, email FROM "user" LIMIT 2`)
    if (r.rows.length === 1) userRow = r.rows[0]
  }
  if (!userRow) {
    console.error(
      "Could not resolve a single target user. Set MIGRATION_TARGET_EMAIL in .env.local.",
    )
    process.exit(1)
  }
  const userId = String(userRow.id)
  console.log(`Target user: ${userRow.email} (${userId})`)

  // Project name -> id map for this user.
  const projRes = await db.execute({
    sql: "SELECT id, name FROM projects WHERE user_id = ?",
    args: [userId],
  })
  const projByName = new Map()
  for (const p of projRes.rows) {
    projByName.set(String(p.name).trim().toLowerCase(), String(p.id))
  }

  const entries = parseLines(PASTE)
  console.log(`Parsed ${entries.length} entr${entries.length === 1 ? "y" : "ies"}.\n`)

  let added = 0
  let skipped = 0
  let totalHours = 0

  for (const e of entries) {
    const projectId = projByName.get(e.project.trim().toLowerCase())
    if (!projectId) {
      console.warn(
        `  SKIP ${e.date} ${e.hours}h — unknown project "${e.project}". Known: ${[...projByName.keys()].join(", ")}`,
      )
      skipped += 1
      continue
    }

    const durationSeconds = Math.round(e.hours * 3600)
    const startISO = localWallclockToUTCISO(e.date, START_HOUR, 0, TIMEZONE)
    const endISO = new Date(
      new Date(startISO).getTime() + durationSeconds * 1000,
    ).toISOString()
    const id = crypto.randomUUID()
    const createdAt = new Date().toISOString()

    console.log(
      `  ${DRY_RUN ? "[dry]" : "[add]"} ${e.date}  ${String(e.hours).padStart(4)}h  ${e.project}${e.description ? "  — " + e.description : ""}`,
    )

    if (!DRY_RUN) {
      await db.execute({
        sql: `INSERT INTO time_entries
                (id, project_id, user_id, description, start_time, end_time, duration, created_at, tags)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
        args: [
          id,
          projectId,
          userId,
          e.description,
          startISO,
          endISO,
          durationSeconds,
          createdAt,
        ],
      })
    }
    added += 1
    totalHours += e.hours
  }

  console.log(
    `\n=== ${DRY_RUN ? "Would add" : "Added"} ${added} entr${added === 1 ? "y" : "ies"} (${totalHours}h total), ${skipped} skipped ===\n`,
  )
  return skipped
}

run()
  .then((skipped) => process.exit(skipped > 0 ? 1 : 0))
  .catch((err) => {
    console.error("\nadd-hours failed:", err)
    process.exit(1)
  })
