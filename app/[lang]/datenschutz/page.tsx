import type { Metadata } from "next"
import type { Locale } from "@/i18n-config"
import { siteConfig } from "@/site-config"

// DSGVO/DSG privacy policy covering what this site actually does: a contact
// form, one technically-necessary language cookie, and hosting via Vercel. No
// analytics/tracking. A quick legal review is still recommended.
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
    alternates: { canonical: `/${params.lang}/datenschutz` },
  }
}

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
            Sonnenweg 11, 3071 Böheimkirchen, Österreich
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
            Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO. Die
            Daten werden gelöscht, sobald sie für den Zweck nicht mehr benötigt
            werden.
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">Cookies</h2>
          <p>
            Diese Website verwendet keine Tracking- oder Analyse-Cookies. Gesetzt
            wird ausschließlich ein technisch notwendiges Cookie
            (<code>NEXT_LOCALE</code>), das Ihre Sprachauswahl (Deutsch/Englisch)
            speichert. Es ist für den Betrieb der Website erforderlich
            (Art. 6 Abs. 1 lit. f DSGVO) und dient nicht der Auswertung Ihres
            Verhaltens.
          </p>
        </section>

        <section>
          <h2 className="text-foreground mb-2 text-lg font-semibold">Hosting</h2>
          <p>
            Die Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf werden
            technisch notwendige Server-Logfiles (u. a. IP-Adresse, Zeitpunkt,
            abgerufene Seite, User-Agent) verarbeitet, um den sicheren Betrieb zu
            gewährleisten (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Anbieter besteht
            ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO); eine Datenübermittlung
            in die USA erfolgt auf Basis der EU-Standardvertragsklauseln bzw. des
            EU-US Data Privacy Framework (Art. 46 DSGVO).
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
            (dsb.gv.at) beschweren.
          </p>
        </section>
      </div>
    </article>
  )
}
