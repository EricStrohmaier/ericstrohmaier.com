"use server"

import { db } from "@/lib/db"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"

// Types
export type Project = {
  id: string
  name: string
  description?: string | null
  client?: string | null
  hourly_rate?: number | null
  created_at: string
  user_id: string
  is_active: boolean
}

export type TimeEntry = {
  id: string
  project_id: string | null
  user_id: string
  description?: string | null
  start_time: string
  end_time?: string | null
  duration?: number | null
  created_at: string
  tags?: string[] | null
}

export type TimeFilterOptions = {
  startDate?: string
  endDate?: string
  projectId?: string
  timezone?: string // IANA timezone string (e.g., "America/New_York")
}

export type ActionResult<T> = { data?: T; error?: string }

// Auth helper -- every query is scoped to this user id.
const requireUserId = async (): Promise<string> => {
  const session = await auth.api.getSession({ headers: await headers() })
  const userId = session?.user?.id
  if (!userId) throw new Error("Unauthorized")
  return userId
}

// Row mappers (Turso returns plain objects keyed by column name)
const mapProject = (row: Record<string, unknown>): Project => ({
  id: row.id as string,
  name: row.name as string,
  description: (row.description as string | null) ?? null,
  client: (row.client as string | null) ?? null,
  hourly_rate: (row.hourly_rate as number | null) ?? null,
  created_at: row.created_at as string,
  user_id: row.user_id as string,
  is_active: Number(row.is_active) === 1,
})

const mapTimeEntry = (row: Record<string, unknown>): TimeEntry => {
  let tags: string[] | null = null
  const rawTags = row.tags as string | null
  if (rawTags) {
    try {
      const parsed = JSON.parse(rawTags)
      tags = Array.isArray(parsed) ? parsed : null
    } catch {
      tags = null
    }
  }
  return {
    id: row.id as string,
    project_id: (row.project_id as string | null) ?? null,
    user_id: row.user_id as string,
    description: (row.description as string | null) ?? null,
    start_time: row.start_time as string,
    end_time: (row.end_time as string | null) ?? null,
    duration: (row.duration as number | null) ?? null,
    created_at: row.created_at as string,
    tags,
  }
}

// ---------------------------------------------------------------------------
// Timezone helpers -- PORTED VERBATIM from the source project.
// ---------------------------------------------------------------------------

// Helper to get timezone offset in minutes for a specific timezone and date
const getTimezoneOffset = (timezone: string, date: Date): number => {
  // Get the UTC time string
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }))
  // Get the time in the target timezone
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }))
  // The difference is the offset
  return (utcDate.getTime() - tzDate.getTime()) / (60 * 1000)
}

// Helper to convert a date string in user's timezone to UTC ISO string
const toUTCDateString = (
  dateStr: string,
  timezone: string,
  isEndOfDay: boolean,
): string => {
  // dateStr is in format "yyyy-MM-dd"
  // We want to interpret this as a date in the user's timezone
  const timePart = isEndOfDay ? "T23:59:59.999" : "T00:00:00.000"

  // Create a reference date in UTC to calculate the offset for that day
  // This handles DST correctly since offset can vary by date
  const refDate = new Date(`${dateStr}T12:00:00Z`)
  const offsetMinutes = getTimezoneOffset(timezone, refDate)

  // Create the UTC date by parsing as UTC and adjusting for the timezone offset
  // If user is in GMT-5 (offset = -300), local midnight = UTC 05:00
  // So we need to ADD the offset (which is negative) to get UTC
  const utcDate = new Date(`${dateStr}${timePart}Z`)
  utcDate.setMinutes(utcDate.getMinutes() + offsetMinutes)

  return utcDate.toISOString()
}

// ---------------------------------------------------------------------------
// Project functions
// ---------------------------------------------------------------------------

export const getProjects = async (): Promise<Project[]> => {
  const userId = await requireUserId()
  const result = await db.execute({
    sql: "SELECT * FROM projects WHERE user_id = ? ORDER BY created_at DESC",
    args: [userId],
  })
  return result.rows.map((r) => mapProject(r as Record<string, unknown>))
}

export const getProject = async (id: string): Promise<Project | null> => {
  const userId = await requireUserId()
  const result = await db.execute({
    sql: "SELECT * FROM projects WHERE id = ? AND user_id = ? LIMIT 1",
    args: [id, userId],
  })
  const row = result.rows[0]
  return row ? mapProject(row as Record<string, unknown>) : null
}

export const createProject = async (input: {
  name: string
  client?: string | null
  description?: string | null
  hourly_rate?: number | null
}): Promise<ActionResult<Project>> => {
  try {
    const userId = await requireUserId()
    const id = crypto.randomUUID()
    const createdAt = new Date().toISOString()

    await db.execute({
      sql: `INSERT INTO projects (id, name, description, client, hourly_rate, created_at, user_id, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        id,
        input.name,
        input.description ?? null,
        input.client ?? null,
        input.hourly_rate ?? null,
        createdAt,
        userId,
        1,
      ],
    })

    revalidatePath("/dashboard")
    return {
      data: {
        id,
        name: input.name,
        description: input.description ?? null,
        client: input.client ?? null,
        hourly_rate: input.hourly_rate ?? null,
        created_at: createdAt,
        user_id: userId,
        is_active: true,
      },
    }
  } catch (error) {
    console.error("Error creating project:", error)
    return { error: "Failed to create project" }
  }
}

export const updateProject = async (
  id: string,
  partial: Partial<
    Pick<Project, "name" | "client" | "description" | "is_active" | "hourly_rate">
  >,
): Promise<ActionResult<Project>> => {
  try {
    const userId = await requireUserId()

    const sets: string[] = []
    const args: (string | number | null)[] = []

    if (partial.name !== undefined) {
      sets.push("name = ?")
      args.push(partial.name)
    }
    if (partial.hourly_rate !== undefined) {
      sets.push("hourly_rate = ?")
      args.push(partial.hourly_rate ?? null)
    }
    if (partial.client !== undefined) {
      sets.push("client = ?")
      args.push(partial.client ?? null)
    }
    if (partial.description !== undefined) {
      sets.push("description = ?")
      args.push(partial.description ?? null)
    }
    if (partial.is_active !== undefined) {
      sets.push("is_active = ?")
      args.push(partial.is_active ? 1 : 0)
    }

    if (sets.length === 0) {
      const existing = await getProject(id)
      return existing ? { data: existing } : { error: "Project not found" }
    }

    args.push(id, userId)
    await db.execute({
      sql: `UPDATE projects SET ${sets.join(", ")} WHERE id = ? AND user_id = ?`,
      args,
    })

    revalidatePath("/dashboard")
    const updated = await getProject(id)
    return updated ? { data: updated } : { error: "Project not found" }
  } catch (error) {
    console.error("Error updating project:", error)
    return { error: "Failed to update project" }
  }
}

export const deleteProject = async (
  id: string,
): Promise<{ success?: boolean; error?: string }> => {
  try {
    const userId = await requireUserId()
    await db.execute({
      sql: "DELETE FROM projects WHERE id = ? AND user_id = ?",
      args: [id, userId],
    })
    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error deleting project:", error)
    return { error: "Failed to delete project" }
  }
}

// ---------------------------------------------------------------------------
// Time entry functions
// ---------------------------------------------------------------------------

export const getTimeEntries = async (
  filters?: TimeFilterOptions,
): Promise<TimeEntry[]> => {
  const userId = await requireUserId()

  // Use the user's timezone or fall back to UTC
  const timezone = filters?.timezone || "UTC"

  // Only completed entries belong in the list; the running timer (end_time
  // NULL) is surfaced separately via getActiveTimeEntry / the TimeTracker panel.
  const conditions: string[] = ["user_id = ?", "end_time IS NOT NULL"]
  const args: (string | number)[] = [userId]

  if (filters?.startDate) {
    // Convert the start date (start of day in user's timezone) to UTC
    const startDateUTC = toUTCDateString(filters.startDate, timezone, false)
    conditions.push("start_time >= ?")
    args.push(startDateUTC)
  }

  if (filters?.endDate) {
    // Convert the end date (end of day in user's timezone) to UTC
    const endDateUTC = toUTCDateString(filters.endDate, timezone, true)
    conditions.push("start_time <= ?")
    args.push(endDateUTC)
  }

  if (filters?.projectId) {
    conditions.push("project_id = ?")
    args.push(filters.projectId)
  }

  const result = await db.execute({
    sql: `SELECT * FROM time_entries WHERE ${conditions.join(
      " AND ",
    )} ORDER BY start_time DESC`,
    args,
  })

  return result.rows.map((r) => mapTimeEntry(r as Record<string, unknown>))
}

export const getTimeEntry = async (id: string): Promise<TimeEntry | null> => {
  const userId = await requireUserId()
  const result = await db.execute({
    sql: "SELECT * FROM time_entries WHERE id = ? AND user_id = ? LIMIT 1",
    args: [id, userId],
  })
  const row = result.rows[0]
  return row ? mapTimeEntry(row as Record<string, unknown>) : null
}

export const getActiveTimeEntry = async (): Promise<TimeEntry | null> => {
  const userId = await requireUserId()
  const result = await db.execute({
    sql: `SELECT * FROM time_entries
          WHERE user_id = ? AND end_time IS NULL
          ORDER BY start_time DESC LIMIT 1`,
    args: [userId],
  })
  const row = result.rows[0]
  return row ? mapTimeEntry(row as Record<string, unknown>) : null
}

export const createTimeEntry = async (input: {
  project_id?: string | null
  description?: string | null
  start_time: string
  end_time?: string | null
  duration?: number | null
  tags?: string[] | null
}): Promise<ActionResult<TimeEntry>> => {
  try {
    const userId = await requireUserId()

    // Ownership guard: a supplied project_id must belong to this user (the FK
    // only enforces existence, not ownership).
    if (input.project_id) {
      const owns = await db.execute({
        sql: "SELECT 1 FROM projects WHERE id = ? AND user_id = ? LIMIT 1",
        args: [input.project_id, userId],
      })
      if (owns.rows.length === 0) return { error: "Project not found" }
    }

    const id = crypto.randomUUID()
    const createdAt = new Date().toISOString()
    const tagsJson =
      input.tags && input.tags.length > 0 ? JSON.stringify(input.tags) : null

    await db.execute({
      sql: `INSERT INTO time_entries (id, project_id, user_id, description, start_time, end_time, duration, created_at, tags)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        id,
        input.project_id || null,
        userId,
        input.description ?? null,
        input.start_time,
        input.end_time ?? null,
        input.duration ?? null,
        createdAt,
        tagsJson,
      ],
    })

    revalidatePath("/dashboard")
    return {
      data: {
        id,
        project_id: input.project_id || null,
        user_id: userId,
        description: input.description ?? null,
        start_time: input.start_time,
        end_time: input.end_time ?? null,
        duration: input.duration ?? null,
        created_at: createdAt,
        tags: input.tags ?? null,
      },
    }
  } catch (error) {
    console.error("Error creating time entry:", error)
    return { error: "Failed to create time entry" }
  }
}

export const updateTimeEntry = async (
  id: string,
  partial: Partial<
    Pick<
      TimeEntry,
      "project_id" | "description" | "start_time" | "end_time" | "duration" | "tags"
    >
  >,
): Promise<ActionResult<TimeEntry>> => {
  try {
    const userId = await requireUserId()

    const existing = await getTimeEntry(id)
    if (!existing) return { error: "Time entry not found" }

    // Ownership guard for a reassigned project_id.
    if (partial.project_id) {
      const owns = await db.execute({
        sql: "SELECT 1 FROM projects WHERE id = ? AND user_id = ? LIMIT 1",
        args: [partial.project_id, userId],
      })
      if (owns.rows.length === 0) return { error: "Project not found" }
    }

    const next = { ...existing, ...partial }

    // Recompute duration when both start and end are present.
    if (next.start_time && next.end_time) {
      const start = new Date(next.start_time)
      const end = new Date(next.end_time)
      next.duration = Math.floor((end.getTime() - start.getTime()) / 1000)
    }

    const tagsJson =
      next.tags && next.tags.length > 0 ? JSON.stringify(next.tags) : null

    await db.execute({
      sql: `UPDATE time_entries
            SET project_id = ?, description = ?, start_time = ?, end_time = ?, duration = ?, tags = ?
            WHERE id = ? AND user_id = ?`,
      args: [
        next.project_id || null,
        next.description ?? null,
        next.start_time,
        next.end_time ?? null,
        next.duration ?? null,
        tagsJson,
        id,
        userId,
      ],
    })

    revalidatePath("/dashboard")
    const updated = await getTimeEntry(id)
    return updated ? { data: updated } : { error: "Time entry not found" }
  } catch (error) {
    console.error("Error updating time entry:", error)
    return { error: "Failed to update time entry" }
  }
}

export const deleteTimeEntry = async (
  id: string,
): Promise<{ success?: boolean; error?: string }> => {
  try {
    const userId = await requireUserId()
    await db.execute({
      sql: "DELETE FROM time_entries WHERE id = ? AND user_id = ?",
      args: [id, userId],
    })
    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error deleting time entry:", error)
    return { error: "Failed to delete time entry" }
  }
}

// Create a time entry manually with specified duration.
export const createManualTimeEntry = async (input: {
  project_id?: string | null
  description?: string | null
  date: string // yyyy-MM-dd in the user's local time
  hours: number
  minutes: number
  timezone?: string // IANA tz of the picker; keeps the entry on the picked day
}): Promise<ActionResult<TimeEntry>> => {
  const durationInSeconds = input.hours * 3600 + input.minutes * 60

  // Start of the selected day in the user's timezone, expressed as a UTC
  // instant via the SAME tz logic getTimeEntries uses to build its filter
  // window. This keeps a manual entry on the day the user actually picked, with
  // no off-by-one for non-UTC offsets.
  const timezone = input.timezone || "UTC"
  const startTime = new Date(toUTCDateString(input.date, timezone, false))

  // Calculate end time by adding the duration.
  const endTime = new Date(startTime.getTime() + durationInSeconds * 1000)

  return createTimeEntry({
    project_id: input.project_id || null,
    description: input.description ?? null,
    start_time: startTime.toISOString(),
    end_time: endTime.toISOString(),
    duration: durationInSeconds,
  })
}

export const startTimeTracking = async (
  projectId: string,
  description?: string,
): Promise<ActionResult<TimeEntry>> => {
  // Store the date with timezone information preserved.
  const now = new Date()
  const nowWithTimezone = now.toISOString()

  return createTimeEntry({
    project_id: projectId || null,
    description: description ?? null,
    start_time: nowWithTimezone,
    end_time: null,
    duration: null,
  })
}

export const stopTimeTracking = async (
  timeEntryId: string,
): Promise<ActionResult<TimeEntry>> => {
  const timeEntry = await getTimeEntry(timeEntryId)

  if (!timeEntry) {
    return { error: "Time entry not found" }
  }

  if (timeEntry.end_time) {
    return { error: "Time entry already stopped" }
  }

  const now = new Date()
  const nowWithTimezone = now.toISOString()

  const startTime = new Date(timeEntry.start_time)
  const durationInSeconds = Math.floor(
    (now.getTime() - startTime.getTime()) / 1000,
  )

  return updateTimeEntry(timeEntryId, {
    end_time: nowWithTimezone,
    duration: durationInSeconds,
  })
}
