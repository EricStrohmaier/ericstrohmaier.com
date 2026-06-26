import type { Metadata } from "next"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

// NOTE: This is a DSGVO/DSG TEMPLATE covering what this site actually does
// (a contact form, a language cookie, hosting). Add/remove sections to match
// reality (e.g. analytics), fill the [BITTE AUSFÜLLEN] fields, have it reviewed,
// then remove the `robots` noindex below.
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const isDe = params.lang === "de"
  return {
    title: isDe ? "Datenschutzerklärung" : "Privacy Policy",
    description: isDe
      ? "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO."
      : "Information on the processing of personal data under the GDPR.",
    robots: { index: false, follow: true }, // TODO: remove once reviewed
    alternates: { canonical: `/${params.lang}/datenschutz` },
  }
}

const TODO = "[BITTE AUSFÜLLEN]"

export default function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-2xl py-6">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">
        Datenschutzerklärung
      </h1>

      <div className="text-foreground/70 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Verantwortlicher
          </h2>
          <p>
            {siteConfig.name}
            <br />
            {TODO} (Anschrift)
            <br />
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
            Kontaktaufnahme
          </h2>
          <p>
            Wenn Sie das Kontaktformular nutzen oder uns per E-Mail schreiben,
            verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name,
            E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer
            Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Cookies
          </h2>
          <p>
            Diese Website setzt ein technisch notwendiges Cookie
            (<code>NEXT_LOCALE</code>), das Ihre Sprachauswahl speichert. Es ist
            für den Betrieb erforderlich (Art. 6 Abs. 1 lit. f DSGVO) und dient
            nicht der Analyse. {TODO}: weitere Dienste (z. B. Analytics) ergänzen,
            falls eingesetzt.
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Hosting
          </h2>
          <p>
            Die Website wird bei einem Dienstleister gehostet ({TODO}, z. B.
            Vercel Inc.). Dabei werden Server-Logfiles (u. a. IP-Adresse,
            Zeitpunkt, abgerufene Seite) zur Sicherstellung des Betriebs
            verarbeitet. Mit dem Anbieter besteht ein Auftragsverarbeitungs-
            vertrag (Art. 28 DSGVO).
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">
            Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
            Sie können sich außerdem bei der österreichischen Datenschutzbehörde
            beschweren.
          </p>
        </section>

        <p className="text-foreground/40 text-sm">
          Vorlage – an den tatsächlichen Einsatz anpassen, {TODO}-Felder
          ausfüllen, juristisch prüfen lassen und anschließend das{" "}
          <code>noindex</code> entfernen.
        </p>
      </div>
    </article>
  )
}
