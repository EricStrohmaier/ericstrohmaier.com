import client from "@/tina/__generated__/client";
import MainComponent from "../../components/app/MainComponent";
import { notFound } from "next/navigation";

export default async function Page({
    params
}: {
    params: {
        slug: string
    }
}) {
    const result = await client.queries.page({
        relativePath: `${params.slug}.mdx`
    }).then(res => {
        return res
    }).catch(err => {
        console.log(err)
        return notFound()
    })

    return <MainComponent {...result} />
}
