import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionaries"
import { siteConfig } from "@/site-config"

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang, "about")
  const lang = params.lang
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        en: "/en/about",
        de: "/de/about",
        "x-default": "/en/about",
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `/${lang}/about`,
      locale: lang === "de" ? "de_DE" : "en_US",
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang
  const dict = await getDictionary(lang, "about")

  return (
    <div className="w-full">
      {/* Header */}
      <section className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <Image
          src="/eric-avatar.png"
          width={88}
          height={88}
          alt="Eric Strohmaier"
          className="size-20 shrink-0 rounded-2xl object-cover"
          priority
        />
        <div>
          <p className="text-foreground/40 mb-1.5 text-xs font-medium uppercase tracking-[0.2em]">
            {dict.eyebrow}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {siteConfig.name}
          </h1>
          <p className="text-foreground/50 mt-1 text-sm">{dict.tagline}</p>
        </div>
      </section>

      {/* Bio */}
      <section className="mt-8 max-w-2xl space-y-4">
        <p className="text-foreground/70 leading-relaxed">{dict.bio.p1}</p>
        <p className="text-foreground/70 leading-relaxed">{dict.bio.p2}</p>
        <p className="text-foreground/70 leading-relaxed">{dict.bio.p3}</p>
      </section>

      {/* Highlights */}
      <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {dict.highlights.map((h) => (
          <div
            key={h.label}
            className="border-foreground/[0.06] bg-foreground/[0.02] rounded-2xl border p-4"
          >
            <p className="text-lg font-semibold tracking-tight">{h.value}</p>
            <p className="text-foreground/45 mt-1 text-xs leading-snug">
              {h.label}
            </p>
          </div>
        ))}
      </section>

      {/* How I work */}
      <section className="mt-10">
        <p className="text-foreground/30 mb-3 text-xs font-medium uppercase tracking-[0.2em]">
          {dict.howIWork}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {dict.principles.map((p) => (
            <div
              key={p.title}
              className="border-foreground/[0.06] bg-foreground/[0.02] rounded-2xl border p-5"
            >
              <h2 className="text-foreground/90 mb-1.5 font-semibold">
                {p.title}
              </h2>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-foreground/[0.06] mt-10 flex flex-col items-start gap-4 rounded-2xl border bg-[var(--secondary)] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            {dict.cta.title}
          </h2>
          <p className="text-foreground/50 mt-1 text-sm">{dict.cta.subtitle}</p>
        </div>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500"
        >
          {dict.cta.button}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </section>

      {/* Links */}
      <section className="mt-8 flex flex-wrap gap-5 text-sm">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {dict.links.github}
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {dict.links.linkedin}
        </a>
        <a
          href={siteConfig.links.email}
          className="text-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {dict.links.email}
        </a>
      </section>
    </div>
  )
}
