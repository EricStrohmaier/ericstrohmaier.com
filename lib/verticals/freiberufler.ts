import type { Vertical } from "./types"

/**
 * Freelancers / self-employed solo professionals vertical. Authentic angle:
 * Eric is a one-person operation who builds the free invoice + time-tracking
 * tools they already use. Grounded in the real Alina Licht solo-creative client
 * and PromptSloth (his own solo-built product). Prices from lib/offers.ts.
 */
export const freiberufler: Vertical = {
  slug: "freiberufler",
  accent: "emerald",
  proofSlugs: ["alina-licht", "promptsloth"],
  // Solos rarely need the €2,500/mo Partner plan — show Care (with the €0-build
  // framing) and Custom. Care is index 1 here so it renders as the featured card.
  offerIds: ["custom-software", "website-care"],
  content: {
    de: {
      metaTitle:
        "Website für Freiberufler & Selbstständige erstellen lassen",
      metaDescription:
        "Professionelle Website für Freiberufler & Selbstständige — ohne Agenturpreise. Von einem Solo-Entwickler, der die kostenlosen Rechnungs- & Zeiterfassungs-Tools baut, die Sie nutzen. Website ohne Aufbaukosten ab 249 €/Monat. DSGVO-konform.",
      keywords: [
        "Website für Freiberufler",
        "Website für Selbstständige",
        "Homepage für Freelancer",
        "Webseite erstellen lassen Selbstständige",
        "Website für Berater Coach",
        "Personal Branding Website",
        "Website für Einzelunternehmer",
        "günstige Website Selbstständige",
      ],
      eyebrow: "Für Freiberufler & Selbstständige",
      h1: "Eine Website, die Sie professionell aussehen lässt — und Kunden bringt.",
      subtitle:
        "Ob Berater, Coach, Kreative, IT-Freelancer, Fotograf oder Therapeut: Ich baue Selbstständigen eine seriöse Website und die Tools, die Sie wirklich brauchen — ohne Agenturpreise. Ich bin selbst Solo-Unternehmer und baue sogar die kostenlosen Rechnungs- und Zeiterfassungs-Tools, die Sie vielleicht schon nutzen.",
      trustLine:
        "Von einem Solo-Entwickler, der versteht, wie Selbstständige arbeiten",
      primaryCtaLabel: "Kostenloses Gespräch buchen",
      secondaryCtaLabel: "Was Sie bekommen",

      problemLabel: "Das Problem",
      problemHeading:
        "Als Selbstständiger sind Sie Ihr eigenes Marketing — und dafür bleibt nie Zeit.",
      problemIntro:
        "Sie sind großartig in Ihrem Fach. Aber online wirkt das nicht immer so — und genau das kostet Sie Aufträge an Kollegen, die nicht besser sind, nur sichtbarer.",
      pains: [
        {
          title: "Keine Zeit, kein Agenturbudget",
          copy: "Agenturen sind teuer und langsam, eine eigene Website schieben Sie seit Monaten vor sich her. Also bleibt alles beim alten LinkedIn-Profil oder der Seite von 2019.",
        },
        {
          title: "Baukasten sieht aus wie Baukasten",
          copy: "Eine generische Vorlage lässt auch eine starke Selbstständige austauschbar wirken. Wer Sie nicht ernst nimmt, fragt gar nicht erst an.",
        },
        {
          title: "Papierkram frisst Ihre Zeit",
          copy: "Angebote, Rechnungen, Stunden erfassen, Termine koordinieren — die unbezahlte Arbeit rund um die bezahlte Arbeit zieht sich durch jeden Abend.",
        },
      ],

      roi: {
        label: "Was es bringt",
        heading: "Ein einziger gewonnener Auftrag zahlt die Website.",
        statValue: "1 Auftrag",
        statLabel: "deckt die Website locker",
        copy: "Ein einziger Kunde, der über Ihre neue Website kommt und sonst woanders gelandet wäre, deckt die Kosten um ein Vielfaches. Und ein professioneller Auftritt lässt Sie auch höhere Honorare selbstbewusst aufrufen.",
      },

      solutionLabel: "Die Lösung",
      solutionHeading: "Auftritt & Tools für Solo-Profis — was Sie bekommen.",
      solutionIntro:
        "Alles, damit Sie professionell wirken, gefunden werden und weniger Zeit mit Admin verlieren — passend zur Realität einer Ein-Personen-Firma.",
      features: [
        {
          icon: "globe",
          title: "Professionelle Personal-Brand-Website",
          copy: "Eine Seite, die Ihre Arbeit, Ihre Referenzen und Sie als Person seriös zeigt — individuell gestaltet, nicht von der Stange. Sie wirken so kompetent, wie Sie sind.",
        },
        {
          icon: "mobile",
          title: "Schnell, mobil & gefunden bei Google",
          copy: "Blitzschnell auf jedem Gerät und für lokale wie fachliche Suchen optimiert — damit potenzielle Kunden Sie finden, nicht nur Ihre Visitenkarte.",
        },
        {
          icon: "calendar",
          title: "Kontakt & Terminbuchung",
          copy: "Interessenten fragen direkt an oder buchen ein Erstgespräch in Ihren Kalender — kein E-Mail-Hin-und-Her, keine verpassten Anfragen.",
        },
        {
          icon: "receipt",
          title: "Rechnungen & Zeiterfassung inklusive Idee",
          copy: "Ich baue die kostenlosen Tools, die Selbstständige täglich nutzen — Rechnungen und Zeiterfassung. Auf Wunsch binde ich genau solche Helfer in Ihren Ablauf ein.",
        },
        {
          icon: "workflow",
          title: "Admin automatisieren",
          copy: "Angebot, Rechnung, Follow-up: Wir automatisieren die wiederkehrende Fleißarbeit, damit Sie Ihre Abende zurückbekommen — und mehr Zeit für bezahlte Arbeit haben.",
        },
        {
          icon: "sparkles",
          title: "Ein Ansprechpartner, keine Agentur",
          copy: "Sie reden direkt mit dem, der baut — schnell, unkompliziert, auf Augenhöhe. Genau eine Person, die Ihr Geschäft versteht.",
        },
      ],

      processLabel: "So funktioniert's",
      processHeading: "In drei Schritten online — ohne Aufwand für Sie.",
      steps: [
        {
          title: "Kennenlernen",
          copy: "Wir sprechen kurz über Sie, Ihre Kunden und Ihr Angebot. Ich sage Ihnen ehrlich, was Sinn macht — und was Sie sich sparen können.",
        },
        {
          title: "Aufbau & Launch",
          copy: "Ich baue Ihre Website und richte Kontakt, Buchung und Tools ein. Sie liefern ein paar Infos und Bilder — den Rest übernehme ich.",
        },
        {
          title: "Läuft & wird betreut",
          copy: "Hosting, Updates und kleine Änderungen übernehme ich laufend. Sie kümmern sich um Ihre Kunden, ich um Ihre Technik.",
        },
      ],

      midCtaHeading: "Bereit, online so gut auszusehen, wie Sie arbeiten?",
      midCtaCopy:
        "Im kostenlosen Gespräch schauen wir, was für Sie als Selbstständige am meisten bringt — ohne Verkaufsdruck.",

      why: {
        label: "Warum es funktioniert",
        heading: "Eine Person zu eins — ohne Reibungsverluste.",
        facts: [
          {
            icon: "message",
            title: "Sie reden mit dem, der baut.",
            copy: "Keine Projektmanager, keine Schleifen, kein Aufpreis für jedes Wort. Eine Person, die zuhört, baut und betreut — so wie Sie es bei Ihren Kunden auch tun.",
          },
          {
            icon: "trending",
            title: "Ein guter Auftritt rechtfertigt höhere Honorare.",
            copy: "Wer professionell wirkt, kann selbstbewusster anbieten. Eine starke Website ist kein Kostenpunkt — sie zahlt sich über bessere Aufträge aus.",
          },
        ],
      },

      proofHeading: "Aus echten Projekten",

      ownership: {
        label: "Sie besitzen alles",
        heading: "Ihre Website. Ihre Domain. Keine Abhängigkeit.",
        intro:
          "Sie bleiben, weil sich die Zusammenarbeit lohnt — nicht, weil ein Vertrag Sie festhält.",
        points: [
          {
            icon: "lock",
            title: "Kein Lock-in",
            copy: "Monatlich kündbar, keine Knebelverträge. Sie können Website und Domain jederzeit mitnehmen.",
          },
          {
            icon: "database",
            title: "Alles gehört Ihnen",
            copy: "Domain, Inhalte und Daten sind und bleiben Ihr Eigentum — mit vollem Zugriff.",
          },
          {
            icon: "shield",
            title: "DSGVO-konform, EU-Hosting",
            copy: "Ihre Seite und alle Daten liegen in der EU und werden datenschutzkonform verarbeitet.",
          },
        ],
      },

      offerLabel: "Preise",
      offerHeading: "Gemacht für Solo-Budgets.",
      offerIntro:
        "Der einfachste Weg für Selbstständige: Ich baue Ihre Website ohne Aufbaukosten, Sie zahlen nur die laufende Betreuung ab 249 €/Monat — monatlich kündbar. Brauchen Sie ein individuelles Tool, baue ich das als Projekt.",
      offerNote:
        "Keine Verträge, kein Lock-in. Sie bleiben, weil es sich für Sie rechnet.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Ich bin nur eine Person — lohnt sich das überhaupt?",
          a: "Gerade dann. Als Selbstständige sind Sie Ihr eigenes Marketing. Eine professionelle Website und etwas Automatisierung verschaffen Ihnen genau die Sichtbarkeit und Zeit, die als Einzelperson am knappsten sind.",
        },
        {
          q: "Was kostet das ohne Aufbaukosten genau?",
          a: "Für Website-Projekte baue ich Ihre Seite ohne einmalige Aufbaukosten — Sie zahlen nur die laufende Betreuung ab 249 €/Monat (Hosting, Sicherheit, Updates, kleine Änderungen). Monatlich kündbar.",
        },
        {
          q: "Können Sie mir auch bei Rechnungen und Zeiterfassung helfen?",
          a: "Ja. Ich baue genau solche Tools — meine kostenlosen Rechnungs- und Zeiterfassungs-Tools können Sie sofort nutzen, und auf Wunsch binde ich passende Helfer direkt in Ihren Ablauf ein.",
        },
        {
          q: "Ich habe schon eine alte Website oder nur LinkedIn — reicht das?",
          a: "Für den ersten Eindruck oft nicht. Wir machen daraus einen Auftritt, der Vertrauen schafft und Anfragen bringt — aufbauend auf dem, was Sie schon haben.",
        },
        {
          q: "Ist das DSGVO-konform?",
          a: "Ja. Website und Daten werden in der EU gehostet und datenschutzkonform verarbeitet — wichtig für Selbstständige in Österreich und Deutschland.",
        },
      ],

      finalCtaHeading:
        "Sie sind besser als Ihre aktuelle Website vermuten lässt.",
      finalCtaCopy:
        "Lassen Sie uns das ändern. Im kostenlosen Gespräch zeige ich Ihnen, wie Sie online so professionell wirken, wie Sie arbeiten — und dabei Zeit sparen.",
      finalCtaLabel: "Kostenloses Gespräch buchen",
    },

    en: {
      metaTitle: "Websites for Freelancers & the Self-Employed",
      metaDescription:
        "Professional websites for freelancers and the self-employed — without agency prices. From a solo developer who builds the free invoice & time-tracking tools you use. Website with no build cost from €249/month. GDPR-compliant.",
      keywords: [
        "website for freelancers",
        "website for self-employed",
        "freelancer homepage",
        "website for consultants coaches",
        "personal branding website",
        "website for sole traders",
        "affordable website self-employed",
      ],
      eyebrow: "For freelancers & the self-employed",
      h1: "A website that makes you look as good as you are — and brings clients.",
      subtitle:
        "Whether you're a consultant, coach, creative, IT freelancer, photographer or therapist: I build solo professionals a credible website and the tools you actually need — without agency prices. I'm a one-person operation myself, and I even build the free invoice and time-tracking tools you might already use.",
      trustLine:
        "From a solo developer who gets how the self-employed actually work",
      primaryCtaLabel: "Book a free call",
      secondaryCtaLabel: "What you get",

      problemLabel: "The problem",
      problemHeading:
        "As a freelancer you are your own marketing — and there's never time for it.",
      problemIntro:
        "You're great at your craft. But online it doesn't always show — and that costs you work to peers who aren't better, just more visible.",
      pains: [
        {
          title: "No time, no agency budget",
          copy: "Agencies are expensive and slow, and your own site has been on the to-do list for months. So it all stays on the old LinkedIn profile or the 2019 page.",
        },
        {
          title: "A builder looks like a builder",
          copy: "A generic template makes even a strong freelancer look interchangeable. People who don't take you seriously never inquire.",
        },
        {
          title: "Admin eats your time",
          copy: "Quotes, invoices, tracking hours, scheduling — the unpaid work around the paid work runs through every evening.",
        },
      ],

      roi: {
        label: "What it brings",
        heading: "A single new client pays for the website.",
        statValue: "1 client",
        statLabel: "easily covers the website",
        copy: "One client who comes through your new website and would otherwise have gone elsewhere covers the cost many times over. And a professional presence lets you quote higher fees with confidence.",
      },

      solutionLabel: "The solution",
      solutionHeading: "Presence & tools for solo pros — what you get.",
      solutionIntro:
        "Everything to look professional, get found and lose less time to admin — built for the reality of a one-person business.",
      features: [
        {
          icon: "globe",
          title: "Professional personal-brand website",
          copy: "A site that shows your work, your references and you as a person credibly — custom-designed, not off the shelf. You look as competent as you are.",
        },
        {
          icon: "mobile",
          title: "Fast, mobile & found on Google",
          copy: "Lightning fast on every device and optimized for local and topical searches — so potential clients find you, not just your business card.",
        },
        {
          icon: "calendar",
          title: "Contact & appointment booking",
          copy: "Prospects inquire directly or book an intro call into your calendar — no email back-and-forth, no missed inquiries.",
        },
        {
          icon: "receipt",
          title: "Invoicing & time tracking, built in",
          copy: "I build the free tools freelancers use daily — invoicing and time tracking. On request I wire exactly these helpers into your workflow.",
        },
        {
          icon: "workflow",
          title: "Automate the admin",
          copy: "Quote, invoice, follow-up: we automate the recurring busywork so you get your evenings back — and more time for paid work.",
        },
        {
          icon: "sparkles",
          title: "One point of contact, not an agency",
          copy: "You talk directly to the person who builds — fast, simple, eye to eye. Exactly one person who understands your business.",
        },
      ],

      processLabel: "How it works",
      processHeading: "Online in three steps — no effort for you.",
      steps: [
        {
          title: "Get to know each other",
          copy: "We talk briefly about you, your clients and your offer. I tell you honestly what makes sense — and what you can skip.",
        },
        {
          title: "Build & launch",
          copy: "I build your website and set up contact, booking and tools. You supply a few details and images — I do the rest.",
        },
        {
          title: "Runs & stays managed",
          copy: "I handle hosting, updates and small changes on an ongoing basis. You look after your clients, I look after your tech.",
        },
      ],

      midCtaHeading: "Ready to look as good online as you work?",
      midCtaCopy:
        "On a free call we'll find what brings you the most as a freelancer — no sales pressure.",

      why: {
        label: "Why it works",
        heading: "One person, one to one — no friction.",
        facts: [
          {
            icon: "message",
            title: "You talk to the person who builds.",
            copy: "No project managers, no loops, no surcharge for every word. One person who listens, builds and supports — just like you do for your clients.",
          },
          {
            icon: "trending",
            title: "A good presence justifies higher fees.",
            copy: "Looking professional lets you offer with confidence. A strong website isn't a cost — it pays off through better work.",
          },
        ],
      },

      proofHeading: "From real projects",

      ownership: {
        label: "You own everything",
        heading: "Your website. Your domain. No dependency.",
        intro:
          "You stay because the partnership is worth it — not because a contract holds you.",
        points: [
          {
            icon: "lock",
            title: "No lock-in",
            copy: "Cancel monthly, no restrictive contracts. You can take your website and domain with you any time.",
          },
          {
            icon: "database",
            title: "Everything is yours",
            copy: "Domain, content and data are and remain your property — with full access.",
          },
          {
            icon: "shield",
            title: "GDPR-compliant, EU hosting",
            copy: "Your site and all data are hosted in the EU and processed in line with GDPR.",
          },
        ],
      },

      offerLabel: "Pricing",
      offerHeading: "Made for solo budgets.",
      offerIntro:
        "The simplest path for the self-employed: I build your website with no build cost, you pay only ongoing care from €249/month — cancel monthly. Need a custom tool, I build that as a project.",
      offerNote:
        "No contracts, no lock-in. You stay because it pays off for you.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "I'm just one person — is this even worth it?",
          a: "Especially then. As a freelancer you are your own marketing. A professional website and a bit of automation give you exactly the visibility and time that are scarcest when you're solo.",
        },
        {
          q: "What does the no-build-cost option cost exactly?",
          a: "For website projects I build your site with no one-off build cost — you pay only ongoing care from €249/month (hosting, security, updates, small changes). Cancel monthly.",
        },
        {
          q: "Can you help with invoicing and time tracking too?",
          a: "Yes. I build exactly those tools — my free invoice and time-tracking tools are ready to use, and on request I wire matching helpers straight into your workflow.",
        },
        {
          q: "I only have an old site or just LinkedIn — is that enough?",
          a: "For a first impression, often not. We turn it into a presence that builds trust and brings inquiries — building on what you already have.",
        },
        {
          q: "Is it GDPR-compliant?",
          a: "Yes. Website and data are hosted in the EU and processed in line with GDPR — important for the self-employed in Austria and Germany.",
        },
      ],

      finalCtaHeading: "You're better than your current website suggests.",
      finalCtaCopy:
        "Let's change that. On a free call I'll show you how to look as professional online as you work — and save time doing it.",
      finalCtaLabel: "Book a free call",
    },
  },
}
