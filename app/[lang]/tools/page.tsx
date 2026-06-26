import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  FileText,
  Clock,
  Calculator,
  Gauge,
  Search,
} from "lucide-react"
import { isLocale, type Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

const ICONS = {
  invoice: FileText,
  timetracking: Clock,
  cost: Calculator,
  lead: Gauge,
  seocheck: Search,
} as const

const copy = {
  de: {
    metaTitle: "Kostenlose Tools für Selbstständige & KMU",
    metaDescription:
      "Kostenlose Tools ohne Anmeldung: Rechnungs-Generator, Zeiterfassung, Website-Kosten-Rechner und Lead-Response-Rechner. Gebaut von Eric Strohmaier — genau die Art Software, die ich für Kunden baue.",
    eyebrow: "Kostenlose Tools",
    h1: "Kostenlose Tools für Selbstständige & KMU.",
    intro:
      "Kleine Tools, die ich selbst gebaut habe und nutze — kostenlos auch für Sie, ohne Anmeldung. Genau die Art Software, die ich für Kunden baue.",
    items: [
      {
        key: "cost",
        href: "/de/tools/website-kosten-rechner",
        name: "Website-Kosten-Rechner",
        blurb:
          "Schätzen Sie in 30 Sekunden, was eine Website oder individuelle Software kostet — plus ein Weg ganz ohne Aufbaukosten.",
      },
      {
        key: "lead",
        href: "/de/tools/lead-response-rechner",
        name: "Lead-Response-Rechner",
        blurb:
          "Sehen Sie, wie viel Umsatz Sie pro Monat verlieren, weil Anfragen zu spät beantwortet werden.",
      },
      {
        key: "seocheck",
        href: "/de/tools/seo-check",
        name: "SEO-Check",
        blurb:
          "In 2 Minuten einschätzen, wie gut Sie bei Google und in KI-Antworten gefunden werden.",
      },
      {
        key: "invoice",
        href: "/invoice",
        name: "Rechnungs-Generator",
        blurb:
          "Saubere, professionelle Rechnungen erstellen und in Sekunden als PDF herunterladen.",
      },
      {
        key: "timetracking",
        href: "/de/timetracking",
        name: "Zeiterfassung",
        blurb:
          "Abrechenbare Stunden erfassen und direkt in eine Rechnung verwandeln.",
      },
    ],
    open: "Tool öffnen",
    ctaHeading: "Brauchen Sie ein eigenes Tool?",
    ctaCopy:
      "Wenn ein kostenloses Tool fast passt, aber nicht ganz — genau das baue ich. Buchen Sie ein kostenloses Gespräch.",
    ctaLabel: "Kostenloses Gespräch buchen",
  },
  en: {
    metaTitle: "Free Tools for Freelancers & Small Businesses",
    metaDescription:
      "Free tools with no sign-up: invoice generator, time tracking, website cost calculator and lead response calculator. Built by Eric Strohmaier — the kind of software I build for clients.",
    eyebrow: "Free tools",
    h1: "Free tools for freelancers & small businesses.",
    intro:
      "Small tools I built and use myself — free for you too, no sign-up. The kind of software I build for clients.",
    items: [
      {
        key: "cost",
        href: "/en/tools/website-kosten-rechner",
        name: "Website Cost Calculator",
        blurb:
          "Estimate in 30 seconds what a website or custom software costs — plus a path with no build cost at all.",
      },
      {
        key: "lead",
        href: "/en/tools/lead-response-rechner",
        name: "Lead Response Calculator",
        blurb:
          "See how much revenue you lose each month because inquiries are answered too late.",
      },
      {
        key: "seocheck",
        href: "/en/tools/seo-check",
        name: "SEO Check",
        blurb:
          "Assess in 2 minutes how well Google and AI answers find you.",
      },
      {
        key: "invoice",
        href: "/invoice",
        name: "Invoice Generator",
        blurb:
          "Create clean, professional invoices and download them as PDF in seconds.",
      },
      {
        key: "timetracking",
        href: "/en/timetracking",
        name: "Time Tracking",
        blurb: "Track billable hours and turn them straight into an invoice.",
      },
    ],
    open: "Open tool",
    ctaHeading: "Need a tool of your own?",
    ctaCopy:
      "When a free tool almost fits but not quite — that's exactly what I build. Book a free call.",
    ctaLabel: "Book a free call",
  },
} as const

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  if (!isLocale(params.lang)) return {}
  const t = copy[params.lang]
  const path = "/tools"
  const og =
    params.lang === "de" ? `${siteConfig.ogImage}?lang=de` : siteConfig.ogImage
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `/${params.lang}${path}`,
      languages: {
        en: `/en${path}`,
        de: `/de${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: params.lang === "de" ? "de_DE" : "en_US",
      url: `/${params.lang}${path}`,
      siteName: "Eric Strohmaier",
      title: t.metaTitle,
      description: t.metaDescription,
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
      images: [og],
      creator: "@EricStrohmaier",
    },
  }
}

export default function ToolsHub({ params }: { params: { lang: Locale } }) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const t = copy[lang]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-10 md:py-14">
        <p className="text-foreground/40 mb-3 text-sm font-medium uppercase tracking-[0.2em]">
          {t.eyebrow}
        </p>
        <h1 className="mb-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {t.h1}
        </h1>
        <p className="text-foreground/55 max-w-2xl text-lg leading-relaxed">
          {t.intro}
        </p>
      </section>

      {/* Tools grid */}
      <section className="border-t border-[var(--card-border)] py-10 md:py-14">
        <div className="grid gap-3 sm:grid-cols-2">
          {t.items.map((tool) => {
            const Icon = ICONS[tool.key as keyof typeof ICONS]
            return (
              <Link
                key={tool.key}
                href={tool.href}
                className="hover:border-foreground/10 hover:bg-foreground/[0.04] group flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Icon className="mb-3 size-6 text-blue-500" strokeWidth={1.5} />
                <h2 className="text-foreground/90 mb-1.5 text-lg font-semibold">
                  {tool.name}
                </h2>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {tool.blurb}
                </p>
                <span className="text-foreground/50 mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:text-foreground">
                  {t.open}
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-2">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-500/30 bg-blue-500/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {t.ctaHeading}
            </h2>
            <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
              {t.ctaCopy}
            </p>
          </div>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            {t.ctaLabel}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  )
}
