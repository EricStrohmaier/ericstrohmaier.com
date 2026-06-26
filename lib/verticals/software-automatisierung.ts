import type { Vertical } from "./types"

/**
 * Vertical for SMBs stuck on manual / Excel processes — custom software,
 * automation and internal tools. Grounded in real automation projects
 * (Friends in Flats, alpen.digital, PromptSloth) and the canonical offers
 * (lib/offers.ts). No invented testimonials or client metrics. The ROI band
 * is a clearly-hypothetical payback example, not a fabricated statistic.
 */
export const softwareAutomatisierung: Vertical = {
  slug: "software-automatisierung",
  accent: "blue",
  proofSlugs: ["friends-in-flats", "alpen-digital", "promptsloth"],
  content: {
    de: {
      metaTitle:
        "Prozesse automatisieren & Excel ersetzen — Software für KMU in AT & DE",
      metaDescription:
        "Individuelle Software, Automatisierung und interne Tools für KMU in Österreich & Deutschland: Excel ablösen, Doppelerfassung beenden, bestehende Tools verbinden und Routinearbeit automatisieren — Software, die sich selbst bezahlt macht. DSGVO-konform, EU-Hosting.",
      keywords: [
        "Excel ersetzen durch Software",
        "Prozesse automatisieren lassen",
        "internes Tool entwickeln lassen",
        "individuelle Software vs Standardsoftware",
        "Workflow Automatisierung KMU",
        "Digitalisierung KMU Österreich",
        "Software für KMU",
        "Geschäftsprozesse automatisieren",
      ],
      eyebrow: "Für KMU in AT & DE",
      h1: "Schluss mit Excel-Chaos und Doppelerfassung — individuelle Software für Ihr KMU.",
      subtitle:
        "Ich baue KMU interne Tools, Automatisierungen und Schnittstellen, die fragile Excel-Tabellen ablösen, Routinearbeit erledigen und Ihre bestehenden Programme verbinden — damit Ihr Wachstum nicht länger in Handarbeit erstickt.",
      trustLine:
        "Aufgebaut mit echten KMU und Startups in der DACH-Region",
      primaryCtaLabel: "Kostenloses Erstgespräch buchen",
      secondaryCtaLabel: "Was Sie bekommen",

      problemLabel: "Das Problem",
      problemHeading:
        "Ihr Wachstum erstickt nicht an fehlenden Aufträgen — sondern an Handarbeit.",
      problemIntro:
        "Jede Stunde, die in Copy-Paste, Doppelerfassung und das Suchen in fünf Tabellen fließt, fehlt Ihnen beim Geschäft. Und mit jeder manuellen Eingabe schleicht sich ein Fehler ein, den später jemand teuer ausbügelt.",
      pains: [
        {
          title: "Alles hängt an einer Excel-Tabelle",
          copy: "Ihr halber Betrieb läuft über eine gewachsene Tabelle, die nur einer wirklich versteht. Eine falsche Formel, eine gelöschte Zeile — und niemand merkt es, bis es zu spät ist.",
        },
        {
          title: "Dieselben Daten, dreimal eingetippt",
          copy: "Auftrag ins eine Tool, Rechnung ins nächste, Liste fürs Lager — die gleichen Daten wandern per Hand von A nach B nach C. Zeitfresser und Fehlerquelle zugleich.",
        },
        {
          title: "Routinearbeit frisst Ihre Woche",
          copy: "Exporte zusammenkopieren, Mails von Hand verschicken, Listen abgleichen: Aufgaben, die jede Woche wiederkehren und niemanden weiterbringen — aber Stunden kosten.",
        },
      ],

      roi: {
        label: "Was sich das rechnet",
        heading: "Schon ein paar gesparte Stunden pro Woche zahlen das Tool zurück.",
        statValue: "Std./Woche",
        statLabel: "eingesparte Handarbeit — Woche für Woche",
        copy: "Rechnen Sie selbst: Sparen Sie pro Woche nur ein paar Stunden Routinearbeit zu Ihrem Stundensatz, hat sich die Software über das Jahr längst bezahlt gemacht. Alles darüber — weniger Fehler, schnellere Abläufe — ist reine Zugabe.",
      },

      solutionLabel: "Die Lösung",
      solutionHeading: "Ihre Abläufe — endlich in einem System.",
      solutionIntro:
        "Statt Standardsoftware, in die Sie sich quetschen, bekommen Sie ein Werkzeug, das genau Ihren Prozess abbildet — und Ihnen die Handarbeit abnimmt.",
      features: [
        {
          icon: "spreadsheet",
          title: "Internes Tool statt Excel",
          copy: "Ihre gewachsene Tabelle wird zu einer echten Anwendung — mit klaren Eingabemasken, Rechten je Mitarbeiter und Daten, die nicht mehr beim falschen Klick verschwinden.",
        },
        {
          icon: "workflow",
          title: "Prozesse automatisiert",
          copy: "Wiederkehrende Abläufe — von der Erfassung bis zum Versand — laufen automatisch im Hintergrund, statt jede Woche aufs Neue Ihre Zeit zu blockieren.",
        },
        {
          icon: "plug",
          title: "Ihre Tools verbunden",
          copy: "Schnittstellen zwischen Ihren bestehenden Programmen, damit Daten von selbst fließen — keine Doppelerfassung, kein Hin- und Herkopieren mehr.",
        },
        {
          icon: "bot",
          title: "KI für wiederkehrende Arbeit",
          copy: "Dokumente auslesen, Texte vorbereiten, Anfragen vorsortieren: KI übernimmt die stumpfe Fleißarbeit — datenschutzkonform und mit Ihnen als letzter Kontrolle.",
        },
        {
          icon: "lineChart",
          title: "Klares Reporting auf Knopfdruck",
          copy: "Ein Dashboard zeigt Ihre Zahlen in Echtzeit — statt am Monatsende Tabellen zusammenzusuchen, sehen Sie auf einen Blick, wo Sie stehen.",
        },
        {
          icon: "database",
          title: "Eine Wahrheit statt fünf Tabellen",
          copy: "Alle Daten an einem Ort, mit klaren Regeln und Prüfungen — kein Suchen in widersprüchlichen Versionen, weniger Fehler und Doppelerfassung von Anfang an.",
        },
      ],

      processLabel: "So funktioniert's",
      processHeading: "In drei Schritten zu Ihrem System.",
      steps: [
        {
          title: "Erstgespräch & Prozess-Check",
          copy: "Wir schauen uns Ihre größten Zeitfresser an und finden den Ablauf, dessen Automatisierung sich für Sie am schnellsten rechnet.",
        },
        {
          title: "Aufbau & Launch",
          copy: "Ich baue Ihr Tool — eng an Ihrem echten Prozess, in überschaubaren Schritten. Den Großteil der Arbeit übernehme ich, Ihr Aufwand bleibt minimal.",
        },
        {
          title: "Läuft & wächst mit",
          copy: "Das System läuft und spart ab Tag eins Zeit — und ich erweitere es Schritt für Schritt um den nächsten Ablauf, sobald er sich lohnt.",
        },
      ],

      midCtaHeading: "Bereit, die Handarbeit loszuwerden?",
      midCtaCopy:
        "Im kostenlosen Erstgespräch finden wir den Ablauf mit dem größten Hebel — ganz ohne Verkaufsdruck.",

      why: {
        label: "Warum es funktioniert",
        heading: "Individuell statt Standard — und genau das rechnet sich.",
        facts: [
          {
            icon: "gauge",
            title: "Software passt sich Ihnen an — nicht umgekehrt.",
            copy: "Standardsoftware zwingt Ihren Betrieb in fremde Abläufe. Ein individuelles Tool bildet genau Ihren Prozess ab — deshalb wird es wirklich benutzt und spart echte Zeit.",
          },
          {
            icon: "repeat",
            title: "Einmal automatisiert, jede Woche gespart.",
            copy: "Manuelle Arbeit kostet jede Woche aufs Neue. Ein automatisierter Ablauf wird einmal gebaut und arbeitet danach unermüdlich für Sie — rund um die Uhr.",
          },
        ],
      },

      proofHeading: "Aus echten Projekten",

      ownership: {
        label: "Sie besitzen alles",
        heading: "Ihr System. Ihre Daten. Keine Abhängigkeit.",
        intro:
          "Sie bleiben, weil sich das System rechnet — nicht, weil ein Vertrag Sie festhält.",
        points: [
          {
            icon: "lock",
            title: "Kein Lock-in",
            copy: "Keine Knebelverträge, keine Abhängigkeit von einem Anbieter. Sie können jederzeit alles mitnehmen und selbst weiter betreiben.",
          },
          {
            icon: "database",
            title: "Code & Daten gehören Ihnen",
            copy: "Voller Export — die komplette Anwendung und alle Daten sind und bleiben Ihr Eigentum, nicht in einer fremden Cloud gefangen.",
          },
          {
            icon: "shield",
            title: "DSGVO-konform, EU-Hosting",
            copy: "Ihre Daten liegen in der EU und werden datenschutzkonform verarbeitet — sicher für den Einsatz in Österreich und Deutschland.",
          },
        ],
      },

      offerLabel: "Preise",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "Eine einmalige Umsetzung baut Ihr Tool oder Ihre Automatisierung auf, danach wählen Sie die laufende Betreuung, die zu Ihnen passt. Klarer Preis, klares Ergebnis.",
      offerNote:
        "Keine Verträge. Monatlich kündbar. Sie bleiben, weil sich das System rechnet.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Lohnt sich individuelle Software gegenüber Standardsoftware?",
          a: "Wenn Ihr Ablauf sauber in eine Standardlösung passt, nehmen Sie die — das sage ich Ihnen ehrlich. Individuelle Software lohnt sich genau dann, wenn Sie Ihren Prozess gerade an die Software anpassen müssen statt umgekehrt. Sie bildet genau Ihren Ablauf ab und spart deshalb wirklich Zeit.",
        },
        {
          q: "Müssen wir unsere bestehenden Tools wegwerfen?",
          a: "Nein. In den meisten Fällen verbinde ich Ihre vorhandenen Programme über Schnittstellen, statt sie zu ersetzen. Sie behalten, was funktioniert — und beenden nur die Doppelerfassung dazwischen.",
        },
        {
          q: "Wie lange dauert die Umsetzung?",
          a: "Wir starten klein: oft ist ein erster nützlicher Ablauf in wenigen Wochen live. Danach erweitern wir Schritt für Schritt — Ihr Aufwand bleibt dabei minimal, den Großteil übernehme ich.",
        },
        {
          q: "Ist das DSGVO-konform — auch mit KI?",
          a: "Ja. Die Daten werden in der EU gehostet und datenschutzkonform verarbeitet — wichtig und sicher für den Einsatz in Österreich und Deutschland. Auch beim Einsatz von KI behalten Sie die Kontrolle über Ihre Daten.",
        },
        {
          q: "Gehört uns das Tool wirklich?",
          a: "Ja. Code und Daten gehören Ihnen, mit vollem Export. Sie können jederzeit alles mitnehmen und selbst weiter betreiben — keine Abhängigkeit, kein Lock-in.",
        },
        {
          q: "Was, wenn ich gar nicht technisch bin?",
          a: "Genau dafür bin ich da. Sie müssen nichts über Software wissen — Sie kennen Ihren Betrieb, ich übersetze das in ein Tool. In klarer Sprache, ohne Fachjargon.",
        },
      ],

      finalCtaHeading:
        "Während Sie das lesen, tippt jemand in Ihrem Betrieb dieselben Daten zum dritten Mal ein.",
      finalCtaCopy:
        "Lassen Sie uns das ändern. Im kostenlosen Erstgespräch zeige ich Ihnen, welcher Ablauf sich bei Ihnen am schnellsten automatisieren lässt — und was er Sie gerade kostet.",
      finalCtaLabel: "Kostenloses Erstgespräch buchen",
    },

    en: {
      metaTitle:
        "Automate Processes & Replace Excel — Software for SMBs in Austria & Germany",
      metaDescription:
        "Custom software, automation and internal tools for SMBs in Austria & Germany: replace Excel, end double entry, connect your existing tools and automate routine work — software that pays for itself. GDPR-compliant, EU hosting.",
      keywords: [
        "replace Excel with software",
        "automate business processes",
        "build internal tool",
        "custom software vs off-the-shelf",
        "workflow automation for SMBs",
        "SME digitalisation Austria",
        "software for SMBs",
        "process automation",
      ],
      eyebrow: "For SMBs in AT & DE",
      h1: "End the Excel chaos and double entry — custom software for your business.",
      subtitle:
        "I build SMBs internal tools, automations and integrations that replace fragile spreadsheets, handle routine work and connect your existing programs — so your growth no longer suffocates in manual labour.",
      trustLine:
        "Built with real SMBs and startups across the DACH region",
      primaryCtaLabel: "Book a free intro call",
      secondaryCtaLabel: "What you get",

      problemLabel: "The problem",
      problemHeading:
        "Your growth isn't held back by a lack of orders — it's held back by manual work.",
      problemIntro:
        "Every hour spent on copy-paste, double entry and hunting through five spreadsheets is an hour away from the business. And with every manual entry a mistake creeps in that someone later fixes at a cost.",
      pains: [
        {
          title: "Everything hangs on one spreadsheet",
          copy: "Half your operation runs on a spreadsheet that grew over the years and only one person truly understands. One wrong formula, one deleted row — and nobody notices until it's too late.",
        },
        {
          title: "The same data, typed in three times",
          copy: "Order into one tool, invoice into the next, list for the warehouse — the same data moves by hand from A to B to C. A time sink and a source of errors at once.",
        },
        {
          title: "Routine work eats your week",
          copy: "Copying exports together, sending emails by hand, reconciling lists: tasks that recur every week and move nothing forward — but cost hours.",
        },
      ],

      roi: {
        label: "What it pays back",
        heading: "Even a few saved hours a week pay the tool back.",
        statValue: "hrs/week",
        statLabel: "manual work saved — week after week",
        copy: "Do the math: save just a few hours of routine work a week at your hourly rate, and over the year the software has long paid for itself. Everything beyond that — fewer errors, faster workflows — is pure bonus.",
      },

      solutionLabel: "The solution",
      solutionHeading: "Your workflows — finally in one system.",
      solutionIntro:
        "Instead of off-the-shelf software you have to squeeze into, you get a tool that mirrors exactly your process — and takes the manual work off your plate.",
      features: [
        {
          icon: "spreadsheet",
          title: "An internal tool instead of Excel",
          copy: "Your overgrown spreadsheet becomes a real application — with clean input forms, per-user permissions and data that no longer vanishes on the wrong click.",
        },
        {
          icon: "workflow",
          title: "Processes automated",
          copy: "Recurring workflows — from capture to dispatch — run automatically in the background, instead of blocking your time week after week.",
        },
        {
          icon: "plug",
          title: "Your tools connected",
          copy: "Integrations between your existing programs so data flows by itself — no double entry, no copying back and forth.",
        },
        {
          icon: "bot",
          title: "AI for repetitive work",
          copy: "Reading documents, drafting text, pre-sorting inquiries: AI handles the dull busywork — GDPR-compliant and with you as the final check.",
        },
        {
          icon: "lineChart",
          title: "Clear reporting at the push of a button",
          copy: "A dashboard shows your numbers in real time — instead of pulling spreadsheets together at month's end, you see where you stand at a glance.",
        },
        {
          icon: "database",
          title: "One source of truth, not five spreadsheets",
          copy: "All your data in one place, with clear rules and checks — no searching through conflicting versions, fewer errors and less double entry from the start.",
        },
      ],

      processLabel: "How it works",
      processHeading: "Three steps to your system.",
      steps: [
        {
          title: "Intro call & process check",
          copy: "We look at your biggest time sinks and find the workflow whose automation pays off fastest for you.",
        },
        {
          title: "Build & launch",
          copy: "I build your tool — close to your real process, in manageable steps. I do the heavy lifting, your effort stays minimal.",
        },
        {
          title: "Runs & grows with you",
          copy: "The system runs and saves time from day one — and I extend it step by step with the next workflow, as soon as it's worth it.",
        },
      ],

      midCtaHeading: "Ready to get rid of the manual work?",
      midCtaCopy:
        "On a free intro call we find the workflow with the biggest lever — no sales pressure.",

      why: {
        label: "Why it works",
        heading: "Custom instead of off-the-shelf — and that's exactly what pays off.",
        facts: [
          {
            icon: "gauge",
            title: "Software adapts to you — not the other way around.",
            copy: "Off-the-shelf software forces your operation into someone else's workflow. A custom tool mirrors exactly your process — which is why it actually gets used and saves real time.",
          },
          {
            icon: "repeat",
            title: "Automate once, save every week.",
            copy: "Manual work costs you again every single week. An automated workflow is built once and then works tirelessly for you — around the clock.",
          },
        ],
      },

      proofHeading: "From real projects",

      ownership: {
        label: "You own everything",
        heading: "Your system. Your data. No lock-in.",
        intro:
          "You stay because the system pays for itself — not because a contract holds you.",
        points: [
          {
            icon: "lock",
            title: "No lock-in",
            copy: "No restrictive contracts, no dependency on a single vendor. You can take everything with you and keep running it yourself any time.",
          },
          {
            icon: "database",
            title: "Code & data are yours",
            copy: "Full export — the entire application and all data are and remain your property, not trapped in someone else's cloud.",
          },
          {
            icon: "shield",
            title: "GDPR-compliant, EU hosting",
            copy: "Your data is hosted in the EU and processed in line with GDPR — safe for use in Austria and Germany.",
          },
        ],
      },

      offerLabel: "Pricing",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "A one-off build creates your tool or automation, then you choose the ongoing support that fits. Clear price, clear outcome.",
      offerNote:
        "No contracts. Cancel monthly. You stay because the system pays for itself.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "Is custom software worth it over off-the-shelf?",
          a: "If your workflow fits cleanly into a standard solution, take it — I'll tell you that honestly. Custom software is worth it precisely when you're bending your process to fit the software instead of the other way around. It mirrors exactly your workflow and therefore saves real time.",
        },
        {
          q: "Do we have to throw away our existing tools?",
          a: "No. In most cases I connect your existing programs through integrations rather than replacing them. You keep what works — and only end the double entry in between.",
        },
        {
          q: "How long does it take to build?",
          a: "We start small: often a first useful workflow is live within a few weeks. After that we extend step by step — your effort stays minimal, I do the heavy lifting.",
        },
        {
          q: "Is it GDPR-compliant — even with AI?",
          a: "Yes. Data is hosted in the EU and processed in line with GDPR — important and safe for use in Austria and Germany. Even when AI is involved, you keep control over your data.",
        },
        {
          q: "Do we really own the tool?",
          a: "Yes. Code and data are yours, with full export. You can take everything and keep running it yourself any time — no dependency, no lock-in.",
        },
        {
          q: "What if I'm not technical at all?",
          a: "That's exactly what I'm here for. You don't need to know anything about software — you know your business, I translate it into a tool. In plain language, no jargon.",
        },
      ],

      finalCtaHeading:
        "While you're reading this, someone in your business is typing the same data in for the third time.",
      finalCtaCopy:
        "Let's change that. On a free intro call I'll show you which workflow you can automate fastest — and what it's costing you right now.",
      finalCtaLabel: "Book a free intro call",
    },
  },
}
