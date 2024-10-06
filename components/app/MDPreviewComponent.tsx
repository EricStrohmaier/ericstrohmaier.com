import ReactMarkdown from "react-markdown"
import { pathColorMapping } from "@/constans"
import Link from "next/link"

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

const CustomLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href} className="text-blue-400 hover:underline ">
      {children}
    </Link>
  )
}

export default function MDPreviewComponent({ project }: MDPreviewProps) {
  const { title, description, id, content, tags, slug } = project

  const idParts = slug.split("/")
  const extractedPath = idParts[idParts.length - 1].replace(".md", "")
  const titleColor = pathColorMapping[extractedPath] || "text-[var(--text)]"

  return (
    <>
      <h1 className={`mb-2 text-4xl font-bold ${titleColor}`}>{title}</h1>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 rounded-xl bg-gray-200 px-2 py-1 text-sm text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="markdown-content mt-2">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <CustomLink href={href || ""}>{children}</CustomLink>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}
