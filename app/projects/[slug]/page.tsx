import { notFound } from "next/navigation"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import {
  fetchPageContent,
  fetchProjectBySlug,
  getProjectMetaData,
} from "@/lib/notion"
import { Button } from "@/components/ui/button"
import { ArrowLeftCircleIcon } from "lucide-react"
import Link from "next/link"

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  try {
    const project = await fetchProjectBySlug(params.slug)
    if (!project) {
      return notFound()
    }
    const meta = getProjectMetaData(project)

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
    const project = await fetchProjectBySlug(params.slug)

    if (!project) {
      return notFound()
    }

    const meta = getProjectMetaData(project)

    const content = await fetchPageContent(project.id)

    return (
      <div className="size-full">
        <div className="-m-8 -mt-12">
          <img
            className="mb-4 h-52 w-full object-cover"
            src={meta.coverImage || "/nost-desk.jpg"}
            alt={`Project banner for ${meta.title}`}
          />
        </div>
        <div className="mt-10">
          <Link href="/projects">
            <Button
              variant="ghost"
              className="mb-2 transition-colors duration-200 "
            >
              <ArrowLeftCircleIcon className="mr-2 size-5" />
              Back to Projects
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
