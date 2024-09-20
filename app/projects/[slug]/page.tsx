import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import ProjectPostComponent from "@/components/app/ProjectPostComponent"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"

export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const projectPath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${params.slug}.md`,
  )

  try {
    const fileContents = await fs.readFile(projectPath, "utf8")
    const { data, content } = matter(fileContents)
    // console.log(data, "content", content)
    const project = {
      ...data,
      title: data.title,
      description: data.description,
      content,
      id: `content/projects/${params.slug}.md`,
    }

    return (
      <>
        <Header />
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="flex flex-col items-center justify-center">
            <MDPreviewComponent project={project} />
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
