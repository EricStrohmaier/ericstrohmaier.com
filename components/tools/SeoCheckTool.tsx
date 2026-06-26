"use client"

import { useMemo, useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

/**
 * SEO-Check — a guided self-assessment (no external fetching). The user answers
 * honest yes/partial/no questions across SEO, local, AI search and conversion;
 * the score and gap list are derived transparently from their own answers and
 * funnel into the SEO service. Nothing leaves the browser.
 */

type Answer = "yes" | "partial" | "no"
const SCORE: Record<Answer, number> = { yes: 2, partial: 1, no: 0 }

const STRINGS = {
  de: {
    options: [
      { key: "yes", label: "Ja" },
      { key: "partial", label: "Teils" },
      { key: "no", label: "Nein / weiß nicht" },
    ],
    questions: [
      { q: "Erscheint Ihre Website bei Google auf Seite 1 für Ihre wichtigsten Suchbegriffe?", gap: "Sichtbarkeit bei Google verbessern" },
      { q: "Lädt Ihre Website in unter 3 Sekunden — auch am Handy?", gap: "Ladezeit & mobile Performance" },
      { q: "Haben Sie ein gepflegtes Google-Unternehmensprofil mit aktuellen Infos & Bewertungen?", gap: "Lokales SEO & Google-Profil" },
      { q: "Hat jede wichtige Seite einen eigenen, treffenden Titel & eine Beschreibung?", gap: "Titel & Meta-Beschreibungen" },
      { q: "Beantwortet Ihre Website typische Kundenfragen in klarem Text (FAQ, Erklärungen)?", gap: "Inhalte, die Fragen beantworten" },
      { q: "Werden Sie in KI-Antworten (ChatGPT, Perplexity, Google AI) genannt, wenn man nach Ihrer Leistung fragt?", gap: "KI-Sichtbarkeit (AEO/GEO)" },
      { q: "Verlinken andere Seiten auf Sie (Verzeichnisse, Partner, Presse)?", gap: "Verlinkungen & Erwähnungen" },
      { q: "Führt Ihre Website Besucher klar zu einer Handlung (anrufen, Termin buchen, anfragen)?", gap: "Besucher zu Anfragen führen" },
      { q: "Messen Sie, wie viele Anfragen tatsächlich über Ihre Website kommen?", gap: "Anfragen messen & auswerten" },
    ],
    answeredOf: (a: number, n: number) => `${a}/${n} beantwortet`,
    yourScore: "Ihr SEO- & KI-Score",
    placeholder: "Beantworten Sie die Fragen für Ihr Ergebnis.",
    verdicts: {
      strong: "Starke Basis — hier geht es um Feinschliff und KI-Sichtbarkeit.",
      mid: "Solide Basis mit klaren Lücken — hier steckt schnell mehr drin.",
      low: "Großes Potenzial — schon ein paar Hebel bringen deutlich mehr Anfragen.",
    },
    gapsTitle: "Hier steckt Potenzial:",
    cta: "Kostenloses SEO-Gespräch buchen",
    note: "Eine ehrliche Selbsteinschätzung, kein technischer Scan. Im kostenlosen Gespräch schaue ich mir Ihre Seite konkret an.",
  },
  en: {
    options: [
      { key: "yes", label: "Yes" },
      { key: "partial", label: "Partly" },
      { key: "no", label: "No / not sure" },
    ],
    questions: [
      { q: "Does your website appear on Google's page 1 for your most important search terms?", gap: "Visibility on Google" },
      { q: "Does your website load in under 3 seconds — on mobile too?", gap: "Load time & mobile performance" },
      { q: "Do you have a maintained Google Business Profile with up-to-date info & reviews?", gap: "Local SEO & Google profile" },
      { q: "Does every important page have its own fitting title & description?", gap: "Titles & meta descriptions" },
      { q: "Does your website answer typical customer questions in clear text (FAQ, explanations)?", gap: "Content that answers questions" },
      { q: "Are you named in AI answers (ChatGPT, Perplexity, Google AI) when people ask about your service?", gap: "AI visibility (AEO/GEO)" },
      { q: "Do other sites link to you (directories, partners, press)?", gap: "Links & mentions" },
      { q: "Does your website clearly guide visitors to an action (call, book, inquire)?", gap: "Guiding visitors to inquiries" },
      { q: "Do you measure how many inquiries actually come through your website?", gap: "Measuring inquiries" },
    ],
    answeredOf: (a: number, n: number) => `${a}/${n} answered`,
    yourScore: "Your SEO & AI score",
    placeholder: "Answer the questions to see your result.",
    verdicts: {
      strong: "Strong base — this is about fine-tuning and AI visibility.",
      mid: "Solid base with clear gaps — there's quick upside here.",
      low: "Big potential — even a few levers bring noticeably more inquiries.",
    },
    gapsTitle: "Where the potential is:",
    cta: "Book a free SEO call",
    note: "An honest self-assessment, not a technical scan. On a free call I'll look at your site specifically.",
  },
} as const

export function SeoCheckTool({ lang }: { lang: Locale }) {
  const t = STRINGS[lang] ?? STRINGS.en
  const [answers, setAnswers] = useState<Record<number, Answer>>({})

  const { pct, answered, gaps } = useMemo(() => {
    const entries = Object.entries(answers)
    const answeredCount = entries.length
    const sum = entries.reduce((acc, [, v]) => acc + SCORE[v], 0)
    const p = answeredCount > 0 ? Math.round((sum / (answeredCount * 2)) * 100) : 0
    const g = t.questions
      .map((q, i) => ({ q, i }))
      .filter(({ i }) => answers[i] && answers[i] !== "yes")
      .map(({ q }) => q.gap)
    return { pct: p, answered: answeredCount, gaps: g }
  }, [answers, t.questions])

  const tone =
    pct >= 75 ? "text-emerald-500" : pct >= 45 ? "text-blue-500" : "text-amber-500"
  const verdict =
    pct >= 75 ? t.verdicts.strong : pct >= 45 ? t.verdicts.mid : t.verdicts.low

  return (
    <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr]">
      {/* Questions */}
      <div className="rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm">
        <div className="space-y-4">
          {t.questions.map((item, i) => (
            <div key={i}>
              <p className="text-foreground/80 mb-2 text-sm font-medium">
                {i + 1}. {item.q}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {t.options.map((o) => {
                  const active = answers[i] === o.key
                  return (
                    <button
                      key={o.key}
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [i]: o.key as Answer }))
                      }
                      className={`rounded-xl border px-3 py-2 text-center text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)] ${
                        active
                          ? "border-blue-500 bg-blue-500/10 text-foreground shadow-sm shadow-blue-600/10"
                          : "border-[var(--card-border)] bg-card text-foreground/55 shadow-sm hover:border-foreground/20 hover:text-foreground"
                      }`}
                    >
                      {o.label}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="flex h-fit flex-col rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm lg:sticky lg:top-20">
        <p className="text-foreground/50 text-sm font-medium uppercase tracking-wide">
          {t.yourScore}
        </p>
        {answered === 0 ? (
          <p className="text-foreground/45 mt-3 leading-relaxed">{t.placeholder}</p>
        ) : (
          <>
            <p className={`mt-2 text-5xl font-semibold tracking-tight md:text-6xl ${tone}`}>
              {pct}
              <span className="text-foreground/30 text-2xl">/100</span>
            </p>
            <p className="text-foreground/40 mt-1 text-sm">
              {t.answeredOf(answered, t.questions.length)}
            </p>
            <p className="text-foreground/70 mt-4 leading-relaxed">{verdict}</p>
            {gaps.length > 0 && (
              <div className="mt-4">
                <p className="text-foreground/60 mb-2 text-sm font-semibold">
                  {t.gapsTitle}
                </p>
                <ul className="space-y-1.5">
                  {gaps.map((g) => (
                    <li
                      key={g}
                      className="text-foreground/65 flex items-start gap-2 text-sm"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          {t.cta}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
        <p className="text-foreground/45 mt-4 text-xs leading-relaxed">{t.note}</p>
      </div>
    </div>
  )
}
