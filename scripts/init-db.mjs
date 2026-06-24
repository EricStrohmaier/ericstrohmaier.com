// Creates the application tables (projects, time_entries) on the Turso DB.
// Better Auth's own tables (user, session, account, verification) are created
// separately via `npx @better-auth/cli migrate`.
//
// Run with: node --env-file=.env.local scripts/init-db.mjs
import { createClient } from "@libsql/client"

const url = process.env.TURSO_DATABASE_URL
const authToken = process.env.TURSO_AUTH_TOKEN
if (!url) {
  console.error("TURSO_DATABASE_URL is not set")
  process.exit(1)
}

const db = createClient({ url, authToken })

const statements = [
  `CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    client TEXT,
    hourly_rate REAL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    is_active INTEGER NOT NULL DEFAULT 1
  )`,
  `CREATE INDEX IF NOT EXISTS idx_projects_user ON projects(user_id)`,
  `CREATE TABLE IF NOT EXISTS time_entries (
    id TEXT PRIMARY KEY,
    project_id TEXT REFERENCES projects(id) ON DELETE SET NULL,
    user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    description TEXT,
    start_time TEXT NOT NULL,
    end_time TEXT,
    duration INTEGER,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    tags TEXT
  )`,
  `CREATE INDEX IF NOT EXISTS idx_time_entries_user ON time_entries(user_id)`,
  `CREATE INDEX IF NOT EXISTS idx_time_entries_project ON time_entries(project_id)`,
  `CREATE INDEX IF NOT EXISTS idx_time_entries_start ON time_entries(start_time)`,
]

for (const sql of statements) {
  await db.execute(sql)
}

const tables = await db.execute(
  "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name",
)
console.log(
  "✅ App tables ready. Tables in DB:",
  tables.rows.map((r) => r.name).join(", "),
)
