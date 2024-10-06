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
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
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
      </>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
