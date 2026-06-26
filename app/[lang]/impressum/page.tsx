import type { Metadata } from "next"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

// NOTE: This is a TEMPLATE. Austria (ECG §5 / MedienG §25) and Germany (§5 DDG)
// legally require a complete imprint. Fill every [BITTE AUSFÜLLEN] field with
// your real data, have it briefly reviewed, then remove the `robots` noindex
// below so the page can be indexed (it's a trust/E-E-A-T signal).
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
    robots: { index: false, follow: true }, // TODO: remove once the data is filled in
    alternates: { canonical: `/${params.lang}/impressum` },
  }
}

const TODO = "[BITTE AUSFÜLLEN]"

export default function ImpressumPage({
  params,
}: {
  params: { lang: Locale }
}) {
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
            {TODO} (Straße, Hausnummer)
            <br />
            {TODO} (PLZ) Wien, Österreich
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
            <br />
            Telefon: {TODO}
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Unternehmensgegenstand &amp; Berufsrecht
          </h2>
          <p>
            Unternehmensgegenstand: Softwareentwicklung und IT-Dienstleistungen.
            <br />
            Rechtsform: {TODO} (z. B. Einzelunternehmen)
            <br />
            UID-Nummer: {TODO} (falls vorhanden)
            <br />
            GISA-/Firmenbuchnummer: {TODO} (falls vorhanden)
            <br />
            Mitglied der WKO / Gewerbebehörde: {TODO} (falls zutreffend)
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

        <p className="text-foreground/40 text-sm">
          {/* internal note — remove before going live */}
          Vorlage – bitte alle {TODO}-Felder ausfüllen und juristisch prüfen
          lassen, dann das <code>noindex</code> in der Datei entfernen.
        </p>
      </div>
    </article>
  )
}
