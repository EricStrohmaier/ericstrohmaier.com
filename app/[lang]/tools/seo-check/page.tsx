import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, type Locale } from "@/i18n-config"
import { SeoCheckTool } from "@/components/tools/SeoCheckTool"
import { ToolPageShell } from "@/components/tools/ToolPageShell"
import { siteConfig } from "@/site-config"

const copy = {
  de: {
    metaTitle: "SEO-Check: Wie gut werden Sie bei Google & KI gefunden?",
    metaDescription:
      "Kostenloser SEO-Check zum Selbermachen: In 2 Minuten ehrlich einschätzen, wie sichtbar Ihre Website bei Google und in KI-Antworten (ChatGPT, Perplexity) ist — mit Score und konkreten Hebeln. Ohne Anmeldung.",
    eyebrow: "Kostenloser SEO-Check",
    h1: "Wie gut werden Sie bei Google und in KI-Antworten gefunden?",
    intro:
      "Beantworten Sie neun ehrliche Fragen und sehen Sie sofort, wo Ihre Website bei SEO, lokaler Sichtbarkeit, KI-Suche und Conversion steht — mit einem Score und den größten Hebeln. Eine Selbsteinschätzung, kein technischer Scan.",
    contentHeading: "Was dieser Check abdeckt",
    contentIntro:
      "Sichtbarkeit entsteht heute auf mehreren Ebenen — dieser Check geht alle vier durch.",
    points: [
      {
        title: "Klassisches SEO",
        copy: "Tauchen Sie für Ihre wichtigsten Begriffe auf? Laden Ihre Seiten schnell, sind sie technisch sauber und gut betitelt?",
      },
      {
        title: "Lokale Sichtbarkeit",
        copy: "Google-Unternehmensprofil, Bewertungen und lokale Signale — entscheidend für „… in Ihrer Stadt“ und „in der Nähe“.",
      },
      {
        title: "KI-Suche (AEO/GEO)",
        copy: "Werden Sie in KI-Antworten von ChatGPT, Perplexity & Google AI genannt? Das neue Feld, in dem die meisten noch fehlen.",
      },
      {
        title: "Aus Besuchern werden Anfragen",
        copy: "Sichtbarkeit allein bringt nichts. Führt Ihre Seite Besucher klar zur Handlung — und messen Sie, was ankommt?",
      },
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Ist das ein echter technischer SEO-Scan?",
        a: "Nein — bewusst nicht. Es ist eine ehrliche, schnelle Selbsteinschätzung über die wichtigsten Hebel. Für eine echte technische Analyse Ihrer Seite buchen Sie ein kostenloses Gespräch.",
      },
      {
        q: "Bleiben meine Antworten privat?",
        a: "Ja. Alles läuft in Ihrem Browser. Es werden keine Daten gespeichert oder übertragen.",
      },
      {
        q: "Was mache ich mit dem Ergebnis?",
        a: "Die markierten Lücken sind Ihre größten Hebel. Im kostenlosen SEO-Gespräch schauen wir uns Ihre Seite konkret an und priorisieren, was am meisten Anfragen bringt.",
      },
    ],
    relatedHeading: "Passende Leistung & Tools",
    related: [
      { href: "/de/leistungen/seo", label: "SEO & KI-Optimierung" },
      { href: "/de/tools/website-kosten-rechner", label: "Website-Kosten-Rechner" },
      { href: "/de/tools", label: "Alle kostenlosen Tools" },
    ],
    finalCtaHeading: "Sehen wir uns Ihre größten SEO-Hebel an.",
    finalCtaCopy:
      "Im kostenlosen Gespräch gehe ich Ihre Seite konkret durch — bei Google und in der KI-Suche — und zeige Ihnen, was am meisten bringt.",
    ctaLabel: "Kostenloses SEO-Gespräch buchen",
  },
  en: {
    metaTitle: "SEO Check: how well do Google & AI find you?",
    metaDescription:
      "Free DIY SEO check: in 2 minutes, honestly assess how visible your website is on Google and in AI answers (ChatGPT, Perplexity) — with a score and concrete levers. No sign-up.",
    eyebrow: "Free SEO check",
    h1: "How well do Google and AI answers find you?",
    intro:
      "Answer nine honest questions and instantly see where your website stands on SEO, local visibility, AI search and conversion — with a score and the biggest levers. A self-assessment, not a technical scan.",
    contentHeading: "What this check covers",
    contentIntro:
      "Visibility today happens on several layers — this check walks through all four.",
    points: [
      {
        title: "Classic SEO",
        copy: "Do you show up for your most important terms? Do your pages load fast, are they technically clean and well-titled?",
      },
      {
        title: "Local visibility",
        copy: "Google Business Profile, reviews and local signals — decisive for “… in your town” and “near me”.",
      },
      {
        title: "AI search (AEO/GEO)",
        copy: "Are you named in AI answers from ChatGPT, Perplexity & Google AI? The new field where most are still missing.",
      },
      {
        title: "Turning visitors into inquiries",
        copy: "Visibility alone does nothing. Does your site clearly guide visitors to action — and do you measure what lands?",
      },
    ],
    faqHeading: "Common questions",
    faqs: [
      {
        q: "Is this a real technical SEO scan?",
        a: "No — deliberately not. It's an honest, quick self-assessment of the most important levers. For a real technical analysis of your site, book a free call.",
      },
      {
        q: "Do my answers stay private?",
        a: "Yes. Everything runs in your browser. No data is stored or transmitted.",
      },
      {
        q: "What do I do with the result?",
        a: "The flagged gaps are your biggest levers. On a free SEO call we look at your site specifically and prioritize what brings the most inquiries.",
      },
    ],
    relatedHeading: "Related service & tools",
    related: [
      { href: "/en/leistungen/seo", label: "SEO & AI optimization" },
      { href: "/en/tools/website-kosten-rechner", label: "Website cost calculator" },
      { href: "/en/tools", label: "All free tools" },
    ],
    finalCtaHeading: "Let's look at your biggest SEO levers.",
    finalCtaCopy:
      "On a free call I'll walk through your site specifically — on Google and in AI search — and show you what brings the most.",
    ctaLabel: "Book a free SEO call",
  },
} as const

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  if (!isLocale(params.lang)) return {}
  const t = copy[params.lang]
  const path = "/tools/seo-check"
  const og =
    params.lang === "de" ? `${siteConfig.ogImage}?lang=de` : siteConfig.ogImage
  return {
    title: t.metaTitle,
    description: t.metaDescription,
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
      title: t.metaTitle,
      description: t.metaDescription,
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
      images: [og],
      creator: "@EricStrohmaier",
    },
  }
}

export default function SeoCheckPage({
  params,
}: {
  params: { lang: Locale }
}) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const t = copy[lang]
  const url = `${siteConfig.url}/${lang}/tools/seo-check`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: t.metaTitle,
        url,
        description: t.metaDescription,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript. Works in any modern web browser.",
        inLanguage: lang,
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        author: { "@id": `${siteConfig.url}/#person` },
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolPageShell
        lang={lang}
        eyebrow={t.eyebrow}
        h1={t.h1}
        intro={t.intro}
        calculator={<SeoCheckTool lang={lang} />}
        content={{
          heading: t.contentHeading,
          intro: t.contentIntro,
          points: [...t.points],
        }}
        faqs={[...t.faqs]}
        faqHeading={t.faqHeading}
        related={[...t.related]}
        relatedHeading={t.relatedHeading}
        finalCtaHeading={t.finalCtaHeading}
        finalCtaCopy={t.finalCtaCopy}
        ctaLabel={t.ctaLabel}
      />
    </>
  )
}
