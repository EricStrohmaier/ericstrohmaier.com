import fs from "fs"
import path from "path"

const contentDirectory = path.join(process.cwd(), "content")

export function getMarkdownContent(slug: string): string | null {
  const filePath = path.join(contentDirectory, `${slug}.md`)

  try {
    const content = fs.readFileSync(filePath, "utf8")
    return content
  } catch {
    return null
  }
}
