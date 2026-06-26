import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import type { Locale } from "@/i18n-config"
import type { Accent, VerticalContent } from "@/lib/verticals/types"
import { getIcon } from "@/components/vertical/icons"
import { getOffers } from "@/lib/offers"
import { faviconUrl, type GraveyardProject } from "@/lib/project-graveyard"
import { Reveal } from "@/components/app/Reveal"
import { siteConfig } from "@/site-config"

/* --------------------------------------------------------------------- */
/* Accent system — icons/labels/checks pick up the accent; the booking    */
/* button stays brand-blue everywhere for a consistent primary CTA.       */
/* --------------------------------------------------------------------- */
const ACCENT: Record<
  Accent,
  { text: string; iconBg: string; check: string; rgb: string }
> = {
  blue: {
    text: "text-blue-500",
    iconBg: "bg-blue-500/10 text-blue-600",
    check: "text-blue-500",
    rgb: "rgb(59,130,246)",
  },
  emerald: {
    text: "text-emerald-500",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    check: "text-emerald-500",
    rgb: "rgb(16,185,129)",
  },
  violet: {
    text: "text-violet-500",
    iconBg: "bg-violet-500/10 text-violet-600",
    check: "text-violet-500",
    rgb: "rgb(139,92,246)",
  },
}

/* --------------------------------------------------------------------- */
/* Shared booking CTA — always points at the calendar (siteConfig).       */
/* --------------------------------------------------------------------- */
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
      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:gap-3 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 focus-visible:ring-blue-500"
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

function Section({
  children,
  id,
}: {
  children: React.ReactNode
  id?: string
}) {
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

/* --------------------------------------------------------------------- */
/* The landing page body — renders any vertical from its content object.  */
/* --------------------------------------------------------------------- */
export function VerticalLanding({
  content: c,
  accent,
  proof,
  offerIds,
  lang,
}: {
  content: VerticalContent
  accent: Accent
  proof: GraveyardProject[]
  offerIds?: string[]
  lang: Locale
}) {
  const a = ACCENT[accent]
  const offers = getOffers(offerIds)

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden py-10 md:py-16">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            background: `radial-gradient(circle at 12% 12%, ${a.rgb}, transparent 45%)`,
          }}
        />
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${a.text}`}
        >
          {c.eyebrow}
        </p>
        <h1 className="mb-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {c.h1}
        </h1>
        <p className="text-foreground/55 mb-7 max-w-2xl text-lg leading-relaxed">
          {c.subtitle}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookingCta label={c.primaryCtaLabel} />
          {c.secondaryCtaLabel && (
            <a
              href="#loesung"
              className="border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {c.secondaryCtaLabel}
            </a>
          )}
        </div>
        <p className="text-foreground/45 mt-7 flex items-center gap-2 text-sm">
          <Check className={`size-4 shrink-0 ${a.check}`} strokeWidth={2.5} />
          {c.trustLine}
        </p>
      </section>

      {/* Problem */}
      <Reveal>
        <Section id="problem">
          <SectionLabel>{c.problemLabel}</SectionLabel>
          <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {c.problemHeading}
          </h2>
          <p className="text-foreground/55 mb-7 max-w-2xl text-lg leading-relaxed">
            {c.problemIntro}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {c.pains.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm"
              >
                <h3 className="text-foreground/90 mb-1.5 font-semibold">
                  {p.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* ROI band */}
      {c.roi && (
        <Reveal>
          <Section id="kosten">
            <SectionLabel>{c.roi.label}</SectionLabel>
            <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              {c.roi.heading}
            </h2>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card p-7 shadow-sm md:p-10">
              <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_85%_20%,_rgb(16,185,129),_transparent_55%)] opacity-[0.06]" />
              <div className="relative grid items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="text-foreground/50 mb-2 text-sm font-medium uppercase tracking-wide">
                    {c.roi.statLabel}
                  </p>
                  <p className="text-5xl font-semibold tracking-tight text-emerald-500 md:text-6xl">
                    {c.roi.statValue}
                  </p>
                </div>
                <div className="border-foreground/10 md:border-l md:pl-8">
                  <p className="text-foreground/75 text-lg leading-relaxed">
                    {c.roi.copy}
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </Reveal>
      )}

      {/* Solution / features */}
      <Reveal>
        <Section id="loesung">
          <SectionLabel>{c.solutionLabel}</SectionLabel>
          <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {c.solutionHeading}
          </h2>
          <p className="text-foreground/55 mb-7 max-w-2xl text-lg leading-relaxed">
            {c.solutionIntro}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f) => {
              const Icon = getIcon(f.icon)
              return (
                <div
                  key={f.title}
                  className="hover:border-foreground/10 hover:bg-foreground/[0.04] group flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    className={`mb-4 inline-flex size-10 items-center justify-center rounded-xl ${a.iconBg}`}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-foreground/90 mb-1.5 font-semibold">
                    {f.title}
                  </h3>
                  <p className="text-foreground/55 text-sm leading-relaxed">
                    {f.copy}
                  </p>
                </div>
              )
            })}
          </div>
        </Section>
      </Reveal>

      {/* Process */}
      <Reveal>
        <Section id="ablauf">
          <SectionLabel>{c.processLabel}</SectionLabel>
          <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {c.processHeading}
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            {c.steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm"
              >
                <span className="text-foreground/15 absolute right-4 top-4 text-2xl font-bold tabular-nums">
                  {i + 1}
                </span>
                <h3 className="text-foreground/90 mb-1.5 pr-8 font-semibold">
                  {step.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Mid CTA */}
      <section className="py-8 md:py-12">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-500/30 bg-blue-500/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {c.midCtaHeading}
            </h2>
            <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
              {c.midCtaCopy}
            </p>
          </div>
          <BookingCta label={c.primaryCtaLabel} className="shrink-0" />
        </div>
      </section>

      {/* Why it works */}
      {c.why && (
        <Reveal>
          <Section id="warum">
            <SectionLabel>{c.why.label}</SectionLabel>
            <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              {c.why.heading}
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {c.why.facts.map((f) => {
                const Icon = getIcon(f.icon)
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm"
                  >
                    <Icon
                      className="mb-4 size-7 text-emerald-500"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-foreground/90 mb-2 text-lg font-semibold">
                      {f.title}
                    </h3>
                    <p className="text-foreground/55 leading-relaxed">
                      {f.copy}
                    </p>
                  </div>
                )
              })}
            </div>
          </Section>
        </Reveal>
      )}

      {/* Proof strip — real shipped work */}
      {proof.length > 0 && (
        <Reveal>
          <Section id="referenzen">
            <SectionLabel>{c.proofHeading ?? "Referenzen"}</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {proof.map((project) => {
                const favicon = faviconUrl(project.url, 128)
                const blurb =
                  project.caseStudy?.result ?? project.description
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
                    <p className="text-foreground/55 text-sm leading-relaxed">
                      {blurb}
                    </p>
                  </Link>
                )
              })}
            </div>
          </Section>
        </Reveal>
      )}

      {/* Ownership / trust */}
      {c.ownership && (
        <Reveal>
          <Section id="eigentum">
            <SectionLabel>{c.ownership.label}</SectionLabel>
            <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              {c.ownership.heading}
            </h2>
            <p className="text-foreground/55 mb-7 max-w-2xl text-lg leading-relaxed">
              {c.ownership.intro}
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {c.ownership.points.map((p) => {
                const Icon = getIcon(p.icon)
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm"
                  >
                    <Icon
                      className={`mb-3 size-6 ${a.text}`}
                      strokeWidth={1.5}
                    />
                    <h3 className="text-foreground/90 mb-1.5 font-semibold">
                      {p.title}
                    </h3>
                    <p className="text-foreground/55 text-sm leading-relaxed">
                      {p.copy}
                    </p>
                  </div>
                )
              })}
            </div>
          </Section>
        </Reveal>
      )}

      {/* Offer / pricing — real prices from lib/offers.ts */}
      <Reveal>
        <Section id="preise">
          <SectionLabel>{c.offerLabel}</SectionLabel>
          <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {c.offerHeading}
          </h2>
          <p className="text-foreground/55 mb-7 max-w-2xl text-lg leading-relaxed">
            {c.offerIntro}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {offers.map((offer, i) => {
              const featured = i === 1
              return (
                <div
                  key={offer.id}
                  className={`relative flex flex-col rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    featured
                      ? "border-blue-500/40 bg-blue-500/[0.05] shadow-blue-600/10 hover:bg-blue-500/[0.07]"
                      : "hover:border-foreground/10 hover:bg-foreground/[0.04] border-[var(--card-border)] bg-card"
                  }`}
                >
                  <h3 className="text-foreground/90 font-semibold">
                    {offer.name}
                  </h3>
                  <p className="text-foreground/50 mb-4 mt-1 text-sm leading-relaxed">
                    {offer.who[lang]}
                  </p>
                  <p className="mb-5 text-2xl font-semibold tracking-tight text-foreground">
                    {offer.label[lang]}
                  </p>
                  <p className="text-foreground/55 mb-5 mt-auto text-sm leading-relaxed">
                    {offer.description[lang]}
                  </p>
                  <BookingCta
                    label={c.primaryCtaLabel}
                    variant={featured ? "primary" : "outline"}
                  />
                </div>
              )
            })}
          </div>
          {c.offerNote && (
            <p className="text-foreground/40 mt-5 text-sm">{c.offerNote}</p>
          )}
        </Section>
      </Reveal>

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
                <p className="text-foreground/55 px-5 pb-5 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Related links — internal linking to comparison/related pages */}
      {c.relatedLinks && c.relatedLinks.length > 0 && (
        <Reveal>
          <Section id="mehr">
            <div className="flex flex-wrap items-center gap-2.5">
              {c.relatedLinks.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="text-foreground/70 hover:text-foreground inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-card px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/20"
                >
                  {r.label}
                  <ArrowRight className="size-3.5" />
                </Link>
              ))}
            </div>
          </Section>
        </Reveal>
      )}

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
            <BookingCta label={c.finalCtaLabel} />
          </div>
        </div>
      </section>
    </div>
  )
}
