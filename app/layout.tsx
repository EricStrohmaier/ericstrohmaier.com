import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import LayoutPage from "@/components/app/LayoutPage"
import TimeProvider from "@/lib/time"
import { siteConfig } from "@/site-config"

const homeTitle = "Eric Strohmaier — Custom Software for Small Businesses"

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
        alt: "Eric Strohmaier — Your software partner",
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
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.twitter,
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: "Eric Strohmaier — Software Partner",
      url: siteConfig.url,
      image: siteConfig.ogImage,
      description: siteConfig.description,
      founder: { "@id": `${siteConfig.url}/#person` },
      areaServed: "Worldwide",
      serviceType: [
        "Custom software development",
        "Internal tools & automations",
        "Websites & lead systems",
        "Software maintenance & retainer",
      ],
      priceRange: "$$",
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
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class">
          <TimeProvider>
            <LayoutPage>{children}</LayoutPage>
          </TimeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
