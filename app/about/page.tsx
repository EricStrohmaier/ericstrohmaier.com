import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/site-config"

export const metadata = {
  title: "About",
  description:
    "Eric Strohmaier is a self-taught software engineer who builds custom tools, automations, and websites that make small and mid-sized businesses more money.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Eric Strohmaier",
    description:
      "Self-taught engineer building software that pays for itself for small and mid-sized businesses.",
    url: "/about",
  },
}

const highlights = [
  { value: "4+ yrs", label: "Longest client partnership" },
  { value: "20,000+", label: "Users served" },
  { value: "17+", label: "Projects shipped" },
  { value: "Self-taught", label: "And still shipping" },
]

const principles = [
  {
    title: "Beyond the comfort zone",
    copy: "I do my best work on the problems that push me. If it's a little hard, it's interesting.",
  },
  {
    title: "Deep focus",
    copy: "When I'm building, three hours feel like twenty minutes. That's when the good work happens.",
  },
  {
    title: "Minimal by default",
    copy: "Clear mind, clean setup, no bloat. I ship what moves your numbers and nothing you don't need.",
  },
]

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <Image
          src="/eric-avatar.png"
          width={88}
          height={88}
          alt="Eric Strohmaier"
          className="size-20 shrink-0 rounded-2xl object-cover"
          priority
        />
        <div>
          <p className="text-foreground/40 mb-1.5 text-xs font-medium uppercase tracking-[0.2em]">
            Your software partner
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {siteConfig.name}
          </h1>
          <p className="text-foreground/50 mt-1 text-sm">
            Software that pays for itself.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="mt-8 max-w-2xl space-y-4">
        <p className="text-foreground/70 leading-relaxed">
          I&apos;m Eric — a self-taught engineer and the person behind every
          project here. I learned to build the unglamorous way: late nights,
          broken side projects, and shipping things until they worked. No
          classroom, just a stubborn habit of figuring it out.
        </p>
        <p className="text-foreground/70 leading-relaxed">
          Today I help small and mid-sized businesses turn rough, expensive
          problems into software that quietly pays for itself — internal tools,
          automations, and websites that make or save real money. I work as a
          long-term partner, not a vendor who vanishes after launch. Two of my
          client relationships have run past four years, and the products
          I&apos;ve built are used by 20,000+ people. Clarity over noise,
          outcomes over buzzwords.
        </p>
      </section>

      {/* Highlights */}
      <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="border-foreground/[0.06] bg-foreground/[0.02] rounded-2xl border p-4"
          >
            <p className="text-lg font-semibold tracking-tight">{h.value}</p>
            <p className="text-foreground/45 mt-1 text-xs leading-snug">
              {h.label}
            </p>
          </div>
        ))}
      </section>

      {/* How I work */}
      <section className="mt-10">
        <p className="text-foreground/30 mb-3 text-xs font-medium uppercase tracking-[0.2em]">
          How I work
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="border-foreground/[0.06] bg-foreground/[0.02] rounded-2xl border p-5"
            >
              <h2 className="text-foreground/90 mb-1.5 font-semibold">
                {p.title}
              </h2>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-foreground/[0.06] mt-10 flex flex-col items-start gap-4 rounded-2xl border bg-[var(--secondary)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Have something worth building?
          </h2>
          <p className="text-foreground/50 mt-1 text-sm">
            Let&apos;s find the software that pays for itself.
          </p>
        </div>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500"
        >
          Book a free call
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </section>

      {/* Links */}
      <section className="mt-8 flex flex-wrap gap-5 text-sm">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          GitHub
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.links.email}
          className="text-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Email
        </a>
      </section>
    </div>
  )
}
