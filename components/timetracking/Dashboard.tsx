"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Play, Plus } from "lucide-react"
import { toast } from "sonner"

import {
  startTimeTracking,
  type Project,
  type TimeEntry,
} from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProjectQuickAdd } from "./ProjectQuickAdd"
import { TimeTracker } from "./TimeTracker"
import { TimeEntryTable } from "./TimeEntryTable"
import { ManualEntryDialog } from "./ManualEntryDialog"

const NO_PROJECT = "none"

interface DashboardProps {
  initialProjects: Project[]
  initialEntries: TimeEntry[]
  initialActiveEntry: TimeEntry | null
  initialRange: { startDate: string; endDate: string }
}

export function Dashboard({
  initialProjects,
  initialEntries,
  initialActiveEntry,
  initialRange,
}: DashboardProps) {
  const router = useRouter()

  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [activeEntry, setActiveEntry] = useState<TimeEntry | null>(
    initialActiveEntry,
  )
  const [tableRefresh, setTableRefresh] = useState(0)

  const [startProjectId, setStartProjectId] = useState<string>(NO_PROJECT)
  const [startDescription, setStartDescription] = useState("")
  const [isStarting, setIsStarting] = useState(false)
  const [manualOpen, setManualOpen] = useState(false)

  const projectMap = useMemo(() => {
    const map: Record<string, Project> = {}
    projects.forEach((p) => {
      map[p.id] = p
    })
    return map
  }, [projects])

  const activeProject = useMemo(
    () =>
      activeEntry?.project_id ? projectMap[activeEntry.project_id] ?? null : null,
    [activeEntry, projectMap],
  )

  const refreshTable = () => setTableRefresh((n) => n + 1)

  const handleProjectCreated = (project: Project) => {
    setProjects((prev) => [project, ...prev])
  }

  const handleStartTimer = async () => {
    if (activeEntry) {
      toast.error("Stop the running timer first")
      return
    }
    setIsStarting(true)
    try {
      const projectId = startProjectId === NO_PROJECT ? "" : startProjectId
      const result = await startTimeTracking(
        projectId,
        startDescription.trim() || undefined,
      )
      if (result.error || !result.data) {
        toast.error(result.error || "Failed to start timer")
      } else {
        setActiveEntry(result.data)
        setStartDescription("")
        toast.success("Timer started")
      }
    } catch {
      toast.error("Failed to start timer")
    } finally {
      setIsStarting(false)
    }
  }

  const handleStopped = () => {
    setActiveEntry(null)
    refreshTable()
    router.refresh()
  }

  return (
    <div className="space-y-6">
      {/* (a) Compact controls row */}
      <div className="grid gap-4 lg:grid-cols-2">
        <ProjectQuickAdd onProjectCreated={handleProjectCreated} />

        <div className="rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
              Start a timer
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setManualOpen(true)}
              className="gap-1.5"
            >
              <Plus className="size-4" />
              Add manual entry
            </Button>
          </div>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <Select value={startProjectId} onValueChange={setStartProjectId}>
              <SelectTrigger className="sm:w-[180px]">
                <SelectValue placeholder="Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={NO_PROJECT}>No project</SelectItem>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="What are you working on? (optional)"
              value={startDescription}
              onChange={(e) => setStartDescription(e.target.value)}
              className="sm:flex-1"
            />

            <Button
              onClick={handleStartTimer}
              disabled={isStarting || !!activeEntry}
              className="gap-2 rounded-full bg-blue-600 text-white hover:bg-blue-500"
            >
              <Play className="size-4" />
              {isStarting ? "Starting..." : "Start"}
            </Button>
          </div>
        </div>
      </div>

      {/* (b) Running timer panel */}
      {activeEntry && (
        <TimeTracker
          activeEntry={activeEntry}
          project={activeProject}
          onStopped={handleStopped}
        />
      )}

      {/* (c) Main time-entries table */}
      <TimeEntryTable
        projects={projects}
        initialEntries={initialEntries}
        initialStartDate={initialRange.startDate}
        initialEndDate={initialRange.endDate}
        refreshSignal={tableRefresh}
      />

      <ManualEntryDialog
        open={manualOpen}
        onOpenChange={setManualOpen}
        projects={projects}
        onCreated={refreshTable}
      />
    </div>
  )
}
