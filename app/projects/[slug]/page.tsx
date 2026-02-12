import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getProjectBySlug,
  graveyardProjects,
  getStatusDisplayName,
} from "@/lib/project-graveyard"
import { OgImage } from "./OgImage"

export async function generateStaticParams() {
  return graveyardProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: project.name,
    description: project.description,
  }
}

function statusDot(status: string) {
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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return notFound()
  }

  return (
    <div>
      <Link
        href="/projects"
        className="text-foreground/40 hover:text-foreground/70 mb-6 inline-block text-sm transition-colors"
      >
        &larr; back to projects
      </Link>

      {project.url && <OgImage url={project.url} />}

      <div className="mb-1 flex items-center gap-2">
        <span
          className={`size-2 shrink-0 rounded-full ${statusDot(project.status)}`}
        />
        <h1 className="text-xl font-medium">{project.name}</h1>
        <span className="text-foreground/30 text-sm">
          {getStatusDisplayName(project.status)}
        </span>
      </div>

      <p className="text-foreground/50 mb-6">{project.description}</p>

      {project.url || project.github ? (
        <div className="mb-8 flex flex-wrap gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              visit project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 inline-flex items-center gap-2 rounded-xl border border-border bg-[var(--secondary)] px-5 py-2.5 text-sm font-medium transition-colors hover:text-foreground"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              source code
            </a>
          )}
        </div>
      ) : (
        <div className="mb-8">
          <p className="text-foreground/30 text-sm">
            no public links for this project
          </p>
        </div>
      )}

      {project.longDescription && (
        <p className="text-foreground/60 mb-6 leading-relaxed">
          {project.longDescription}
        </p>
      )}

      <div className="text-foreground/40 mb-6 flex flex-wrap items-center gap-3 text-sm">
        {project.date && (
          <span className="bg-foreground/5 rounded-lg px-3 py-1">
            {project.date}
          </span>
        )}
        {project.users && project.users !== "0" && (
          <span className="bg-foreground/5 rounded-lg px-3 py-1">
            {project.users} users
          </span>
        )}
      </div>

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-foreground/50 rounded-full border border-border px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
