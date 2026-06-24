import type { Metadata } from "next"
import type { Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionaries"
import { ProjectListClient } from "./ProjectListClient"

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang, "projects")
  const lang = params.lang
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `/${lang}/projects`,
      languages: {
        en: "/en/projects",
        de: "/de/projects",
        "x-default": "/en/projects",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "de" ? "de_DE" : "en_US",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `/${lang}/projects`,
    },
  }
}

export default async function ProjectsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang
  const dict = await getDictionary(lang, "projects")

  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">{dict.heading}</h1>
      <p className="text-foreground/50 mb-8">{dict.subheading}</p>
      <ProjectListClient
        lang={lang}
        labels={{ ...dict.list, status: dict.status }}
      />
    </div>
  )
}
