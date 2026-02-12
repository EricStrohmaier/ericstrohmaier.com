import { NextRequest, NextResponse } from "next/server"

interface OGData {
  title?: string
  description?: string
  image?: string
  siteName?: string
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 })
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; OGBot/1.0)",
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch URL" }, { status: 500 })
    }

    const html = await response.text()
    const ogData = parseOGTags(html)

    return NextResponse.json(ogData, {
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    })
  } catch {
    return NextResponse.json({ error: "Failed to fetch metadata" }, { status: 500 })
  }
}

function parseOGTags(html: string): OGData {
  const getMetaContent = (property: string): string | undefined => {
    const regex = new RegExp(
      `<meta[^>]*(?:property|name)=["']${property}["'][^>]*content=["']([^"']*)["']|<meta[^>]*content=["']([^"']*)["'][^>]*(?:property|name)=["']${property}["']`,
      "i"
    )
    const match = html.match(regex)
    return match?.[1] || match?.[2]
  }

  const getTitle = (): string | undefined => {
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i)
    return titleMatch?.[1]
  }

  return {
    title: getMetaContent("og:title") || getTitle(),
    description: getMetaContent("og:description") || getMetaContent("description"),
    image: getMetaContent("og:image"),
    siteName: getMetaContent("og:site_name"),
  }
}
