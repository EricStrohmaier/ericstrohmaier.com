"use client"
import React from "react"
import { usePathname } from "next/navigation"
import TopNav from "./TopNav"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

// Routes that render their own chrome (standalone landing pages) and should
// NOT get the global site nav/footer or the centered max-w-5xl container.
const STANDALONE_ROUTES = ["/immobilienmakler"]

export function LayoutPage({ children }: LayoutProps) {
  const pathname = usePathname()
  const isStandalone = STANDALONE_ROUTES.some((route) =>
    pathname?.startsWith(route),
  )

  if (isStandalone) {
    return (
      <div className="min-h-screen w-full bg-[var(--background)] text-[var(--text)]">
        {children}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-[var(--background)] text-[var(--text)]">
      <TopNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-8 md:px-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPage
