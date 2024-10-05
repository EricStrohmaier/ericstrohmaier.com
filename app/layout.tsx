import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import LayoutPage from "@/components/app/LayoutPage"
import TimeProvider from "@/lib/time"

export const metadata: Metadata = {
  title: "let's be aware",
  description: "starting something new",
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
            <LayoutPage
              params={{
                slug: "",
              }}
            >
              <div className="prose-xl m-4 mx-auto mt-8 w-full max-w-4xl px-4 dark:prose-invert md:px-0">
                <main>{children}</main>
              </div>
            </LayoutPage>
          </TimeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
