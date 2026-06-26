"use client"

import { useMemo, useState } from "react"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

/**
 * Website-/Software-Kosten-Rechner — a transparent ballpark estimator. Ranges
 * are explicit assumptions, not quotes. Surfaces the "free build, €249/month"
 * Website Care framing. Nothing leaves the browser.
 */

type ProjectKey = "onepager" | "website" | "leadsystem" | "webapp" | "shop"

const PROJECT_BASE: Record<ProjectKey, [number, number]> = {
  onepager: [1500, 3000],
  website: [3000, 6000],
  leadsystem: [5000, 9000],
  webapp: [8000, 20000],
  shop: [6000, 15000],
}

type FeatureKey =
  | "multilang"
  | "cms"
  | "booking"
  | "payments"
  | "login"
  | "custom"
  | "design"

const FEATURE_ADD: Record<FeatureKey, [number, number]> = {
  multilang: [800, 1500],
  cms: [800, 2000],
  booking: [600, 1500],
  payments: [800, 2000],
  login: [2000, 6000],
  custom: [2000, 8000],
  design: [1000, 3000],
}

// The €249/month Care offer fits website-style projects (not large web apps).
const CARE_PROJECTS: ProjectKey[] = ["onepager", "website", "leadsystem"]

const STRINGS = {
  de: {
    projectLabel: "Was brauchen Sie?",
    projects: [
      { key: "onepager", label: "One-Pager / Landingpage" },
      { key: "website", label: "Mehrseitige Unternehmenswebsite" },
      { key: "leadsystem", label: "Website + Lead-System" },
      { key: "webapp", label: "Web-App / internes Tool" },
      { key: "shop", label: "Online-Shop" },
    ],
    featureLabel: "Funktionen (optional)",
    features: [
      { key: "multilang", label: "Mehrsprachig" },
      { key: "cms", label: "Blog / selbst pflegbar (CMS)" },
      { key: "booking", label: "Terminbuchung" },
      { key: "payments", label: "Online-Zahlung" },
      { key: "login", label: "Login-/Kundenbereich, CRM" },
      { key: "custom", label: "Individuelle Funktionen / Automatisierung" },
      { key: "design", label: "Individuelles Design (statt Vorlage)" },
    ],
    estimateLabel: "Grober Richtwert",
    waysTitle: "Zwei Wege zu zahlen",
    onceTitle: "Projektpreis, einmalig",
    onceCopy:
      "Sie zahlen das Projekt einmalig und besitzen alles. Danach optional eine günstige Betreuung.",
    careTitle: "0 € Aufbau — nur Betreuung",
    carePrice: "ab 249 €/Monat",
    careCopy:
      "Ich baue Ihre Website ohne Aufbaukosten. Sie zahlen nur Hosting, Sicherheit, Monitoring und laufende kleine Änderungen — monatlich kündbar. Für Websites, kein großes Tool.",
    careBadge: "Beliebt",
    cta: "Kostenloses Gespräch buchen",
    note: "Schätzung, kein Angebot. Den genauen Preis definieren wir vorab gemeinsam — klarer Preis, klares Ergebnis.",
    assumptionsTitle: "Wie wird das berechnet?",
    assumptions:
      "Jeder Projekttyp hat einen Basis-Bereich, jede Funktion erhöht ihn. Die Werte sind Erfahrungs-Richtwerte für individuelle Umsetzung (kein Baukasten) — der echte Preis hängt vom Detailumfang ab.",
  },
  en: {
    projectLabel: "What do you need?",
    projects: [
      { key: "onepager", label: "One-pager / landing page" },
      { key: "website", label: "Multi-page company website" },
      { key: "leadsystem", label: "Website + lead system" },
      { key: "webapp", label: "Web app / internal tool" },
      { key: "shop", label: "Online shop" },
    ],
    featureLabel: "Features (optional)",
    features: [
      { key: "multilang", label: "Multilingual" },
      { key: "cms", label: "Blog / self-editable (CMS)" },
      { key: "booking", label: "Appointment booking" },
      { key: "payments", label: "Online payments" },
      { key: "login", label: "Login / client area, CRM" },
      { key: "custom", label: "Custom features / automation" },
      { key: "design", label: "Custom design (not a template)" },
    ],
    estimateLabel: "Rough ballpark",
    waysTitle: "Two ways to pay",
    onceTitle: "Project price, one-off",
    onceCopy:
      "You pay once and own everything. Optional low-cost care afterwards.",
    careTitle: "€0 build — care only",
    carePrice: "from €249/month",
    careCopy:
      "I build your website with no build cost. You pay only hosting, security, monitoring and ongoing small changes — cancel monthly. For websites, not a large tool.",
    careBadge: "Popular",
    cta: "Book a free call",
    note: "An estimate, not a quote. We scope the exact price upfront together — clear price, clear outcome.",
    assumptionsTitle: "How is this calculated?",
    assumptions:
      "Each project type has a base range and each feature raises it. The numbers are experience-based ballparks for custom work (not a website builder) — the real price depends on the detailed scope.",
  },
} as const

function round100(n: number) {
  return Math.round(n / 100) * 100
}

const chipClass = (active: boolean) =>
  `flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-left text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)] ${
    active
      ? "border-blue-500 bg-blue-500/10 text-foreground shadow-sm shadow-blue-600/10"
      : "border-[var(--card-border)] bg-card text-foreground/65 shadow-sm hover:border-foreground/20 hover:text-foreground"
  }`

export function WebsiteCostCalculator({ lang }: { lang: Locale }) {
  const t = STRINGS[lang] ?? STRINGS.en
  const [project, setProject] = useState<ProjectKey>("website")
  const [features, setFeatures] = useState<Set<FeatureKey>>(new Set())

  const fmt = useMemo(
    () =>
      new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-US", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
    [lang],
  )

  const [min, max] = useMemo(() => {
    let lo = PROJECT_BASE[project][0]
    let hi = PROJECT_BASE[project][1]
    features.forEach((f) => {
      lo += FEATURE_ADD[f][0]
      hi += FEATURE_ADD[f][1]
    })
    return [round100(lo), round100(hi)]
  }, [project, features])

  const careAvailable = CARE_PROJECTS.includes(project)

  function toggle(f: FeatureKey) {
    setFeatures((prev) => {
      const next = new Set(prev)
      if (next.has(f)) next.delete(f)
      else next.add(f)
      return next
    })
  }

  return (
    <div className="grid gap-3 lg:grid-cols-[1.1fr_1fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm">
        <p className="text-foreground/70 mb-2 text-sm font-medium">
          {t.projectLabel}
        </p>
        <div className="mb-6 grid gap-2">
          {t.projects.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setProject(p.key as ProjectKey)}
              className={chipClass(project === p.key)}
            >
              <span
                className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
                  project === p.key
                    ? "border-blue-500 bg-blue-500"
                    : "border-foreground/30 bg-background"
                }`}
              >
                {project === p.key && (
                  <span className="size-1.5 rounded-full bg-white" />
                )}
              </span>
              {p.label}
            </button>
          ))}
        </div>

        <p className="text-foreground/70 mb-2 text-sm font-medium">
          {t.featureLabel}
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {t.features.map((f) => {
            const active = features.has(f.key as FeatureKey)
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => toggle(f.key as FeatureKey)}
                className={chipClass(active)}
              >
                <span
                  className={`flex size-4 shrink-0 items-center justify-center rounded border ${
                    active
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-foreground/30 bg-background"
                  }`}
                >
                  {active && <Check className="size-3" strokeWidth={3} />}
                </span>
                {f.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm">
        <p className="text-foreground/50 text-sm font-medium uppercase tracking-wide">
          {t.estimateLabel}
        </p>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {fmt.format(min)} – {fmt.format(max)}
        </p>

        <p className="text-foreground/60 mt-6 mb-2 text-sm font-semibold">
          {t.waysTitle}
        </p>
        <div className="space-y-2.5">
          <div className="rounded-xl border border-[var(--card-border)] bg-background p-4">
            <p className="text-foreground/90 text-sm font-semibold">
              {t.onceTitle} · {fmt.format(min)} – {fmt.format(max)}
            </p>
            <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
              {t.onceCopy}
            </p>
          </div>
          {careAvailable && (
            <div className="relative rounded-xl border border-blue-500/40 bg-blue-500/[0.06] p-4">
              <span className="absolute -top-2.5 left-4 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                {t.careBadge}
              </span>
              <p className="text-foreground/90 text-sm font-semibold">
                {t.careTitle} · {t.carePrice}
              </p>
              <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
                {t.careCopy}
              </p>
            </div>
          )}
        </div>

        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          {t.cta}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>

        <p className="text-foreground/45 mt-4 text-xs leading-relaxed">
          {t.note}
        </p>
        <details className="group mt-3">
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
  )
}
