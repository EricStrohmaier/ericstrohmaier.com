import type { Locale } from "@/i18n-config"
import type { Vertical } from "./types"
import { immobilienmakler } from "./immobilienmakler"
import { handwerker } from "./handwerker"
import { steuerberater } from "./steuerberater"
import { softwareAutomatisierung } from "./software-automatisierung"
import { seo } from "./seo"
import { freiberufler } from "./freiberufler"
import { arztpraxis } from "./arztpraxis"

export type { Vertical, VerticalContent, Accent } from "./types"

/**
 * Registry of all vertical landing pages. Order = display order in the
 * /leistungen hub and the sitemap. Add a new vertical by creating its data
 * file and appending it here.
 */
export const verticals: Vertical[] = [
  immobilienmakler,
  handwerker,
  steuerberater,
  softwareAutomatisierung,
  seo,
  freiberufler,
  arztpraxis,
]

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug)
}

export function getVerticalSlugs(): string[] {
  return verticals.map((v) => v.slug)
}

/** Short card data for the /leistungen hub, in the requested locale. */
export function getVerticalCards(lang: Locale) {
  return verticals.map((v) => ({
    slug: v.slug,
    accent: v.accent,
    title: v.content[lang].h1,
    eyebrow: v.content[lang].eyebrow,
    blurb: v.content[lang].subtitle,
  }))
}
