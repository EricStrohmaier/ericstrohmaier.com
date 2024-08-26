import client from "@/tina/__generated__/client"
import MainComponent from "../../components/app/MainComponent"
import { notFound } from "next/navigation"
import Header from "@/components/app/Header"

export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  // change this to fetch db content then make novel editor
  const result = await client.queries
    .page({
      relativePath: `${params.slug}.md`,
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
      return notFound()
    })

  return (
    <>
      <Header />
      <MainComponent {...result} />
    </>
  )
}
