import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Filter,
  FileText,
  ShieldCheck,
  PhoneCall,
  Hammer,
  TrendingUp,
} from "lucide-react"
import type { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionaries"
import { siteConfig } from "@/site-config"

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const lang = params.lang
  const dict = await getDictionary(lang, "timetracking")
  const path = "/timetracking"
  const og =
    lang === "de" ? `${siteConfig.ogImage}?lang=de` : siteConfig.ogImage
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        en: `/en${path}`,
        de: `/de${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "de" ? "de_DE" : "en_US",
      url: `/${lang}${path}`,
      siteName: "Eric Strohmaier",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [og],
      creator: "@EricStrohmaier",
    },
  }
}

const featureIcons = [Clock, Filter, FileText, ShieldCheck]
const stepIcons = [PhoneCall, Hammer, TrendingUp]

export default async function TimeTrackingPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang
  const dict = await getDictionary(lang, "timetracking")

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-10 md:py-14">
        <p className="text-foreground/40 mb-3 text-sm font-medium uppercase tracking-[0.2em]">
          {dict.hero.eyebrow}
        </p>
        <h1 className="mb-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {dict.hero.title}
        </h1>
        <p className="text-foreground/55 mb-7 max-w-xl text-lg leading-relaxed">
          {dict.hero.subtitle}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/dashboard"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            {dict.hero.ctaPrimary}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {dict.hero.ctaLogin}
            </Link>
            <Link
              href="/register"
              className="text-foreground/50 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-sm font-medium transition-colors hover:text-foreground"
            >
              {dict.hero.ctaRegister}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <SectionLabel>{dict.features.label}</SectionLabel>
        <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          {dict.features.heading}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {dict.features.items.map((f, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={f.title}
                className="hover:border-foreground/10 hover:bg-foreground/[0.04] flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-foreground/90 mb-1.5 font-semibold">
                  {f.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {f.copy}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionLabel>{dict.steps.label}</SectionLabel>
        <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          {dict.steps.heading}
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {dict.steps.items.map((step, i) => {
            const Icon = stepIcons[i]
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

      {/* CTA */}
      <section className="mt-10 md:mt-14">
        <div className="bg-foreground/[0.03] relative overflow-hidden rounded-2xl border border-[var(--card-border)] px-6 py-10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgb(59,130,246),_transparent_50%),radial-gradient(circle_at_80%_50%,_rgb(16,185,129),_transparent_50%)] opacity-5" />
          <div className="relative">
            <h2 className="mx-auto mb-2 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl">
              {dict.cta.heading}
            </h2>
            <p className="text-foreground/50 mx-auto mb-6 max-w-md leading-relaxed">
              {dict.cta.copy}
            </p>
            <Link
              href="/dashboard"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {dict.cta.button}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Soft booking CTA — this free tool is a sample of the custom work */}
      <section className="mt-3">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-500/30 bg-blue-500/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {lang === "de"
                ? "Sie brauchen ein eigenes internes Tool?"
                : "Need a custom internal tool?"}
            </h2>
            <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
              {lang === "de"
                ? "Zeiterfassung ist nur ein Beispiel. Brauchen Sie ein Tool, das genau zu Ihrem Ablauf passt? Gebaut von Eric — buchen Sie ein kostenloses Gespräch."
                : "Time tracking is just one example. Need a tool built for your exact workflow? Built by Eric — book a free call."}
            </p>
          </div>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            {lang === "de" ? "Kostenloses Gespräch buchen" : "Book a free call"}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  )
}

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
