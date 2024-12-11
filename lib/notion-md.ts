import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// Passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion })

export const fetchNotionPageAsMarkdown = async (pageId: string) => {
  const mdblocks = await n2m.pageToMarkdown(pageId)
  return n2m.toMarkdownString(mdblocks)
}
