"use client"
import React, { FC } from "react"

interface BlogPageProps {
  content: string
}

const BlogPage: FC<BlogPageProps> = ({ content }) => {
  return <div>{content}</div>
}

export default BlogPage
