import MainBlogPostComponent from "@/components/app/MainBlogPostComponent"
import MainComponent from "@/components/app/MainComponent"
import client from "@/tina/__generated__/client"
import { notFound } from "next/navigation"
import React from "react"

export default async function page({ params }: { params: { slug: string } }) {
  const result = await client.queries
    .post({
      relativePath: `${params.slug}.mdx`,
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
      return notFound()
    })
  return (
    //this could be blog pages...
    // render all the blog posts here
    // use the blog component to render each post

    <div>
      hi all the posts
      <MainBlogPostComponent {...result} />
    </div>
  )
}
