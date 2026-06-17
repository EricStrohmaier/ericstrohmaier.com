import Image from "next/image"
import { ArrowRight, CalendarDays } from "lucide-react"
import FeedbackForm from "./FeedbackForm"
import { siteConfig } from "@/site-config"

export const metadata = {
  title: "Contact",
  description:
    "Book a free call with Eric Strohmaier to talk through custom software, internal tools, automations, or a website that makes your business more money.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Eric Strohmaier",
    description:
      "Book a free call to find the software that pays for itself for your business.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-12">
      {/* Profile */}
      <aside className="flex flex-col">
        <Image
          src="/eric-portrait.png"
          width={280}
          height={380}
          alt={siteConfig.name}
          className="aspect-[3/4] w-44 rounded-2xl object-cover sm:w-full"
          priority
        />
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
          Your software partner
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Hi, I&apos;m Eric.
        </h1>
        <p className="text-foreground/55 mt-3 text-sm leading-relaxed">
          I personally read and reply to every message — usually within a day.
          Tell me what you&apos;re working on.
        </p>
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="mt-4 text-sm text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-400"
        >
          {siteConfig.supportEmail}
        </a>
      </aside>

      {/* Booking + form */}
      <div className="flex flex-col">
        {/* Booking card */}
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-4 rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] p-5 transition-all duration-300 hover:border-foreground/15 hover:bg-foreground/[0.04] sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
              <CalendarDays className="size-5" />
            </span>
            <div>
              <h2 className="text-foreground/90 font-semibold">Talk to me</h2>
              <p className="text-foreground/50 mt-0.5 text-sm leading-relaxed">
                Project, quote, or just a question — grab a time that works for
                you.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 group-hover:gap-3 group-hover:bg-blue-500 sm:self-auto">
            Book a call
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </a>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="text-foreground/40 text-sm">or send a message</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <FeedbackForm />
      </div>
    </div>
  )
}
