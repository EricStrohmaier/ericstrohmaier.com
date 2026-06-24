import Link from "next/link"
import { Mail } from "lucide-react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { siteConfig } from "@/site-config"

const tools = [
  { href: "/invoice", label: "Invoice" },
  { href: "/timetracking", label: "Time Tracking" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-foreground/[0.06] mt-16 border-t">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-6 md:px-8">
        <p className="text-foreground/35 text-xs">
          © {year} Eric Strohmaier. All rights reserved.
        </p>

        <nav className="flex items-center gap-4 text-sm">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="text-foreground/55 transition-colors hover:text-foreground"
            >
              {t.label}
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
