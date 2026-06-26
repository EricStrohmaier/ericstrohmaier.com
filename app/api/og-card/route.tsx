import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

// Branded 1200x630 social/OG card, generated on the fly so every share renders
// a real card (the old static og-image.jpeg was a 768x1024 portrait photo).
// `?lang=de` renders the German variant. Referenced via siteConfig.ogImage.
//
// Node runtime + explicit local fonts: next/og's default font fails to load
// when self-hosted ("Unsupported OpenType signature"), and variable fonts crash
// satori, so we feed it static Roboto TTFs that ship in /public/fonts.
// next.config traces /public/fonts into this route's bundle for production.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const isDe = searchParams.get("lang") === "de"

  const headline = isDe
    ? "Individuelle Software für KMU"
    : "Custom software for small businesses"
  const sub = isDe
    ? "Software, die sich selbst bezahlt macht."
    : "Software that pays for itself."
  const footer = isDe
    ? "Österreich & Deutschland · Tools · Automatisierungen · Websites"
    : "Austria & Germany · tools · automations · websites"

  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "public", "fonts", "Roboto-Regular.ttf")),
    readFile(join(process.cwd(), "public", "fonts", "Roboto-Bold.ttf")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f17",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            color: "#9db2d3",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: "#2563eb",
              marginRight: 18,
            }}
          />
          ericstrohmaier.com
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, color: "#7c93b5", marginBottom: 16 }}>
            Eric Strohmaier
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {headline}
          </div>
          <div style={{ fontSize: 38, color: "#9db2d3", marginTop: 28 }}>
            {sub}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#6b7f9e" }}>
          {footer}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Roboto", data: regular, weight: 400, style: "normal" },
        { name: "Roboto", data: bold, weight: 700, style: "normal" },
      ],
    },
  )
}
