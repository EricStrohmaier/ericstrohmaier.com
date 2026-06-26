"use client"

import { useMemo, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

/**
 * Lead-Response-Rechner — estimates revenue lost to slow replies. The loss
 * model is transparent and adjustable; it is clearly framed as an estimate,
 * never as a published statistic. No data leaves the browser.
 */

type ResponseKey = "under5min" | "under1h" | "hours" | "nextday" | "later"

// Illustrative model: share of inquiries lost to faster competitors by current
// response speed (speed-to-lead). Shown to the user as an assumption.
const LOSS_FACTOR: Record<ResponseKey, number> = {
  under5min: 0,
  under1h: 0.1,
  hours: 0.25,
  nextday: 0.5,
  later: 0.65,
}

// Assumed share of fast-answered inquiries that become deals (disclosed in the note).
const ASSUMED_CLOSE = 0.3

const STRINGS = {
  de: {
    leads: "Anfragen pro Monat",
    value: "Ø Auftragswert / Provision (€)",
    response: "Ihre aktuelle Antwortzeit",
    options: [
      { key: "under5min", label: "Unter 5 Minuten" },
      { key: "under1h", label: "Innerhalb 1 Stunde" },
      { key: "hours", label: "Wenige Stunden" },
      { key: "nextday", label: "Am nächsten Tag" },
      { key: "later", label: "Später / unregelmäßig" },
    ],
    resultLabel: "Geschätzter Umsatzverlust durch zu langsame Antworten",
    perMonth: "pro Monat",
    perYear: "≈ pro Jahr",
    recover:
      "Ein System, das in Sekunden antwortet und automatisch nachfasst, holt den Großteil davon zurück.",
    noLoss:
      "Stark — bei dieser Antwortzeit verlieren Sie kaum Anfragen an schnellere Mitbewerber. Ein System hält das auch bei mehr Anfragen so.",
    cta: "Kostenloses Erstgespräch buchen",
    assumptionsTitle: "Wie wird das berechnet?",
    assumptions:
      "Schätzung: Anfragen × Auftragswert × Anteil verlorener Anfragen × angenommene Abschlussquote (30 %). Der Anteil hängt von Ihrer Antwortzeit ab (0 % unter 5 Min., 10 % < 1 Std., 25 % wenige Std., 50 % nächster Tag, 65 % später) — basierend auf dem Speed-to-Lead-Prinzip: Interessenten entscheiden sich meist für den, der zuerst antwortet. Ein Modell, kein Versprechen — passen Sie die Werte an Ihre Zahlen an.",
  },
  en: {
    leads: "Inquiries per month",
    value: "Avg. deal value / commission (€)",
    response: "Your current response time",
    options: [
      { key: "under5min", label: "Under 5 minutes" },
      { key: "under1h", label: "Within 1 hour" },
      { key: "hours", label: "A few hours" },
      { key: "nextday", label: "Next day" },
      { key: "later", label: "Later / irregular" },
    ],
    resultLabel: "Estimated revenue lost to slow replies",
    perMonth: "per month",
    perYear: "≈ per year",
    recover:
      "A system that replies in seconds and follows up automatically recovers most of this.",
    noLoss:
      "Strong — at this response time you lose almost no inquiries to faster competitors. A system keeps it that way even as inquiries grow.",
    cta: "Book a free intro call",
    assumptionsTitle: "How is this calculated?",
    assumptions:
      "Estimate: inquiries × deal value × share of lost inquiries × an assumed close rate (30%). The share depends on your response time (0% under 5 min, 10% < 1 h, 25% a few hours, 50% next day, 65% later) — based on the speed-to-lead principle: prospects usually go with whoever answers first. A model, not a promise — adjust the values to your numbers.",
  },
} as const

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-foreground/70 mb-1.5 block text-sm font-medium">
        {label}
      </span>
      {children}
    </label>
  )
}

const inputClass =
  "w-full rounded-xl border border-[var(--card-border)] bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"

export function LeadResponseCalculator({ lang }: { lang: Locale }) {
  const t = STRINGS[lang] ?? STRINGS.en
  const [leads, setLeads] = useState(40)
  const [value, setValue] = useState(2000)
  const [response, setResponse] = useState<ResponseKey>("hours")

  const fmt = useMemo(
    () =>
      new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-US", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
    [lang],
  )

  const lostMonth = useMemo(() => {
    const factor = LOSS_FACTOR[response]
    const v = leads * value * ASSUMED_CLOSE * factor
    return Number.isFinite(v) && v > 0 ? v : 0
  }, [leads, value, response])

  return (
    <div className="grid gap-3 lg:grid-cols-[1.1fr_1fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm">
        <div className="space-y-4">
          <Field label={t.leads}>
            <input
              type="number"
              min={0}
              value={leads}
              onChange={(e) => setLeads(Math.max(0, Number(e.target.value)))}
              className={inputClass}
            />
          </Field>
          <Field label={t.value}>
            <input
              type="number"
              min={0}
              value={value}
              onChange={(e) => setValue(Math.max(0, Number(e.target.value)))}
              className={inputClass}
            />
          </Field>
          <Field label={t.response}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {t.options.map((o) => {
                const active = response === o.key
                return (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => setResponse(o.key as ResponseKey)}
                    className={`rounded-xl border px-3 py-2 text-left text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)] ${
                      active
                        ? "border-blue-500 bg-blue-500/10 text-foreground shadow-sm shadow-blue-600/10"
                        : "border-[var(--card-border)] bg-card text-foreground/65 shadow-sm hover:border-foreground/20 hover:text-foreground"
                    }`}
                  >
                    {o.label}
                  </button>
                )
              })}
            </div>
          </Field>
        </div>
      </div>

      {/* Result */}
      <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_rgb(245,158,11),_transparent_55%)] opacity-[0.07]" />
        <div className="relative flex flex-1 flex-col">
          <p className="text-foreground/50 text-sm font-medium uppercase tracking-wide">
            {t.resultLabel}
          </p>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-amber-500 md:text-6xl">
            {fmt.format(lostMonth)}
          </p>
          <p className="text-foreground/45 mt-1 text-sm">
            {t.perMonth} · {fmt.format(lostMonth * 12)} {t.perYear}
          </p>
          <p className="text-foreground/65 mt-5 leading-relaxed">
            {lostMonth > 0 ? t.recover : t.noLoss}
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            {t.cta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <details className="group mt-auto pt-6">
            <summary className="text-foreground/40 hover:text-foreground/70 flex cursor-pointer items-center gap-1.5 text-xs [&::-webkit-details-marker]:hidden">
              <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
              {t.assumptionsTitle}
            </summary>
            <p className="text-foreground/45 mt-2 text-xs leading-relaxed">
              {t.assumptions}
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}
