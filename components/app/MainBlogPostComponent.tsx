"use client"

import { PageQuery, PostQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text"
import { ReminderView } from "./ReminderView"
import { pathColorMapping } from "@/constans"

export default function MainBlogPostComponent(props: {
  query: string
  variables: { relativePath: string }
  data: PostQuery
}) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina(props)
  console.log(data)

  const content = data.post.body || ""
  const title = data.post.title
  const id = data.post.id

  const idParts = id.split("/")
  const extractedPath = idParts[idParts.length - 1].replace(".mdx", "") // Get the third last part (today from today.mdx)

  const titleColor = pathColorMapping[extractedPath] || "text-[var(--text)]" // Default color if path not found
  console.log(extractedPath, titleColor)

  return (
    <div className="px-4">
      <div>
        <p className={`text-6xl font-semibold ${titleColor} `}>{title}</p>
        <TinaMarkdown content={content as any} />
      </div>
    </div>
  )
}
