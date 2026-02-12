import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import LayoutPage from "@/components/app/LayoutPage"
import TimeProvider from "@/lib/time"
import { siteConfig } from "@/site-config"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: {
    default: "Eric Strohmaier",
    template: "%s | Eric Strohmaier",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: "Eric Strohmaier",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    siteName: "Eric Strohmaier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Strohmaier",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@EricStrohmaier",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class">
          <TimeProvider>
            <LayoutPage>{children}</LayoutPage>
          </TimeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
