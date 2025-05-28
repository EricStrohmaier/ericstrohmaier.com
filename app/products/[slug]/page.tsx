import { notFound } from "next/navigation"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import { fetchProductBySlug, getProjectMetaData } from "@/lib/notion"
import { Button } from "@/components/ui/button"
import { ArrowLeftCircleIcon } from "lucide-react"
import Link from "next/link"
import { fetchNotionPageAsMarkdown } from "@/lib/notion-md"

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  try {
    const product = await fetchProductBySlug(params.slug)

    if (!product) {
      return notFound()
    }
    const meta = getProjectMetaData(product)

    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        images: [
          {
            url: meta.coverImage || "/nost-desk.jpg",
            width: 800,
            height: 600,
            alt: meta.title,
          },
        ],
      },
    }
  } catch (error) {
    console.error(error)
  }
}

export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  try {
    const product = await fetchProductBySlug(params.slug)

    if (!product) {
      return notFound()
    }

    const meta = getProjectMetaData(product)

    const content = await fetchNotionPageAsMarkdown(product.id)

    return (
      <div className="size-full">
        <div className="-m-8 -mt-12">
          <img
            className="mb-4 h-52 w-full object-cover "
            src={meta.coverImage || "/nost-desk.jpg"}
            alt={`Product banner for ${meta.title}`}
          />
        </div>
        <div className="mt-10">
          <Link href="/products" className="mx-2">
            <Button
              variant="ghost"
              className="mb-2 transition-colors duration-200 lg:-m-8"
            >
              <ArrowLeftCircleIcon className="mr-2 size-5" />
              Back
            </Button>
          </Link>
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
