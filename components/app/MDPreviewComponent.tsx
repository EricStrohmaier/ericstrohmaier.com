import ReactMarkdown from "react-markdown"
import { pathColorMapping } from "@/constans"
import Link from "next/link"

interface MdContent {
  parent: string
}

interface ProjectData {
  title: string
  description?: string
  id: string
  content: MdContent
  tags: string[]
  slug: string
}

interface MDPreviewProps {
  project: ProjectData
}

export const CustomLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="text-blue-400 hover:underline "
    >
      {children}
    </Link>
  )
}

export const customMDComponent = {
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <CustomLink href={href || "#"}>{children}</CustomLink>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6">{children}</ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-2">{children}</li>
  ),
}

export default function MDPreviewComponent({ project }: MDPreviewProps) {
  const { title, description, id, content, tags, slug } = project

  const idParts = slug.split("/")
  const extractedPath = idParts[idParts.length - 1].replace(".md", "")
  const titleColor = pathColorMapping[extractedPath] || "text-[var(--text)]"

  return (
    <>
      <h1 className={`mb-2 text-4xl font-bold md:text-6xl ${titleColor}`}>
        {title}
      </h1>
      <div className="markdown-content text-text mt-2">
        <ReactMarkdown components={customMDComponent as any}>
          {content.parent}
        </ReactMarkdown>
      </div>
    </>
  )
}
