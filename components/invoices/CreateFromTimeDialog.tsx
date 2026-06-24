"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Clock } from "lucide-react"
import { toast } from "sonner"

import { updateProject, type Project } from "@/app/dashboard/actions"
import { createInvoiceFromTimeEntries } from "@/app/dashboard/invoices/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CreateFromTimeDialogProps {
  projects: Project[]
  // Optional prefill (e.g. the current time-table filter). Snapshotted each
  // time the dialog opens.
  initialProjectId?: string
  initialStartDate?: string
  initialEndDate?: string
  // Optional custom trigger; falls back to the default "From tracked time" pill.
  trigger?: React.ReactNode
}

export function CreateFromTimeDialog({
  projects,
  initialProjectId,
  initialStartDate,
  initialEndDate,
  trigger,
}: CreateFromTimeDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [projectId, setProjectId] = useState<string>("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [rate, setRate] = useState("")
  const [loading, setLoading] = useState(false)

  const selectedProject = projects.find((p) => p.id === projectId) ?? null

  const rateFor = (id: string) => {
    const project = projects.find((p) => p.id === id)
    return project?.hourly_rate != null ? String(project.hourly_rate) : ""
  }

  // Snapshot the current filter when the dialog opens.
  useEffect(() => {
    if (!open) return
    const pid = initialProjectId ?? ""
    setProjectId(pid)
    setStartDate(initialStartDate ?? "")
    setEndDate(initialEndDate ?? "")
    setRate(pid ? rateFor(pid) : "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const handleProjectChange = (value: string) => {
    setProjectId(value)
    setRate(rateFor(value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!projectId) {
      toast.error("Select a project")
      return
    }

    setLoading(true)
    try {
      const rateValue = Number(rate)
      if (
        rate !== "" &&
        !Number.isNaN(rateValue) &&
        rateValue !== (selectedProject?.hourly_rate ?? null)
      ) {
        await updateProject(projectId, { hourly_rate: rateValue })
      }

      const res = await createInvoiceFromTimeEntries({
        projectId,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })

      if (res.error) {
        toast.error(res.error)
      } else {
        router.push(`/dashboard/invoices/${res.id}`)
      }
    } catch {
      toast.error("Failed to create invoice from time")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button className="text-foreground/80 hover:bg-foreground/[0.06] inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-card px-4 py-2 text-sm font-medium transition-colors hover:text-foreground">
            <Clock className="size-4" />
            From tracked time
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle>Invoice from tracked time</DialogTitle>
          <DialogDescription>
            Turn the hours you tracked on a project into invoice line items.
            Each task becomes a line: hours times the hourly rate. Leave the
            dates empty to include all tracked time.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="from-time-project">Project</Label>
            <Select value={projectId} onValueChange={handleProjectChange}>
              <SelectTrigger id="from-time-project">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.name}
                    {project.client ? ` — ${project.client}` : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from-time-start">Start date</Label>
              <Input
                id="from-time-start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="from-time-end">End date</Label>
              <Input
                id="from-time-end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="from-time-rate">Hourly rate (optional)</Label>
            <Input
              id="from-time-rate"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <p className="text-foreground/55 text-xs">
              Prefilled from the project. Changing it updates the saved rate.
            </p>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-full bg-blue-600 text-white hover:bg-blue-500"
            >
              {loading ? "Creating..." : "Create invoice"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
