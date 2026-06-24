"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import {
  format,
  parseISO,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns"
import { Pencil, Trash2, X } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"

import {
  getTimeEntries,
  deleteTimeEntry,
  type TimeEntry,
  type Project,
} from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { TimeTrackingPDFButton } from "./TimeTrackingPDFButton"
import { EditEntryDialog } from "./EditEntryDialog"

const ALL_PROJECTS = "all"

function formatDuration(seconds?: number | null): string {
  if (!seconds) return "0h 0m"
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours}h ${minutes}m`
}

// Date-range presets (computed in the user's local time). Each returns the
// inclusive start/end as yyyy-MM-dd strings the getTimeEntries filter expects.
type PresetKey =
  | "thisWeek"
  | "last7"
  | "thisMonth"
  | "lastMonth"
  | "thisYear"
  | "lastYear"

const fmtDay = (d: Date) => format(d, "yyyy-MM-dd")

function presetRange(key: PresetKey): { start: string; end: string } {
  const now = new Date()
  switch (key) {
    case "thisWeek":
      return {
        start: fmtDay(startOfWeek(now, { weekStartsOn: 1 })),
        end: fmtDay(endOfWeek(now, { weekStartsOn: 1 })),
      }
    case "last7":
      return { start: fmtDay(subDays(now, 6)), end: fmtDay(now) }
    case "thisMonth":
      return { start: fmtDay(startOfMonth(now)), end: fmtDay(endOfMonth(now)) }
    case "lastMonth": {
      const m = subMonths(now, 1)
      return { start: fmtDay(startOfMonth(m)), end: fmtDay(endOfMonth(m)) }
    }
    case "thisYear":
      return { start: fmtDay(startOfYear(now)), end: fmtDay(endOfYear(now)) }
    case "lastYear": {
      const y = subYears(now, 1)
      return { start: fmtDay(startOfYear(y)), end: fmtDay(endOfYear(y)) }
    }
  }
}

const PRESETS: { key: PresetKey; label: string }[] = [
  { key: "thisWeek", label: "This Week" },
  { key: "last7", label: "Last 7 Days" },
  { key: "thisMonth", label: "This Month" },
  { key: "lastMonth", label: "Last Month" },
  { key: "thisYear", label: "This Year" },
  { key: "lastYear", label: "Last Year" },
]

function matchPreset(start: string, end: string): PresetKey | "custom" {
  for (const { key } of PRESETS) {
    const r = presetRange(key)
    if (r.start === start && r.end === end) return key
  }
  return "custom"
}

interface TimeEntryTableProps {
  projects: Project[]
  initialEntries: TimeEntry[]
  initialStartDate: string
  initialEndDate: string
  refreshSignal: number
}

export function TimeEntryTable({
  projects,
  initialEntries,
  initialStartDate,
  initialEndDate,
  refreshSignal,
}: TimeEntryTableProps) {
  const userTimezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    [],
  )

  const [entries, setEntries] = useState<TimeEntry[]>(initialEntries)
  const [isLoading, setIsLoading] = useState(false)
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [selectedProject, setSelectedProject] = useState<string>(ALL_PROJECTS)
  const [activePreset, setActivePreset] = useState<PresetKey | "custom">(() =>
    matchPreset(initialStartDate, initialEndDate),
  )

  const [entryToDelete, setEntryToDelete] = useState<TimeEntry | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [entryToEdit, setEntryToEdit] = useState<TimeEntry | null>(null)
  const [editOpen, setEditOpen] = useState(false)

  const projectMap = useMemo(() => {
    const map: Record<string, Project> = {}
    projects.forEach((p) => {
      map[p.id] = p
    })
    return map
  }, [projects])

  const fetchEntries = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await getTimeEntries({
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        projectId:
          selectedProject === ALL_PROJECTS ? undefined : selectedProject,
        timezone: userTimezone,
      })
      setEntries(data)
    } catch {
      toast.error("Failed to load time entries")
    } finally {
      setIsLoading(false)
    }
  }, [startDate, endDate, selectedProject, userTimezone])

  useEffect(() => {
    fetchEntries()
  }, [fetchEntries, refreshSignal])

  const applyPreset = (key: PresetKey) => {
    const r = presetRange(key)
    setStartDate(r.start)
    setEndDate(r.end)
    setActivePreset(key)
  }

  const handleClearFilters = () => {
    setStartDate("")
    setEndDate("")
    setSelectedProject(ALL_PROJECTS)
    setActivePreset("custom")
  }

  const handleConfirmDelete = async () => {
    if (!entryToDelete) return
    setIsDeleting(true)
    try {
      const result = await deleteTimeEntry(entryToDelete.id)
      if (result.error) {
        toast.error(result.error)
      } else {
        setEntries((prev) => prev.filter((e) => e.id !== entryToDelete.id))
        toast.success("Time entry deleted")
      }
    } catch {
      toast.error("Failed to delete time entry")
    } finally {
      setIsDeleting(false)
      setEntryToDelete(null)
    }
  }

  const totalHours = useMemo(
    () =>
      entries.reduce((total, entry) => total + (entry.duration || 0), 0) / 3600,
    [entries],
  )

  const filtersActive =
    startDate !== "" || endDate !== "" || selectedProject !== ALL_PROJECTS

  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
            Time entries
          </p>
          <h2 className="mt-1 font-semibold tracking-tight">Tracked time</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[var(--card-border)] px-3 py-1 font-mono text-sm tabular-nums text-foreground/70">
            Total: {totalHours.toFixed(2)} h
          </span>
          <TimeTrackingPDFButton
            timeEntries={entries}
            projects={projectMap}
            startDate={startDate || undefined}
            endDate={endDate || undefined}
            projectName={
              selectedProject === ALL_PROJECTS
                ? undefined
                : projectMap[selectedProject]?.name
            }
            disabled={entries.length === 0}
          />
        </div>
      </div>

      {/* Date-range presets */}
      <div className="mt-5 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => applyPreset(p.key)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
              activePreset === p.key
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-[var(--card-border)] bg-card text-foreground/70 hover:bg-muted hover:text-foreground",
            )}
          >
            {p.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setActivePreset("custom")}
          className={cn(
            "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
            activePreset === "custom"
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-[var(--card-border)] bg-card text-foreground/70 hover:bg-muted hover:text-foreground",
          )}
        >
          Custom
        </button>
      </div>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap items-end gap-3">
        <div className="space-y-1.5">
          <Label className="text-foreground/55">Project</Label>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All projects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_PROJECTS}>All projects</SelectItem>
              {projects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-foreground/55">From</Label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value)
              setActivePreset("custom")
            }}
            className="w-[160px]"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-foreground/55">To</Label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value)
              setActivePreset("custom")
            }}
            className="w-[160px]"
          />
        </div>

        {filtersActive && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="gap-1.5 text-foreground/55"
          >
            <X className="size-4" />
            Clear
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="mt-5 overflow-hidden rounded-xl border border-[var(--card-border)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-10 text-center text-foreground/55"
                >
                  Loading time entries...
                </TableCell>
              </TableRow>
            ) : entries.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-10 text-center text-foreground/55"
                >
                  No time entries found for the selected filters.
                </TableCell>
              </TableRow>
            ) : (
              entries.map((entry) => {
                const project = entry.project_id
                  ? projectMap[entry.project_id]
                  : undefined
                return (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">
                      {project?.name || (
                        <span className="text-foreground/45">No project</span>
                      )}
                    </TableCell>
                    <TableCell className="text-foreground/70">
                      {entry.description || (
                        <span className="text-foreground/45">
                          No description
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-foreground/70">
                      {format(parseISO(entry.start_time), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-mono tabular-nums text-foreground/70">
                      {formatDuration(entry.duration)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 text-foreground/55 hover:text-foreground"
                          onClick={() => {
                            setEntryToEdit(entry)
                            setEditOpen(true)
                          }}
                          aria-label="Edit entry"
                        >
                          <Pencil className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 text-foreground/55 hover:text-red-600"
                          onClick={() => setEntryToDelete(entry)}
                          aria-label="Delete entry"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete confirmation */}
      <Dialog
        open={!!entryToDelete}
        onOpenChange={(open) => {
          if (!open && !isDeleting) setEntryToDelete(null)
        }}
      >
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Delete time entry?</DialogTitle>
            <DialogDescription>
              This will permanently delete this time entry. This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setEntryToDelete(null)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit dialog */}
      <EditEntryDialog
        open={editOpen}
        onOpenChange={(open) => {
          setEditOpen(open)
          if (!open) setEntryToEdit(null)
        }}
        entry={entryToEdit}
        projects={projects}
        onUpdated={fetchEntries}
      />
    </div>
  )
}
