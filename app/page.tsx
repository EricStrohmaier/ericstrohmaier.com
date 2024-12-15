import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import { fetchPageBySlug, getPageMetaData } from "@/lib/notion"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import { fetchNotionPageAsMarkdown } from "@/lib/notion-md"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Creative Home Studio",
  description: "Welcome to My Site",
}

export default async function Home() {
  try {
    const page = await fetchPageBySlug("home")

    if (!page) {
      // Render a default home page if no "home" slug is found
      return (
        <>
          <Header />
          <MDPreviewComponent
            project={{
              slug: "home",
              title: "Welcome to My Site",
              id: "home",
              content: {
                parent:
                  "The home page content is currently not available. Please check back later.",
              },
              tags: ["home"],
            }}
          />
        </>
      )
    }

    const meta = getPageMetaData(page)
    const content = await fetchNotionPageAsMarkdown(page.id)

    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <MDPreviewComponent
            project={{
              slug: "home",
              title: meta.title,
              id: meta.id,
              content: content,
              tags: meta.tags,
            }}
          />

          <div className="mt-2 rounded-xl bg-secondary px-2 py-1">
            <ul className="space-y-4">
              {[
                "Want to move fast and look professional from day one",
                "Are tired of paying endless subscription fees",
                "Need the flexibility to expand without starting over",
                "Value ownership of their digital assets",
                "Have a vision bigger than just a simple website",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-500">→</span>
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons Section */}
          <div className="my-4 w-full space-y-6">
            {/* Primary CTA */}
            <div className="text-text text-center">
              <button className="text-text mx-auto flex items-center justify-center space-x-2 rounded-xl bg-background px-8 py-4 text-lg font-semibold transition-colors hover:bg-background hover:bg-opacity-85">
                <span>Get Your Landing Page</span>
                <ArrowRight className="size-5" />
              </button>
            </div>

            {/* Secondary CTAs */}
            <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
              <Button
                asChild
                className="text-text text-semibold flex h-14 items-center justify-center rounded-xl border-2 border-border px-6 py-3 text-lg transition-colors"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 size-5" />
                  Book a Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                className="text-text flex h-14 items-center justify-center rounded-xl border-2 border-border px-6 py-3 transition-colors"
              >
                <Link href="/products">
                  See Our Launch Packages
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="space-y-4 rounded-xl bg-secondary p-6 text-center">
            <p className="text-text text-lg font-semibold">
              Limited Spots Available for December Projects
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Full Code Ownership",
                "2-Week Delivery",
                "Future-Proof Foundation",
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span className="text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
      </>
    )
  } catch (error) {
    console.error(error)
    return notFound()
  }
}
