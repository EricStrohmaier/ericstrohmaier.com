import type { Metadata } from "next"
import { InvoiceClient } from "@/components/invoice/InvoiceClient"
import { siteConfig } from "@/site-config"

const title = "Free Invoice Generator — PDF Invoices in Seconds"
const description =
  "Create professional invoices for free and download them as PDF in seconds. No sign-up, no watermarks — your data never leaves your browser. The simple online invoice maker for freelancers and small businesses (Rechnung erstellen mit kostenloser Rechnungsvorlage)."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "invoice generator",
    "free invoice generator",
    "free invoice maker",
    "online invoice maker",
    "pdf invoice",
    "create invoice",
    "invoice template",
    "invoice for freelancers",
    "invoice for small business",
    "Rechnung erstellen",
    "Rechnungsvorlage",
    "Rechnungsgenerator",
    "kostenlose Rechnung",
  ],
  alternates: {
    canonical: "/invoice",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/invoice`,
    siteName: "Eric Strohmaier",
    title,
    description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Free Invoice Generator — PDF Invoices in Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage],
    creator: "@EricStrohmaier",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Invoice Generator",
  url: `${siteConfig.url}/invoice`,
  description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript. Works in any modern web browser.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Create professional invoices online",
    "Download invoices as PDF",
    "No sign-up required",
    "Privacy-first: data stays in your browser",
  ],
  isAccessibleForFree: true,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
}

export default function InvoicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InvoiceClient />
    </>
  )
}
