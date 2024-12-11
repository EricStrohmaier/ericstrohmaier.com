import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import Image from "next/image"
import {
  fetchProjects,
  getProjectMetaData,
  fetchPageBySlug,
  fetchPageContent,
  getPageMetaData,
} from "@/lib/notion"
import Link from "next/link"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import ReactMarkdown from "react-markdown"

export const metadata = {
  title: "Projects",
  description: "My projects",
}

export default async function ProjectsPage() {
  try {
    // Fetch the content for the "projects" slug
    const projectsPage = await fetchPageBySlug("projects")
    let projectsContent = ""
    let projectsTitle = "My Projects" // Default title
    if (projectsPage) {
      projectsContent = await fetchPageContent(projectsPage.id)
      const projectsMetaData = getPageMetaData(
        projectsPage as PageObjectResponse,
      )
      projectsTitle = projectsMetaData.title || projectsTitle
    }

    const projectsResponse = await fetchProjects()

    const projects = projectsResponse.results.map((project) =>
      getProjectMetaData(project as PageObjectResponse),
    )
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-4xl font-bold">{projectsTitle}</h1>

          <div className="mb-8">
            <ReactMarkdown>{projectsContent}</ReactMarkdown>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-40 w-full">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title || "Project cover"}
                      fill
                      className="-my-0 object-cover"
                    />
                  ) : (
                    <div className="via-pink-500 size-full bg-gradient-to-br from-purple-500 to-red-500"></div>
                  )}
                </div>
                <div className="bg-background p-2">
                  <h2 className="text-text mb-2 text-xl font-semibold">
                    {project.title || "Untitled Project"}
                  </h2>
                  <div>
                    {project.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="mr-2 rounded-full bg-gray-700 px-2 py-1 text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.description && (
                    <p className="text-sm text-gray-500">
                      {project.description.length > 35
                        ? `${project.description.slice(0, 35)}...`
                        : project.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
