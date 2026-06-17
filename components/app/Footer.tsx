import { Mail } from "lucide-react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { siteConfig } from "@/site-config"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-foreground/[0.06] mt-16 border-t">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-6 md:px-8">
        <p className="text-foreground/35 text-xs">
          © {year} Eric Strohmaier. All rights reserved.
        </p>

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
