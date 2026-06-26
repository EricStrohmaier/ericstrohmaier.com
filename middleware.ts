import { NextRequest, NextResponse } from "next/server"
import { getSessionCookie } from "better-auth/cookies"
import { i18n, isLocale } from "@/i18n-config"

const LOCALE_COOKIE = "NEXT_LOCALE"
const ONE_YEAR = 60 * 60 * 24 * 365

// Unprefixed routes that are NOT localized (tools, auth, the standalone DE
// landing). Everything else under "/" is treated as a marketing path.
const nonLocalized = ["/invoice", "/dashboard", "/login", "/register"]

function detectLocale(req: NextRequest): string {
  // 1) explicit choice (cookie) wins — keeps you in your language across links
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value
  if (isLocale(cookie)) return cookie
  // 2) geo: visitors in Austria / Germany default to German. req.geo is the
  //    Vercel edge value; fall back to the raw header for robustness.
  const country =
    req.geo?.country || req.headers.get("x-vercel-ip-country") || ""
  if (country === "AT" || country === "DE") return "de"
  // 3) browser language
  const primary = (req.headers.get("accept-language") || "")
    .split(",")[0]
    ?.trim()
    .toLowerCase()
  if (primary?.startsWith("de")) return "de"
  // 4) fallback
  return i18n.defaultLocale
}

function rememberLocale(res: NextResponse, locale: string) {
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  })
  return res
}

// Forward the resolved locale to the app via a request header so the root
// layout can set <html lang> correctly at SSR (visible to crawlers), without
// reading cookies/headers in the layout for routes that don't need it.
function nextWithLocale(req: NextRequest, locale: string) {
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set("x-locale", locale)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1) Dashboard auth gate (unprefixed tool route).
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) {
    if (!getSessionCookie(req)) {
      const url = new URL("/login", req.url)
      url.searchParams.set("redirect", pathname)
      return NextResponse.redirect(url)
    }
    return nextWithLocale(req, "en")
  }

  // 1b) Old standalone Makler landing → new localized vertical page (permanent).
  if (pathname === "/immobilienmakler") {
    const locale = detectLocale(req)
    const url = req.nextUrl.clone()
    url.pathname = `/${locale}/leistungen/immobilienmakler`
    return rememberLocale(NextResponse.redirect(url, 308), locale)
  }

  // 1c) Legacy "/work" (and "/{locale}/work") → the projects page.
  if (pathname === "/work" || /^\/(en|de)\/work$/.test(pathname)) {
    const seg = pathname.split("/")[1]
    const locale = isLocale(seg) ? seg : detectLocale(req)
    const url = req.nextUrl.clone()
    url.pathname = `/${locale}/projects`
    return rememberLocale(NextResponse.redirect(url, 308), locale)
  }

  // 2) Other non-localized routes pass through (English tools).
  if (
    nonLocalized.some((p) => pathname === p || pathname.startsWith(p + "/"))
  ) {
    return nextWithLocale(req, "en")
  }

  // 3) Already locale-prefixed (/en/..., /de/...): remember it so any later
  //    unprefixed link (e.g. /projects) resolves to THIS language.
  const seg = pathname.split("/")[1]
  if (isLocale(seg)) {
    const res = nextWithLocale(req, seg)
    if (req.cookies.get(LOCALE_COOKIE)?.value !== seg) {
      rememberLocale(res, seg)
    }
    return res
  }

  // 4) Unprefixed marketing path ("/", "/about", ...): redirect to the
  //    detected locale and remember it.
  const locale = detectLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return rememberLocale(NextResponse.redirect(url), locale)
}

export const config = {
  // Run on everything except Next internals, the API, and files with an
  // extension (robots.txt, sitemap.xml, images, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
