export default function Home() {
  const projects = [
    {
      name: "PromptSloth",
      href: "https://promptsloth.com",
      description: "AI prompt Chrome extension",
      metric: ["2,000+ users", "26 paying subscribers"],
      accent: "emerald",
    },
    {
      name: "alpen.digital",
      href: "https://alpen.digital/",
      description:
        "AI automation agency, personal AI assistants for businesses",
      accent: "blue",
    },
    {
      name: "mydigitalcalender",
      href: "https://mydigitalcalender.com",
      metric: ["Jesse Itzler approved"],
      description: "Free digital year planner",
      accent: "emerald",
    },
    {
      name: "slackactivity.com",
      href: "https://slackactivity.com",
      metric: ["my wife uses this for her job for 3+ years", "99.5% uptime"],
      description: "Slack status keeper",
      accent: "blue",
    },
  ]

  return (
    <div className="max-w-2xl">
      {/* Hero */}
      <section className="mb-6">
        <h1 className="to-foreground/50 mb-2 bg-gradient-to-r from-foreground via-foreground bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
          I build personal software.
        </h1>
        <p className="text-foreground/40 text-lg tracking-wide">
          Fast shipping. Long partnerships.
        </p>
      </section>

      {/* Bio */}
      <section className="mb-6">
        <p className="text-foreground/60 text-[15px] leading-relaxed">
          I&apos;m Eric - a full-stack developer who ships fast and sticks
          around. I build SaaS products, AI tools, Chrome extensions, and
          automations. Always working with the latest tech. Two of my clients
          have been with me for over two years.
        </p>
      </section>

      {/* Track Record */}
      <section className="text-foreground/30 mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-wider">
        <span>
          <span className="text-sm font-semibold normal-case text-emerald-500">
            2+
          </span>{" "}
          year client partnerships
        </span>
        <span className="text-foreground/10">|</span>
        <span>
          <span className="text-sm font-semibold normal-case text-blue-500">
            15+
          </span>{" "}
          projects shipped
        </span>
      </section>

      {/* Featured Work */}
      <section className="mb-6">
        <h2 className="text-foreground/30 mb-3 text-xs font-medium uppercase tracking-[0.2em]">
          Personal projects
        </h2>
        <div className="space-y-1.5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-foreground/[0.06] bg-foreground/[0.02] hover:border-foreground/10 hover:bg-foreground/[0.05] group flex items-start justify-between gap-4 rounded-xl border px-4 py-2.5 transition-all duration-300 hover:translate-x-1"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${
                      project.accent === "emerald"
                        ? "bg-emerald-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <span className="text-foreground/90 text-sm font-medium transition-colors group-hover:text-foreground">
                    {project.name}
                  </span>
                  {(Array.isArray(project.metric)
                    ? project.metric
                    : project.metric
                      ? [project.metric]
                      : []
                  ).map((m) => (
                    <span
                      key={m}
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                        project.accent === "emerald"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : "bg-blue-500/10 text-blue-500"
                      }`}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="text-foreground/35 mt-0.5 pl-3.5 text-xs">
                  {project.description}
                </p>
              </div>
              <svg
                className="text-foreground/20 group-hover:text-foreground/50 mt-1 size-3.5 shrink-0 transition-all duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-foreground/[0.06] bg-foreground/[0.03] relative overflow-hidden rounded-xl border px-4 py-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgb(59,130,246),_transparent_50%),radial-gradient(circle_at_80%_50%,_rgb(16,185,129),_transparent_50%)] opacity-[0.04]" />
        <div className="relative">
          <h2 className="mb-0.5 text-lg font-semibold tracking-tight">
            Let&apos;s build something together.
          </h2>
          <p className="text-foreground/35 mb-3 text-sm">
            Available for freelance projects and long-term partnerships.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-blue-500"
          >
            Get in touch
            <svg
              className="size-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
