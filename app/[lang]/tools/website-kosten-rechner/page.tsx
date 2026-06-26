import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, type Locale } from "@/i18n-config"
import { WebsiteCostCalculator } from "@/components/tools/WebsiteCostCalculator"
import { ToolPageShell } from "@/components/tools/ToolPageShell"
import { siteConfig } from "@/site-config"

const copy = {
  de: {
    metaTitle: "Website-Kosten-Rechner — was kostet eine Website wirklich?",
    metaDescription:
      "Kostenloser Rechner: Schätzen Sie, was eine Website oder individuelle Software kostet. Plus ein Weg ohne Aufbaukosten — Website kostenlos bauen lassen, nur Betreuung ab 249 €/Monat. Ohne Anmeldung.",
    eyebrow: "Kostenloser Rechner",
    h1: "Was kostet eine Website oder individuelle Software wirklich?",
    intro:
      "Eine ehrliche Preisspanne in 30 Sekunden — statt „kommt drauf an“. Wählen Sie, was Sie brauchen, und sehen Sie einen realistischen Richtwert. Es gibt zwei Wege zu zahlen: einmalig als Projekt, oder ganz ohne Aufbaukosten — Sie zahlen nur die laufende Betreuung.",
    contentHeading: "Was eine langsame oder veraltete Website wirklich kostet",
    contentIntro:
      "Der Projektpreis ist nur die eine Seite. Eine schwache Website kostet jeden Monat Geld — nur sieht man es nicht auf einer Rechnung.",
    points: [
      {
        title: "Langsame Ladezeit = verlorene Besucher",
        copy: "Jede zusätzliche Sekunde Ladezeit kostet Besucher, die abspringen, bevor die Seite überhaupt da ist — gerade am Handy. Jeder Absprung ist eine verlorene Anfrage.",
      },
      {
        title: "Veraltetes Design = verlorenes Vertrauen",
        copy: "Eine Website, die nicht mehr zeitgemäß wirkt, lässt auch ein gutes Unternehmen unseriös aussehen. Interessenten entscheiden in Sekunden, ob sie bleiben.",
      },
      {
        title: "Nicht gefunden = gar keine Anfragen",
        copy: "Wer bei Google nicht auftaucht, bekommt keine Anfragen. Schlechte technische Basis und fehlende lokale Signale kosten Sichtbarkeit — und damit Kunden.",
      },
      {
        title: "Keine klare Handlung = Besucher ohne Ergebnis",
        copy: "Ohne klaren nächsten Schritt (anrufen, Termin buchen, anfragen) verlassen Besucher die Seite, ohne etwas zu tun. Besucher, die nichts tun, bringen nichts.",
      },
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Wie genau ist der Richtwert?",
        a: "Es ist eine Schätzung, kein Angebot. Jeder Projekttyp hat einen Erfahrungs-Bereich, jede Funktion erhöht ihn. Den genauen Preis definieren wir vorab gemeinsam — klarer Preis, klares Ergebnis.",
      },
      {
        q: "Wie funktioniert „0 € Aufbau, nur Betreuung“?",
        a: "Für Website-Projekte baue ich Ihre Seite ohne einmalige Aufbaukosten. Sie zahlen nur die laufende Betreuung ab 249 €/Monat — Hosting, Sicherheit, Monitoring und laufende kleine Änderungen. Monatlich kündbar, Sie bleiben, weil es sich rechnet.",
      },
      {
        q: "Warum nicht einfach ein Baukasten (Wix, WordPress-Vorlage)?",
        a: "Baukästen sind günstig im Aufbau, schwächeln aber oft bei Ladezeit, Sichtbarkeit bei Google und Anfragen. Ich baue individuell und schnell — auf das Ziel ausgerichtet, mehr Anfragen zu bringen, nicht nur „online zu sein“.",
      },
      {
        q: "Bleiben meine Eingaben privat?",
        a: "Ja. Die Berechnung läuft komplett in Ihrem Browser. Es werden keine Daten gespeichert oder übertragen.",
      },
    ],
    relatedHeading: "Passende Lösungen & Tools",
    related: [
      { href: "/de/leistungen/handwerker", label: "Website für Handwerker" },
      { href: "/de/leistungen", label: "Alle Leistungen" },
      { href: "/de/tools", label: "Alle kostenlosen Tools" },
    ],
    finalCtaHeading: "Reden wir über Ihr konkretes Projekt.",
    finalCtaCopy:
      "Im kostenlosen Gespräch gebe ich Ihnen eine ehrliche Einschätzung und den passenden Weg — Projektpreis oder Betreuung ohne Aufbaukosten.",
    ctaLabel: "Kostenloses Gespräch buchen",
  },
  en: {
    metaTitle: "Website Cost Calculator — what does a website really cost?",
    metaDescription:
      "Free calculator: estimate what a website or custom software costs. Plus a no-build-cost option — get a website built for free, pay only care from €249/month. No sign-up.",
    eyebrow: "Free calculator",
    h1: "What does a website or custom software really cost?",
    intro:
      "An honest price range in 30 seconds — instead of “it depends”. Pick what you need and see a realistic ballpark. There are two ways to pay: once as a project, or with no build cost at all — you pay only the ongoing care.",
    contentHeading: "What a slow or outdated website really costs",
    contentIntro:
      "The project price is only one side. A weak website costs money every month — you just don't see it on an invoice.",
    points: [
      {
        title: "Slow load time = lost visitors",
        copy: "Every extra second of load time costs visitors who leave before the page even appears — especially on mobile. Every bounce is a lost inquiry.",
      },
      {
        title: "Outdated design = lost trust",
        copy: "A site that looks dated makes even a great business look unprofessional. Prospects decide in seconds whether to stay.",
      },
      {
        title: "Not found = no inquiries at all",
        copy: "If you don't show up on Google, you don't get inquiries. A poor technical base and missing local signals cost visibility — and customers.",
      },
      {
        title: "No clear action = visitors with no result",
        copy: "Without a clear next step (call, book, inquire) visitors leave without doing anything. Traffic without conversion is worthless.",
      },
    ],
    faqHeading: "Common questions",
    faqs: [
      {
        q: "How accurate is the ballpark?",
        a: "It's an estimate, not a quote. Each project type has an experience-based range and each feature raises it. We scope the exact price upfront together — clear price, clear outcome.",
      },
      {
        q: "How does “€0 build, care only” work?",
        a: "For website projects I build your site with no one-off build cost. You pay only the ongoing care from €249/month — hosting, security, monitoring and ongoing small changes. Cancel monthly; you stay because it pays for itself.",
      },
      {
        q: "Why not just a website builder (Wix, a WordPress template)?",
        a: "Builders are cheap to set up but often cost you on load time, SEO and conversion. I build custom and fast — aimed at bringing more inquiries, not just being online.",
      },
      {
        q: "Do my inputs stay private?",
        a: "Yes. The calculation runs entirely in your browser. No data is stored or transmitted.",
      },
    ],
    relatedHeading: "Related solutions & tools",
    related: [
      { href: "/en/leistungen/handwerker", label: "Websites for tradespeople" },
      { href: "/en/leistungen", label: "All services" },
      { href: "/en/tools", label: "All free tools" },
    ],
    finalCtaHeading: "Let's talk about your actual project.",
    finalCtaCopy:
      "On a free call I'll give you an honest assessment and the right path — project price or care with no build cost.",
    ctaLabel: "Book a free call",
  },
} as const

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  if (!isLocale(params.lang)) return {}
  const t = copy[params.lang]
  const path = "/tools/website-kosten-rechner"
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

export default function WebsiteCostPage({
  params,
}: {
  params: { lang: Locale }
}) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const t = copy[lang]
  const url = `${siteConfig.url}/${lang}/tools/website-kosten-rechner`

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
        calculator={<WebsiteCostCalculator lang={lang} />}
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
