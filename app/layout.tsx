import type { Metadata } from "next"
import { headers } from "next/headers"
import "./globals.css"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/ThemeProvider"
import LayoutPage from "@/components/app/LayoutPage"
import TimeProvider from "@/lib/time"
import { siteConfig } from "@/site-config"
import { offers } from "@/lib/offers"

const homeTitle = "Eric Strohmaier - Custom Software for Small Businesses"

// Structured offer catalog — real published prices (lib/offers.ts), so AI/SERP
// see concrete intent instead of a vague "$$".
const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Custom software, websites & automation",
  itemListElement: offers.map((o) => ({
    "@type": "Offer",
    name: `${o.name} (${o.label.en})`,
    description: o.description.en,
    price: String(o.price),
    priceCurrency: o.priceCurrency,
    url: siteConfig.url,
  })),
}

// Products Eric owns/co-runs — entity edges so AI engines attribute the real
// proof to him by name.
const ownedProducts = [
  {
    "@type": "SoftwareApplication",
    "@id": "https://promptsloth.com/#app",
    name: "PromptSloth",
    url: "https://promptsloth.com",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    description:
      "Chrome extension that helps people write better prompts; grew organically to 7,000+ installs.",
    author: { "@id": `${siteConfig.url}/#person` },
  },
  {
    "@type": "SoftwareApplication",
    "@id": "https://getautoreview.com/#app",
    name: "AutoReview",
    url: "https://getautoreview.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Automated Google review collection for local service businesses.",
    author: { "@id": `${siteConfig.url}/#person` },
  },
  {
    "@type": "Organization",
    "@id": "https://alpen.digital/#org",
    name: "alpen.digital",
    url: "https://alpen.digital",
    description:
      "DSGVO-compliant AI-automation agency for SMEs in the DACH region.",
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url),
  title: {
    default: homeTitle,
    template: "%s | Eric Strohmaier",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: "Eric Strohmaier",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Eric Strohmaier",
    title: homeTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Eric Strohmaier - Your software partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@EricStrohmaier",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/eric-avatar.png`,
      jobTitle: "Software Engineer & Founder",
      description: siteConfig.description,
      knowsAbout: [
        "Custom software development",
        "Web development",
        "Business automation",
        "Internal tools and dashboards",
        "Next.js",
        "SaaS",
      ],
      knowsLanguage: ["en", "de"],
      owns: ownedProducts.map((p) => ({ "@id": p["@id"] })),
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.twitter,
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: "Eric Strohmaier - Software Partner",
      url: siteConfig.url,
      image: siteConfig.ogImage,
      description: siteConfig.description,
      founder: { "@id": `${siteConfig.url}/#person` },
      areaServed: [
        { "@type": "Country", name: "Austria" },
        { "@type": "Country", name: "Germany" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.locality, // "Wien"
        addressCountry: "AT",
      },
      availableLanguage: ["de", "en"],
      serviceType: [
        "Custom software development",
        "Internal tools & automations",
        "Websites & lead systems",
        "Software maintenance & retainer",
      ],
      priceRange: "€€",
      hasOfferCatalog: offerCatalog,
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.twitter,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Eric Strohmaier",
      description: siteConfig.description,
      inLanguage: ["en", "de"],
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
    ...ownedProducts,
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Locale is resolved in middleware and forwarded via x-locale so the served
  // HTML has the correct lang for crawlers (German pages ship lang="de").
  const locale = headers().get("x-locale") || "en"
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class">
          <TimeProvider>
            <LayoutPage>{children}</LayoutPage>
          </TimeProvider>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
