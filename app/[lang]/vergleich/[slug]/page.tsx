import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { i18n, isLocale, type Locale } from "@/i18n-config"
import { getComparison, getComparisonSlugs } from "@/lib/comparisons"
import { ComparisonPage } from "@/components/comparison/ComparisonPage"
import { getProjectBySlug, type GraveyardProject } from "@/lib/project-graveyard"
import { siteConfig } from "@/site-config"

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    getComparisonSlugs().map((slug) => ({ lang, slug })),
  )
}

function ogFor(lang: Locale) {
  return lang === "de" ? `${siteConfig.ogImage}?lang=de` : siteConfig.ogImage
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string }
}): Promise<Metadata> {
  const comparison = getComparison(params.slug)
  if (!comparison || !isLocale(params.lang)) return {}
  const c = comparison.content[params.lang]
  const path = `/vergleich/${params.slug}`
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical: `/${params.lang}${path}`,
      languages: {
        en: `/en${path}`,
        de: `/de${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: params.lang === "de" ? "de_DE" : "en_US",
      url: `/${params.lang}${path}`,
      siteName: "Eric Strohmaier",
      title: c.metaTitle,
      description: c.metaDescription,
      images: [{ url: ogFor(params.lang), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
      images: [ogFor(params.lang)],
      creator: "@EricStrohmaier",
    },
  }
}

export default function ComparisonRoute({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  if (!isLocale(params.lang)) notFound()
  const comparison = getComparison(params.slug)
  if (!comparison) notFound()

  const lang = params.lang
  const c = comparison.content[lang]
  const proof = (comparison.proofSlugs ?? [])
    .map((s) => getProjectBySlug(s))
    .filter((p): p is GraveyardProject => Boolean(p))

  const url = `${siteConfig.url}/${lang}/vergleich/${comparison.slug}`
  const leistungenLabel = lang === "de" ? "Leistungen" : "Services"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "de" ? "Start" : "Home",
            item: `${siteConfig.url}/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: leistungenLabel,
            item: `${siteConfig.url}/${lang}/leistungen`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: c.eyebrow,
            item: url,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComparisonPage
        content={c}
        accent={comparison.accent}
        lang={lang}
        funnelTo={comparison.funnelTo}
        proof={proof}
      />
    </>
  )
}
