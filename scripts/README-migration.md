# Time-tracking data migration: Supabase -> Turso

One-time migration of the `projects` and `time_entries` tables from the legacy
Supabase project into this app's Turso/libSQL database.
`scripts/supabase-to-turso.mjs` does the work.

## What it does

- Reads ALL rows from the source Supabase `users`, `projects`, and
  `time_entries` tables (paginated).
- Remaps each source `user_id` onto a Better Auth `user` row in Turso by
  matching email. If `MIGRATION_TARGET_EMAIL` is set — or only one target user
  exists — every source row is mapped onto that single user (personal,
  single-user case).
- Inserts `projects` first, then `time_entries` (FK order). A `time_entry`
  pointing at a project that was not migrated gets `project_id` set to `NULL`.
- Upserts with `INSERT ... ON CONFLICT(id) DO UPDATE`, so the script is
  idempotent — re-running refreshes rows instead of duplicating them.
- Type mapping: timestamps keep their ISO strings, `is_active` boolean ->
  `1/0`, `tags` text[] -> `JSON.stringify(...)` (or `NULL`), `hourly_rate` ->
  number or `NULL`, `duration` stays an integer.

## Prerequisites

1. **`SOURCE_SUPABASE_*` and `TURSO_*` env vars** are already in `.env.local`:
   - `SOURCE_SUPABASE_URL`
   - `SOURCE_SUPABASE_SERVICE_ROLE_KEY`
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - Optional: `MIGRATION_TARGET_EMAIL` (force all rows onto one user)

2. **Register the destination account first** by signing up at `/register`, so a
   Better Auth `user` row exists in Turso to map the imported data onto.

3. **Install the source client** (not yet installed; dev dependency only):

   ```sh
   pnpm add -D @supabase/supabase-js
   ```

   (`@libsql/client` is already a project dependency.)

4. Make sure the destination tables exist. If you have not run it yet:

   ```sh
   node --env-file=.env.local scripts/init-db.mjs
   ```

## Run

Preview first — `DRY_RUN=1` logs every planned operation and writes nothing:

```sh
DRY_RUN=1 node --env-file=.env.local scripts/supabase-to-turso.mjs
```

Review the counts and any `SKIP` / `project_id NULL` warnings. When it looks
right, apply for real:

```sh
node --env-file=.env.local scripts/supabase-to-turso.mjs
```

The run prints a summary of projects and time entries migrated / skipped. Re-run
any time — it upserts by `id`, so it is safe to run again.

## Notes

- Rows whose source user cannot be mapped to a target user are warned about and
  skipped (they are not written).
- If a `time_entry` references a project that was skipped, the entry is still
  imported with `project_id = NULL` (matching the `ON DELETE SET NULL` FK).
