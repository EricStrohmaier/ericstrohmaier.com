import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
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

      {/* Soft booking CTA — this free tool is a sample of the custom work */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-5 md:px-8">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-500/30 bg-blue-500/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Need custom software for your business?
            </h2>
            <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
              This free invoice tool is the kind of software I build for
              clients. Built by Eric — book a free call.
            </p>
          </div>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Book a free call
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </>
  )
}
