import { notFound } from "next/navigation"
import Header from "@/components/app/Header"
import { fetchPageBySlug, getPageMetaData } from "@/lib/notion"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import { fetchNotionPageAsMarkdown } from "@/lib/notion-md"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        <div className="container mx-auto px-1 py-2  md:px-4 md:py-8">
          <MDPreviewComponent
            project={{
              slug: "home",
              title: meta.title,
              id: meta.id,
              content: content,
              tags: meta.tags,
            }}
          />
          <div className="my-2 md:my-8" />
          <div className="space-y-4 md:space-y-8">
            {/* Ownership Message */}
            <div className="rounded-xl bg-secondary p-4 text-center backdrop-blur md:p-8">
              <h2 className="text-text mb-2 text-2xl font-semibold md:mb-4 md:text-3xl">
                Feel the Freedom of True Ownership!
              </h2>
              <p className="text-text mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
                Why let website platforms hold you back? With our system,
                you&apos;re in control. No monthly fees eating into your
                profits. No restrictions on what you can build.
              </p>
            </div>

            <div className="rounded-xl bg-secondary p-4 md:px-8 md:py-2">
              <h3 className="text-text mb-2 text-xl font-semibold md:text-2xl">
                Built for Founders Who:
              </h3>
              <div className="w-full space-y-2">
                {[
                  "Want to move fast and look professional from day one",
                  "Are tired of paying endless subscription fees",
                  "Need the flexibility to expand without starting over",
                  "Value ownership of their digital assets",
                  "Have a vision bigger than just a simple website",
                ].map((item, index) => (
                  <li key={index} className="flex w-full items-start">
                    <span className="mr-2 text-green-600">→</span>
                    <span className="text-text text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </div>
            </div>
            <div className="my-2 md:my-8" />

            {/* CTA Buttons Section */}
            <div className="w-full space-y-4 md:space-y-8">
              {/* Primary CTA */}
              <div className="text-text text-center">
                <Button
                  asChild
                  className="text-text mx-auto flex h-12 w-fit items-center justify-center space-x-2 rounded-xl bg-background px-6 py-3 text-lg font-semibold transition-colors hover:bg-background hover:bg-opacity-85 md:px-8 md:py-4 md:text-xl"
                >
                  <Link href="/contact/?message=Hey%20Eric%2C%0AI%27m%20interested%20in%20getting%20a%20landing%20page%20built.%0AWhat%20I%27m%20looking%20for%3A%0A-%20%28example%29%20A%20professional%20landing%20page%0A-%20%0ACould%20you%20provide%20me%20with%20more%20details%20about%20your%20packages%20and%20timeline%3F%0ALooking%20forward%20to%20hearing%20from%20you%2C%0A%5BName%5D">
                    <span>Get Your Landing Page</span>
                    <ArrowRight className="size-4 md:size-5" />
                  </Link>
                </Button>
              </div>

              {/* Secondary CTAs */}
              <div className="flex w-full flex-col justify-center gap-2 md:flex-row md:gap-4">
                <Button
                  asChild
                  className="text-text flex h-12 items-center justify-center rounded-xl border-2 border-border px-4 py-2 text-base transition-colors md:h-14 md:px-6 md:py-3 md:text-lg"
                >
                  <Link
                    href="https://calendar.app.google/MPApnoTxZSctLNNt7"
                    target="_blank"
                  >
                    <Calendar className="mr-2 size-4 md:size-5" />
                    Book a Call
                  </Link>
                </Button>
                <Button
                  asChild
                  className="text-text flex h-12 items-center justify-center rounded-xl border-2 border-border px-4 py-2 text-base transition-colors md:h-14 md:px-6 md:py-3 md:text-lg"
                >
                  <Link href="/products">
                    See Our Launch Products
                    <ArrowRight className="ml-2 size-4 md:size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="my-2 md:my-8" />
            <div className="rounded-xl bg-secondary p-4 text-center md:p-8">
              <p className="text-text mb-4 text-lg font-semibold md:mb-6 md:text-xl">
                Limited Spots Available for December Projects
              </p>
              <div className="grid gap-2 md:grid-cols-3 md:gap-4">
                {[
                  "Full Code Ownership",
                  "2-Week Delivery",
                  "Future-Proof Foundation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <span className="text-text mr-2">✓</span>
                    <span className="text-text text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
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
