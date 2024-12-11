import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import { fetchPageBySlug, getPageMetaData } from "@/lib/notion"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import { siteConfig } from "@/site-config"
import { fetchNotionPageAsMarkdown } from "@/lib/notion-md"

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  try {
    const page = await fetchPageBySlug(params.slug)
    if (!page) {
      return notFound()
    }
    const meta = getPageMetaData(page as PageObjectResponse)
    return {
      title: meta.title,
      description: siteConfig.description,
      openGraph: {
        title: meta.title,
        description: siteConfig.description,
        images: [
          {
            url: siteConfig.ogImage || "/nost-desk.jpg",
            width: 800,
            height: 600,
            alt: meta.title,
          },
        ],
      },
    }
  } catch (error) {
    console.error(error)
    return notFound()
  }
}

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

    const pageContent = await fetchNotionPageAsMarkdown(page.id)
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
