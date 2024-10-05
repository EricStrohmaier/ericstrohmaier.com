import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import { fetchPageBySlug, fetchPageBlocks, getPageMetaData } from "@/lib/notion"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"

export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  try {
    const page = await fetchPageBySlug(params.slug)

    if (!page) {
      return notFound()
    }
    const meta = getPageMetaData(page)
    console.log(meta)

    const blocks = await fetchPageBlocks(page.id)

    // Extract title from the Notion page
    // @ts-ignore
    const title = page.properties.name.title[0].plain_text || "Untitled"

    // Convert Notion blocks to Markdown
    console.log(blocks)
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
        </div>{" "}
      </>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
