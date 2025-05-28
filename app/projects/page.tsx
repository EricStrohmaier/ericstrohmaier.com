import Header from "@/components/app/Header"
import { ClientSideProjectList } from "./Component"

export const metadata = {
  title: "Projects | Eric Strohmaier",
  description: "All projects I started",
}

export default function ProjectGraveyard() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-1 py-2  md:px-4 md:py-8">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Projects</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          All projects I started. Some I am working on, some are live, some are
          on hold, and some are just ideas that never made it past the drawing
          board.
        </p>

        <ClientSideProjectList />
      </div>
    </>
  )
}
