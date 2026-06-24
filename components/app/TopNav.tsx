"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "../ThemeToggle"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { siteConfig } from "@/site-config"
import { useLocale } from "@/lib/use-locale"
import { chrome } from "@/lib/i18n-chrome"

export default function TopNav() {
  const pathname = usePathname()
  const locale = useLocale()
  const t = chrome[locale]

  const links = [
    { href: `/${locale}`, label: t.nav.home, exact: true },
    { href: `/${locale}/projects`, label: t.nav.work },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ]
  const isActive = (l: (typeof links)[number]) =>
    l.exact ? pathname === l.href : pathname.startsWith(l.href)

  return (
    <header className="border-foreground/[0.06] sticky top-0 z-30 border-b bg-[var(--background)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:px-8">
        <Link
          href={`/${locale}`}
          className="font-semibold tracking-tight"
        >
          Eric Strohmaier
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                isActive(l)
                  ? "bg-foreground/[0.05] text-foreground"
                  : "text-foreground/55 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:inline-flex"
          >
            {t.bookCall}
          </a>
        </div>
      </div>
    </header>
  )
}
