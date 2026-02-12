"use client"
import React from "react"
import {
  graveyardProjects,
  getStatusDisplayName,
  ProjectStatus,
  GraveyardProject,
} from "@/lib/project-graveyard"
import Link from "next/link"

function statusDot(status: ProjectStatus) {
  switch (status) {
    case "live":
      return "bg-emerald-500"
    case "in-progress":
      return "bg-blue-500"
    case "on-hold":
      return "bg-amber-500"
    case "offline":
      return "bg-red-500"
    case "archived":
      return "bg-zinc-400"
    default:
      return "bg-zinc-400"
  }
}

function ProjectRow({ project }: { project: GraveyardProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex items-center justify-between gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-[var(--secondary)]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span
          className={`size-2 shrink-0 rounded-full ${statusDot(project.status)}`}
        />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="truncate font-medium">
              {project.name}
            </span>
            {project.featured && (
              <span className="shrink-0 rounded bg-foreground/8 px-1.5 py-0.5 text-[10px] font-medium text-foreground/40">
                featured
              </span>
            )}
          </div>
          <p className="truncate text-sm text-foreground/40">
            {project.description}
          </p>
        </div>
      </div>
      <span className="shrink-0 text-sm text-foreground/30">
        {getStatusDisplayName(project.status)}
      </span>
    </Link>
  )
}

export function ClientSideProjectList() {
  const [search, setSearch] = React.useState("")

  const sorted = [...graveyardProjects].sort((a, b) => {
    const priority: Record<ProjectStatus, number> = {
      "in-progress": 1,
      live: 2,
      "on-hold": 3,
      offline: 4,
      archived: 5,
    }
    return (priority[a.status] || 6) - (priority[b.status] || 6)
  })

  const filtered = sorted.filter(
    (p) =>
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full rounded-xl border border-border bg-transparent px-4 py-2.5 text-foreground/80 placeholder:text-foreground/25 outline-none focus:border-foreground/40"
      />
      <div className="flex flex-col">
        {filtered.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-foreground/30">
            no projects found
          </p>
        )}
      </div>
      <div className="mt-6 flex items-center gap-4 text-xs text-foreground/25">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500" /> live
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-blue-500" /> in progress
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-amber-500" /> on hold
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-zinc-400" /> archived
        </span>
      </div>
    </div>
  )
}
