import Image from "next/image"
import { getMarkdownContent } from "@/lib/markdown"
import { siteConfig } from "@/site-config"

export const metadata = {
  title: "Profile",
  description: "About Eric Strohmaier",
}

export default function ProfilePage() {
  const content = getMarkdownContent("profile")

  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <Image
          src="/eric-head.jpeg"
          width={56}
          height={56}
          alt="Eric Strohmaier"
          className="rounded-full"
        />
        <div>
          <h1 className="text-xl font-medium">{siteConfig.name}</h1>
          <p className="text-nd/40 text-sm text-sm">{siteConfig.domain}</p>
        </div>
      </div>

      {content && (
        <div className="prose-custom round/70 space-y-4 space-y-4 leading-relaxed">
          {content.split("\n").map((line, i) => {
            const trimmed = line.trim()
            if (!trimmed || trimmed === "---") return null
            if (trimmed.startsWith("# ")) return null
            const formatted = trimmed.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-foreground/90 font-medium">$1</strong>',
            )
            return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />
          })}
        </div>
      )}

      <div className="mt-10 flex gap-4">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-foregrohov/80 under:text-foreground/80 underline-o underline"
        >
          github
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-foreground/80 hover:text-foreground/80 underline-o underline"
        >
          linkedin
        </a>
        <a
          href={siteConfig.links.email}
          className="text-foreground/50 hover:text-foregrohov/80 under:text-foreground/80 underline-o underline"
        >
          email
        </a>
      </div>
    </div>
  )
}
