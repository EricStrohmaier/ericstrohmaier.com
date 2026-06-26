import type { Vertical } from "./types"

/**
 * Medical & dental practices vertical. No direct medical client — grounded in
 * real adjacent work: Kinderversicherer (an Austrian children's health-insurance
 * platform handling sensitive data) and Friends in Flats (a real booking/onboarding
 * workflow). Leans on DSGVO + online appointment booking. No invented metrics.
 */
export const arztpraxis: Vertical = {
  slug: "arztpraxis",
  accent: "blue",
  proofSlugs: ["kinderversicherer", "friends-in-flats"],
  content: {
    de: {
      metaTitle:
        "Website & Online-Terminbuchung für Arzt- & Zahnarztpraxen",
      metaDescription:
        "Professionelle, DSGVO-konforme Website mit Online-Terminbuchung für Arzt- und Zahnarztpraxen. Weniger Telefon, mehr neue Patienten, seriöser Auftritt. EU-Hosting, für Praxen in Österreich & Deutschland.",
      keywords: [
        "Website für Arztpraxis",
        "Website für Zahnarzt",
        "Homepage Arztpraxis erstellen lassen",
        "Online Terminbuchung Arztpraxis",
        "Praxis Website",
        "Website Ärzte DSGVO",
        "Zahnarzt Homepage",
        "Website für Praxen",
      ],
      eyebrow: "Für Arzt- & Zahnarztpraxen in AT & DE",
      h1: "Weniger Telefon, mehr Patienten — die Website für Ihre Praxis.",
      subtitle:
        "Ich baue Praxen eine seriöse, schnelle Website mit DSGVO-konformer Online-Terminbuchung: Patienten buchen selbst, das Telefon wird entlastet und Sie werden bei Google gefunden — statt einer veralteten Seite, die niemandem hilft.",
      trustLine:
        "Vertrauenswürdige, DSGVO-konforme Web-Plattformen — auch für sensible Gesundheitsdaten",
      primaryCtaLabel: "Kostenloses Erstgespräch buchen",
      secondaryCtaLabel: "Was Sie bekommen",

      problemLabel: "Das Problem",
      problemHeading:
        "Ihre Praxis ist gut — Ihre Website und Ihr Telefon halten nicht mit.",
      problemIntro:
        "Patienten erwarten heute, online zu finden, sich zu informieren und einen Termin zu buchen. Wo das nicht geht, gehen Anrufe verloren und neue Patienten zur nächsten Praxis.",
      pains: [
        {
          title: "Das Telefon steht nicht still",
          copy: "Ihr Team verbringt halbe Vormittage mit Terminanfragen am Telefon — während Patienten in der Leitung warten und manche einfach auflegen und woanders anrufen.",
        },
        {
          title: "Veraltete Seite, kein Vertrauen",
          copy: "Eine Website von vor zehn Jahren lässt selbst eine exzellente Praxis unprofessionell wirken. Neue Patienten entscheiden in Sekunden, ob sie Ihnen vertrauen.",
        },
        {
          title: "Online nicht gefunden",
          copy: "Wer „Zahnarzt in Ihrer Stadt“ sucht, findet die Konkurrenz. Ohne gute Website und gepflegtes Google-Profil bleiben neue Patienten aus.",
        },
      ],

      roi: {
        label: "Was es bringt",
        heading: "Mehr Zeit fürs Team, mehr Termine, weniger Leerlauf.",
        statValue: "24/7",
        statLabel: "Termine buchbar — auch außerhalb der Sprechzeiten",
        copy: "Online-Terminbuchung nimmt Ihrem Team die Telefonlast ab und füllt freie Termine — rund um die Uhr, auch abends und am Wochenende, wenn Patienten tatsächlich Zeit haben zu buchen.",
      },

      solutionLabel: "Die Lösung",
      solutionHeading: "Alles für Ihren Praxis-Auftritt — was Sie bekommen.",
      solutionIntro:
        "Eine Website, die Vertrauen schafft, Patienten gewinnt und Ihr Team entlastet — DSGVO-konform und sicher.",
      features: [
        {
          icon: "calendar",
          title: "DSGVO-konforme Online-Terminbuchung",
          copy: "Patienten buchen Termine selbst, direkt in Ihren Kalender — datenschutzkonform, mit Erinnerungen, die No-Shows reduzieren. Das Telefon wird spürbar ruhiger.",
        },
        {
          icon: "shield",
          title: "Datenschutz & EU-Hosting",
          copy: "Alle Daten liegen in der EU und werden DSGVO-konform verarbeitet — entscheidend, wenn es um sensible Gesundheitsdaten geht.",
        },
        {
          icon: "globe",
          title: "Gefunden bei Google & Maps",
          copy: "Optimiert für Suchen wie „Zahnarzt in Ihrer Stadt“ plus ein gepflegtes Google-Profil — damit neue Patienten Sie finden und nicht die Praxis nebenan.",
        },
        {
          icon: "users",
          title: "Praxis & Team professionell präsentiert",
          copy: "Leistungen, Team, Öffnungszeiten und Anfahrt klar und seriös aufbereitet — so wirkt Ihre Praxis so kompetent, wie sie ist.",
        },
        {
          icon: "mobile",
          title: "Schnell & auf dem Handy perfekt",
          copy: "Die meisten Patienten suchen am Handy. Ihre Seite lädt in Sekunden und macht Buchen und Anrufen mit einem Tipp leicht.",
        },
        {
          icon: "clipboard",
          title: "Formulare & Patienten-Infos",
          copy: "Anamnese- oder Kontaktformulare und klare Patienteninfos online — weniger Papier und weniger Rückfragen am Empfang.",
        },
      ],

      processLabel: "So funktioniert's",
      processHeading: "In drei Schritten zur neuen Praxis-Website.",
      steps: [
        {
          title: "Erstgespräch",
          copy: "Wir schauen uns Ihre Praxis, Ihre Abläufe und Ihren aktuellen Auftritt an und finden, wo Sie am meisten gewinnen.",
        },
        {
          title: "Aufbau & Launch",
          copy: "Ich baue Ihre Website, richte die Online-Terminbuchung datenschutzkonform ein und bringe alles live — mit minimalem Aufwand für Ihr Team.",
        },
        {
          title: "Läuft & wird betreut",
          copy: "Hosting, Sicherheit, Updates und kleine Änderungen übernehme ich laufend. Sie kümmern sich um Patienten, ich um die Technik.",
        },
      ],

      midCtaHeading: "Bereit, Ihr Telefon zu entlasten?",
      midCtaCopy:
        "Im kostenlosen Erstgespräch zeige ich Ihnen, wie Online-Terminbuchung Ihre Praxis spürbar entlastet — ohne Verkaufsdruck.",

      why: {
        label: "Warum es funktioniert",
        heading: "Patienten wollen online buchen — und vertrauen, was professionell wirkt.",
        facts: [
          {
            icon: "calendar",
            title: "Online-Buchung passt zum Patientenalltag.",
            copy: "Viele wollen abends in Ruhe einen Termin buchen, nicht in der Mittagspause anrufen. Wer das anbietet, gewinnt genau die Patienten, die sonst weiterklicken.",
          },
          {
            icon: "shield",
            title: "Vertrauen entscheidet — gerade in der Medizin.",
            copy: "Ein seriöser, sicherer Auftritt signalisiert Sorgfalt. Datenschutz und ein professionelles Bild sind bei sensiblen Gesundheitsthemen kein Detail, sondern die Grundlage.",
          },
        ],
      },

      proofHeading: "Aus echten Projekten",

      ownership: {
        label: "Sie besitzen alles",
        heading: "Ihre Website. Ihre Daten. Datenschutzkonform.",
        intro:
          "Sie bleiben, weil sich die Website rechnet — nicht wegen eines Vertrags.",
        points: [
          {
            icon: "lock",
            title: "Kein Lock-in",
            copy: "Monatlich kündbar, keine Knebelverträge. Website und Domain können Sie jederzeit mitnehmen.",
          },
          {
            icon: "database",
            title: "Daten gehören Ihnen",
            copy: "Inhalte, Termine und Patientendaten bleiben Ihr Eigentum — verarbeitet streng nach DSGVO.",
          },
          {
            icon: "shield",
            title: "EU-Hosting, DSGVO-konform",
            copy: "Alle Daten in der EU, datenschutzkonform verarbeitet — sicher für Praxen in Österreich und Deutschland.",
          },
        ],
      },

      offerLabel: "Preise",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "Ich baue Ihre Praxis-Website inklusive Online-Terminbuchung und betreue sie laufend — zum klaren Monatspreis, ohne versteckte Kosten.",
      offerNote:
        "Keine Verträge, monatlich kündbar. Sie bleiben, weil sich die Website rechnet.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Ist die Online-Terminbuchung DSGVO-konform?",
          a: "Ja. Buchung und Daten werden in der EU gehostet und streng nach DSGVO verarbeitet — entscheidend im Umgang mit Gesundheitsdaten. Wir wählen Lösungen, die zu den Anforderungen einer Praxis passen.",
        },
        {
          q: "Lässt sich die Buchung in meinen Praxiskalender integrieren?",
          a: "In der Regel ja. Wir richten die Buchung so ein, dass sie zu Ihren Abläufen und Ihrem bestehenden Kalender passt — mit Erinnerungen, die No-Shows reduzieren.",
        },
        {
          q: "Wie lange dauert der Aufbau?",
          a: "In der Regel ist Ihre Praxis-Website in wenigen Wochen live. Den Großteil der Arbeit übernehme ich — Ihr Team wird kaum belastet.",
        },
        {
          q: "Was, wenn wir schon eine Website haben?",
          a: "Kein Problem. Wir modernisieren Ihre bestehende Seite oder ersetzen sie und ergänzen die Online-Terminbuchung — je nachdem, was für Ihre Praxis am meisten bringt.",
        },
        {
          q: "Gibt es eine Vertragsbindung?",
          a: "Nein. Die monatliche Betreuung ist jederzeit kündbar. Sie bleiben, weil sich die Website rechnet — nicht wegen eines Vertrags.",
        },
      ],

      finalCtaHeading:
        "Während Ihr Telefon klingelt, bucht ein neuer Patient gerade bei der Praxis mit Online-Termin.",
      finalCtaCopy:
        "Lassen Sie uns das ändern. Im kostenlosen Erstgespräch zeige ich Ihnen, wie Ihre Praxis online gewinnt und Ihr Team entlastet wird.",
      finalCtaLabel: "Kostenloses Erstgespräch buchen",
    },

    en: {
      metaTitle: "Websites & Online Booking for Medical & Dental Practices",
      metaDescription:
        "Professional, GDPR-compliant websites with online appointment booking for medical and dental practices. Less phone, more new patients, a credible presence. EU hosting, for practices in Austria & Germany.",
      keywords: [
        "website for medical practice",
        "website for dentist",
        "practice website",
        "online appointment booking medical",
        "dental practice website",
        "GDPR website doctors",
        "healthcare website",
      ],
      eyebrow: "For medical & dental practices in AT & DE",
      h1: "Less phone, more patients — the website for your practice.",
      subtitle:
        "I build practices a credible, fast website with GDPR-compliant online appointment booking: patients book themselves, the phone gets quieter and you get found on Google — instead of an outdated site that helps no one.",
      trustLine:
        "Trustworthy, GDPR-compliant web platforms — including for sensitive health data",
      primaryCtaLabel: "Book a free intro call",
      secondaryCtaLabel: "What you get",

      problemLabel: "The problem",
      problemHeading:
        "Your practice is great — your website and phone can't keep up.",
      problemIntro:
        "Patients today expect to find you online, get informed and book an appointment. Where that isn't possible, calls are lost and new patients go to the next practice.",
      pains: [
        {
          title: "The phone never stops",
          copy: "Your team spends half the morning on appointment calls — while patients wait on hold and some simply hang up and call elsewhere.",
        },
        {
          title: "Outdated site, no trust",
          copy: "A site from ten years ago makes even an excellent practice look unprofessional. New patients decide in seconds whether to trust you.",
        },
        {
          title: "Not found online",
          copy: "People searching “dentist in your town” find your competitor. Without a good website and a maintained Google profile, new patients don't show up.",
        },
      ],

      roi: {
        label: "What it brings",
        heading: "More time for your team, more appointments, less idle slots.",
        statValue: "24/7",
        statLabel: "appointments bookable — even outside opening hours",
        copy: "Online booking takes the phone load off your team and fills open slots — around the clock, including evenings and weekends, when patients actually have time to book.",
      },

      solutionLabel: "The solution",
      solutionHeading: "Everything for your practice presence — what you get.",
      solutionIntro:
        "A website that builds trust, wins patients and relieves your team — GDPR-compliant and secure.",
      features: [
        {
          icon: "calendar",
          title: "GDPR-compliant online booking",
          copy: "Patients book appointments themselves, straight into your calendar — compliant, with reminders that reduce no-shows. The phone gets noticeably quieter.",
        },
        {
          icon: "shield",
          title: "Data protection & EU hosting",
          copy: "All data hosted in the EU and processed in line with GDPR — crucial when sensitive health data is involved.",
        },
        {
          icon: "globe",
          title: "Found on Google & Maps",
          copy: "Optimized for searches like “dentist in your town” plus a maintained Google profile — so new patients find you, not the practice next door.",
        },
        {
          icon: "users",
          title: "Practice & team presented professionally",
          copy: "Services, team, opening hours and directions presented clearly and credibly — so your practice looks as competent as it is.",
        },
        {
          icon: "mobile",
          title: "Fast & perfect on mobile",
          copy: "Most patients search on their phone. Your site loads in seconds and makes booking and calling one tap away.",
        },
        {
          icon: "clipboard",
          title: "Forms & patient info",
          copy: "Intake or contact forms and clear patient info online — less paper and fewer questions at the front desk.",
        },
      ],

      processLabel: "How it works",
      processHeading: "Three steps to your new practice website.",
      steps: [
        {
          title: "Intro call",
          copy: "We look at your practice, your workflows and your current presence and find where you gain the most.",
        },
        {
          title: "Build & launch",
          copy: "I build your website, set up online booking compliantly and take it live — with minimal effort for your team.",
        },
        {
          title: "Runs & stays managed",
          copy: "I handle hosting, security, updates and small changes on an ongoing basis. You care for patients, I care for the tech.",
        },
      ],

      midCtaHeading: "Ready to relieve your phone?",
      midCtaCopy:
        "On a free intro call I'll show you how online booking visibly relieves your practice — no sales pressure.",

      why: {
        label: "Why it works",
        heading: "Patients want to book online — and trust what looks professional.",
        facts: [
          {
            icon: "calendar",
            title: "Online booking fits patients' lives.",
            copy: "Many want to book in the evening, not call during their lunch break. Offering it wins exactly the patients who would otherwise click on.",
          },
          {
            icon: "shield",
            title: "Trust decides — especially in healthcare.",
            copy: "A credible, secure presence signals care. Data protection and a professional image aren't details in sensitive health matters — they're the foundation.",
          },
        ],
      },

      proofHeading: "From real projects",

      ownership: {
        label: "You own everything",
        heading: "Your website. Your data. GDPR-compliant.",
        intro:
          "You stay because the website pays for itself — not because of a contract.",
        points: [
          {
            icon: "lock",
            title: "No lock-in",
            copy: "Cancel monthly, no restrictive contracts. You can take your website and domain with you any time.",
          },
          {
            icon: "database",
            title: "Data is yours",
            copy: "Content, appointments and patient data remain your property — processed strictly per GDPR.",
          },
          {
            icon: "shield",
            title: "EU hosting, GDPR-compliant",
            copy: "All data in the EU, processed in line with GDPR — safe for practices in Austria and Germany.",
          },
        ],
      },

      offerLabel: "Pricing",
      offerHeading: "Transparent & fair.",
      offerIntro:
        "I build your practice website including online booking and keep it managed — at a clear monthly price, no hidden costs.",
      offerNote:
        "No contracts, cancel monthly. You stay because the website pays for itself.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "Is the online booking GDPR-compliant?",
          a: "Yes. Booking and data are hosted in the EU and processed strictly per GDPR — crucial when handling health data. We choose solutions that fit a practice's requirements.",
        },
        {
          q: "Can booking integrate with my practice calendar?",
          a: "Usually yes. We set up booking to fit your workflows and existing calendar — with reminders that reduce no-shows.",
        },
        {
          q: "How long does the build take?",
          a: "Your practice website is usually live within a few weeks. I do the heavy lifting — your team is barely involved.",
        },
        {
          q: "What if we already have a website?",
          a: "No problem. We modernize your existing site or replace it and add online booking — whichever brings your practice the most.",
        },
        {
          q: "Is there a lock-in contract?",
          a: "No. The monthly support can be cancelled any time. You stay because the website pays for itself — not because of a contract.",
        },
      ],

      finalCtaHeading:
        "While your phone is ringing, a new patient is booking with the practice that has online appointments.",
      finalCtaCopy:
        "Let's change that. On a free intro call I'll show you how your practice wins online and your team gets relieved.",
      finalCtaLabel: "Book a free intro call",
    },
  },
}
