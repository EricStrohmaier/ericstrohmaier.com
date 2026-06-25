import { notFound } from "next/navigation"
import { isLocale } from "@/i18n-config"

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Only /en and /de are valid; anything else 404s. <html lang> is set in the
  // root layout from the middleware x-locale header (correct at SSR).
  if (!isLocale(params.lang)) notFound()
  return <>{children}</>
}
