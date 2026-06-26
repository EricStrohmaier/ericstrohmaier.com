import type { Vertical } from "./types"

/**
 * Steuerberater, Rechtsanwälte & Kanzleien (AT & DE). Conservative, trust-led
 * buyer: professionalism, discretion and DSGVO matter more than hype. Grounded
 * in the real Kinderversicherer + alpen.digital projects and the canonical
 * offers (lib/offers.ts). No invented testimonials or metrics — the optional
 * roi band is a self-evident "one new client" example, not a statistic.
 */
export const steuerberater: Vertical = {
  slug: "steuerberater",
  accent: "violet",
  proofSlugs: ["kinderversicherer", "alpen-digital"],
  content: {
    de: {
      metaTitle:
        "Website & Mandantenportal für Steuerberater & Kanzleien in AT & DE",
      metaDescription:
        "Ein seriöser Webauftritt und ein DSGVO-konformes Mandantenportal für Steuerberater, Rechtsanwälte & Kanzleien: sicherer Dokumenten-Upload, Online-Terminbuchung, digitales Onboarding — weniger E-Mail-Hin-und-Her. EU-Hosting, DSGVO-konform.",
      keywords: [
        "Website für Steuerberater",
        "Website für Kanzlei",
        "Steuerberater Homepage erstellen lassen",
        "Website Rechtsanwalt",
        "Mandantenportal",
        "DSGVO Mandantenportal",
        "Kanzlei Website",
      ],
      eyebrow: "Für Steuerberater, Rechtsanwälte & Kanzleien in AT & DE",
      h1: "Ein seriöser Auftritt und ein sicheres Mandantenportal — für Ihre Kanzlei.",
      subtitle:
        "Ich baue Kanzleien eine professionelle Website und ein einfaches, DSGVO-konformes Mandantenportal: sicherer Dokumenten-Upload, Online-Terminbuchung für Erstgespräche und digitales Onboarding — statt eines veralteten Webauftritts und ständigen E-Mail-Hin-und-Hers.",
      trustLine:
        "Sichere Web-Plattformen für anspruchsvolle Dienstleister in der DACH-Region — DSGVO-konform, EU-Hosting",
      primaryCtaLabel: "Kostenloses Erstgespräch buchen",
      secondaryCtaLabel: "Was Sie bekommen",

      problemLabel: "Das Problem",
      problemHeading:
        "Ihre Beratung ist hochwertig — der erste Eindruck im Netz ist es oft nicht.",
      problemIntro:
        "Mandanten prüfen eine Kanzlei heute online, bevor sie zum Hörer greifen. Eine veraltete Website und manuelle Abläufe kosten Sie dabei leise Vertrauen und jede Woche wertvolle Stunden.",
      pains: [
        {
          title: "Die Website passt nicht zur Kanzlei",
          copy: "Ihr Webauftritt wirkt veralteter, als Ihre Arbeit tatsächlich ist. Wer Diskretion und Kompetenz sucht, springt bei einem unsicheren ersten Eindruck wieder ab — oft unbemerkt.",
        },
        {
          title: "E-Mail-Pingpong mit Mandanten",
          copy: "Unterlagen kommen in zig einzelnen E-Mails, unverschlüsselt und unsortiert. Das Suchen, Zuordnen und Nachfassen frisst Zeit, die für die eigentliche Beratung fehlt.",
        },
        {
          title: "Termine & Onboarding von Hand",
          copy: "Erstgespräche werden telefonisch koordiniert, neue Mandanten manuell aufgenommen. Jeder Schritt läuft über Sie oder Ihr Sekretariat — und bremst die ganze Kanzlei.",
        },
      ],

      roi: {
        label: "Was sich daraus rechnet",
        heading: "Ein einziges zusätzliches Mandat trägt das Ganze.",
        statValue: "1 Mandat",
        statLabel: "Eine mehrjährige Mandatsbeziehung",
        copy: "Ein einziges neues Dauermandat pro Jahr deckt die Investition um ein Vielfaches — dazu kommen die Stunden, die Sie und Ihr Team durch weniger E-Mail-Pingpong jede Woche zurückgewinnen.",
      },

      solutionLabel: "Die Lösung",
      solutionHeading:
        "Ein professioneller Auftritt — und ein Portal, das Mandanten gern nutzen.",
      solutionIntro:
        "Alles, was Ihre Kanzlei nach außen braucht, in einem System — vom ersten Eindruck bis zum sicheren Dokumentenaustausch.",
      features: [
        {
          icon: "globe",
          title: "Professionelle Kanzlei-Website",
          copy: "Ein Auftritt, der Ihre Kompetenz und Seriosität widerspiegelt: klar strukturiert, schnell und auf jedem Gerät einwandfrei — der Standard, den Mandanten heute erwarten.",
        },
        {
          icon: "lock",
          title: "DSGVO-konformes Mandantenportal",
          copy: "Ein geschützter Bereich, in dem Mandanten Unterlagen sicher mit Ihnen austauschen — statt sensibler Dokumente in unverschlüsselten E-Mail-Anhängen.",
        },
        {
          icon: "fileCheck",
          title: "Sicherer Dokumenten-Upload",
          copy: "Mandanten laden Belege und Unterlagen verschlüsselt hoch, sauber dem richtigen Mandat zugeordnet — kein Suchen mehr im überfüllten Postfach.",
        },
        {
          icon: "calendar",
          title: "Online-Terminbuchung",
          copy: "Interessenten buchen Erstgespräche direkt in Ihren Kalender — ohne Telefon-Pingpong, ohne doppeltes Eintragen, rund um die Uhr.",
        },
        {
          icon: "clipboard",
          title: "Digitales Mandanten-Onboarding",
          copy: "Neue Mandanten werden über klare Formulare strukturiert und vollständig aufgenommen — ohne manuelles Nachfassen nach fehlenden Angaben.",
        },
        {
          icon: "inbox",
          title: "Schluss mit E-Mail-Pingpong",
          copy: "Kommunikation und Unterlagen an einem Ort, statt verstreut über zig E-Mails — Sie und Ihre Mandanten behalten jederzeit den Überblick.",
        },
      ],

      processLabel: "So funktioniert's",
      processHeading: "In drei Schritten zu Ihrem Auftritt.",
      steps: [
        {
          title: "Erstgespräch",
          copy: "Wir schauen uns Ihren aktuellen Auftritt und Ihre Mandanten-Abläufe an und finden, was Sie am meisten Zeit und Vertrauen kostet.",
        },
        {
          title: "Aufbau & Launch",
          copy: "Ich baue Website und Portal auf und bringe alles live — den Großteil der Arbeit übernehme ich, Ihr Aufwand bleibt minimal.",
        },
        {
          title: "Läuft & wird betreut",
          copy: "Sie arbeiten an Ihren Mandaten, ich kümmere mich um Technik, Sicherheit und laufende Verbesserungen — ein Ansprechpartner, keine Agentur.",
        },
      ],

      midCtaHeading: "Bereit für einen Auftritt, der zu Ihrer Kanzlei passt?",
      midCtaCopy:
        "Im kostenlosen Erstgespräch schauen wir uns Ihre Website und Abläufe an — unverbindlich und ohne Verkaufsdruck.",

      why: {
        label: "Warum es funktioniert",
        heading: "Vertrauen entscheidet — lange bevor der erste Anruf kommt.",
        facts: [
          {
            icon: "scale",
            title: "Mandanten prüfen Sie online, bevor sie anrufen.",
            copy: "Bei einer Vertrauensfrage wie Steuer oder Recht zählt der erste Eindruck. Eine seriöse, aktuelle Website ist heute fester Teil Ihrer Glaubwürdigkeit.",
          },
          {
            icon: "shield",
            title: "Diskretion und Datenschutz sind Ihr Geschäft.",
            copy: "Ein sicheres, DSGVO-konformes Portal zeigt Mandanten, dass Sie ihre Unterlagen ernst nehmen — und schützt zugleich Ihre Kanzlei.",
          },
        ],
      },

      proofHeading: "Aus echten Projekten",

      ownership: {
        label: "Sie besitzen alles",
        heading: "Ihr Auftritt. Ihre Daten. Keine Abhängigkeit.",
        intro:
          "Sie bleiben, weil die Zusammenarbeit funktioniert — nicht, weil ein Vertrag Sie festhält.",
        points: [
          {
            icon: "lock",
            title: "Kein Lock-in",
            copy: "Keine Knebelverträge, keine Abhängigkeit. Sie können jederzeit alles mitnehmen und selbst hosten.",
          },
          {
            icon: "database",
            title: "Code & Daten gehören Ihnen",
            copy: "Voller Export: Website, Portal und alle Mandantendaten sind und bleiben Ihr Eigentum.",
          },
          {
            icon: "shield",
            title: "DSGVO-konform, EU-Hosting",
            copy: "Alle Daten liegen in der EU und werden datenschutzkonform verarbeitet, der Dokumentenaustausch erfolgt verschlüsselt — Pflicht für Kanzleien in AT & DE.",
          },
        ],
      },

      offerLabel: "Preise",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "Eine einmalige Einrichtung baut Website und Portal auf, danach wählen Sie die laufende Betreuung, die zu Ihrer Kanzlei passt. Klarer Preis, klares Ergebnis.",
      offerNote:
        "Keine Verträge. Monatlich kündbar. Sie bleiben, weil die Zusammenarbeit sich rechnet.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Ist das Mandantenportal wirklich DSGVO-konform?",
          a: "Ja. Alle Daten werden in der EU gehostet und datenschutzkonform verarbeitet, der Dokumentenaustausch erfolgt verschlüsselt — ausgelegt auf die hohen Datenschutz-Anforderungen von Kanzleien in Österreich und Deutschland.",
        },
        {
          q: "Können Sie meine bestehende Website übernehmen?",
          a: "Ja. Wir modernisieren Ihren bestehenden Auftritt oder bauen ihn neu auf — je nachdem, was professioneller und pflegeleichter ist. Das Mandantenportal lässt sich in beiden Fällen sauber anbinden.",
        },
        {
          q: "Wie lange dauert der Aufbau?",
          a: "In der Regel sind Website und Portal in wenigen Wochen live. Den Großteil der Arbeit übernehme ich — Ihr Aufwand bleibt bewusst minimal.",
        },
        {
          q: "Gehört mir am Ende alles?",
          a: "Ja. Code und Daten gehören Ihnen, mit vollem Export. Sie können jederzeit alles mitnehmen und selbst weiter betreiben — keine Abhängigkeit.",
        },
        {
          q: "Gibt es eine Vertragsbindung?",
          a: "Nein. Die laufende Betreuung ist monatlich kündbar. Keine Knebelverträge — Sie bleiben, weil die Zusammenarbeit funktioniert.",
        },
        {
          q: "Ist das auch für eine kleine Kanzlei sinnvoll?",
          a: "Gerade dann. Sie treten nach außen so professionell auf wie eine große Kanzlei und sparen sich die manuelle Arbeit, für die Ihnen im Tagesgeschäft die Zeit fehlt.",
        },
      ],

      finalCtaHeading:
        "Ihr nächster Mandant schaut sich gerade Ihre Website an.",
      finalCtaCopy:
        "Sorgen wir dafür, dass sie überzeugt. Im kostenlosen Erstgespräch zeige ich Ihnen, wie Auftritt und Portal Ihre Kanzlei seriöser und gleichzeitig entspannter machen.",
      finalCtaLabel: "Kostenloses Erstgespräch buchen",
    },

    en: {
      metaTitle:
        "Website & Client Portal for Tax Advisors & Law Firms in AT & DE",
      metaDescription:
        "A professional web presence and a GDPR-compliant client portal for tax advisors, lawyers & firms: secure document upload, online appointment booking, digital onboarding — less email back-and-forth. EU hosting, GDPR-compliant.",
      keywords: [
        "website for tax advisors",
        "website for law firm",
        "tax advisor website",
        "lawyer website",
        "client portal",
        "GDPR client portal",
        "law firm website",
      ],
      eyebrow: "For tax advisors, lawyers & firms in AT & DE",
      h1: "A professional presence and a secure client portal — for your firm.",
      subtitle:
        "I build firms a professional website and a simple, GDPR-compliant client portal: secure document upload, online booking for intro consultations and digital onboarding — instead of an outdated site and constant email back-and-forth.",
      trustLine:
        "Secure web platforms for demanding professional-services clients across the DACH region — GDPR-compliant, EU hosting",
      primaryCtaLabel: "Book a free intro call",
      secondaryCtaLabel: "What you get",

      problemLabel: "The problem",
      problemHeading:
        "Your advice is high-end — your first impression online often isn't.",
      problemIntro:
        "Clients check out a firm online today before they ever pick up the phone. An outdated website and manual processes quietly cost you trust — and valuable hours every week.",
      pains: [
        {
          title: "The website doesn't match the firm",
          copy: "Your web presence looks more dated than your work actually is. Anyone seeking discretion and expertise quietly backs off at an uncertain first impression — often without you ever noticing.",
        },
        {
          title: "Email ping-pong with clients",
          copy: "Documents arrive in dozens of separate emails, unencrypted and unsorted. Searching, filing and chasing them eats the time you need for the actual advisory work.",
        },
        {
          title: "Appointments & onboarding by hand",
          copy: "Intro consultations are coordinated by phone, new clients taken on manually. Every step runs through you or your front desk — and slows the whole firm down.",
        },
      ],

      roi: {
        label: "What it adds up to",
        heading: "A single additional client carries the whole thing.",
        statValue: "1 client",
        statLabel: "One multi-year client relationship",
        copy: "A single new ongoing client per year covers the investment many times over — plus the hours you and your team win back every week from less email ping-pong.",
      },

      solutionLabel: "The solution",
      solutionHeading:
        "A professional presence — and a portal clients are glad to use.",
      solutionIntro:
        "Everything your firm needs on the outside, in one system — from the first impression to the secure exchange of documents.",
      features: [
        {
          icon: "globe",
          title: "Professional firm website",
          copy: "A presence that reflects your expertise and credibility: cleanly structured, fast and flawless on every device — the standard clients expect today.",
        },
        {
          icon: "lock",
          title: "GDPR-compliant client portal",
          copy: "A protected area where clients exchange documents with you securely — instead of sensitive files in unencrypted email attachments.",
        },
        {
          icon: "fileCheck",
          title: "Secure document upload",
          copy: "Clients upload receipts and documents encrypted, neatly assigned to the right case — no more digging through an overflowing inbox.",
        },
        {
          icon: "calendar",
          title: "Online appointment booking",
          copy: "Prospects book intro consultations straight into your calendar — no phone tag, no double entry, around the clock.",
        },
        {
          icon: "clipboard",
          title: "Digital client onboarding",
          copy: "New clients are taken on through clear forms — structured and complete, with no manual chasing for missing details.",
        },
        {
          icon: "inbox",
          title: "End of the email ping-pong",
          copy: "Communication and documents in one place, instead of scattered across dozens of emails — you and your clients keep the overview at all times.",
        },
      ],

      processLabel: "How it works",
      processHeading: "Three steps to your presence.",
      steps: [
        {
          title: "Intro call",
          copy: "We look at your current presence and client workflows and find what's costing you the most time and trust.",
        },
        {
          title: "Build & launch",
          copy: "I build your website and portal and take everything live — I do the heavy lifting, your effort stays minimal.",
        },
        {
          title: "Runs & is looked after",
          copy: "You work on your cases, I handle the tech, security and ongoing improvements — one point of contact, no agency.",
        },
      ],

      midCtaHeading: "Ready for a presence that matches your firm?",
      midCtaCopy:
        "On a free intro call we look at your website and workflows — no obligation, no sales pressure.",

      why: {
        label: "Why it works",
        heading: "Trust decides — long before the first call comes in.",
        facts: [
          {
            icon: "scale",
            title: "Clients check you online before they call.",
            copy: "On a question of trust like tax or law, the first impression counts. A credible, up-to-date website is now a firm part of your credibility.",
          },
          {
            icon: "shield",
            title: "Discretion and data protection are your business.",
            copy: "A secure, GDPR-compliant portal shows clients you take their documents seriously — and protects your firm at the same time.",
          },
        ],
      },

      proofHeading: "From real projects",

      ownership: {
        label: "You own everything",
        heading: "Your presence. Your data. No lock-in.",
        intro:
          "You stay because the partnership works — not because a contract holds you.",
        points: [
          {
            icon: "lock",
            title: "No lock-in",
            copy: "No restrictive contracts, no dependency. You can take everything with you and self-host any time.",
          },
          {
            icon: "database",
            title: "Code & data are yours",
            copy: "Full export: the website, portal and all client data are and remain your property.",
          },
          {
            icon: "shield",
            title: "GDPR-compliant, EU hosting",
            copy: "All data is hosted in the EU and processed in line with GDPR, with encrypted document exchange — a must for firms in AT & DE.",
          },
        ],
      },

      offerLabel: "Pricing",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "A one-off setup builds your website and portal, then you choose the ongoing support that fits your firm. Clear price, clear outcome.",
      offerNote:
        "No contracts. Cancel monthly. You stay because the partnership pays for itself.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "Is the client portal really GDPR-compliant?",
          a: "Yes. All data is hosted in the EU and processed in line with GDPR, with encrypted document exchange — built for the high data-protection requirements of firms in Austria and Germany.",
        },
        {
          q: "Can you take over my existing website?",
          a: "Yes. We modernise your existing presence or rebuild it — whichever is more professional and easier to maintain. The client portal connects cleanly either way.",
        },
        {
          q: "How long does the build take?",
          a: "Your website and portal are usually live within a few weeks. I do the heavy lifting — your effort stays deliberately minimal.",
        },
        {
          q: "Do I own everything in the end?",
          a: "Yes. Code and data are yours, with full export. You can take everything and run it yourself any time — no dependency.",
        },
        {
          q: "Is there a lock-in contract?",
          a: "No. The ongoing support can be cancelled monthly. No restrictive contracts — you stay because the partnership works.",
        },
        {
          q: "Does this make sense for a small firm too?",
          a: "Especially then. You present as professionally as a large firm while saving the manual work you simply don't have time for in day-to-day practice.",
        },
      ],

      finalCtaHeading: "Your next client is looking at your website right now.",
      finalCtaCopy:
        "Let's make sure it convinces them. On a free intro call I'll show you how your presence and portal make your firm both more credible and more relaxed.",
      finalCtaLabel: "Book a free intro call",
    },
  },
}
