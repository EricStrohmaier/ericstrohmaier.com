import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Globe,
  PhoneCall,
  Hammer,
  TrendingUp,
  Check,
  Star,
  Users,
  Store,
  Quote,
} from "lucide-react"
import type { ProofPoint } from "@/lib/project-graveyard"
import {
  getFeaturedCaseStudies,
  getCredibilityProjects,
  getRealTestimonials,
  faviconUrl,
} from "@/lib/project-graveyard"
import { Reveal } from "@/components/app/Reveal"
import { OgImage } from "@/components/app/OgImage"
import { siteConfig } from "@/site-config"

// Booking link comes from siteConfig (NEXT_PUBLIC_BOOKING_URL env var, with a
// hardcoded Google Calendar fallback).
const BOOKING_URL = siteConfig.bookingUrl

// PLACEHOLDER: edit once you can back the number, or remove the {count} span.
const TRUSTED_COUNT = "10"

export default function Home() {
  return (
    <div className="w-full">
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <WhatIBuild />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <MidCta />
      </Reveal>
      <Reveal>
        <FeaturedWork />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
    </div>
  )
}

/* ----------------------------------------------------------------------- */
/* Shared CTA button                                                        */
/* ----------------------------------------------------------------------- */
function PrimaryCta({
  children = "Book a free call",
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)] ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  )
}

/* ----------------------------------------------------------------------- */
/* HERO                                                                     */
/* ----------------------------------------------------------------------- */
function Hero() {
  const projects = getCredibilityProjects()
  return (
    <section className="py-10 md:py-14">
      <p className="text-foreground/40 mb-3 text-sm font-medium uppercase tracking-[0.2em]">
        Your software partner.
      </p>
      <h1 className="mb-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
        Software that makes your business more money.
      </h1>
      <p className="text-foreground/55 mb-7 max-w-xl text-lg leading-relaxed">
        I build custom tools, automations, and websites for small and mid-sized
        businesses - software designed to cut costs, save hours, and bring in
        revenue. The kind that pays for itself.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <PrimaryCta />
        <Link
          href="/projects"
          className="border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
        >
          See the work
        </Link>
      </div>

      {/* Trust line */}
      <p className="text-foreground/35 mt-6 text-sm">
        Trusted by{" "}
        <span className="text-foreground/60 font-semibold">
          {TRUSTED_COUNT}+
        </span>{" "}
        businesses
        <span className="text-foreground/15 mx-2">|</span>
        <span className="text-foreground/60 font-semibold">4+</span> year
        partnerships
        <span className="text-foreground/15 mx-2">|</span>
        <span className="text-foreground/60 font-semibold">50,000+</span> users
        served
      </p>

      {/* Project logos - directly under the trust line */}
      {projects.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2.5">
          {projects.map((project) => {
            const favicon = faviconUrl(project.url, 128)
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="text-foreground/90 hover:text-foreground/40 group inline-flex items-center gap-2.5 text-base font-medium transition-colors md:text-lg"
              >
                {favicon ? (
                  <Image
                    src={favicon}
                    alt={`${project.name} logo`}
                    width={32}
                    height={32}
                    className="size-7 rounded opacity-100 transition-opacity group-hover:opacity-50"
                    unoptimized
                  />
                ) : (
                  <Globe className="text-foreground/50 size-6" />
                )}
                {project.name}
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* WHAT I BUILD                                                             */
/* ----------------------------------------------------------------------- */
function WhatIBuild() {
  const offerings = [
    {
      title: "Revenue websites & lead systems",
      blurb:
        "Get found, win trust, and turn visitors into booked calls and paying customers.",
      examples: [
        "High-converting sites & landing pages",
        "Lead capture with automated follow-up",
        "Booking & online payment flows",
      ],
      accent: "blue" as const,
    },
    {
      title: "Internal tools & automations",
      blurb:
        "Replace manual busywork and fragile spreadsheets with software that runs itself.",
      examples: [
        "Custom dashboards & CRMs",
        "Workflow & data automations",
        "AI tools for repetitive work",
      ],
      accent: "emerald" as const,
    },
    {
      title: "Ongoing software partnership",
      blurb:
        "A senior developer on call to keep things running and ship improvements every month.",
      examples: [
        "Maintenance & monitoring",
        "Continuous improvements",
        "Month-to-month, no lock-in",
      ],
      accent: "violet" as const,
    },
  ]

  const accentStyles = {
    blue: { check: "text-blue-500", icon: "bg-blue-500/10 text-blue-600" },
    emerald: {
      check: "text-emerald-500",
      icon: "bg-emerald-500/10 text-emerald-600",
    },
    violet: {
      check: "text-violet-500",
      icon: "bg-violet-500/10 text-violet-600",
    },
  }

  return (
    <Section>
      <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
        Three ways software pays you back.
      </h2>
      <div className="grid gap-3 md:grid-cols-3">
        {offerings.map((o) => {
          const style = accentStyles[o.accent]

          return (
            <div
              key={o.title}
              className="hover:border-foreground/10 hover:bg-foreground/[0.04] flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-foreground/90 mb-1.5 font-semibold">
                {o.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {o.blurb}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-[var(--card-border)] pt-5">
                {o.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-foreground/55 flex items-start gap-2 text-sm"
                  >
                    <Check
                      className={`mt-0.5 size-3.5 shrink-0 ${style.check}`}
                    />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ----------------------------------------------------------------------- */
/* HOW IT WORKS                                                             */
/* ----------------------------------------------------------------------- */
function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: "Call",
      copy: "We talk through your business and find where software can make or save you the most money.",
    },
    {
      icon: Hammer,
      title: "Build",
      copy: "I scope it, build it, and ship it fast - software that does the job, with nothing you don't need.",
    },
    {
      icon: TrendingUp,
      title: "Maintain & grow",
      copy: "I keep it running and keep improving it, so it pays off month after month.",
    },
  ]

  return (
    <Section>
      <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
        Simple to start. Built to last.
      </h2>
      <div className="grid gap-3 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div
              key={step.title}
              className="relative rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm"
            >
              <span className="text-foreground/15 absolute right-4 top-4 text-2xl font-bold tabular-nums">
                {i + 1}
              </span>
              <Icon className="mb-3 size-6 text-blue-500" strokeWidth={1.5} />
              <h3 className="text-foreground/90 mb-1.5 font-semibold">
                {step.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {step.copy}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ----------------------------------------------------------------------- */
/* FEATURED WORK  (placeholder - wired to case studies in a later step)     */
/* ----------------------------------------------------------------------- */
const PROOF_ICONS = {
  star: Star,
  users: Users,
  store: Store,
  check: Check,
  trending: TrendingUp,
} as const

function ProofChip({ point }: { point: ProofPoint }) {
  const Icon = PROOF_ICONS[point.icon ?? "check"]
  return (
    <span className="border-foreground/[0.08] bg-foreground/[0.03] text-foreground/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium">
      <Icon className="size-3 text-emerald-500" />
      {point.label}
    </span>
  )
}

function FeaturedWork() {
  const featured = getFeaturedCaseStudies()

  return (
    <Section>
      <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
        Built to be used - and to last.
      </h2>
      <div className="grid gap-3 md:grid-cols-3">
        {featured.map((project) => {
          const favicon = faviconUrl(project.url)
          const proof = project.caseStudy!.proof
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="hover:border-foreground/10 hover:bg-foreground/[0.04] group flex flex-col overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              {project.url && (
                <OgImage
                  url={project.url}
                  className="aspect-[16/9] w-full overflow-hidden border-b border-[var(--card-border)] bg-background"
                  imgClassName="h-full w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-2.5">
                  {favicon ? (
                    <Image
                      src={favicon}
                      alt={`${project.name} logo`}
                      width={32}
                      height={32}
                      className="size-8 shrink-0 rounded-lg"
                      unoptimized
                    />
                  ) : (
                    <Globe className="text-foreground/40 size-7 shrink-0" />
                  )}
                  <h3 className="text-foreground/90 flex items-center gap-1.5 font-semibold">
                    {project.name}
                    <ArrowRight className="text-foreground/30 size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </h3>
                </div>
                <p className="mb-2 text-sm font-semibold text-emerald-500">
                  {project.caseStudy!.result}
                </p>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {project.caseStudy!.problem}
                </p>
                {proof && proof.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proof.map((point) => (
                      <ProofChip key={point.label} point={point} />
                    ))}
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </div>
      <Link
        href="/projects"
        className="text-foreground/50 mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground"
      >
        See all work
        <ArrowRight className="size-3.5" />
      </Link>
    </Section>
  )
}

/* ----------------------------------------------------------------------- */
/* TESTIMONIALS  (renders only once real quotes exist)                      */
/* ----------------------------------------------------------------------- */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

function Testimonials() {
  const testimonials = getRealTestimonials()
  if (testimonials.length === 0) return null

  return (
    <Section>
      <SectionLabel>What clients say</SectionLabel>
      <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
        Don&apos;t just take my word for it.
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={`${t.name}-${t.role}`}
            className="flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm"
          >
            <Quote className="mb-4 size-5 shrink-0 text-blue-500/50" />
            <blockquote className="text-foreground/75 flex-1 leading-relaxed">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="bg-foreground/[0.06] text-foreground/60 flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                {initials(t.name)}
              </span>
              <span className="min-w-0">
                <span className="text-foreground/90 block text-sm font-semibold">
                  {t.name}
                </span>
                <span className="text-foreground/45 block text-sm">
                  {t.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

/* ----------------------------------------------------------------------- */
/* PRICING  (placeholder - numbers added in a later step)                   */
/* ----------------------------------------------------------------------- */
function Pricing() {
  // PLACEHOLDER prices - swap once you've quoted a few clients.
  const tiers = [
    {
      name: "Website Care Plan",
      who: "For businesses that need a site that gets found and brings in leads - fully managed.",
      price: "$249",
      cadence: "/mo",
      cta: "Book a free call",
      bullets: [
        "Conversion-focused website that turns visitors into leads",
        "Hosting, security & SSL fully handled",
        "Uptime monitoring so you're never down quietly",
        "Small content & design changes every month",
        "Fast load times that keep customers from bouncing",
        "One point of contact - no agencies, no runaround",
      ],
      featured: false,
    },
    {
      name: "Software Partner",
      who: "For businesses that want to keep improving - a senior dev on call, month to month.",
      price: "$2,500",
      cadence: "/mo",
      cta: "Become a partner",
      bullets: [
        "A senior developer on call for your business",
        "One shipped improvement most weeks",
        "Ongoing maintenance, monitoring & fixes",
        "Priority turnaround on what matters most",
        "Continuous work toward more revenue, less busywork",
        "Month-to-month - cancel anytime, no lock-in",
      ],
      featured: true,
    },
    {
      name: "Custom Software",
      who: "For specific problems worth solving - internal tools, automations, and revenue features.",
      price: "From $5,000",
      cadence: " / project",
      cta: "Scope a project",
      bullets: [
        "Built to make or save you money, measured",
        "Dashboards, CRMs, booking & payment flows",
        "Automations that kill repetitive manual work",
        "AI tools tailored to how you actually operate",
        "Scoped up front - clear price, clear outcome",
        "Rolls into a care or partner plan once it ships",
      ],
      featured: false,
    },
  ]

  return (
    <Section>
      <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
        Pricing
      </h2>
      <div className="grid gap-3 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
              tier.featured
                ? "border-blue-500/40 bg-blue-500/[0.05] shadow-sm shadow-blue-600/10 hover:bg-blue-500/[0.07]"
                : "hover:border-foreground/10 hover:bg-foreground/[0.04] border-[var(--card-border)] bg-card shadow-sm"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-2.5 left-5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                Most popular
              </span>
            )}
            <h3 className="text-foreground/90 font-semibold">{tier.name}</h3>
            <p className="text-foreground/50 mb-4 mt-1 text-sm leading-relaxed">
              {tier.who}
            </p>
            <p className="mb-5 flex items-baseline">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                {tier.price}
              </span>
              <span className="text-foreground/40 ml-1 text-sm">
                {tier.cadence}
              </span>
            </p>
            <ul className="mb-5 mt-auto space-y-1.5">
              {tier.bullets.map((b) => (
                <li
                  key={b}
                  className="text-foreground/55 flex items-start gap-2 text-sm"
                >
                  <Check
                    className={`mt-0.5 size-3.5 shrink-0 ${
                      tier.featured ? "text-blue-500" : "text-emerald-500"
                    }`}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)] ${
                tier.featured
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-500 focus-visible:ring-blue-500"
                  : "border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 border hover:text-foreground"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="text-foreground/40 mt-5 text-sm">
        No contracts. No lock-in. You stay because it pays for itself.
      </p>
    </Section>
  )
}

/* ----------------------------------------------------------------------- */
/* ABOUT (condensed)                                                        */
/* ----------------------------------------------------------------------- */
function About() {
  return (
    <Section>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
        <Image
          src="/eric-portrait.png"
          width={400}
          height={533}
          alt="Eric Strohmaier"
          className="ring-foreground/[0.08] h-56 w-44 shrink-0 rounded-2xl object-cover object-top shadow-sm ring-1 sm:h-80 sm:w-64"
        />
        <div className="max-w-2xl">
          <div className="text-foreground/75 space-y-4 text-lg leading-relaxed md:text-xl">
            <p>
              I&apos;m Eric - a self-taught engineer who learned to build by
              shipping, and solving real problems.
            </p>
            <p>
              Most of my work is boring and profitable for my clients:
              automating the repetitive tasks, building custom tools that
              replace fragile spreadsheets, and fixing websites so they actually
              earn.
            </p>
            <p>
              For one client I grew revenue 270% by rebuilding their SEO and
              bringing in the right traffic. I build my own products too -
              PromptSloth reached 7,000+ users and $3K in revenue in just 9
              months on organic search alone, with no active marketing, and now
              runs on autopilot.
            </p>
          </div>
          <Link
            href="/about"
            className="text-foreground/50 mt-6 inline-flex items-center gap-1.5 text-base font-medium transition-colors hover:text-foreground"
          >
            More about me
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}

/* ----------------------------------------------------------------------- */
/* FINAL CTA                                                                */
/* ----------------------------------------------------------------------- */
function FinalCta() {
  return (
    <section className="mt-10 md:mt-14">
      <div className="bg-foreground/[0.03] relative overflow-hidden rounded-2xl border border-[var(--card-border)] px-6 py-10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgb(59,130,246),_transparent_50%),radial-gradient(circle_at_80%_50%,_rgb(16,185,129),_transparent_50%)] opacity-5" />
        <div className="relative">
          <h2 className="mx-auto mb-2 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl">
            Let&apos;s find the software that pays for itself.
          </h2>
          <p className="text-foreground/50 mx-auto mb-6 max-w-md leading-relaxed">
            Book a free call. We&apos;ll look at where you&apos;re leaking time
            or money and what it would take to fix it. No pressure, no jargon.
          </p>
          <PrimaryCta />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* MID-PAGE CTA                                                             */
/* ----------------------------------------------------------------------- */
function MidCta() {
  return (
    <section className="py-10 md:py-14">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Not sure what to build first?
          </h2>
          <p className="text-foreground/50 mt-1 text-sm leading-relaxed">
            That&apos;s what the call is for. We&apos;ll find the
            highest-payback fix together.
          </p>
        </div>
        <PrimaryCta className="shrink-0" />
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* Shared section primitives                                                */
/* ----------------------------------------------------------------------- */
function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-[var(--card-border)] py-10 md:py-14">
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
