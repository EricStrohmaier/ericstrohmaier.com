import client from "@/tina/__generated__/client";
import MainComponent from "./components/MainComponent";

export default async function HomePage() {
  const result = await client.queries.page({
    relativePath:"home.mdx"
  })
  return <MainComponent {...result}/>
}
