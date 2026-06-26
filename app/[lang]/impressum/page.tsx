import type { Metadata } from "next"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

// Imprint per ECG §5 / MedienG §25 (AT). Real data is filled in below; if you
// later get a GISA number / become a WKO member, add a "Gewerbeberechtigung"
// line. A quick legal review is still recommended.
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const isDe = params.lang === "de"
  return {
    title: isDe ? "Impressum" : "Imprint",
    description: isDe
      ? "Impressum und Offenlegung gemäß ECG und Mediengesetz."
      : "Legal imprint and disclosure.",
    alternates: { canonical: `/${params.lang}/impressum` },
  }
}

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-2xl py-6">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Impressum</h1>

      <div className="text-foreground/70 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Angaben gemäß § 5 ECG / § 25 MedienG
          </h2>
          <p>
            {siteConfig.name}
            <br />
            Sonnenweg 11
            <br />
            3071 Böheimkirchen, Österreich
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              className="text-blue-500 hover:underline"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Unternehmensangaben
          </h2>
          <p>
            Unternehmensgegenstand: Softwareentwicklung und IT-Dienstleistungen.
            <br />
            Rechtsform: Einzelunternehmen
            <br />
            UID-Nummer: ATU83271638
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Online-Streitbeilegung
          </h2>
          <p>
            Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}
