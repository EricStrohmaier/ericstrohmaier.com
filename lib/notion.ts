"use server"

import { Client } from "@notionhq/client"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  fetch: (url, init) => {
    return fetch(url, {
      ...init,
      cache: "no-store",
    })
  },
})

export async function fetchPages() {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
  })
}

export async function fetchPageBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  })

  return response.results[0] as PageObjectResponse | undefined
}

export async function fetchPageContent(pageId: string) {
  const response = await notion.blocks.children.list({ block_id: pageId })
  const content = response.results
    .map((block) => {
      if ("type" in block) {
        switch (block.type) {
          case "paragraph":
            return block.paragraph.rich_text
              .map((text) => {
                if (text.type === "text" && text.text.link) {
                  return `[${text.plain_text}](${text.text.link.url})`
                }
                return text.plain_text
              })
              .join("")
          case "heading_1":
            return `# ${block.heading_1.rich_text.map((text) => text.plain_text).join("")}`
          case "heading_2":
            return `## ${block.heading_2.rich_text.map((text) => text.plain_text).join("")}`
          case "heading_3":
            return `### ${block.heading_3.rich_text.map((text) => text.plain_text).join("")}`
          case "bulleted_list_item":
            return `- ${block.bulleted_list_item.rich_text.map((text) => text.plain_text).join("")}`
          case "numbered_list_item":
            return `1. ${block.numbered_list_item.rich_text.map((text) => text.plain_text).join("")}`
          case "to_do":
            const checked = block.to_do.checked ? "x" : " "
            return `- [${checked}] ${block.to_do.rich_text.map((text) => text.plain_text).join("")}`
          case "image":
            return `![${block.image.caption ? block.image.caption[0]?.plain_text : ""}](${
              block.image.type === "file"
                ? block.image.file.url
                : block.image.type === "external"
                  ? block.image.external.url
                  : ""
            })`
          case "divider":
            return "---"
          default:
            return ""
        }
      }
      return ""
    })
    .filter(Boolean)
    .join("\n\n")

  return content
}

export const getPageMetaData = (post: PageObjectResponse) => {
  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return tag.name
    })

    return allTags
  }

  return {
    id: post.id,
    // @ts-ignore
    title: post.properties.name.title[0].plain_text,
    // @ts-ignore
    tags: getTags(post.properties.tags?.multi_select),
    // @ts-ignore
    // description: post.properties.description.rich_text[0].plain_text,
    // // @ts-ignore
    // date: getToday(post.properties.date.last_edited_time),
    // @ts-ignore
    slug: post.properties.slug.rich_text[0].plain_text,
  }
}

function getToday(datestring: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  let date = new Date()

  if (datestring) {
    date = new Date(datestring)
  }

  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  let today = `${month} ${day}, ${year}`

  return today
}

export async function fetchProjectBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DATABASE_ID!, // Make sure to add this to your .env file
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  })

  return response.results[0] as PageObjectResponse | undefined
}

export const getProjectMetaData = (project: PageObjectResponse) => {
  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return tag.name
    })

    return allTags
  }

  const getCoverImage = (cover: any) => {
    if (cover && cover.type === "external") {
      return cover.external.url
    } else if (cover && cover.type === "file") {
      return cover.file.url
    }
    return null
  }

  return {
    id: project.id,
    // @ts-ignore
    title: project.properties.name.title[0]?.plain_text || "",
    // @ts-ignore
    tags: getTags(project.properties.tags?.multi_select),
    // @ts-ignore
    slug: project.properties.slug.rich_text[0]?.plain_text || "",
    coverImage: getCoverImage(project.cover),
  }
}

export async function fetchProjects() {
  return notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DATABASE_ID!,
    // filter: {
    //   property: "Status",
    //   select: {
    //     equals: "Published",
    //   },
    // },
    sorts: [
      {
        property: "name",
        direction: "ascending",
      },
    ],
  })
}

// ... (keep existing functions)
