import { ClientSideProjectList } from "./Component"

export const metadata = {
  title: "Projects",
  description: "Things I've built",
}

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">projects</h1>
      <p className="text-foreground/50 mb-8">things i&apos;ve built</p>
      <ClientSideProjectList />
    </div>
  )
}
