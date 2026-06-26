import type { IconKey } from "@/components/vertical/icons"

export type Accent = "blue" | "emerald" | "violet"

export interface PainPoint {
  title: string
  copy: string
}

export interface Feature {
  icon: IconKey
  title: string
  copy: string
}

export interface Step {
  title: string
  copy: string
}

export interface Fact {
  icon: IconKey
  title: string
  copy: string
}

export interface OwnershipPoint {
  icon: IconKey
  title: string
  copy: string
}

export interface FaqItem {
  q: string
  a: string
}

/**
 * One vertical landing page's copy, in a single locale. Numbers must be real
 * or generic — never invent client metrics or testimonials. Prices come from
 * lib/offers.ts, not from here.
 */
export interface VerticalContent {
  // SEO
  metaTitle: string
  metaDescription: string
  keywords: string[]

  // Hero
  eyebrow: string
  h1: string
  subtitle: string
  trustLine: string
  primaryCtaLabel: string
  secondaryCtaLabel?: string

  // Problem
  problemLabel: string
  problemHeading: string
  problemIntro: string
  pains: PainPoint[]

  // ROI / money-math band (optional)
  roi?: {
    label: string
    heading: string
    statValue: string
    statLabel: string
    copy: string
  }

  // Solution / features
  solutionLabel: string
  solutionHeading: string
  solutionIntro: string
  features: Feature[]

  // Process (3 steps)
  processLabel: string
  processHeading: string
  steps: Step[]

  // Mid CTA
  midCtaHeading: string
  midCtaCopy: string

  // Why it works (optional)
  why?: {
    label: string
    heading: string
    facts: Fact[]
  }

  // Ownership / trust (optional — DSGVO, EU hosting, no lock-in)
  ownership?: {
    label: string
    heading: string
    intro: string
    points: OwnershipPoint[]
  }

  // Proof strip heading (renders the real projects from `proofSlugs`)
  proofHeading?: string

  // Offer (framing only — prices pulled from lib/offers.ts)
  offerLabel: string
  offerHeading: string
  offerIntro: string
  offerNote?: string

  // FAQ
  faqLabel: string
  faqHeading: string
  faqs: FaqItem[]

  // Final CTA
  finalCtaHeading: string
  finalCtaCopy: string
  finalCtaLabel: string
}

export interface Vertical {
  slug: string
  accent: Accent
  /** Real graveyard project slugs to show as the proof strip. */
  proofSlugs: string[]
  /** Which offers (lib/offers.ts ids) to surface. Defaults to all three. */
  offerIds?: string[]
  content: { de: VerticalContent; en: VerticalContent }
}
