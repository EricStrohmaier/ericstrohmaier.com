import ReactMarkdown from "react-markdown"
import { pathColorMapping } from "@/constans"

interface ProjectData {
  title: string
  description?: string
  id: string
  content: string
  tags: string[]
  slug: string
}

interface MDPreviewProps {
  project: ProjectData
}

export default function MDPreviewComponent({ project }: MDPreviewProps) {
  const { title, description, id, content, tags, slug } = project

  const idParts = slug.split("/")
  const extractedPath = idParts[idParts.length - 1].replace(".md", "")
  const titleColor = pathColorMapping[extractedPath] || "text-[var(--text)]"

  return (
    <>
      <h1 className={`mb-8 text-4xl font-bold ${titleColor}`}>{title}</h1>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  )
}
