// Creates the invoice tables (invoices, invoice_items) on the Turso DB for the
// account-synced invoice feature. Idempotent.
//
// Run with: node --env-file=.env.local scripts/init-invoices-db.mjs
import { createClient } from "@libsql/client"

const url = process.env.TURSO_DATABASE_URL
if (!url) {
  console.error("TURSO_DATABASE_URL is not set")
  process.exit(1)
}
const db = createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN })

const statements = [
  `CREATE TABLE IF NOT EXISTS invoices (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    invoice_number TEXT NOT NULL DEFAULT '',
    issue_date TEXT,
    due_date TEXT,
    bill_to TEXT,
    company_details TEXT,
    currency TEXT NOT NULL DEFAULT '$',
    subtotal REAL NOT NULL DEFAULT 0,
    tax_rate REAL NOT NULL DEFAULT 0,
    tax REAL NOT NULL DEFAULT 0,
    shipping_fee REAL NOT NULL DEFAULT 0,
    total REAL NOT NULL DEFAULT 0,
    notes TEXT,
    bank_details TEXT,
    status TEXT NOT NULL DEFAULT 'draft',
    source_project_id TEXT REFERENCES projects(id) ON DELETE SET NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`,
  `CREATE INDEX IF NOT EXISTS idx_invoices_user ON invoices(user_id)`,
  `CREATE INDEX IF NOT EXISTS idx_invoices_updated ON invoices(updated_at)`,
  `CREATE TABLE IF NOT EXISTS invoice_items (
    id TEXT PRIMARY KEY,
    invoice_id TEXT NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
    description TEXT,
    unit_cost REAL NOT NULL DEFAULT 0,
    quantity REAL NOT NULL DEFAULT 0,
    amount REAL NOT NULL DEFAULT 0,
    position INTEGER NOT NULL DEFAULT 0
  )`,
  `CREATE INDEX IF NOT EXISTS idx_invoice_items_invoice ON invoice_items(invoice_id)`,
]

for (const sql of statements) {
  await db.execute(sql)
}

const tables = await db.execute(
  "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name",
)
console.log(
  "✅ Invoice tables ready. Tables in DB:",
  tables.rows.map((r) => r.name).join(", "),
)
