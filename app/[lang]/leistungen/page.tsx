import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Wrench } from "lucide-react"
import { isLocale, type Locale } from "@/i18n-config"
import { getVerticalCards } from "@/lib/verticals"
import { siteConfig } from "@/site-config"

const copy = {
  de: {
    metaTitle: "Leistungen — Software & Websites für Ihre Branche",
    metaDescription:
      "Individuelle Software, Automatisierungen und conversion-starke Websites für Immobilienmakler, Handwerker, Steuerberater und KMU in Österreich und Deutschland. DSGVO-konform.",
    eyebrow: "Leistungen",
    h1: "Software & Websites, gebaut für Ihre Branche.",
    intro:
      "Ich entwickle für kleine und mittlere Unternehmen in Österreich und Deutschland — zugeschnitten auf die konkreten Abläufe Ihrer Branche, statt Software von der Stange.",
    cta: "Kostenloses Gespräch buchen",
    verticalsHeading: "Für Ihre Branche",
    toolsHeading: "Kostenlose Tools",
    toolsBlurb:
      "Kleine Tools, die ich selbst gebaut habe und nutze — kostenlos auch für Sie.",
    toolsLink: "Alle Tools ansehen",
    learnMore: "Mehr erfahren",
  },
  en: {
    metaTitle: "Services — Software & Websites for Your Industry",
    metaDescription:
      "Custom software, automations and conversion-focused websites for real estate agents, tradespeople, tax advisors and SMBs in Austria and Germany. GDPR-compliant.",
    eyebrow: "Services",
    h1: "Software & websites, built for your industry.",
    intro:
      "I build for small and mid-sized businesses in Austria and Germany — tailored to the real workflows of your industry, not off-the-shelf software.",
    cta: "Book a free call",
    verticalsHeading: "For your industry",
    toolsHeading: "Free tools",
    toolsBlurb: "Small tools I built and use myself — free for you too.",
    toolsLink: "See all tools",
    learnMore: "Learn more",
  },
}

const ACCENT_DOT: Record<string, string> = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  violet: "bg-violet-500",
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  if (!isLocale(params.lang)) return {}
  const t = copy[params.lang]
  const path = "/leistungen"
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
    },
  }
}

export default function LeistungenHub({
  params,
}: {
  params: { lang: Locale }
}) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const t = copy[lang]
  const cards = getVerticalCards(lang)

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.metaTitle,
    url: `${siteConfig.url}/${lang}/leistungen`,
    inLanguage: lang,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cards.map((card, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: card.eyebrow,
        url: `${siteConfig.url}/${lang}/leistungen/${card.slug}`,
      })),
    },
  }

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />

      {/* Hero */}
      <section className="py-10 md:py-14">
        <p className="text-foreground/40 mb-3 text-sm font-medium uppercase tracking-[0.2em]">
          {t.eyebrow}
        </p>
        <h1 className="mb-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {t.h1}
        </h1>
        <p className="text-foreground/55 mb-7 max-w-2xl text-lg leading-relaxed">
          {t.intro}
        </p>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          {t.cta}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </section>

      {/* Verticals */}
      <section className="border-t border-[var(--card-border)] py-10 md:py-14">
        <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          {t.verticalsHeading}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.slug}
              href={`/${lang}/leistungen/${card.slug}`}
              className="hover:border-foreground/10 hover:bg-foreground/[0.04] group flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground/40">
                <span
                  className={`size-1.5 rounded-full ${ACCENT_DOT[card.accent] ?? "bg-blue-500"}`}
                />
                {card.eyebrow}
              </span>
              <h3 className="text-foreground/90 mb-2 flex items-start gap-1.5 text-lg font-semibold leading-snug">
                {card.title}
              </h3>
              <p className="text-foreground/55 line-clamp-3 text-sm leading-relaxed">
                {card.blurb}
              </p>
              <span className="text-foreground/50 mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:text-foreground">
                {t.learnMore}
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Free tools pointer */}
      <section className="border-t border-[var(--card-border)] py-10 md:py-14">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
              <Wrench className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                {t.toolsHeading}
              </h2>
              <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
                {t.toolsBlurb}
              </p>
            </div>
          </div>
          <Link
            href={`/${lang}/tools`}
            className="text-foreground/70 hover:text-foreground inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/10 px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/20"
          >
            {t.toolsLink}
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
