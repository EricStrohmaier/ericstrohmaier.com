import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import { fetchPageBySlug, getPageMetaData } from "@/lib/notion"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import { fetchNotionPageAsMarkdown } from "@/lib/notion-md"

export const metadata = {
  title: "Creative Home Studio",
  description: "Welcome to My Site",
}

export default async function Home() {
  try {
    const page = await fetchPageBySlug("home")

    if (!page) {
      // Render a default home page if no "home" slug is found
      return (
        <>
          <Header />
          <MDPreviewComponent
            project={{
              slug: "home",
              title: "Welcome to My Site",
              id: "home",
              content: {
                parent:
                  "The home page content is currently not available. Please check back later.",
              },
              tags: ["home"],
            }}
          />
        </>
      )
    }

    const meta = getPageMetaData(page)
    const content = await fetchNotionPageAsMarkdown(page.id)

    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <MDPreviewComponent
            project={{
              slug: "home",
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
