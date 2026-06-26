import type { Comparison } from "./types"

/**
 * Conceptual comparison: custom software vs. off-the-shelf. Fair both ways —
 * standard software is genuinely the right call for common needs. Funnels to
 * the software-automatisierung service. No invented vendor specifics.
 */
export const individuelleVsStandard: Comparison = {
  slug: "individuelle-software-vs-standardsoftware",
  accent: "emerald",
  funnelTo: "leistungen/software-automatisierung",
  proofSlugs: ["friends-in-flats", "promptsloth"],
  content: {
    de: {
      metaTitle:
        "Individuelle Software vs. Standardsoftware — was lohnt sich für KMU?",
      metaDescription:
        "Individuelle Software oder Standardsoftware? Der ehrliche Vergleich für KMU: Passgenauigkeit, Kosten, Eigentum, Integration und Wettbewerbsvorteil — und wann sich welche Variante wirklich rechnet.",
      keywords: [
        "individuelle Software vs Standardsoftware",
        "Individualsoftware oder Standardsoftware",
        "Custom Software vs Standardsoftware",
        "wann individuelle Software",
        "Standardsoftware Nachteile",
        "Individualsoftware KMU",
      ],
      eyebrow: "Individuelle Software vs. Standardsoftware",
      h1: "Individuell oder von der Stange — was rechnet sich für Sie?",
      subtitle:
        "Standardsoftware ist günstig im Start und für verbreitete Aufgaben oft genau richtig. Aber sobald Ihre Abläufe vom Standard abweichen, zahlen Sie mit Workarounds, Zusatztools und Zeit.",
      intro:
        "Die kurze Antwort: Standardsoftware nehmen Sie für alles Verbreitete (Buchhaltung, E-Mail, Standard-CRM). Individuelle Software lohnt sich dort, wo Standard nicht passt, Sie Geld oder Stunden kostet oder Ihnen einen Vorsprung verschafft — etwas, das die Konkurrenz nicht hat. Unten sehen Sie, wann was sinnvoll ist.",
      primaryCtaLabel: "Kostenloses Gespräch buchen",

      tableHeading: "Individuelle Software vs. Standardsoftware",
      oursLabel: "Individuelle Software",
      theirsLabel: "Standardsoftware",
      rows: [
        {
          label: "Passgenauigkeit",
          ours: "Genau Ihre Abläufe",
          theirs: "Sie passen sich der Software an",
        },
        {
          label: "Kosten",
          ours: "Höher am Anfang, danach planbar",
          theirs: "Günstiger Start, laufende Lizenzen pro Nutzer",
        },
        {
          label: "Eigentum",
          ours: "Gehört Ihnen",
          theirs: "Lizenz, Daten beim Anbieter",
        },
        {
          label: "Integration",
          ours: "Verbindet Ihre bestehenden Tools",
          theirs: "Nur, was der Anbieter vorsieht",
        },
        {
          label: "Wettbewerbsvorteil",
          ours: "Etwas, das die Konkurrenz nicht hat",
          theirs: "Gleiche Software wie alle",
        },
        {
          label: "Skalierung",
          ours: "Wächst mit Ihren Anforderungen",
          theirs: "An den Funktionsumfang gebunden",
        },
      ],

      reasonsLabel: "Wann individuell",
      reasonsHeading: "Anzeichen, dass Standard Sie ausbremst.",
      reasons: [
        {
          icon: "spreadsheet",
          title: "Sie arbeiten mit Excel-Workarounds",
          copy: "Wenn die eigentliche Arbeit in Tabellen neben der Software passiert, passt die Software nicht zu Ihren Abläufen — ein klares Zeichen für eine individuelle Lösung.",
        },
        {
          icon: "plug",
          title: "Ihre Tools sprechen nicht miteinander",
          copy: "Daten doppelt eintippen, Exportieren, Importieren: Individuelle Software verbindet Ihre bestehenden Systeme zu einem Ablauf — ohne Copy-Paste.",
        },
        {
          icon: "lock",
          title: "Sie wollen besitzen, nicht mieten",
          copy: "Kein Abo pro Nutzer, keine Abhängigkeit. Was gebaut wird, gehört Ihnen — mit vollem Zugriff und Export.",
        },
        {
          icon: "sparkles",
          title: "Sie wollen sich abheben",
          copy: "Wenn alle dieselbe Software nutzen, ist sie kein Vorteil. Etwas Eigenes kann genau der Unterschied sein, der Sie schneller oder besser macht.",
        },
        {
          icon: "trending",
          title: "Standard kostet Sie messbar Zeit",
          copy: "Wenn ein wiederkehrender Ablauf jede Woche Stunden frisst, zahlt sich eine maßgeschneiderte Lösung oft schon nach Monaten aus.",
        },
        {
          icon: "layers",
          title: "Sie sind zwischen Tools eingeklemmt",
          copy: "Drei Tools, die fast passen, sind teurer und mühsamer als ein Tool, das genau passt. Individuell heißt: ein System statt vieler Kompromisse.",
        },
      ],

      honestLabel: "Ehrlich gesagt",
      honestHeading: "Wann Standardsoftware die klügere Wahl ist.",
      honestCopy:
        "Für verbreitete, gut gelöste Aufgaben müssen Sie das Rad nicht neu erfinden: Buchhaltung, E-Mail, Kalender, ein einfaches Standard-CRM — hier ist Standardsoftware günstiger, schneller startklar und völlig ausreichend. Individuelle Software lohnt sich nicht für alles, sondern genau dort, wo Standard Sie einengt, Geld oder Zeit kostet oder Ihnen einen echten Vorsprung verschafft. Im kostenlosen Gespräch sage ich Ihnen ehrlich, ob sich eine individuelle Lösung für Sie überhaupt rechnet — oder ob ein Standardtool reicht.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Ist individuelle Software nicht immer teurer?",
          a: "Am Anfang ja. Aber Standardsoftware hat versteckte Kosten: Lizenzen pro Nutzer, Workarounds, mehrere Tools und verlorene Zeit. Wenn ein Ablauf Sie jede Woche Stunden kostet, rechnet sich eine maßgeschneiderte Lösung oft schneller als gedacht.",
        },
        {
          q: "Können wir nicht einfach mehrere Standardtools kombinieren?",
          a: "Oft ja — bis die Tools nicht miteinander sprechen. Dann zahlen Sie für mehrere Abos und tippen Daten doppelt ein. Individuelle Software kann diese Tools verbinden oder ersetzen, je nachdem, was günstiger ist.",
        },
        {
          q: "Was, wenn sich unsere Anforderungen ändern?",
          a: "Genau hier ist Individuell im Vorteil: Das System wird erweitert, wie Sie es brauchen, statt auf die Roadmap eines Anbieters zu warten. Es wächst mit Ihrem Unternehmen.",
        },
        {
          q: "Wie finde ich heraus, was für mich passt?",
          a: "Im kostenlosen Gespräch schauen wir uns Ihre Abläufe an. Wenn ein Standardtool reicht, sage ich Ihnen das — ehrlich. Individuell empfehle ich nur, wenn es sich für Sie wirklich rechnet.",
        },
      ],

      serviceLinkLabel: "Zu individueller Software & Automatisierung",
      finalCtaHeading: "Nicht sicher, ob sich individuell für Sie lohnt?",
      finalCtaCopy:
        "Genau dafür ist das Gespräch da. Wir schauen ehrlich, wo Standard reicht und wo sich Maßarbeit rechnet — ohne Verkaufsdruck.",
      finalCtaLabel: "Kostenloses Gespräch buchen",
    },

    en: {
      metaTitle: "Custom Software vs. Off-the-Shelf — what's worth it for SMBs?",
      metaDescription:
        "Custom software or off-the-shelf? The honest comparison for SMBs: fit, cost, ownership, integration and competitive edge — and when each one actually pays off.",
      keywords: [
        "custom software vs off-the-shelf",
        "custom vs standard software",
        "when custom software",
        "off-the-shelf software downsides",
        "custom software SMB",
      ],
      eyebrow: "Custom vs. off-the-shelf software",
      h1: "Custom or off-the-shelf — what pays off for you?",
      subtitle:
        "Off-the-shelf software is cheap to start and often exactly right for common tasks. But the moment your workflows deviate from the standard, you pay in workarounds, extra tools and time.",
      intro:
        "The short answer: use off-the-shelf for everything common (accounting, email, standard CRM). Custom software pays off where standard doesn't fit, costs you money or hours, or gives you an edge — something competitors don't have. Below you'll see when each makes sense.",
      primaryCtaLabel: "Book a free call",

      tableHeading: "Custom software vs. off-the-shelf",
      oursLabel: "Custom software",
      theirsLabel: "Off-the-shelf",
      rows: [
        {
          label: "Fit",
          ours: "Exactly your workflows",
          theirs: "You adapt to the software",
        },
        {
          label: "Cost",
          ours: "Higher upfront, then predictable",
          theirs: "Cheaper start, ongoing per-seat licenses",
        },
        {
          label: "Ownership",
          ours: "Yours",
          theirs: "License, data with the vendor",
        },
        {
          label: "Integration",
          ours: "Connects your existing tools",
          theirs: "Only what the vendor allows",
        },
        {
          label: "Competitive edge",
          ours: "Something competitors don't have",
          theirs: "Same software as everyone",
        },
        {
          label: "Scaling",
          ours: "Grows with your needs",
          theirs: "Bound to the feature set",
        },
      ],

      reasonsLabel: "When custom",
      reasonsHeading: "Signs the standard is holding you back.",
      reasons: [
        {
          icon: "spreadsheet",
          title: "You work around it in Excel",
          copy: "If the real work happens in spreadsheets next to the software, the software doesn't fit your workflows — a clear sign for a custom solution.",
        },
        {
          icon: "plug",
          title: "Your tools don't talk to each other",
          copy: "Typing data twice, exporting, importing: custom software connects your existing systems into one workflow — no copy-paste.",
        },
        {
          icon: "lock",
          title: "You want to own, not rent",
          copy: "No per-seat subscription, no dependency. What's built is yours — with full access and export.",
        },
        {
          icon: "sparkles",
          title: "You want to stand out",
          copy: "When everyone uses the same software, it's no advantage. Something of your own can be exactly the difference that makes you faster or better.",
        },
        {
          icon: "trending",
          title: "Standard costs you measurable time",
          copy: "If a recurring workflow eats hours every week, a tailored solution often pays off within months.",
        },
        {
          icon: "layers",
          title: "You're stuck between tools",
          copy: "Three tools that almost fit are pricier and clunkier than one that fits exactly. Custom means one system instead of many compromises.",
        },
      ],

      honestLabel: "Honestly",
      honestHeading: "When off-the-shelf is the smarter choice.",
      honestCopy:
        "For common, well-solved tasks you don't need to reinvent the wheel: accounting, email, calendar, a simple standard CRM — here off-the-shelf is cheaper, faster to start and entirely sufficient. Custom software isn't worth it for everything, but exactly where standard constrains you, costs money or time, or gives you a real edge. On a free call I'll tell you honestly whether a custom solution even pays off for you — or whether a standard tool is enough.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "Isn't custom software always more expensive?",
          a: "Upfront, yes. But off-the-shelf has hidden costs: per-seat licenses, workarounds, multiple tools and lost time. If a workflow costs you hours every week, a tailored solution often pays off faster than expected.",
        },
        {
          q: "Can't we just combine several standard tools?",
          a: "Often yes — until the tools don't talk to each other. Then you pay for several subscriptions and type data twice. Custom software can connect or replace those tools, whichever is cheaper.",
        },
        {
          q: "What if our requirements change?",
          a: "This is exactly where custom wins: the system gets extended as you need, instead of waiting on a vendor's roadmap. It grows with your business.",
        },
        {
          q: "How do I find out what fits me?",
          a: "On a free call we look at your workflows. If a standard tool is enough, I'll tell you — honestly. I only recommend custom when it genuinely pays off for you.",
        },
      ],

      serviceLinkLabel: "To custom software & automation",
      finalCtaHeading: "Not sure if custom pays off for you?",
      finalCtaCopy:
        "That's what the call is for. We honestly look at where standard is enough and where custom pays off — no sales pressure.",
      finalCtaLabel: "Book a free call",
    },
  },
}
