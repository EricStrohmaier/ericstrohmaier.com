"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { toast } from "sonner"

import { createProject, type Project } from "@/app/dashboard/actions"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface ProjectQuickAddProps {
  onProjectCreated: (project: Project) => void
}

export function ProjectQuickAdd({ onProjectCreated }: ProjectQuickAddProps) {
  const [name, setName] = useState("")
  const [client, setClient] = useState("")
  const [rate, setRate] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAdd = async () => {
    const trimmed = name.trim()
    if (!trimmed) {
      toast.error("Project name is required")
      return
    }

    const trimmedRate = rate.trim()
    const parsedRate = trimmedRate ? Number(trimmedRate) : null
    if (trimmedRate && (parsedRate === null || Number.isNaN(parsedRate))) {
      toast.error("Rate must be a number")
      return
    }

    setIsSubmitting(true)
    try {
      const result = await createProject({
        name: trimmed,
        client: client.trim() || null,
        hourly_rate: parsedRate,
      })
      if (result.error || !result.data) {
        toast.error(result.error || "Failed to create project")
      } else {
        toast.success("Project created")
        setName("")
        setClient("")
        setRate("")
        onProjectCreated(result.data)
      }
    } catch {
      toast.error("Failed to create project")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAdd()
    }
  }

  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">
        New project
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="sm:flex-1"
        />
        <Input
          placeholder="Client (optional)"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          onKeyDown={handleKeyDown}
          className="sm:flex-1"
        />
        <div className="sm:w-28">
          <Label htmlFor="project-rate" className="sr-only">
            Rate per hour
          </Label>
          <Input
            id="project-rate"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            placeholder="Rate/h"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full"
          />
        </div>
        <Button
          onClick={handleAdd}
          disabled={isSubmitting}
          className="gap-2 rounded-full bg-blue-600 text-white hover:bg-blue-500"
        >
          <Plus className="size-4" />
          {isSubmitting ? "Adding..." : "Add"}
        </Button>
      </div>
    </div>
  )
}
