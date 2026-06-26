import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale, type Locale } from "@/i18n-config"
import { LeadResponseCalculator } from "@/components/tools/LeadResponseCalculator"
import { ToolPageShell } from "@/components/tools/ToolPageShell"
import { siteConfig } from "@/site-config"

const copy = {
  de: {
    metaTitle: "Lead-Response-Rechner — was kostet eine langsame Antwort?",
    metaDescription:
      "Kostenloser Rechner: Schätzen Sie, wie viel Umsatz Sie pro Monat an schnellere Mitbewerber verlieren, weil Anfragen zu spät beantwortet werden. Ohne Anmeldung, Daten bleiben im Browser.",
    eyebrow: "Kostenloser Rechner",
    h1: "Was kostet Sie eine langsame Antwort auf Anfragen?",
    intro:
      "Die meisten Anfragen gehen an den, der zuerst antwortet — nicht an den besten Anbieter. Dieser Rechner schätzt, wie viel Umsatz Sie pro Monat verlieren, weil Anfragen Stunden oder Tage liegen bleiben. Passen Sie die Werte an Ihr Geschäft an.",
    contentHeading: "Warum Geschwindigkeit über den Abschluss entscheidet",
    contentIntro:
      "Zwei einfache Wahrheiten erklären die meisten verlorenen Aufträge — und beide lassen sich automatisieren.",
    points: [
      {
        title: "Speed-to-Lead: Wer zuerst antwortet, gewinnt",
        copy: "Interessenten holen oft mehrere Angebote ein und entscheiden sich für den, der zuerst und überzeugend reagiert. Stunden später ist der Auftrag meist schon weg.",
      },
      {
        title: "Dranbleiben: Die meisten Abschlüsse kommen beim Nachfassen",
        copy: "Selten klappt es beim ersten Kontakt. Wer nicht systematisch nachfasst, verliert Anfragen, die mit zwei, drei Erinnerungen zu Kunden geworden wären.",
      },
      {
        title: "Nachts, am Wochenende, im Termin",
        copy: "Anfragen kommen rund um die Uhr — aber Sie können nicht rund um die Uhr antworten. Ein automatisches System schon: in Sekunden, jeden Tag.",
      },
      {
        title: "Aus der Schätzung wird ein System",
        copy: "Ein Lead-System erfasst jede Anfrage, antwortet sofort und fasst automatisch nach — damit der oben geschätzte Verlust größtenteils zurückkommt.",
      },
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Wie genau ist die Schätzung?",
        a: "Es ist ein Modell, kein Versprechen. Es multipliziert Ihre Anfragen, den Auftragswert, die Abschlussquote und einen Verlustanteil je nach Antwortzeit. Die Annahmen sind transparent und anpassbar — nutzen Sie Ihre eigenen Zahlen für ein realistisches Bild.",
      },
      {
        q: "Bleiben meine Eingaben privat?",
        a: "Ja. Die Berechnung passiert komplett in Ihrem Browser. Es werden keine Daten gespeichert oder übertragen.",
      },
      {
        q: "Wie hole ich den Verlust zurück?",
        a: "Mit einem System, das Anfragen automatisch erfasst, in Sekunden antwortet und über Wochen nachfasst — bis ein Termin steht. Genau das baue ich für Makler, Handwerker und Dienstleister. Buchen Sie ein kostenloses Gespräch.",
      },
    ],
    relatedHeading: "Passende Lösungen & Tools",
    related: [
      { href: "/de/leistungen/immobilienmakler", label: "Für Immobilienmakler" },
      { href: "/de/leistungen/handwerker", label: "Für Handwerker" },
      { href: "/de/tools", label: "Alle kostenlosen Tools" },
    ],
    finalCtaHeading: "Verwandeln Sie verlorene Anfragen in Termine.",
    finalCtaCopy:
      "Im kostenlosen Erstgespräch schauen wir uns Ihren Anfrage-Prozess an und finden den größten Hebel — ohne Verkaufsdruck.",
    ctaLabel: "Kostenloses Erstgespräch buchen",
  },
  en: {
    metaTitle: "Lead Response Calculator — what slow replies cost you",
    metaDescription:
      "Free calculator: estimate how much revenue you lose each month to faster competitors because inquiries are answered too late. No sign-up, data stays in your browser.",
    eyebrow: "Free calculator",
    h1: "What does a slow reply to inquiries cost you?",
    intro:
      "Most inquiries go to whoever replies first — not to the best provider. This calculator estimates how much revenue you lose each month because inquiries sit for hours or days. Adjust the values to your business.",
    contentHeading: "Why speed decides the deal",
    contentIntro:
      "Two simple truths explain most lost deals — and both can be automated.",
    points: [
      {
        title: "Speed-to-lead: whoever replies first wins",
        copy: "Prospects often gather several quotes and pick whoever responds first and convincingly. Hours later, the deal is usually already gone.",
      },
      {
        title: "Persistence: most closings come from follow-up",
        copy: "It rarely works on first contact. Without systematic follow-up you lose inquiries that two or three reminders would have turned into customers.",
      },
      {
        title: "At night, on weekends, in a meeting",
        copy: "Inquiries come in around the clock — but you can't reply around the clock. An automated system can: in seconds, every day.",
      },
      {
        title: "From estimate to system",
        copy: "A lead system captures every inquiry, replies instantly and follows up automatically — so most of the loss estimated above comes back.",
      },
    ],
    faqHeading: "Common questions",
    faqs: [
      {
        q: "How accurate is the estimate?",
        a: "It's a model, not a promise. It multiplies your inquiries, deal value, close rate and a loss share based on response time. The assumptions are transparent and adjustable — use your own numbers for a realistic picture.",
      },
      {
        q: "Do my inputs stay private?",
        a: "Yes. The calculation runs entirely in your browser. No data is stored or transmitted.",
      },
      {
        q: "How do I recover the loss?",
        a: "With a system that captures inquiries automatically, replies in seconds and follows up for weeks — until a meeting is booked. That's exactly what I build for agents, tradespeople and service businesses. Book a free call.",
      },
    ],
    relatedHeading: "Related solutions & tools",
    related: [
      { href: "/en/leistungen/immobilienmakler", label: "For real estate agents" },
      { href: "/en/leistungen/handwerker", label: "For tradespeople" },
      { href: "/en/tools", label: "All free tools" },
    ],
    finalCtaHeading: "Turn lost inquiries into booked meetings.",
    finalCtaCopy:
      "On a free intro call we look at your inquiry process and find the biggest lever — no sales pressure.",
    ctaLabel: "Book a free intro call",
  },
} as const

export function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Metadata {
  if (!isLocale(params.lang)) return {}
  const t = copy[params.lang]
  const path = "/tools/lead-response-rechner"
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

export default function LeadResponsePage({
  params,
}: {
  params: { lang: Locale }
}) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const t = copy[lang]
  const url = `${siteConfig.url}/${lang}/tools/lead-response-rechner`

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
        calculator={<LeadResponseCalculator lang={lang} />}
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
