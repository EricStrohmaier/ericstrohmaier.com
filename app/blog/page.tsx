import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import Image from "next/image"
import {
  getProjectMetaData,
  getPageMetaData,
  fetchBlog,
  fetchPageBySlug,
} from "@/lib/notion"
import Link from "next/link"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import ReactMarkdown from "react-markdown"
import { fetchNotionPageAsMarkdown } from "@/lib/notion-md"
import { customMDComponent } from "@/components/app/MDPreviewComponent"

export const metadata = {
  title: "Blog",
  description: "My blog",
}

export default async function Page() {
  try {
    // Fetch the content for the "blog" slug
    const page = await fetchPageBySlug("blog")
    let content
    let title = "My Blog" // Default title

    if (page) {
      content = await fetchNotionPageAsMarkdown(page.id)
      const metaData = getPageMetaData(page as PageObjectResponse)
      title = metaData.title || title
    }
    const sanitizedContent = {
      ...content,
      parent: content?.parent.replace(/child_database\s+/g, ""), // Remove the "child_database" text
    }
    const response = await fetchBlog()

    const blog = response.results.map((blog) =>
      getProjectMetaData(blog as PageObjectResponse),
    )
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">{title}</h1>

          <div className="mb-8">
            <ReactMarkdown components={customMDComponent as any}>
              {sanitizedContent?.parent}
            </ReactMarkdown>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blog.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={blog.coverImage || "/nost-desk.jpg"}
                    alt={blog.title || "Blog cover"}
                    fill
                    className="-my-0 object-cover"
                  />
                </div>
                <div className="bg-background p-2">
                  <h2 className="text-text mb-2 text-xl font-semibold">
                    {blog.title || "Untitled Blog"}
                  </h2>
                  <div>
                    {blog.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="mr-2 rounded-full bg-gray-700 px-2 py-1 text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {blog.description && (
                    <p className="text-sm text-gray-500">
                      {blog.description.length > 35
                        ? `${blog.description.slice(0, 35)}...`
                        : blog.description}
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
