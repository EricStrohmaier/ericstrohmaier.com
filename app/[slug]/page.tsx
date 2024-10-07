import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import {
  fetchPageBySlug,
  fetchPageContent,
  getPageMetaData,
} from "@/lib/notion"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import ReactMarkdown from "react-markdown"
import Resume from "@/components/Resume"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"

export default async function SlugPage({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const page = await fetchPageBySlug(params.slug)

    if (!page) {
      return notFound()
    }

    const pageContent = await fetchPageContent(page.id)
    const meta = getPageMetaData(page as PageObjectResponse)

    return (
      <>
        <Header />
        {/* {params.slug === "resume" ? (
          <Resume content={pageContent} title={meta.title} pageId={page.id} />
        ) : ( */}
        <div className="container mx-auto px-4 py-8">
          <MDPreviewComponent
            project={{
              slug: params.slug,
              title: meta.title,
              id: meta.id,
              content: pageContent,
              tags: meta.tags,
            }}
          />
        </div>
        {/* )} */}
      </>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
