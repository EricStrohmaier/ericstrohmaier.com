import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import {
  fetchPageContent,
  fetchProjectBySlug,
  getProjectMetaData,
} from "@/lib/notion"

export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  try {
    const project = await fetchProjectBySlug(params.slug)

    if (!project) {
      return notFound()
    }

    const meta = getProjectMetaData(project)

    const content = await fetchPageContent(project.id)

    return (
      <div className="h-full w-full">
        <div className="-m-8 -mt-12">
          <img
            className="mb-4 h-52 w-full object-cover"
            src={meta.coverImage || "/nost-desk.jpg"} // Use project image or default
            alt={`Project banner for ${meta.title}`}
          />
        </div>
        <div className="mt-10">
          <MDPreviewComponent
            project={{
              slug: params.slug,
              title: meta.title,
              id: meta.id,
              content: content,
              tags: meta.tags,
            }}
          />
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
