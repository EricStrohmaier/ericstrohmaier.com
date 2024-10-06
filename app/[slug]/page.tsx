import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import {
  fetchPageBySlug,
  getPageMetaData,
  fetchPageContent,
} from "@/lib/notion"
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

    const content = await fetchPageContent(page.id)

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
