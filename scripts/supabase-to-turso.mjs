// One-time data migration: OLD Supabase project -> NEW Turso DB (time tracking).
//
// Migrates the `projects` and `time_entries` tables (and the `users` lookup used
// to remap user ids) from the legacy Supabase project into the Turso/libSQL
// database that backs this app. Source user ids are remapped onto Better Auth
// `user` rows by matching email.
//
// USAGE:
//   1. Install the source client (dev dep): pnpm add -D @supabase/supabase-js
//   2. Make sure these env vars exist (already in .env.local):
//        SOURCE_SUPABASE_URL
//        SOURCE_SUPABASE_SERVICE_ROLE_KEY
//        TURSO_DATABASE_URL
//        TURSO_AUTH_TOKEN
//      Optional:
//        MIGRATION_TARGET_EMAIL   -> force ALL source rows onto this target user
//        DRY_RUN=1                -> log planned ops, write nothing
//   3. Register the destination account first at /register so a Better Auth
//      `user` row exists to map onto.
//   4. Preview:  DRY_RUN=1 node --env-file=.env.local scripts/supabase-to-turso.mjs
//   5. Apply:           node --env-file=.env.local scripts/supabase-to-turso.mjs
//
// The script is idempotent: re-running upserts (INSERT ... ON CONFLICT(id) DO
// UPDATE) so existing rows are refreshed rather than duplicated.
import { createClient as createSupabaseClient } from "@supabase/supabase-js"
import { createClient as createTursoClient } from "@libsql/client"

const DRY_RUN = process.env.DRY_RUN === "1" || process.env.DRY_RUN === "true"
const TARGET_EMAIL = (process.env.MIGRATION_TARGET_EMAIL || "").trim().toLowerCase()

const SOURCE_URL = process.env.SOURCE_SUPABASE_URL
const SOURCE_KEY = process.env.SOURCE_SUPABASE_SERVICE_ROLE_KEY
const TURSO_URL = process.env.TURSO_DATABASE_URL
const TURSO_TOKEN = process.env.TURSO_AUTH_TOKEN

function requireEnv(name, value) {
  if (!value) {
    console.error(`Missing required env var: ${name}`)
    process.exit(1)
  }
}

requireEnv("SOURCE_SUPABASE_URL", SOURCE_URL)
requireEnv("SOURCE_SUPABASE_SERVICE_ROLE_KEY", SOURCE_KEY)
requireEnv("TURSO_DATABASE_URL", TURSO_URL)

const supabase = createSupabaseClient(SOURCE_URL, SOURCE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})
const turso = createTursoClient({ url: TURSO_URL, authToken: TURSO_TOKEN })

const PAGE_SIZE = 1000

// Fetch every row from a Supabase table, paginating in PAGE_SIZE chunks.
async function fetchAll(table) {
  const rows = []
  let from = 0
  for (;;) {
    const to = from + PAGE_SIZE - 1
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .range(from, to)
    if (error) {
      throw new Error(`Failed to read source table "${table}": ${error.message}`)
    }
    if (!data || data.length === 0) break
    rows.push(...data)
    if (data.length < PAGE_SIZE) break
    from += PAGE_SIZE
  }
  return rows
}

// --- type coercion helpers (Supabase -> Turso/libSQL) ---

// timestamptz -> keep the ISO string Supabase returns; null stays null.
function asTimestamp(value) {
  return value == null ? null : String(value)
}

// hourly_rate numeric -> JS number or null.
function asNumberOrNull(value) {
  if (value == null) return null
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

// integer (e.g. duration in seconds) -> integer or null.
function asIntOrNull(value) {
  if (value == null) return null
  const n = Number(value)
  return Number.isFinite(n) ? Math.trunc(n) : null
}

// boolean -> 1/0. Default applies when the source value is null/undefined.
function asBool(value, fallback) {
  const v = value == null ? fallback : value
  return v ? 1 : 0
}

// text[] -> JSON array string, or null when empty/absent.
function asTagsJson(value) {
  if (value == null) return null
  if (!Array.isArray(value)) return null
  if (value.length === 0) return null
  return JSON.stringify(value)
}

function asTextOrNull(value) {
  return value == null ? null : String(value)
}

async function run() {
  console.log(
    `\n=== Supabase -> Turso migration ${DRY_RUN ? "(DRY RUN — no writes)" : "(LIVE)"} ===\n`,
  )

  // 1. Build the source user_id -> target user.id map.
  const sourceUsers = await fetchAll("users")
  console.log(`Source users fetched: ${sourceUsers.length}`)

  const targetUsersResult = await turso.execute(
    `SELECT id, email FROM "user"`,
  )
  const targetUsers = targetUsersResult.rows.map((r) => ({
    id: String(r.id),
    email: r.email == null ? null : String(r.email).trim().toLowerCase(),
  }))
  console.log(`Target Better Auth users found: ${targetUsers.length}`)

  if (targetUsers.length === 0) {
    console.error(
      "No rows in the target `user` table. Register the destination account at /register first.",
    )
    process.exit(1)
  }

  // Determine the single forced target user, if applicable.
  let forcedTargetId = null
  if (TARGET_EMAIL) {
    const match = targetUsers.find((u) => u.email === TARGET_EMAIL)
    if (!match) {
      console.error(
        `MIGRATION_TARGET_EMAIL="${TARGET_EMAIL}" did not match any target user.`,
      )
      process.exit(1)
    }
    forcedTargetId = match.id
    console.log(`Forcing ALL rows onto target user ${forcedTargetId} (${TARGET_EMAIL}).`)
  } else if (targetUsers.length === 1) {
    forcedTargetId = targetUsers[0].id
    console.log(
      `Single target user detected (${targetUsers[0].email}); mapping ALL rows onto ${forcedTargetId}.`,
    )
  }

  // Email -> target id map (used when not forcing a single target).
  const targetByEmail = new Map()
  for (const u of targetUsers) {
    if (u.email) targetByEmail.set(u.email, u.id)
  }
  // Source user id -> source email.
  const sourceEmailById = new Map()
  for (const u of sourceUsers) {
    sourceEmailById.set(String(u.id), u.email ? String(u.email).trim().toLowerCase() : null)
  }

  // Resolve a source user_id to a target user.id (or null if unmappable).
  function mapUserId(sourceUserId) {
    if (forcedTargetId) return forcedTargetId
    if (sourceUserId == null) return null
    const email = sourceEmailById.get(String(sourceUserId))
    if (!email) return null
    return targetByEmail.get(email) || null
  }

  // 2. Migrate projects (parents) first.
  const projects = await fetchAll("projects")
  console.log(`\nSource projects fetched: ${projects.length}`)

  const mappedProjectIds = new Set()
  let projectsMigrated = 0
  let projectsSkipped = 0

  for (const p of projects) {
    const targetUserId = mapUserId(p.user_id)
    if (!targetUserId) {
      console.warn(
        `  SKIP project ${p.id} ("${p.name}") — cannot map source user_id ${p.user_id}.`,
      )
      projectsSkipped += 1
      continue
    }

    const args = [
      String(p.id),
      asTextOrNull(p.name),
      asTextOrNull(p.description),
      asTextOrNull(p.client),
      asNumberOrNull(p.hourly_rate),
      asTimestamp(p.created_at) ?? new Date().toISOString(),
      targetUserId,
      asBool(p.is_active, true),
    ]

    if (DRY_RUN) {
      console.log(`  [dry-run] upsert project ${p.id} -> user ${targetUserId}`)
    } else {
      await turso.execute({
        sql: `INSERT INTO projects
                (id, name, description, client, hourly_rate, created_at, user_id, is_active)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)
              ON CONFLICT(id) DO UPDATE SET
                name = excluded.name,
                description = excluded.description,
                client = excluded.client,
                hourly_rate = excluded.hourly_rate,
                created_at = excluded.created_at,
                user_id = excluded.user_id,
                is_active = excluded.is_active`,
        args,
      })
    }

    mappedProjectIds.add(String(p.id))
    projectsMigrated += 1
  }

  // 3. Migrate time_entries (children) after projects, for FK ordering.
  const timeEntries = await fetchAll("time_entries")
  console.log(`\nSource time_entries fetched: ${timeEntries.length}`)

  let entriesMigrated = 0
  let entriesSkipped = 0
  let entriesNulledProject = 0

  for (const t of timeEntries) {
    const targetUserId = mapUserId(t.user_id)
    if (!targetUserId) {
      console.warn(
        `  SKIP time_entry ${t.id} — cannot map source user_id ${t.user_id}.`,
      )
      entriesSkipped += 1
      continue
    }

    // FK: projects(id) ON DELETE SET NULL. If the referenced project was not
    // migrated (e.g. its owner was unmappable), null the project_id rather than
    // violate the FK.
    let projectId = t.project_id == null ? null : String(t.project_id)
    if (projectId && !mappedProjectIds.has(projectId)) {
      console.warn(
        `  time_entry ${t.id}: project ${projectId} not migrated — setting project_id NULL.`,
      )
      projectId = null
      entriesNulledProject += 1
    }

    const args = [
      String(t.id),
      projectId,
      targetUserId,
      asTextOrNull(t.description),
      asTimestamp(t.start_time) ?? new Date().toISOString(),
      asTimestamp(t.end_time),
      asIntOrNull(t.duration),
      asTimestamp(t.created_at) ?? new Date().toISOString(),
      asTagsJson(t.tags),
    ]

    if (DRY_RUN) {
      console.log(
        `  [dry-run] upsert time_entry ${t.id} -> user ${targetUserId}, project ${projectId ?? "NULL"}`,
      )
    } else {
      await turso.execute({
        sql: `INSERT INTO time_entries
                (id, project_id, user_id, description, start_time, end_time, duration, created_at, tags)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
              ON CONFLICT(id) DO UPDATE SET
                project_id = excluded.project_id,
                user_id = excluded.user_id,
                description = excluded.description,
                start_time = excluded.start_time,
                end_time = excluded.end_time,
                duration = excluded.duration,
                created_at = excluded.created_at,
                tags = excluded.tags`,
        args,
      })
    }

    entriesMigrated += 1
  }

  // 4. Summary.
  console.log(`\n=== Summary ${DRY_RUN ? "(DRY RUN — nothing written)" : ""} ===`)
  console.log(`  projects:     ${projectsMigrated} migrated, ${projectsSkipped} skipped`)
  console.log(
    `  time_entries: ${entriesMigrated} migrated, ${entriesSkipped} skipped, ${entriesNulledProject} with project_id nulled`,
  )

  const totalSkipped = projectsSkipped + entriesSkipped
  if (totalSkipped > 0) {
    console.error(
      `\n⚠️  ${totalSkipped} row(s) were SKIPPED because their source user could not be mapped to a target user.\n` +
        `   The migration is INCOMPLETE. Register the missing account(s) or set MIGRATION_TARGET_EMAIL, then re-run.`,
    )
  }
  console.log("\nDone.\n")
  return totalSkipped
}

run()
  // Exit non-zero when any row was skipped so an incomplete migration is never
  // mistaken for success.
  .then((skipped) => process.exit(skipped > 0 ? 1 : 0))
  .catch((err) => {
    console.error("\nMigration failed:", err)
    process.exit(1)
  })
