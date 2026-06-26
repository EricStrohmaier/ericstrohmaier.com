import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Minus, ChevronDown } from "lucide-react"
import type { Locale } from "@/i18n-config"
import type { Accent } from "@/lib/verticals/types"
import type { ComparisonContent } from "@/lib/comparisons/types"
import { getIcon } from "@/components/vertical/icons"
import { faviconUrl, type GraveyardProject } from "@/lib/project-graveyard"
import { Reveal } from "@/components/app/Reveal"
import { siteConfig } from "@/site-config"

const ACCENT: Record<Accent, { text: string; iconBg: string; rgb: string }> = {
  blue: { text: "text-blue-500", iconBg: "bg-blue-500/10 text-blue-600", rgb: "rgb(59,130,246)" },
  emerald: { text: "text-emerald-500", iconBg: "bg-emerald-500/10 text-emerald-600", rgb: "rgb(16,185,129)" },
  violet: { text: "text-violet-500", iconBg: "bg-violet-500/10 text-violet-600", rgb: "rgb(139,92,246)" },
}

function BookingCta({
  label,
  variant = "primary",
  className = "",
}: {
  label: string
  variant?: "primary" | "outline"
  className?: string
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:ring-blue-500"
      : "border border-foreground/10 text-foreground/70 hover:border-foreground/20 hover:text-foreground focus-visible:ring-foreground/20"
  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  )
}

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-[var(--card-border)] py-10 md:py-14"
    >
      {children}
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-foreground/30 mb-3 text-xs font-medium uppercase tracking-[0.2em]">
      {children}
    </p>
  )
}

export function ComparisonPage({
  content: c,
  accent,
  lang,
  funnelTo,
  proof,
}: {
  content: ComparisonContent
  accent: Accent
  lang: Locale
  funnelTo: string
  proof: GraveyardProject[]
}) {
  const a = ACCENT[accent]
  const serviceHref = `/${lang}/${funnelTo}`

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden py-10 md:py-16">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{ background: `radial-gradient(circle at 12% 12%, ${a.rgb}, transparent 45%)` }}
        />
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${a.text}`}>
          {c.eyebrow}
        </p>
        <h1 className="mb-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {c.h1}
        </h1>
        <p className="text-foreground/55 mb-6 max-w-2xl text-lg leading-relaxed">
          {c.subtitle}
        </p>
        <p className="text-foreground/70 mb-7 max-w-2xl leading-relaxed">
          {c.intro}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookingCta label={c.primaryCtaLabel} />
          <Link
            href={serviceHref}
            className="border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            {c.serviceLinkLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Comparison table */}
      <Reveal>
        <Section id="vergleich">
          <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {c.tableHeading}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[var(--card-border)]">
            {/* Header */}
            <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-foreground/[0.02] text-sm font-semibold">
              <div className="px-4 py-3" />
              <div className={`border-l border-[var(--card-border)] px-4 py-3 ${a.text}`}>
                {c.oursLabel}
              </div>
              <div className="text-foreground/50 border-l border-[var(--card-border)] px-4 py-3">
                {c.theirsLabel}
              </div>
            </div>
            {/* Rows */}
            {c.rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.3fr_1fr_1fr] border-t border-[var(--card-border)] text-sm"
              >
                <div className="text-foreground/80 px-4 py-3.5 font-medium">
                  {row.label}
                </div>
                <div className="border-l border-[var(--card-border)] bg-blue-500/[0.04] px-4 py-3.5">
                  <span className="flex items-start gap-1.5">
                    {row.oursWin !== false && (
                      <Check className={`mt-0.5 size-4 shrink-0 ${a.text}`} strokeWidth={2.5} />
                    )}
                    <span className="text-foreground/80">{row.ours}</span>
                  </span>
                </div>
                <div className="text-foreground/55 border-l border-[var(--card-border)] px-4 py-3.5">
                  <span className="flex items-start gap-1.5">
                    <Minus className="text-foreground/30 mt-0.5 size-4 shrink-0" />
                    <span>{row.theirs}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Reasons */}
      <Reveal>
        <Section id="gruende">
          <SectionLabel>{c.reasonsLabel}</SectionLabel>
          <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {c.reasonsHeading}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.reasons.map((r) => {
              const Icon = getIcon(r.icon)
              return (
                <div
                  key={r.title}
                  className="flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm"
                >
                  <span className={`mb-4 inline-flex size-10 items-center justify-center rounded-xl ${a.iconBg}`}>
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-foreground/90 mb-1.5 font-semibold">{r.title}</h3>
                  <p className="text-foreground/55 text-sm leading-relaxed">{r.copy}</p>
                </div>
              )
            })}
          </div>
        </Section>
      </Reveal>

      {/* Honest / fairness note */}
      <Reveal>
        <Section id="ehrlich">
          <div className="rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm md:p-8">
            <SectionLabel>{c.honestLabel}</SectionLabel>
            <h2 className="mb-3 max-w-2xl text-xl font-semibold tracking-tight md:text-2xl">
              {c.honestHeading}
            </h2>
            <p className="text-foreground/65 max-w-2xl leading-relaxed">{c.honestCopy}</p>
          </div>
        </Section>
      </Reveal>

      {/* Proof */}
      {proof.length > 0 && (
        <Reveal>
          <Section id="referenzen">
            <SectionLabel>{lang === "de" ? "Aus echten Projekten" : "From real projects"}</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {proof.map((project) => {
                const favicon = faviconUrl(project.url, 128)
                const blurb = project.caseStudy?.result ?? project.description
                return (
                  <Link
                    key={project.slug}
                    href={`/${lang}/projects/${project.slug}`}
                    className="hover:border-foreground/10 hover:bg-foreground/[0.04] group flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      {favicon && (
                        <Image
                          src={favicon}
                          alt={`${project.name} Logo`}
                          width={32}
                          height={32}
                          className="size-8 shrink-0 rounded-lg"
                          unoptimized
                        />
                      )}
                      <h3 className="text-foreground/90 flex items-center gap-1.5 font-semibold">
                        {project.name}
                        <ArrowRight className="text-foreground/30 size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </h3>
                    </div>
                    <p className="text-foreground/55 text-sm leading-relaxed">{blurb}</p>
                  </Link>
                )
              })}
            </div>
          </Section>
        </Reveal>
      )}

      {/* FAQ */}
      <Reveal>
        <Section id="faq">
          <SectionLabel>{c.faqLabel}</SectionLabel>
          <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {c.faqHeading}
          </h2>
          <div className="divide-foreground/[0.06] overflow-hidden rounded-2xl border border-[var(--card-border)] divide-y">
            {c.faqs.map((f) => (
              <details key={f.q} className="bg-card group">
                <summary className="hover:bg-foreground/[0.02] flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="text-foreground/40 size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="text-foreground/55 px-5 pb-5 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Final CTA */}
      <section className="mt-10 md:mt-14">
        <div className="bg-foreground/[0.03] relative overflow-hidden rounded-2xl border border-[var(--card-border)] px-6 py-12 text-center md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgb(59,130,246),_transparent_50%),radial-gradient(circle_at_80%_50%,_rgb(16,185,129),_transparent_50%)] opacity-[0.06]" />
          <div className="relative">
            <h2 className="mx-auto mb-3 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              {c.finalCtaHeading}
            </h2>
            <p className="text-foreground/55 mx-auto mb-7 max-w-lg text-lg leading-relaxed">
              {c.finalCtaCopy}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookingCta label={c.finalCtaLabel} />
              <Link
                href={serviceHref}
                className="text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              >
                {c.serviceLinkLabel}
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
