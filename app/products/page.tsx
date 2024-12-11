import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import Image from "next/image"
import {
  getProjectMetaData,
  fetchPageBySlug,
  fetchPageContent,
  getPageMetaData,
  fetchProducts,
} from "@/lib/notion"
import Link from "next/link"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import ReactMarkdown from "react-markdown"

export const metadata = {
  title: "Products",
  description: "My products",
}

export default async function Page() {
  try {
    // Fetch the content for the "products" slug
    const page = await fetchPageBySlug("products")
    let content = ""
    let title = "My Products" // Default title
    if (page) {
      content = await fetchPageContent(page.id)
      const metaData = getPageMetaData(page as PageObjectResponse)
      title = metaData.title || title
    }

    const response = await fetchProducts()

    const products = response.results.map((product) =>
      getProjectMetaData(product as PageObjectResponse),
    )
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-4xl font-bold">{title}</h1>

          <div className="mb-8">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative h-40 w-full">
                  {product.coverImage ? (
                    <Image
                      src={product.coverImage}
                      alt={product.title || "Product cover"}
                      fill
                      className="-my-0 object-cover"
                    />
                  ) : (
                    <div className="via-pink-500 size-full bg-gradient-to-br from-purple-500 to-red-500"></div>
                  )}
                </div>
                <div className="bg-background p-2">
                  <h2 className="text-text mb-2 text-xl font-semibold">
                    {product.title || "Untitled Product"}
                  </h2>
                  <div>
                    {product.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="mr-2 rounded-full bg-gray-700 px-2 py-1 text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {product.description && (
                    <p className="text-sm text-gray-500">
                      {product.description.length > 35
                        ? `${product.description.slice(0, 35)}...`
                        : product.description}
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
