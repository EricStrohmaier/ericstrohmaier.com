"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { siteConfig } from "@/site-config"
import { useLocale } from "@/lib/use-locale"
import { chrome } from "@/lib/i18n-chrome"

export default function Footer() {
  const year = new Date().getFullYear()
  const locale = useLocale()
  const t = chrome[locale]

  const primary = [
    { href: `/${locale}/leistungen`, label: t.nav.services },
    { href: `/${locale}/tools`, label: t.nav.tools },
  ]

  const tools = [
    // Invoice tool lives at the root (not localized); time-tracking landing is.
    { href: "/invoice", label: t.tools.invoice },
    { href: `/${locale}/timetracking`, label: t.tools.timeTracking },
  ]

  // Legally required in AT/DE; also a trust/E-E-A-T signal.
  const legal = [
    { href: `/${locale}/impressum`, label: t.legal.impressum },
    { href: `/${locale}/datenschutz`, label: t.legal.privacy },
  ]

  return (
    <footer className="border-foreground/[0.06] mt-16 border-t">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-6 md:px-8">
        <p className="text-foreground/35 text-xs">
          © {year} Eric Strohmaier. {t.rights}
        </p>

        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/55 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="text-foreground/55 transition-colors hover:text-foreground"
            >
              {tool.label}
            </Link>
          ))}
          <span className="text-foreground/15" aria-hidden>
            |
          </span>
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/45 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="text-foreground/55 hover:bg-foreground/[0.06] flex size-9 items-center justify-center rounded-full transition-colors hover:text-foreground"
          >
            <BsGithub className="size-[18px]" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="text-foreground/55 hover:bg-foreground/[0.06] flex size-9 items-center justify-center rounded-full transition-colors hover:text-foreground"
          >
            <BsLinkedin className="size-[18px]" />
          </a>
          <a
            href={siteConfig.links.email}
            aria-label="Email"
            className="text-foreground/55 hover:bg-foreground/[0.06] flex size-9 items-center justify-center rounded-full transition-colors hover:text-foreground"
          >
            <Mail className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
