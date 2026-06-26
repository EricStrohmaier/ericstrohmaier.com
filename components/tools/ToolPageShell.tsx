import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

export interface ToolFaq {
  q: string
  a: string
}

export interface ToolRelatedLink {
  href: string
  label: string
}

export interface ToolContentBlock {
  heading: string
  intro?: string
  points?: { title: string; copy: string }[]
}

/**
 * Reusable shell for a free-tool landing page: hero → calculator → optional
 * explainer → FAQ → related links → booking CTA. Keeps every tool page thin
 * and on-brand.
 */
export function ToolPageShell({
  lang,
  eyebrow,
  h1,
  intro,
  calculator,
  content,
  faqs,
  faqHeading,
  related,
  relatedHeading,
  finalCtaHeading,
  finalCtaCopy,
  ctaLabel,
}: {
  lang: Locale
  eyebrow: string
  h1: string
  intro: string
  calculator: React.ReactNode
  content?: ToolContentBlock
  faqs: ToolFaq[]
  faqHeading: string
  related: ToolRelatedLink[]
  relatedHeading: string
  finalCtaHeading: string
  finalCtaCopy: string
  ctaLabel: string
}) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-10 md:py-14">
        <p className="text-foreground/40 mb-3 text-sm font-medium uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
        <h1 className="mb-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {h1}
        </h1>
        <p className="text-foreground/55 max-w-2xl text-lg leading-relaxed">
          {intro}
        </p>
      </section>

      {/* Calculator */}
      <section className="pb-2">{calculator}</section>

      {/* Explainer */}
      {content && (
        <section className="border-t border-[var(--card-border)] py-10 md:py-14">
          <h2 className="mb-4 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {content.heading}
          </h2>
          {content.intro && (
            <p className="text-foreground/55 mb-7 max-w-2xl text-lg leading-relaxed">
              {content.intro}
            </p>
          )}
          {content.points && content.points.length > 0 && (
            <div className="grid gap-3 md:grid-cols-2">
              {content.points.map((p) => (
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
          )}
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="border-t border-[var(--card-border)] py-10 md:py-14">
          <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {faqHeading}
          </h2>
          <div className="divide-foreground/[0.06] overflow-hidden rounded-2xl border border-[var(--card-border)] divide-y">
            {faqs.map((f) => (
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
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-[var(--card-border)] py-10 md:py-14">
          <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {relatedHeading}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {related.map((r) => (
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
        </section>
      )}

      {/* Final CTA */}
      <section className="mt-10 md:mt-14">
        <div className="bg-foreground/[0.03] relative overflow-hidden rounded-2xl border border-[var(--card-border)] px-6 py-12 text-center md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgb(59,130,246),_transparent_50%),radial-gradient(circle_at_80%_50%,_rgb(16,185,129),_transparent_50%)] opacity-[0.06]" />
          <div className="relative">
            <h2 className="mx-auto mb-3 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              {finalCtaHeading}
            </h2>
            <p className="text-foreground/55 mx-auto mb-7 max-w-lg text-lg leading-relaxed">
              {finalCtaCopy}
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {ctaLabel}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
