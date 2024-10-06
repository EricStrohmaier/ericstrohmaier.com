import { NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"
import PDFDocument from "pdfkit"

import path from "path"

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function GET(request: NextRequest) {
  const pageId = request.nextUrl.searchParams.get("pageId")

  if (!pageId) {
    return NextResponse.json({ error: "Invalid pageId" }, { status: 400 })
  }

  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    })

    const page = await notion.pages.retrieve({ page_id: pageId })

    let title = "Untitled"
    if (
      "properties" in page &&
      "name" in page.properties &&
      "title" in page.properties.name
    ) {
      title = page.properties.name.title[0]?.plain_text || "Untitled"
    }

    const pdfBuffer = await convertNotionToPDF(response.results, title)

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf",
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 },
    )
  }
}

async function convertNotionToPDF(
  blocks: any[],
  title: string,
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const fontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "AfacadFlux-VariableFont_slnt,wght.ttf",
    )

    const doc = new PDFDocument({
      margin: 50,
      font: fontPath,
    })
    const buffers: Buffer[] = []

    doc.on("data", buffers.push.bind(buffers))
    doc.on("end", () => {
      const pdfBuffer = Buffer.concat(buffers)
      resolve(pdfBuffer)
    })

    let listType: "bullet" | "numbered" | null = null
    let listNumber = 1

    // Add the title
    doc.fontSize(28).text(title, { align: "center" })
    doc.moveDown(2)

    blocks.forEach((block, index) => {
      switch (block.type) {
        case "paragraph":
          if (listType) {
            doc.moveDown()
            listType = null
            listNumber = 1
          }
          doc
            .fontSize(12)
            .text(
              block.paragraph.rich_text.map((t: any) => t.plain_text).join(""),
            )
          break
        case "heading_1":
          if (listType) {
            doc.moveDown()
            listType = null
            listNumber = 1
          }
          doc
            .moveDown()
            .fontSize(24)
            .text(
              block.heading_1.rich_text.map((t: any) => t.plain_text).join(""),
            )
          break
        case "heading_2":
          if (listType) {
            doc.moveDown()
            listType = null
            listNumber = 1
          }
          doc
            .moveDown()
            .fontSize(18)
            .text(
              block.heading_2.rich_text.map((t: any) => t.plain_text).join(""),
            )
          break
        case "heading_3":
          if (listType) {
            doc.moveDown()
            listType = null
            listNumber = 1
          }
          doc
            .moveDown()
            .fontSize(14)
            .text(
              block.heading_3.rich_text.map((t: any) => t.plain_text).join(""),
            )
          break
        case "bulleted_list_item":
          if (listType !== "bullet") {
            doc.moveDown()
            listType = "bullet"
          }
          doc
            .fontSize(12)
            .list(
              block.bulleted_list_item.rich_text
                .map((t: any) => t.plain_text)
                .join(""),
              { bulletRadius: 2 },
            )
          break
        case "numbered_list_item":
          if (listType !== "numbered") {
            doc.moveDown()
            listType = "numbered"
            listNumber = 1
          }
          doc
            .fontSize(12)
            .list(
              block.numbered_list_item.rich_text
                .map((t: any) => t.plain_text)
                .join(""),
              listNumber++,
            )
          break
        case "to_do":
          const checkbox = block.to_do.checked ? "☑" : "☐"
          doc
            .fontSize(12)
            .text(
              `${checkbox} ${block.to_do.rich_text.map((t: any) => t.plain_text).join("")}`,
            )
          break
        case "image":
          // Note: Handling images in PDFs can be complex. This is a simplified approach.
          doc.moveDown().fontSize(12).text("[Image]")
          break
        case "divider":
          doc.moveDown().moveTo(50, doc.y).lineTo(550, doc.y).stroke()
          break
      }

      if (index < blocks.length - 1) {
        doc.moveDown()
      }
    })

    doc.end()
  })
}
