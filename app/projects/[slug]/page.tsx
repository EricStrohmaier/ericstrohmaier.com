import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import {
  fetchProjectBySlug,
  fetchPageBlocks,
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

    const blocks = await fetchPageBlocks(project.id)
    // Convert Notion blocks to Markdown
    const content = blocks
      .map((block) => {
        if (block.type === "paragraph") {
          return block.paragraph.rich_text
            .map((text) => text.plain_text)
            .join("")
        }
        // Add more block types as needed
        return ""
      })
      .join("\n\n")

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
