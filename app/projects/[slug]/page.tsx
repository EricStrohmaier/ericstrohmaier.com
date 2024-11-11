import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import {
  fetchPageContent,
  fetchProjectBySlug,
  getProjectMetaData,
} from "@/lib/notion"
import { Button } from "@/components/ui/button"
import { ArrowLeftCircleIcon } from "lucide-react"
import Link from "next/link"

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
      <div className="h-full w-full">
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
              <ArrowLeftCircleIcon className="mr-2 h-5 w-5" />
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
