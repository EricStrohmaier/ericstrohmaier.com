"use client"
import React from "react"
import {
  graveyardProjects,
  faviconUrl,
  ProjectStatus,
  GraveyardProject,
} from "@/lib/project-graveyard"
import type { Locale } from "@/i18n-config"
import { Globe } from "lucide-react"
import Link from "next/link"

export interface ProjectListLabels {
  searchPlaceholder: string
  empty: string
  caseStudyBadge: string
  featuredBadge: string
  legend: {
    live: string
    inProgress: string
    onHold: string
    archived: string
  }
  status: {
    live: string
    inProgress: string
    onHold: string
    offline: string
    archived: string
  }
}

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

function statusLabel(status: ProjectStatus, labels: ProjectListLabels) {
  switch (status) {
    case "live":
      return labels.status.live
    case "in-progress":
      return labels.status.inProgress
    case "on-hold":
      return labels.status.onHold
    case "offline":
      return labels.status.offline
    case "archived":
      return labels.status.archived
    default:
      return status
  }
}

function ProjectRow({
  project,
  lang,
  labels,
}: {
  project: GraveyardProject
  lang: Locale
  labels: ProjectListLabels
}) {
  const favicon = faviconUrl(project.url)
  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      className="group flex items-center justify-between gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-[var(--secondary)]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="relative shrink-0">
          <span className="border-foreground/10 flex size-9 items-center justify-center overflow-hidden rounded-lg border bg-background">
            {favicon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={favicon}
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            ) : (
              <Globe className="text-foreground/30 size-4" />
            )}
          </span>
          <span
            className={`absolute -right-0.5 -top-0.5 size-2.5 rounded-full ring-2 ring-[var(--primary)] ${statusDot(project.status)}`}
          />
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="truncate font-medium">{project.name}</span>
            {project.caseStudy ? (
              <span className="shrink-0 rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-500">
                {labels.caseStudyBadge}
              </span>
            ) : (
              project.featured && (
                <span className="bg-foreground/8 text-foreground/40 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium">
                  {labels.featuredBadge}
                </span>
              )
            )}
          </div>
          {project.caseStudy ? (
            <p className="truncate text-sm font-medium text-emerald-500">
              {project.caseStudy.result}
            </p>
          ) : (
            <p className="text-foreground/40 truncate text-sm">
              {project.description}
            </p>
          )}
        </div>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-foreground/35 text-xs">{project.date}</p>
        <p className="text-foreground/30 text-sm">
          {statusLabel(project.status, labels)}
        </p>
      </div>
    </Link>
  )
}

export function ProjectListClient({
  lang,
  labels,
}: {
  lang: Locale
  labels: ProjectListLabels
}) {
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
      p.description.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      <input
        type="text"
        placeholder={labels.searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-foreground/80 placeholder:text-foreground/25 focus:border-foreground/40 mb-4 w-full rounded-xl border border-border bg-transparent px-4 py-2.5 outline-none"
      />
      <div className="flex flex-col">
        {filtered.map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
            lang={lang}
            labels={labels}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-foreground/30 py-8 text-center text-sm">
            {labels.empty}
          </p>
        )}
      </div>
      <div className="text-foreground/25 mt-6 flex items-center gap-4 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500" />{" "}
          {labels.legend.live}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-blue-500" />{" "}
          {labels.legend.inProgress}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-amber-500" />{" "}
          {labels.legend.onHold}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-zinc-400" />{" "}
          {labels.legend.archived}
        </span>
      </div>
    </div>
  )
}
