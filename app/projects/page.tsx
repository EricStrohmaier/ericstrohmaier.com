import { ClientSideProjectList } from "./Component"

export const metadata = {
  title: "Work & Case Studies",
  description:
    "Real software Eric Strohmaier has built and shipped — custom tools, automations, SaaS products, and websites for businesses, with outcome-driven case studies.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Work & Case Studies | Eric Strohmaier",
    description:
      "Custom tools, automations, and products built to make or save businesses money.",
    url: "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">projects</h1>
      <p className="text-foreground/50 mb-8">
        things i&apos;ve built and helped build
      </p>
      <ClientSideProjectList />
    </div>
  )
}
