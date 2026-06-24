"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { i18n, isLocale, type Locale } from "@/i18n-config"

// Resolve the active locale on the client. The URL's first segment (marketing
// routes are locale-prefixed) is authoritative; on unprefixed tool routes we
// fall back to the NEXT_LOCALE cookie AFTER mount so the chrome reflects the
// user's choice. The cookie is read in an effect (not during render) so SSR and
// the first client render agree — no hydration mismatch.
export function useLocale(): Locale {
  const pathname = usePathname()
  const seg = pathname?.split("/")[1]
  const fromPath = isLocale(seg) ? seg : null

  const [locale, setLocale] = useState<Locale>(fromPath ?? i18n.defaultLocale)

  useEffect(() => {
    if (fromPath) {
      setLocale(fromPath)
      return
    }
    const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/)
    setLocale(match && isLocale(match[1]) ? match[1] : i18n.defaultLocale)
  }, [fromPath])

  return locale
}

// Prefix a marketing path with the active locale (e.g. "/about" -> "/de/about").
export function localizedHref(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`
  return `/${locale}${path}`
}
