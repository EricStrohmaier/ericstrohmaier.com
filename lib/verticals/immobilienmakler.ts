import type { Vertical } from "./types"

/**
 * Reference vertical. Grounded in the real Imperia Immobilien client and the
 * canonical offers (lib/offers.ts). No invented testimonials or metrics.
 * The other verticals mirror this structure.
 */
export const immobilienmakler: Vertical = {
  slug: "immobilienmakler",
  accent: "blue",
  proofSlugs: ["imperia-immobilien", "friends-in-flats"],
  content: {
    de: {
      metaTitle:
        "Software & Website für Immobilienmakler in Österreich & Deutschland",
      metaDescription:
        "Individuelle Software und Websites für Immobilienmakler: Anfragen automatisch erfassen und beantworten, Objekte verwalten, Termine buchen lassen — damit kein Abschluss mehr verloren geht. DSGVO-konform, EU-Hosting.",
      keywords: [
        "Software für Immobilienmakler",
        "Maklersoftware Österreich",
        "Immobilienmakler Website",
        "CRM für Immobilienmakler",
        "Makler CRM",
        "Lead-System Immobilien",
        "Immobilien Website erstellen lassen",
        "MaklerOS",
      ],
      eyebrow: "Für Immobilienmakler in AT & DE",
      h1: "Mehr Abschlüsse, weniger verlorene Anfragen — Software für Ihr Maklerbüro.",
      subtitle:
        "Ich baue Maklern eine Website und ein System, das jede Anfrage in Sekunden erfasst und beantwortet, automatisch nachfasst, Ihre Objekte verwaltet und Termine direkt buchen lässt — statt verstreut über WhatsApp, E-Mail und Excel.",
      trustLine: "Aufgebaut mit echten Maklern & Immobilienkunden in der DACH-Region",
      primaryCtaLabel: "Kostenloses Erstgespräch buchen",
      secondaryCtaLabel: "Was Sie bekommen",

      problemLabel: "Das Problem",
      problemHeading:
        "Sie verlieren keine Leads, weil Sie schlecht sind — sondern weil Sie zu beschäftigt sind.",
      problemIntro:
        "Jede Anfrage, die zu spät oder gar nicht beantwortet wird, landet beim Mitbewerber. Das passiert jede Woche — leise, ohne dass Sie es merken.",
      pains: [
        {
          title: "Antwort dauert Stunden",
          copy: "Eine Anfrage kommt rein, Sie sind im Termin — und melden sich erst Stunden später. Da hat der Interessent längst drei andere Makler angeschrieben.",
        },
        {
          title: "Die meisten sind noch nicht so weit",
          copy: "Die wenigsten Verkäufer entscheiden sich beim ersten Kontakt. Wer nicht sofort kaufbereit ist, wird nie wieder kontaktiert — und ist für immer weg.",
        },
        {
          title: "Anfragen gehen unter",
          copy: "Zwischen WhatsApp, E-Mail, Portal-Postfach und Anrufliste verschwinden Leads spurlos. Jede verlorene Anfrage ist eine verlorene Provision.",
        },
      ],

      roi: {
        label: "Was Sie das kostet",
        heading: "Jeder verlorene Lead ist eine verlorene Provision.",
        statValue: "1 Abschluss",
        statLabel: "Ihre durchschnittliche Provision",
        copy: "Schon ein einziger zusätzlicher Abschluss pro Jahr bezahlt das System um ein Vielfaches. Alles darüber ist reiner Gewinn — Monat für Monat.",
      },

      solutionLabel: "Die Lösung",
      solutionHeading: "Alles an einem Ort — was Sie bekommen.",
      solutionIntro:
        "Alles, was Ihr Büro braucht, in einem System — von der ersten Anfrage bis zum unterschriebenen Vertrag.",
      features: [
        {
          icon: "home",
          title: "Bewertungs-Landingpage",
          copy: "„Was ist meine Immobilie wert?“ — der bewährte Lead-Magnet, der Verkäufer von selbst zu Ihnen bringt und ihre Kontaktdaten erfasst.",
        },
        {
          icon: "zap",
          title: "Sofortige automatische Antwort",
          copy: "Jede neue Anfrage bekommt in Sekunden eine Reaktion — auch nachts, am Wochenende und wenn Sie im Termin sind.",
        },
        {
          icon: "repeat",
          title: "Automatische Nachfass-Sequenz",
          copy: "Das System bleibt über Wochen dran und pflegt jeden Lead mit den richtigen Nachrichten — bis ein Termin gebucht ist.",
        },
        {
          icon: "building",
          title: "Objekt-CRM & Landingpages",
          copy: "Verwalten Sie alle Objekte an einem Ort — mit Status, Interessenten je Listing und einer fertigen Landingpage pro Immobilie zum Teilen.",
        },
        {
          icon: "calendar",
          title: "Integriertes Buchungssystem",
          copy: "Interessenten buchen Besichtigungen und Erstgespräche direkt in Ihren Kalender — kein Telefon-Pingpong, kein doppeltes Eintragen.",
        },
        {
          icon: "users",
          title: "Team-Zugänge & Dashboard",
          copy: "Laden Sie Mitarbeiter ein, verteilen Sie Leads und Objekte und behalten Sie im gemeinsamen Dashboard alles im Blick.",
        },
      ],

      processLabel: "So funktioniert's",
      processHeading: "In drei Schritten zu Ihrem System.",
      steps: [
        {
          title: "Erstgespräch",
          copy: "Wir schauen uns Ihren aktuellen Lead-Prozess an und finden, wo Ihnen die meisten Abschlüsse durchrutschen.",
        },
        {
          title: "Aufbau & Launch",
          copy: "Ich baue Ihr komplettes System auf und bringe es live — den Großteil der Arbeit übernehme ich, Ihr Aufwand bleibt minimal.",
        },
        {
          title: "Läuft & wird optimiert",
          copy: "Sie bekommen Termine, ich kümmere mich um die Technik — und verbessere das System laufend weiter.",
        },
      ],

      midCtaHeading: "Bereit, keinen Lead mehr zu verlieren?",
      midCtaCopy:
        "Im kostenlosen Erstgespräch finden wir Ihren größten Hebel — ganz ohne Verkaufsdruck.",

      why: {
        label: "Warum es funktioniert",
        heading: "Zwei einfache Wahrheiten — konsequent automatisiert.",
        facts: [
          {
            icon: "gauge",
            title: "Speed-to-Lead: Wer in Minuten reagiert, gewinnt.",
            copy: "Interessenten entscheiden sich fast immer für den, der zuerst antwortet. Ihr System reagiert nicht in Minuten — sondern in Sekunden, rund um die Uhr.",
          },
          {
            icon: "clock",
            title: "Dranbleiben: Die meisten Abschlüsse kommen beim Nachfassen.",
            copy: "Selten klappt es beim ersten Kontakt. Das System fasst automatisch nach — freundlich und konsequent — und hört nie auf.",
          },
        ],
      },

      proofHeading: "Aus echten Projekten",

      ownership: {
        label: "Sie besitzen alles",
        heading: "Ihr System. Ihre Daten. Keine Abhängigkeit.",
        intro:
          "Sie bleiben, weil das System sich rechnet — nicht, weil ein Vertrag Sie festhält.",
        points: [
          {
            icon: "lock",
            title: "Kein Lock-in",
            copy: "Keine Knebelverträge, keine Abhängigkeit. Sie können jederzeit alles mitnehmen und selbst hosten.",
          },
          {
            icon: "database",
            title: "Code & Daten gehören Ihnen",
            copy: "Voller Export — das komplette System, alle Kontakte und alle Objektdaten sind und bleiben Ihr Eigentum.",
          },
          {
            icon: "shield",
            title: "DSGVO-konform, EU-Hosting",
            copy: "Ihre Daten liegen in der EU und werden datenschutzkonform verarbeitet — sicher für AT & DE.",
          },
        ],
      },

      offerLabel: "Preise",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "Eine einmalige Einrichtung baut Ihr System auf, danach wählen Sie die laufende Betreuung, die zu Ihnen passt. Klarer Preis, klares Ergebnis.",
      offerNote:
        "Keine Verträge. Monatlich kündbar. Sie bleiben, weil sich das System rechnet.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Wie lange dauert der Aufbau?",
          a: "In der Regel ist Ihr System in wenigen Wochen live. Den Großteil der Arbeit übernehme ich — Ihr Aufwand bleibt minimal.",
        },
        {
          q: "Gehört mir das System wirklich?",
          a: "Ja. Code und Daten gehören Ihnen, mit vollem Export. Sie können jederzeit alles mitnehmen und selbst weiter betreiben — keine Abhängigkeit.",
        },
        {
          q: "Gibt es eine Vertragsbindung?",
          a: "Nein. Die monatlichen Pläne sind jederzeit kündbar. Keine Knebelverträge — Sie bleiben, weil sich das System rechnet.",
        },
        {
          q: "Ist das DSGVO-konform?",
          a: "Ja. Die Daten werden in der EU gehostet und datenschutzkonform verarbeitet — wichtig und sicher für den Einsatz in Österreich und Deutschland.",
        },
        {
          q: "Was, wenn ich schon eine Website habe?",
          a: "Kein Problem. Wir integrieren das System in Ihre bestehende Website oder ersetzen sie — je nachdem, was für Sie mehr Abschlüsse bringt.",
        },
      ],

      finalCtaHeading:
        "Während Sie das lesen, schreibt Ihr nächster Verkäufer einen anderen Makler an.",
      finalCtaCopy:
        "Lassen Sie uns das ändern. Im kostenlosen Erstgespräch zeige ich Ihnen, wie Ihr System ab Tag eins für Sie arbeitet.",
      finalCtaLabel: "Kostenloses Erstgespräch buchen",
    },

    en: {
      metaTitle:
        "Software & Websites for Real Estate Agents in Austria & Germany",
      metaDescription:
        "Custom software and websites for real estate agents: capture and answer every inquiry in seconds, manage listings, let clients book viewings — so you never lose a deal. GDPR-compliant, EU hosting.",
      keywords: [
        "software for real estate agents",
        "real estate CRM",
        "real estate agent website",
        "lead system real estate",
        "real estate software Austria",
        "MaklerOS",
      ],
      eyebrow: "For real estate agents in AT & DE",
      h1: "More closings, fewer lost inquiries — software for your real estate office.",
      subtitle:
        "I build agents a website and a system that captures and answers every inquiry in seconds, follows up automatically, manages your listings and lets clients book viewings directly — instead of scattered across WhatsApp, email and spreadsheets.",
      trustLine: "Built with real agents & real-estate clients across the DACH region",
      primaryCtaLabel: "Book a free intro call",
      secondaryCtaLabel: "What you get",

      problemLabel: "The problem",
      problemHeading:
        "You don't lose leads because you're bad — you lose them because you're busy.",
      problemIntro:
        "Every inquiry answered too late, or not at all, goes to a competitor. It happens every week — quietly, without you noticing.",
      pains: [
        {
          title: "Replies take hours",
          copy: "An inquiry comes in, you're in a meeting — and you reply hours later. By then the prospect has already messaged three other agents.",
        },
        {
          title: "Most aren't ready yet",
          copy: "Few sellers decide on first contact. Anyone not ready to buy right now never gets contacted again — and is gone for good.",
        },
        {
          title: "Inquiries slip through",
          copy: "Between WhatsApp, email, portal inbox and call list, leads vanish. Every lost inquiry is a lost commission.",
        },
      ],

      roi: {
        label: "What it costs you",
        heading: "Every lost lead is a lost commission.",
        statValue: "1 closing",
        statLabel: "Your average commission",
        copy: "A single extra closing per year pays for the system many times over. Everything beyond that is pure profit — month after month.",
      },

      solutionLabel: "The solution",
      solutionHeading: "Everything in one place — what you get.",
      solutionIntro:
        "Everything your office needs in one system — from the first inquiry to the signed contract.",
      features: [
        {
          icon: "home",
          title: "Valuation landing page",
          copy: "“What is my property worth?” — the proven lead magnet that brings sellers to you and captures their details.",
        },
        {
          icon: "zap",
          title: "Instant automatic reply",
          copy: "Every new inquiry gets a response in seconds — at night, on weekends and while you're in a meeting.",
        },
        {
          icon: "repeat",
          title: "Automatic follow-up sequence",
          copy: "The system stays on every lead for weeks with the right messages — until a meeting is booked.",
        },
        {
          icon: "building",
          title: "Listing CRM & landing pages",
          copy: "Manage every property in one place — with status, interested buyers per listing and a ready-made landing page per property to share.",
        },
        {
          icon: "calendar",
          title: "Built-in booking",
          copy: "Prospects book viewings and intro calls straight into your calendar — no phone tag, no double entry.",
        },
        {
          icon: "users",
          title: "Team access & dashboard",
          copy: "Invite staff, assign leads and listings and keep everything in view in a shared dashboard.",
        },
      ],

      processLabel: "How it works",
      processHeading: "Three steps to your system.",
      steps: [
        {
          title: "Intro call",
          copy: "We look at your current lead process and find where most closings slip away.",
        },
        {
          title: "Build & launch",
          copy: "I build your complete system and take it live — I do the heavy lifting, your effort stays minimal.",
        },
        {
          title: "Runs & improves",
          copy: "You get meetings, I handle the tech — and keep improving the system over time.",
        },
      ],

      midCtaHeading: "Ready to stop losing leads?",
      midCtaCopy:
        "On a free intro call we find your biggest lever — no sales pressure.",

      why: {
        label: "Why it works",
        heading: "Two simple truths — consistently automated.",
        facts: [
          {
            icon: "gauge",
            title: "Speed-to-lead: whoever replies in minutes wins.",
            copy: "Prospects almost always go with whoever answers first. Your system reacts not in minutes — but in seconds, around the clock.",
          },
          {
            icon: "clock",
            title: "Persistence: most closings come from follow-up.",
            copy: "It rarely works on first contact. The system follows up automatically — friendly and consistent — and never stops.",
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
            copy: "No restrictive contracts, no dependency. You can take everything with you and self-host any time.",
          },
          {
            icon: "database",
            title: "Code & data are yours",
            copy: "Full export — the entire system, all contacts and all listing data are and remain your property.",
          },
          {
            icon: "shield",
            title: "GDPR-compliant, EU hosting",
            copy: "Your data is hosted in the EU and processed in line with GDPR — safe for AT & DE.",
          },
        ],
      },

      offerLabel: "Pricing",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "A one-off setup builds your system, then you choose the ongoing support that fits. Clear price, clear outcome.",
      offerNote:
        "No contracts. Cancel monthly. You stay because the system pays for itself.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "How long does the build take?",
          a: "Your system is usually live within a few weeks. I do the heavy lifting — your effort stays minimal.",
        },
        {
          q: "Do I really own the system?",
          a: "Yes. Code and data are yours, with full export. You can take everything and run it yourself any time — no dependency.",
        },
        {
          q: "Is there a lock-in contract?",
          a: "No. The monthly plans can be cancelled any time. No restrictive contracts — you stay because the system pays for itself.",
        },
        {
          q: "Is it GDPR-compliant?",
          a: "Yes. Data is hosted in the EU and processed in line with GDPR — important and safe for use in Austria and Germany.",
        },
        {
          q: "What if I already have a website?",
          a: "No problem. We integrate the system into your existing site or replace it — whichever brings you more closings.",
        },
      ],

      finalCtaHeading:
        "While you're reading this, your next seller is messaging another agent.",
      finalCtaCopy:
        "Let's change that. On a free intro call I'll show you how your system works for you from day one.",
      finalCtaLabel: "Book a free intro call",
    },
  },
}
