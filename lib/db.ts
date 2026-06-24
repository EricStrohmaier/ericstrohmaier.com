import { createClient } from "@libsql/client"

const url = process.env.TURSO_DATABASE_URL

if (!url) {
  throw new Error(
    "TURSO_DATABASE_URL is not set. Add it to .env.local (see .env.local example).",
  )
}

// Single libSQL client shared across server actions / route handlers.
export const db = createClient({
  url,
  authToken: process.env.TURSO_AUTH_TOKEN,
})
