import type { MetadataRoute } from "next"
import { graveyardProjects } from "@/lib/project-graveyard"
import { getVerticalSlugs } from "@/lib/verticals"
import { getComparisonSlugs } from "@/lib/comparisons"
import { siteConfig } from "@/site-config"
import { i18n } from "@/i18n-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url

  // Localized marketing paths (relative to a locale prefix).
  const marketingPaths = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" as const },
    ...getVerticalSlugs().map((slug) => ({
      path: `/leistungen/${slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...getComparisonSlugs().map((slug) => ({
      path: `/vergleich/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tools", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/tools/website-kosten-rechner",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/tools/lead-response-rechner",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/tools/seo-check",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/timetracking", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" as const },
    ...graveyardProjects.map((p) => ({
      path: `/projects/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ]

  const lastModified = new Date()

  // One entry per (locale, path) with hreflang alternates pointing at every
  // locale + an x-default.
  const localized: MetadataRoute.Sitemap = marketingPaths.flatMap((m) =>
    i18n.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${m.path}`,
      lastModified,
      changeFrequency: m.changeFrequency,
      priority: m.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            i18n.locales.map((l) => [l, `${siteUrl}/${l}${m.path}`]),
          ),
          "x-default": `${siteUrl}/${i18n.defaultLocale}${m.path}`,
        },
      },
    })),
  )

  // Public tools (not localized).
  const tools: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/invoice`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  return [...localized, ...tools]
}
