import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import { fetchProjects, getProjectMetaData } from "@/lib/notion"
import Link from "next/link"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export default async function ProjectsPage() {
  try {
    const projectsResponse = await fetchProjects()

    const projects = projectsResponse.results.map((project) =>
      getProjectMetaData(project as PageObjectResponse),
    )
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-4xl font-bold">My Projects</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(
              (project) =>
                project.title && (
                  <Link href={`/projects/${project.slug}`} key={project.id}>
                    <div className="rounded-xl border border-secondary p-4 shadow-md transition-all hover:shadow-lg">
                      <h2 className="mb-2 text-xl font-semibold text-foreground">
                        {project.title}
                      </h2>
                      <div className="mb-4">
                        {project.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="mr-2 rounded-full bg-secondary px-2 py-1 text-sm text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ),
            )}
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
