import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Filter,
  FileText,
  ShieldCheck,
  PhoneCall,
  Hammer,
  TrendingUp,
} from "lucide-react"

export const metadata = {
  title: "Time Tracking",
  description:
    "Simple time tracking with project filters and one-click PDF reports.",
  alternates: { canonical: "/timetracking" },
}

const features = [
  {
    icon: Clock,
    title: "Track time per project",
    copy: "Log entries against any project and keep a clean, accurate record of where your hours go.",
  },
  {
    icon: Filter,
    title: "Filter by project & date",
    copy: "Slice your entries by project and date range to see exactly what you worked on, and when.",
  },
  {
    icon: FileText,
    title: "Export PDF reports",
    copy: "Turn any filtered view into a polished, branded PDF report in a single click - ready to send.",
  },
  {
    icon: ShieldCheck,
    title: "Your data, your account",
    copy: "Everything lives in your own private account. Your time, your projects, your reports - no one else's.",
  },
]

const steps = [
  {
    icon: PhoneCall,
    title: "Create your account",
    copy: "Sign up in seconds and add the projects you want to track time against.",
  },
  {
    icon: Hammer,
    title: "Log your hours",
    copy: "Add time entries per project as you work, then filter them by project and date.",
  },
  {
    icon: TrendingUp,
    title: "Export a report",
    copy: "Generate a clean, branded PDF of any filtered view and share it with one click.",
  },
]

export default function TimeTrackingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-10 md:py-14">
        <p className="text-foreground/40 mb-3 text-sm font-medium uppercase tracking-[0.2em]">
          Time tracking
        </p>
        <h1 className="mb-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          Simple time tracking with one-click PDF reports.
        </h1>
        <p className="text-foreground/55 mb-7 max-w-xl text-lg leading-relaxed">
          Track time per project, filter your entries by project and date, and
          turn any view into a polished, branded PDF report - all from one clean
          dashboard. No bloat, just the numbers you need.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/dashboard"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
          >
            Open dashboard
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="text-foreground/50 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-sm font-medium transition-colors hover:text-foreground"
            >
              Create account
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <SectionLabel>What you get</SectionLabel>
        <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          Everything you need, nothing you don&apos;t.
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="hover:border-foreground/10 hover:bg-foreground/[0.04] flex flex-col rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-foreground/90 mb-1.5 font-semibold">
                  {f.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {f.copy}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mb-6 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          From zero to a sent report in three steps.
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="relative rounded-2xl border border-[var(--card-border)] bg-card p-5 shadow-sm"
              >
                <span className="text-foreground/15 absolute right-4 top-4 text-2xl font-bold tabular-nums">
                  {i + 1}
                </span>
                <Icon className="mb-3 size-6 text-blue-500" strokeWidth={1.5} />
                <h3 className="text-foreground/90 mb-1.5 font-semibold">
                  {step.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {step.copy}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="mt-10 md:mt-14">
        <div className="bg-foreground/[0.03] relative overflow-hidden rounded-2xl border border-[var(--card-border)] px-6 py-10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgb(59,130,246),_transparent_50%),radial-gradient(circle_at_80%_50%,_rgb(16,185,129),_transparent_50%)] opacity-5" />
          <div className="relative">
            <h2 className="mx-auto mb-2 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl">
              Start tracking in under a minute.
            </h2>
            <p className="text-foreground/50 mx-auto mb-6 max-w-md leading-relaxed">
              Open the dashboard, add a project, and log your first entry. Your
              first branded PDF report is one click away.
            </p>
            <Link
              href="/dashboard"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
            >
              Open dashboard
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-[var(--card-border)] py-10 md:py-14">
      {children}
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-foreground/30 mb-3 text-xs font-medium uppercase tracking-[0.2em]">
      {children}
    </p>
  )
}
