import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { pathColorMapping } from "@/constans"

interface ProjectData {
  title: string
  description: string
  id: string
  content: any
}

interface MDPreviewProps {
  project: ProjectData
}

export default function MDPreviewComponent({ project }: MDPreviewProps) {
  const { title, description, id, content } = project

  const idParts = id.split("/")
  const extractedPath = idParts[idParts.length - 1].replace(".md", "")

  const titleColor = pathColorMapping[extractedPath] || "text-[var(--text)]"

  return (
    <div className="w-full">
      <p className={`text-4xl font-semibold ${titleColor}`}>{title}</p>
      <div className="mt-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
