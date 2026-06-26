"use client"

import { usePathname, useRouter } from "next/navigation"

import { i18n, isLocale, type Locale } from "@/i18n-config"
import { useLocale } from "@/lib/use-locale"
import { cn } from "@/lib/utils"

// Compact, minimal segmented EN/DE toggle. Persists the choice in a cookie and
// navigates; on unprefixed (tool) routes it goes to the localized home.
export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const active = useLocale()

  const switchTo = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
    const segments = (pathname || "/").split("/")
    if (isLocale(segments[1])) {
      segments[1] = locale
      router.push(segments.join("/") || `/${locale}`)
    } else {
      router.push(`/${locale}`)
    }
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full bg-foreground/[0.04] p-0.5">
      {i18n.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          aria-label={`Switch to ${locale.toUpperCase()}`}
          aria-current={active === locale}
          className={cn(
            "rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide transition-colors",
            active === locale
              ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
              : "text-foreground/45 hover:text-foreground",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  )
}
