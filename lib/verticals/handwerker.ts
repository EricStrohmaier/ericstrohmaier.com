import type { Vertical } from "./types"

/**
 * Handwerker / local service providers vertical. Grounded in real tooling —
 * AutoReview (automated Google reviews for local service businesses) and
 * alpen.digital (DSGVO automation) — and the canonical offers (lib/offers.ts).
 * No invented testimonials or metrics. Mirrors the immobilienmakler reference.
 */
export const handwerker: Vertical = {
  slug: "handwerker",
  accent: "emerald",
  proofSlugs: ["getautoreview", "alpen-digital"],
  content: {
    de: {
      metaTitle:
        "Website für Handwerker in Österreich & Deutschland erstellen lassen",
      metaDescription:
        "Schnelle, mobile-first Website für Handwerker & lokale Dienstleister: lokal bei Google & Maps gefunden werden, mehr Anfragen, automatische Google-Bewertungen und einfache Termin-/Rückrufbuchung. DSGVO-konform, EU-Hosting.",
      keywords: [
        "Website für Handwerker",
        "Handwerker Website erstellen lassen",
        "Webseite Handwerksbetrieb",
        "mehr Google Bewertungen bekommen",
        "Handwerker Marketing",
        "lokale Dienstleister Website",
        "Website Installateur Elektriker Dachdecker",
        "Handwerker online gefunden werden",
      ],
      eyebrow: "Für Handwerker & lokale Dienstleister in AT & DE",
      h1: "Mehr Anfragen, mehr Bewertungen — die Website für Ihren Handwerksbetrieb.",
      subtitle:
        "Ich baue Handwerkern und lokalen Dienstleistern eine schnelle, mobile Website, die bei Google und Maps gefunden wird, Anfragen und Rückrufe an einem Ort sammelt und automatisch neue Google-Bewertungen einholt — damit kein Auftrag mehr verloren geht.",
      trustLine:
        "Gebaut für lokale Betriebe in AT & DE — Installateur, Elektriker, Dachdecker, Tischler & Co.",
      primaryCtaLabel: "Kostenloses Erstgespräch buchen",
      secondaryCtaLabel: "Was Sie bekommen",

      problemLabel: "Das Problem",
      problemHeading:
        "Sie verlieren keine Aufträge, weil Ihre Arbeit schlecht ist — sondern weil man Sie online nicht findet.",
      problemIntro:
        "Ihre besten Kunden suchen heute zuerst bei Google — oft direkt am Handy. Wer Sie dort nicht findet, eine veraltete Seite oder keine Bewertungen sieht, ruft beim Nächsten an. Jede Woche, leise, ohne dass Sie es merken.",
      pains: [
        {
          title: "Online nicht auffindbar",
          copy: "Keine Website oder eine Seite von 2015: Bei Google und auf der Karte taucht die Konkurrenz auf, nicht Sie. Der Auftrag geht an den, der oben steht — nicht an den besten Betrieb.",
        },
        {
          title: "Verpasste Anrufe & Anfragen",
          copy: "Sie sind auf der Baustelle, das Telefon klingelt ins Leere. Wer keine Mailbox hinterlässt, ist weg — und ruft einfach den nächsten Betrieb auf der Liste an.",
        },
        {
          title: "Kaum Bewertungen, viel Zettelwirtschaft",
          copy: "Zufriedene Kunden bewerten Sie nie, weil niemand fragt. Anfragen, Termine und Angebote liegen auf Zetteln, in WhatsApp und im Kopf — und abends schreiben Sie dann noch Angebote.",
        },
      ],

      roi: {
        label: "Was Sie das kostet",
        heading: "Ein einziger zusätzlicher Auftrag pro Monat zahlt die Website.",
        statValue: "1 Auftrag",
        statLabel: "deckt die Website locker",
        copy: "Schon ein gut bezahlter Auftrag im Monat, den Sie sonst verpasst hätten, deckt die laufenden Kosten um ein Vielfaches. Alles darüber ist zusätzlicher Umsatz — Monat für Monat.",
      },

      solutionLabel: "Die Lösung",
      solutionHeading: "Eine Website, die für Sie arbeitet — was Sie bekommen.",
      solutionIntro:
        "Alles, damit Sie lokal gefunden werden und Anfragen reinkommen — in einem System, das auch arbeitet, während Sie auf der Baustelle sind.",
      features: [
        {
          icon: "globe",
          title: "Lokal gefunden bei Google & Maps",
          copy: "Eine schnelle Website, optimiert für Suchen wie „Installateur in Ihrer Stadt“ — plus ein sauberes Google-Unternehmensprofil, damit Sie in der Karte und im Ranking ganz oben auftauchen.",
        },
        {
          icon: "star",
          title: "Automatische Google-Bewertungen",
          copy: "Nach jedem Auftrag fragt das System Ihre Kunden automatisch nach einer Bewertung (über AutoReview) und hakt freundlich nach. Mehr Sterne, mehr Vertrauen, mehr Anrufe — ganz ohne lästiges Nachfragen.",
        },
        {
          icon: "inbox",
          title: "Anfragen & Rückrufe an einem Ort",
          copy: "Ein einfaches Anfrage- und Rückrufformular sammelt jede Anfrage übersichtlich an einem Ort. Sie sehen sofort, wer was wann braucht — statt zwischen Telefon, WhatsApp und Zetteln zu suchen.",
        },
        {
          icon: "calendar",
          title: "Termin- & Rückrufbuchung",
          copy: "Kunden buchen einen Rückruf oder Vor-Ort-Termin direkt selbst — auch nachts und am Wochenende. Kein Telefon-Pingpong, keine verpassten Anrufe mehr.",
        },
        {
          icon: "mobile",
          title: "Mobile-first & blitzschnell",
          copy: "Die meisten Ihrer Kunden suchen am Handy. Ihre Seite lädt in Sekunden, sieht auf jedem Gerät top aus und macht es mit einem Tipp leicht, Sie anzurufen.",
        },
        {
          icon: "receipt",
          title: "Angebot → Auftrag → Rechnung",
          copy: "Auf Wunsch automatisiere ich Ihren Papierkram: aus der Anfrage wird ein Angebot, aus dem Angebot ein Auftrag und am Ende die Rechnung — Schluss mit Angebote schreiben am Abend.",
        },
      ],

      processLabel: "So funktioniert's",
      processHeading: "In drei Schritten zu Ihrer neuen Website.",
      steps: [
        {
          title: "Erstgespräch",
          copy: "Wir schauen uns an, wie Kunden Sie heute finden — oder eben nicht — und wo Ihnen die meisten Anfragen durchrutschen.",
        },
        {
          title: "Aufbau & Launch",
          copy: "Ich baue Ihre Website, richte Bewertungen und Buchung ein und bringe alles live. Sie liefern Fotos und ein paar Infos — den Rest übernehme ich.",
        },
        {
          title: "Gefunden & gebucht",
          copy: "Anfragen und Bewertungen kommen rein, ich kümmere mich um Technik und Updates — und verbessere die Seite laufend weiter.",
        },
      ],

      midCtaHeading: "Bereit, online gefunden zu werden?",
      midCtaCopy:
        "Im kostenlosen Erstgespräch finden wir Ihren größten Hebel für mehr Anfragen — ganz ohne Verkaufsdruck.",

      why: {
        label: "Warum es funktioniert",
        heading: "Zwei Dinge entscheiden, wer den Auftrag bekommt.",
        facts: [
          {
            icon: "pin",
            title: "Wer oben in der Karte steht, wird angerufen.",
            copy: "Die meisten Kunden klicken auf einen der ersten Treffer im Google-Kartenausschnitt. Mit der richtigen Website und einem gepflegten Profil stehen Sie dort, wo angerufen wird.",
          },
          {
            icon: "star",
            title: "Bewertungen sind Ihr bester Verkäufer.",
            copy: "Bei zwei Betrieben in der Nähe gewinnt fast immer der mit den besseren und mehr Bewertungen. Genau die holt das System nach jedem Auftrag automatisch ein.",
          },
        ],
      },

      proofHeading: "Aus echten Projekten",

      ownership: {
        label: "Sie besitzen alles",
        heading: "Ihre Website. Ihre Daten. Keine Abhängigkeit.",
        intro:
          "Sie bleiben, weil sich die Website rechnet — nicht, weil ein Vertrag Sie festhält.",
        points: [
          {
            icon: "lock",
            title: "Kein Lock-in",
            copy: "Keine Knebelverträge, keine Abhängigkeit von einer Agentur. Sie können Ihre Website und Ihre Domain jederzeit mitnehmen.",
          },
          {
            icon: "database",
            title: "Domain & Daten gehören Ihnen",
            copy: "Ihre Domain, Inhalte, Kontakte und Bewertungen sind und bleiben Ihr Eigentum — mit vollem Zugriff und Export.",
          },
          {
            icon: "shield",
            title: "DSGVO-konform, EU-Hosting",
            copy: "Ihre Website und alle Kundendaten liegen in der EU und werden datenschutzkonform verarbeitet — sicher für AT & DE.",
          },
        ],
      },

      offerLabel: "Preise",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "Eine Website, die gefunden wird und betreut bleibt — zum klaren Monatspreis, ohne versteckte Kosten. Brauchen Sie mehr, wächst das System mit Ihnen mit.",
      offerNote:
        "Keine Verträge. Monatlich kündbar. Sie bleiben, weil sich die Website rechnet.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Ich habe noch keine Website — ist das ein Problem?",
          a: "Überhaupt nicht. Ich baue Ihre Website von Grund auf neu: schnell, mobil und so, dass Sie lokal gefunden werden. Sie liefern nur Fotos und ein paar Infos — den Rest übernehme ich.",
        },
        {
          q: "Wie bekomme ich mehr Google-Bewertungen?",
          a: "Das System fragt Ihre Kunden nach jedem Auftrag automatisch nach einer Bewertung (über AutoReview) und hakt freundlich nach. Unzufriedene werden vorher abgefangen — so steigen Sterne und Vertrauen ganz von selbst.",
        },
        {
          q: "Wie schnell bin ich online?",
          a: "In der Regel ist Ihre Website in wenigen Wochen live. Den Großteil der Arbeit übernehme ich — Ihr Aufwand bleibt minimal.",
        },
        {
          q: "Gibt es eine Vertragsbindung?",
          a: "Nein. Die monatliche Betreuung ist jederzeit kündbar. Keine Knebelverträge — Sie bleiben, weil sich die Website rechnet.",
        },
        {
          q: "Ist das DSGVO-konform?",
          a: "Ja. Website und Kundendaten werden in der EU gehostet und datenschutzkonform verarbeitet — wichtig und sicher für den Einsatz in Österreich und Deutschland.",
        },
        {
          q: "Können Sie auch Angebote und Rechnungen automatisieren?",
          a: "Ja. Auf Wunsch automatisiere ich den Weg von der Anfrage über das Angebot bis zur Rechnung — damit Sie abends keine Angebote mehr schreiben müssen.",
        },
      ],

      finalCtaHeading:
        "Während Sie das lesen, ruft Ihr nächster Kunde beim Betrieb an, der bei Google ganz oben steht.",
      finalCtaCopy:
        "Lassen Sie uns das ändern. Im kostenlosen Erstgespräch zeige ich Ihnen, wie Sie online gefunden werden und mehr Anfragen bekommen — ab Tag eins.",
      finalCtaLabel: "Kostenloses Erstgespräch buchen",
    },

    en: {
      metaTitle:
        "Websites for Tradespeople & Local Service Businesses in Austria & Germany",
      metaDescription:
        "Fast, mobile-first websites for tradespeople and local service businesses: get found locally on Google & Maps, win more inquiries, collect automatic Google reviews and let clients book callbacks and appointments. GDPR-compliant, EU hosting.",
      keywords: [
        "website for tradespeople",
        "tradesman website",
        "website for contractors",
        "get more Google reviews",
        "local service business website",
        "home services website Austria",
        "website electrician plumber roofer",
      ],
      eyebrow: "For tradespeople & local service businesses in AT & DE",
      h1: "More inquiries, more reviews — the website for your trade business.",
      subtitle:
        "I build tradespeople and local service businesses a fast, mobile website that gets found on Google and Maps, collects inquiries and callbacks in one place and automatically asks customers for new Google reviews — so you never lose a job again.",
      trustLine:
        "Built for local businesses in AT & DE — plumbers, electricians, roofers, carpenters & more.",
      primaryCtaLabel: "Book a free intro call",
      secondaryCtaLabel: "What you get",

      problemLabel: "The problem",
      problemHeading:
        "You don't lose jobs because your work is bad — you lose them because nobody can find you online.",
      problemIntro:
        "Your best customers search Google first these days — often straight from their phone. Anyone who can't find you, or sees an outdated site or no reviews, calls the next business instead. Every week, quietly, without you noticing.",
      pains: [
        {
          title: "Invisible online",
          copy: "No website, or a site from 2015: on Google and on the map it's your competitor who shows up, not you. The job goes to whoever ranks at the top — not to the best business.",
        },
        {
          title: "Missed calls & inquiries",
          copy: "You're on site, the phone rings out. Anyone who doesn't leave a voicemail is gone — and simply calls the next business on their list.",
        },
        {
          title: "Few reviews, lots of paperwork",
          copy: "Happy customers never review you because nobody asks. Inquiries, appointments and quotes live on scraps of paper, in WhatsApp and in your head — and in the evening you're still writing quotes.",
        },
      ],

      roi: {
        label: "What it costs you",
        heading: "A single extra job per month pays for the website.",
        statValue: "1 job",
        statLabel: "easily covers the website",
        copy: "Just one well-paid job a month that you'd otherwise have missed covers the running cost many times over. Everything beyond that is extra revenue — month after month.",
      },

      solutionLabel: "The solution",
      solutionHeading: "A website that works for you — what you get.",
      solutionIntro:
        "Everything you need to get found locally and bring inquiries in — in one system that keeps working while you're on site.",
      features: [
        {
          icon: "globe",
          title: "Found locally on Google & Maps",
          copy: "A fast website, optimized for searches like “plumber in your town” — plus a clean Google Business Profile so you show up at the top of the map and the rankings.",
        },
        {
          icon: "star",
          title: "Automatic Google reviews",
          copy: "After every job the system automatically asks your customers for a review (via AutoReview) and follows up politely. More stars, more trust, more calls — without any awkward chasing.",
        },
        {
          icon: "inbox",
          title: "Inquiries & callbacks in one place",
          copy: "A simple inquiry and callback form collects every request neatly in one place. You instantly see who needs what and when — instead of hunting across phone, WhatsApp and paper notes.",
        },
        {
          icon: "calendar",
          title: "Appointment & callback booking",
          copy: "Customers book a callback or on-site appointment themselves — at night and on weekends too. No phone tag, no more missed calls.",
        },
        {
          icon: "mobile",
          title: "Mobile-first & lightning fast",
          copy: "Most of your customers search on their phone. Your site loads in seconds, looks great on every device and makes it one tap to call you.",
        },
        {
          icon: "receipt",
          title: "Quote → job → invoice",
          copy: "On request I automate your paperwork: an inquiry becomes a quote, the quote becomes a job and finally an invoice — no more writing quotes in the evening.",
        },
      ],

      processLabel: "How it works",
      processHeading: "Three steps to your new website.",
      steps: [
        {
          title: "Intro call",
          copy: "We look at how customers find you today — or don't — and where most inquiries are slipping away.",
        },
        {
          title: "Build & launch",
          copy: "I build your website, set up reviews and booking and take it all live. You supply photos and a few details — I do the rest.",
        },
        {
          title: "Found & booked",
          copy: "Inquiries and reviews come in, I handle the tech and updates — and keep improving the site over time.",
        },
      ],

      midCtaHeading: "Ready to get found online?",
      midCtaCopy:
        "On a free intro call we find your biggest lever for more inquiries — no sales pressure.",

      why: {
        label: "Why it works",
        heading: "Two things decide who gets the job.",
        facts: [
          {
            icon: "pin",
            title: "Whoever sits at the top of the map gets called.",
            copy: "Most customers click one of the first results in the Google map pack. With the right website and a well-kept profile, you're standing where the calls happen.",
          },
          {
            icon: "star",
            title: "Reviews are your best salesperson.",
            copy: "Between two nearby businesses, the one with better and more reviews almost always wins. Those are exactly what the system collects automatically after every job.",
          },
        ],
      },

      proofHeading: "From real projects",

      ownership: {
        label: "You own everything",
        heading: "Your website. Your data. No lock-in.",
        intro:
          "You stay because the website pays for itself — not because a contract holds you.",
        points: [
          {
            icon: "lock",
            title: "No lock-in",
            copy: "No restrictive contracts, no dependency on an agency. You can take your website and your domain with you any time.",
          },
          {
            icon: "database",
            title: "Domain & data are yours",
            copy: "Your domain, content, contacts and reviews are and remain your property — with full access and export.",
          },
          {
            icon: "shield",
            title: "GDPR-compliant, EU hosting",
            copy: "Your website and all customer data are hosted in the EU and processed in line with GDPR — safe for AT & DE.",
          },
        ],
      },

      offerLabel: "Pricing",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "A website that gets found and stays managed — at a clear monthly price, no hidden costs. Need more, and the system grows with you.",
      offerNote:
        "No contracts. Cancel monthly. You stay because the website pays for itself.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "I don't have a website yet — is that a problem?",
          a: "Not at all. I build your website from scratch: fast, mobile and made to get found locally. You just supply photos and a few details — I do the rest.",
        },
        {
          q: "How do I get more Google reviews?",
          a: "The system automatically asks your customers for a review after every job (via AutoReview) and follows up politely. Unhappy customers are caught beforehand — so stars and trust grow on their own.",
        },
        {
          q: "How quickly will I be online?",
          a: "Your website is usually live within a few weeks. I do the heavy lifting — your effort stays minimal.",
        },
        {
          q: "Is there a lock-in contract?",
          a: "No. The monthly support can be cancelled any time. No restrictive contracts — you stay because the website pays for itself.",
        },
        {
          q: "Is it GDPR-compliant?",
          a: "Yes. Website and customer data are hosted in the EU and processed in line with GDPR — important and safe for use in Austria and Germany.",
        },
        {
          q: "Can you automate quotes and invoices too?",
          a: "Yes. On request I automate the path from inquiry to quote to invoice — so you never have to write quotes in the evening again.",
        },
      ],

      finalCtaHeading:
        "While you're reading this, your next customer is calling the business that ranks at the top of Google.",
      finalCtaCopy:
        "Let's change that. On a free intro call I'll show you how to get found online and win more inquiries — from day one.",
      finalCtaLabel: "Book a free intro call",
    },
  },
}
