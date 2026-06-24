"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"

import {
  stopTimeTracking,
  updateTimeEntry,
  type TimeEntry,
  type Project,
} from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface TimeTrackerProps {
  activeEntry: TimeEntry
  project: Project | null
  onStopped: () => void
}

function formatElapsed(start: Date): string {
  const diffInSeconds = Math.max(
    0,
    Math.floor((Date.now() - start.getTime()) / 1000),
  )
  const hours = Math.floor(diffInSeconds / 3600)
  const minutes = Math.floor((diffInSeconds % 3600) / 60)
  const seconds = diffInSeconds % 60
  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`
}

export function TimeTracker({
  activeEntry,
  project,
  onStopped,
}: TimeTrackerProps) {
  const startTime = new Date(activeEntry.start_time)
  const [description, setDescription] = useState(activeEntry.description || "")
  const [elapsedTime, setElapsedTime] = useState(() => formatElapsed(startTime))
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setElapsedTime(formatElapsed(startTime))
    const intervalId = setInterval(() => {
      setElapsedTime(formatElapsed(startTime))
    }, 1000)
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeEntry.id, activeEntry.start_time])

  const handleUpdateDescription = async () => {
    setIsLoading(true)
    try {
      const result = await updateTimeEntry(activeEntry.id, { description })
      if (result.error) {
        toast.error(result.error)
      } else {
        toast.success("Description updated")
      }
    } catch {
      toast.error("Failed to update description")
    } finally {
      setIsLoading(false)
    }
  }

  const handleStopTracking = async () => {
    setIsLoading(true)
    try {
      if (description !== (activeEntry.description || "")) {
        await updateTimeEntry(activeEntry.id, { description })
      }
      const result = await stopTimeTracking(activeEntry.id)
      if (result.error) {
        toast.error(result.error)
      } else {
        toast.success(`Stopped tracking ${project?.name || "time"}`)
        onStopped()
      }
    } catch {
      toast.error("Failed to stop time tracking")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
            Currently tracking
          </p>
          <p className="mt-1 font-semibold tracking-tight">
            {project?.name || "No project"}
            {project?.client ? (
              <span className="text-foreground/55"> · {project.client}</span>
            ) : null}
          </p>
        </div>
        <span className="rounded-full bg-blue-600/10 px-3 py-1 font-mono text-lg font-semibold tabular-nums text-blue-600">
          {elapsedTime}
        </span>
      </div>

      <div className="mt-4">
        <Textarea
          placeholder="What are you working on?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handleUpdateDescription}
          disabled={isLoading}
        >
          Update description
        </Button>
        <Button
          variant="destructive"
          onClick={handleStopTracking}
          disabled={isLoading}
        >
          Stop tracking
        </Button>
      </div>
    </div>
  )
}
