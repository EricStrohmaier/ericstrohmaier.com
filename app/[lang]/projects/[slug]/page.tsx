import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"
import {
  getProjectBySlug,
  faviconUrl,
  ProjectStatus,
} from "@/lib/project-graveyard"
import { type Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionaries"
import { OgImage } from "@/components/app/OgImage"

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string }
}): Promise<Metadata> {
  const { lang, slug } = params
  const dict = await getDictionary(lang, "projects")
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: dict.detail.notFoundTitle }
  }

  const description = project.caseStudy
    ? `${project.caseStudy.result} - ${project.description}`
    : project.description

  const path = `/projects/${project.slug}`

  return {
    title: project.name,
    description,
    keywords: project.tags,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        en: `/en${path}`,
        de: `/de${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "article",
      locale: lang === "de" ? "de_DE" : "en_US",
      title: `${project.name} | Eric Strohmaier`,
      description,
      url: `/${lang}${path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Eric Strohmaier`,
      description,
    },
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

type StatusLabels = {
  live: string
  inProgress: string
  onHold: string
  offline: string
  archived: string
}

function statusLabel(status: ProjectStatus, labels: StatusLabels) {
  switch (status) {
    case "live":
      return labels.live
    case "in-progress":
      return labels.inProgress
    case "on-hold":
      return labels.onHold
    case "offline":
      return labels.offline
    case "archived":
      return labels.archived
    default:
      return status
  }
}

function formatUsers(value: string | number, suffix: string) {
  if (typeof value === "number") {
    return `${value} ${suffix}`
  }

  if (/^\d[\d,.+]*$/.test(value.trim())) {
    return `${value} ${suffix}`
  }

  return value
}

export default async function ProjectPage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const { lang, slug } = params
  const dict = await getDictionary(lang, "projects")
  const project = getProjectBySlug(slug)

  if (!project) {
    return notFound()
  }

  const favicon = faviconUrl(project.url)

  let hostname: string | null = null
  if (project.url) {
    try {
      hostname = new URL(project.url).hostname.replace(/^www\./, "")
    } catch {
      hostname = null
    }
  }

  return (
    <div>
      <Link
        href={`/${lang}/projects`}
        className="text-foreground/40 hover:text-foreground/70 mb-6 inline-block text-sm transition-colors"
      >
        {dict.detail.back}
      </Link>

      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left - identity, description, actions, quick facts */}
        <div className="min-w-0 md:flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="relative shrink-0">
              <span className="border-foreground/10 flex size-11 items-center justify-center overflow-hidden rounded-xl border bg-background">
                {favicon ? (
                  <Image
                    src={favicon}
                    alt={`${project.name} logo`}
                    width={28}
                    height={28}
                    className="size-7"
                    unoptimized
                  />
                ) : (
                  <Globe className="text-foreground/30 size-5" />
                )}
              </span>
              <span
                className={`absolute -right-0.5 -top-0.5 size-2.5 rounded-full ring-2 ring-[var(--primary)] ${statusDot(project.status)}`}
              />
            </span>
            <h1 className="text-2xl font-semibold tracking-tight">
              {project.name}
            </h1>
            <span className="text-foreground/30 text-sm">
              {statusLabel(project.status, dict.status)}
            </span>
          </div>

          <p className="text-foreground/55 mb-5 leading-relaxed">
            {project.description}
          </p>

          {project.url || project.github ? (
            <div className="flex flex-wrap gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener"
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
                  {dict.detail.visitProject}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
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
                  {dict.detail.sourceCode}
                </a>
              )}
            </div>
          ) : (
            <p className="text-foreground/30 text-sm">{dict.detail.noLinks}</p>
          )}

          {/* Quick facts */}
          <dl className="border-foreground/[0.06] mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t pt-5 text-sm">
            {hostname && (
              <div>
                <dt className="text-foreground/35 mb-0.5 text-xs uppercase tracking-[0.12em]">
                  {dict.detail.facts.website}
                </dt>
                <dd>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {hostname}
                  </a>
                </dd>
              </div>
            )}
            {project.date && (
              <div>
                <dt className="text-foreground/35 mb-0.5 text-xs uppercase tracking-[0.12em]">
                  {dict.detail.facts.year}
                </dt>
                <dd className="text-foreground/70">{project.date}</dd>
              </div>
            )}
            {project.users && project.users !== "0" && (
              <div>
                <dt className="text-foreground/35 mb-0.5 text-xs uppercase tracking-[0.12em]">
                  {dict.detail.facts.reach}
                </dt>
                <dd className="text-foreground/70">
                  {formatUsers(project.users, dict.detail.usersSuffix)}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Right - live preview */}
        {project.url && (
          <OgImage
            url={project.url}
            href={project.url}
            className="flex w-full items-center overflow-hidden rounded-2xl border border-border bg-background md:w-[44%] md:shrink-0"
            imgClassName="w-full object-cover"
          />
        )}
      </div>

      {project.caseStudy && (
        <div className="mb-8 space-y-3">
          {/* Result - surfaced prominently */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-500/80">
              {dict.detail.caseStudy.result}
            </p>
            <p className="text-lg font-semibold leading-snug text-foreground">
              {project.caseStudy.result}
            </p>
            {project.caseStudy.client && (
              <p className="text-foreground/45 mt-2 text-sm">
                {dict.detail.caseStudy.for} {project.caseStudy.client}
              </p>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-[var(--secondary)] p-4">
              <p className="text-foreground/35 mb-1.5 text-xs font-medium uppercase tracking-[0.15em]">
                {dict.detail.caseStudy.problem}
              </p>
              <p className="text-foreground/65 text-sm leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[var(--secondary)] p-4">
              <p className="text-foreground/35 mb-1.5 text-xs font-medium uppercase tracking-[0.15em]">
                {dict.detail.caseStudy.built}
              </p>
              <p className="text-foreground/65 text-sm leading-relaxed">
                {project.caseStudy.built}
              </p>
            </div>
          </div>

          {project.caseStudy.testimonial && (
            <blockquote className="rounded-2xl border border-border bg-[var(--secondary)] p-5">
              <p className="text-foreground/80 leading-relaxed">
                &ldquo;{project.caseStudy.testimonial.quote}&rdquo;
              </p>
              <footer className="text-foreground/45 mt-3 text-sm">
                <span className="text-foreground/70 font-medium">
                  {project.caseStudy.testimonial.name}
                </span>{" "}
                - {project.caseStudy.testimonial.role}
              </footer>
            </blockquote>
          )}
        </div>
      )}

      {project.longDescription && (
        <p className="text-foreground/60 mb-6 leading-relaxed">
          {project.longDescription}
        </p>
      )}

      {project.image && (
        <figure className="mb-6 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm">
          <Image
            src={project.image}
            alt={project.imageCaption ?? `${project.name} — screenshot`}
            width={2658}
            height={920}
            className="h-auto w-full rounded-lg"
            sizes="(max-width: 768px) 100vw, 720px"
          />
          {project.imageCaption && (
            <figcaption className="text-foreground/45 px-2 pb-1 pt-2 text-sm leading-relaxed">
              {project.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {(project.experienceType ||
        project.role ||
        project.location ||
        project.workMode) && (
        <div className="mb-6 grid gap-2 rounded-xl border border-border bg-[var(--secondary)] p-4 text-sm">
          {project.experienceType && (
            <p className="text-foreground/55">
              <span className="text-foreground/35">{dict.detail.info.type}</span>{" "}
              {project.experienceType}
            </p>
          )}
          {project.role && (
            <p className="text-foreground/55">
              <span className="text-foreground/35">{dict.detail.info.role}</span>{" "}
              {project.role}
            </p>
          )}
          {project.workMode && (
            <p className="text-foreground/55">
              <span className="text-foreground/35">
                {dict.detail.info.workMode}
              </span>{" "}
              {project.workMode}
            </p>
          )}
          {project.location && (
            <p className="text-foreground/55">
              <span className="text-foreground/35">
                {dict.detail.info.location}
              </span>{" "}
              {project.location}
            </p>
          )}
        </div>
      )}

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
