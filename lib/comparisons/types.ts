import type { IconKey } from "@/components/vertical/icons"
import type { Accent } from "@/lib/verticals/types"

/** One row of the head-to-head table. */
export interface CompRow {
  label: string
  ours: string
  theirs: string
  /** Highlight "ours" as the win for this row. Defaults to true. */
  oursWin?: boolean
}

export interface CompReason {
  icon: IconKey
  title: string
  copy: string
}

/** A comparison / alternatives page's copy in a single locale. Be fair: never
 * invent competitor facts, prices or quotes. Keep "theirs" categorical/true. */
export interface ComparisonContent {
  metaTitle: string
  metaDescription: string
  keywords: string[]

  eyebrow: string
  h1: string
  subtitle: string
  /** Lead-with-the-answer paragraph (AEO). */
  intro: string
  primaryCtaLabel: string

  tableHeading: string
  oursLabel: string
  theirsLabel: string
  rows: CompRow[]

  reasonsLabel: string
  reasonsHeading: string
  reasons: CompReason[]

  /** Fairness section — when the alternative is actually the better choice. */
  honestLabel: string
  honestHeading: string
  honestCopy: string

  faqLabel: string
  faqHeading: string
  faqs: { q: string; a: string }[]

  /** Label for the in-page link to the related service page. */
  serviceLinkLabel: string

  finalCtaHeading: string
  finalCtaCopy: string
  finalCtaLabel: string
}

export interface Comparison {
  slug: string
  accent: Accent
  /** Locale-less, leading-slash-less service path this funnels to,
   *  e.g. "leistungen/immobilienmakler". */
  funnelTo: string
  proofSlugs?: string[]
  content: { de: ComparisonContent; en: ComparisonContent }
}
