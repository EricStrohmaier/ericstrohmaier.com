"use client"

import { useEffect } from "react"
import type { Locale } from "@/i18n-config"

// Sets <html lang> on the client for localized routes without forcing the root
// layout to be dynamic (which reading headers() there would do). The root
// layout renders lang="en" statically; this corrects it to the active locale.
export function HtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}
