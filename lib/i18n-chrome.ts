import type { Locale } from "@/i18n-config"

// Small, shared site-chrome strings (nav, footer, switcher, CTA). Kept as a
// plain TS map so both server and client components can import it without the
// async dictionary loader. Page *content* lives in dictionaries/<locale>/*.json.
type Chrome = {
  nav: { home: string; work: string; about: string; contact: string }
  bookCall: string
  tools: { invoice: string; timeTracking: string }
  toolsLabel: string
  legal: { impressum: string; privacy: string }
  rights: string
  switcher: { label: string; en: string; de: string }
}

export const chrome: Record<Locale, Chrome> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About", contact: "Contact" },
    bookCall: "Book a call",
    tools: { invoice: "Invoice", timeTracking: "Time Tracking" },
    toolsLabel: "Free tools",
    legal: { impressum: "Imprint", privacy: "Privacy" },
    rights: "All rights reserved.",
    switcher: { label: "Language", en: "English", de: "Deutsch" },
  },
  de: {
    nav: { home: "Start", work: "Projekte", about: "Über mich", contact: "Kontakt" },
    bookCall: "Termin buchen",
    tools: { invoice: "Rechnung", timeTracking: "Zeiterfassung" },
    toolsLabel: "Kostenlose Tools",
    legal: { impressum: "Impressum", privacy: "Datenschutz" },
    rights: "Alle Rechte vorbehalten.",
    switcher: { label: "Sprache", en: "English", de: "Deutsch" },
  },
}
