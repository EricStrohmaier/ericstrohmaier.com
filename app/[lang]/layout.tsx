import { notFound } from "next/navigation"
import { i18n, isLocale } from "@/i18n-config"
import { HtmlLang } from "@/components/app/HtmlLang"

// Only /en and /de are valid; any other first segment 404s instead of being
// treated as a locale.
export const dynamicParams = false

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!isLocale(params.lang)) notFound()
  // Site chrome (nav/footer) is provided by the root layout's LayoutPage.
  return (
    <>
      <HtmlLang lang={params.lang} />
      {children}
    </>
  )
}
