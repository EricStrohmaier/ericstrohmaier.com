"use client"

import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { FaDownload } from "react-icons/fa"
import { CustomLink } from "./app/MDPreviewComponent"

interface ResumeProps {
  content: string
  title: string
  pageId: string
}

const Resume: React.FC<ResumeProps> = ({ content, title, pageId }) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch(`/api/download-pdf?pageId=${pageId}`)
      if (!response.ok) {
        throw new Error("Failed to download PDF")
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = "Eric_Strohmaier_Software_Engineer.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Failed to download PDF:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex h-full w-full items-center justify-between">
        <h1 className="text-4xl font-bold">{title}</h1>
        <button
          onClick={handleDownload}
          className="text-text flex h-[40px] items-center space-x-2 rounded bg-primary px-4 py-2 hover:bg-primary"
          disabled={isDownloading}
        >
          <FaDownload className={`${isDownloading ? "animate-spin" : ""}`} />
          <span className="text-sm">
            {isDownloading ? "Downloading..." : "Download Resume"}
          </span>
        </button>
      </div>
      <div className="markdown-content text-text mt-2">
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
    </div>
  )
}

export default Resume
