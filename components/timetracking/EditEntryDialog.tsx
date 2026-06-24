"use client"

import { useState, useEffect } from "react"
import { format, parseISO } from "date-fns"
import { toast } from "sonner"

import {
  updateTimeEntry,
  type TimeEntry,
  type Project,
} from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const NO_PROJECT = "none"

interface EditEntryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  entry: TimeEntry | null
  projects: Project[]
  onUpdated: () => void
}

export function EditEntryDialog({
  open,
  onOpenChange,
  entry,
  projects,
  onUpdated,
}: EditEntryDialogProps) {
  const [projectId, setProjectId] = useState<string>(NO_PROJECT)
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [hours, setHours] = useState("0")
  const [minutes, setMinutes] = useState("0")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!entry) return
    const duration = entry.duration || 0
    setProjectId(entry.project_id || NO_PROJECT)
    setDescription(entry.description || "")
    setDate(format(parseISO(entry.start_time), "yyyy-MM-dd"))
    setHours(String(Math.floor(duration / 3600)))
    setMinutes(String(Math.floor((duration % 3600) / 60)))
  }, [entry])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!entry) return

    const h = Number(hours) || 0
    const m = Number(minutes) || 0
    if (h < 0 || m < 0 || m > 59) {
      toast.error("Enter a valid duration")
      return
    }
    if (!date) {
      toast.error("Date is required")
      return
    }

    setIsSubmitting(true)
    try {
      const durationInSeconds = h * 3600 + m * 60

      // Combine the date from the form with the time-of-day from the original
      // entry, preserving the original hour/minute/second. Build the date from
      // its parts in LOCAL time (not `new Date("yyyy-MM-dd")`, which parses as
      // UTC and drifts the calendar day for non-UTC offsets).
      const originalDate = new Date(entry.start_time)
      const [y, mo, d] = date.split("-").map(Number)
      const newDate = new Date(
        y,
        mo - 1,
        d,
        originalDate.getHours(),
        originalDate.getMinutes(),
        originalDate.getSeconds(),
      )

      const endTime = new Date(newDate.getTime() + durationInSeconds * 1000)

      const result = await updateTimeEntry(entry.id, {
        project_id: projectId === NO_PROJECT ? null : projectId,
        description: description.trim() || null,
        start_time: newDate.toISOString(),
        end_time: endTime.toISOString(),
        duration: durationInSeconds,
      })

      if (result.error) {
        toast.error(result.error)
      } else {
        toast.success("Time entry updated")
        onOpenChange(false)
        onUpdated()
      }
    } catch {
      toast.error("Failed to update time entry")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px]">
        <DialogHeader>
          <DialogTitle>Edit time entry</DialogTitle>
          <DialogDescription>
            Update the details of your time entry.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-project">Project (optional)</Label>
            <Select value={projectId} onValueChange={setProjectId}>
              <SelectTrigger id="edit-project">
                <SelectValue placeholder="Select a project" />
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-description">Description (optional)</Label>
            <Textarea
              id="edit-description"
              placeholder="What did you work on?"
              className="resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="edit-date">Date</Label>
            <Input
              id="edit-date"
              type="date"
              value={date}
              max={format(new Date(), "yyyy-MM-dd")}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-hours">Hours</Label>
              <Input
                id="edit-hours"
                type="number"
                min="0"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-minutes">Minutes</Label>
              <Input
                id="edit-minutes"
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-blue-600 text-white hover:bg-blue-500"
            >
              {isSubmitting ? "Updating..." : "Update time entry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
