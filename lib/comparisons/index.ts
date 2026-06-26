import type { Comparison } from "./types"
import { onofficeAlternative } from "./onoffice-alternative"
import { individuelleVsStandard } from "./individuelle-software-vs-standardsoftware"

export type { Comparison, ComparisonContent } from "./types"

/** Registry of comparison / alternatives pages. Add one by creating its data
 *  file and appending it here — the route, sitemap and schema pick it up. */
export const comparisons: Comparison[] = [
  onofficeAlternative,
  individuelleVsStandard,
]

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug)
}

export function getComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug)
}
