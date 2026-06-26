/**
 * Canonical offers — the single source of truth for prices used in structured
 * data (root JSON-LD `hasOfferCatalog`), the vertical landing pages, and the
 * cost calculator. These mirror the real published prices in
 * `dictionaries/<locale>/home.json`. NEVER invent a price that can't be traced here.
 */
export interface Offer {
  id: string
  /** Stable internal name (English) used for schema. */
  name: string
  /** Numeric price for schema. `from` marks "ab/from" pricing. */
  price: number
  priceCurrency: "EUR"
  /** "from X" style pricing (e.g. custom software). */
  from?: boolean
  cadence: "month" | "project"
  label: { de: string; en: string }
  who: { de: string; en: string }
  description: { de: string; en: string }
}

export const offers: Offer[] = [
  {
    id: "website-care",
    name: "Website Care Plan",
    price: 249,
    priceCurrency: "EUR",
    cadence: "month",
    label: { de: "ab 249 €/Monat", en: "from €249/month" },
    who: {
      de: "Für Unternehmen, die eine Website wollen, die gefunden wird und Leads bringt — vollständig betreut.",
      en: "For businesses that want a website that gets found and brings leads — fully managed.",
    },
    description: {
      de: "Conversion-fokussierte Website, Hosting, Sicherheit, Monitoring und laufende kleine Änderungen — ein Ansprechpartner, keine Agentur.",
      en: "Conversion-focused website, hosting, security, monitoring and ongoing small changes — one point of contact, no agency.",
    },
  },
  {
    id: "software-partner",
    name: "Software Partner",
    price: 2500,
    priceCurrency: "EUR",
    cadence: "month",
    label: { de: "ab 2.500 €/Monat", en: "from €2,500/month" },
    who: {
      de: "Für Unternehmen, die sich laufend verbessern wollen — ein erfahrener Entwickler auf Abruf, Monat für Monat.",
      en: "For businesses that want to keep improving — a senior developer on call, month to month.",
    },
    description: {
      de: "Ein erfahrener Entwickler auf Abruf: laufende Verbesserungen, Wartung, Monitoring und priorisierte Umsetzung. Monatlich kündbar.",
      en: "A senior developer on call: ongoing improvements, maintenance, monitoring and prioritized delivery. Cancel monthly.",
    },
  },
  {
    id: "custom-software",
    name: "Custom Software",
    price: 5000,
    priceCurrency: "EUR",
    from: true,
    cadence: "project",
    label: { de: "ab 5.000 €/Projekt", en: "from €5,000/project" },
    who: {
      de: "Für konkrete Probleme, die sich zu lösen lohnen — interne Tools, Automatisierungen und umsatzbringende Funktionen.",
      en: "For specific problems worth solving — internal tools, automations and revenue-driving features.",
    },
    description: {
      de: "Individuelle Software, vorab klar definiert: klarer Preis, klares Ergebnis. Geht nach dem Launch in einen Care- oder Partner-Plan über.",
      en: "Custom software, scoped upfront: clear price, clear outcome. Rolls into a Care or Partner plan after launch.",
    },
  },
]

export function getOffers(ids?: string[]): Offer[] {
  if (!ids || ids.length === 0) return offers
  return ids
    .map((id) => offers.find((o) => o.id === id))
    .filter((o): o is Offer => Boolean(o))
}
