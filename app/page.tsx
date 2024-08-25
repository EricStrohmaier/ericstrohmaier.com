import client from "@/tina/__generated__/client"
import MainComponent from "../components/app/MainComponent"
import Header from "@/components/app/Header"

export default async function HomePage() {
  const result = await client.queries.page({
    relativePath: "home.md",
  })
  return (
    <>
      <Header />
      <MainComponent {...result} />
    </>
  )
}
