"use client"

import { useState } from "react"
import { format } from "date-fns"
import { toast } from "sonner"

import {
  createManualTimeEntry,
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

interface ManualEntryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  projects: Project[]
  onCreated: () => void
}

export function ManualEntryDialog({
  open,
  onOpenChange,
  projects,
  onCreated,
}: ManualEntryDialogProps) {
  const [projectId, setProjectId] = useState<string>(NO_PROJECT)
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"))
  const [hours, setHours] = useState("0")
  const [minutes, setMinutes] = useState("0")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const reset = () => {
    setProjectId(NO_PROJECT)
    setDescription("")
    setDate(format(new Date(), "yyyy-MM-dd"))
    setHours("0")
    setMinutes("0")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const h = Number(hours) || 0
    const m = Number(minutes) || 0

    if (h < 0 || m < 0 || m > 59) {
      toast.error("Enter a valid duration")
      return
    }
    if (h === 0 && m === 0) {
      toast.error("Duration must be greater than zero")
      return
    }
    if (!date) {
      toast.error("Date is required")
      return
    }

    setIsSubmitting(true)
    try {
      const result = await createManualTimeEntry({
        project_id: projectId === NO_PROJECT ? null : projectId,
        description: description.trim() || null,
        date,
        hours: h,
        minutes: m,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
      if (result.error) {
        toast.error(result.error)
      } else {
        toast.success("Time entry added")
        reset()
        onOpenChange(false)
        onCreated()
      }
    } catch {
      toast.error("Failed to add time entry")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px]">
        <DialogHeader>
          <DialogTitle>Add time entry</DialogTitle>
          <DialogDescription>
            Manually log time spent on a project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="manual-project">Project (optional)</Label>
            <Select value={projectId} onValueChange={setProjectId}>
              <SelectTrigger id="manual-project">
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
            <Label htmlFor="manual-description">Description (optional)</Label>
            <Textarea
              id="manual-description"
              placeholder="What did you work on?"
              className="resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="manual-date">Date</Label>
            <Input
              id="manual-date"
              type="date"
              value={date}
              max={format(new Date(), "yyyy-MM-dd")}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="manual-hours">Hours</Label>
              <Input
                id="manual-hours"
                type="number"
                min="0"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="manual-minutes">Minutes</Label>
              <Input
                id="manual-minutes"
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
              {isSubmitting ? "Adding..." : "Add time entry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
