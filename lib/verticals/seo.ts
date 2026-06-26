import type { Vertical } from "./types"

/**
 * SEO & AI-search (AEO/GEO) service. Grounded in real results: the 270% revenue
 * growth from rebuilding a client's SEO (see dictionaries about text), PromptSloth
 * (7,000+ users on organic search alone) and Friends in Flats (SEO + 20,000+ users).
 * No invented metrics. The 270% figure is a real, traceable past result.
 */
export const seo: Vertical = {
  slug: "seo",
  accent: "violet",
  proofSlugs: ["promptsloth", "friends-in-flats"],
  content: {
    de: {
      metaTitle:
        "SEO & KI-Suchmaschinen-Optimierung (AEO) für KMU in Österreich & Deutschland",
      metaDescription:
        "SEO und KI-SEO (AEO/GEO) für KMU & Selbstständige: bei Google gefunden werden und in KI-Antworten (ChatGPT, Perplexity, Google AI Overviews) auftauchen. Ergebnis-orientiert — für einen Kunden 270 % mehr Umsatz durch SEO.",
      keywords: [
        "SEO Österreich",
        "SEO für KMU",
        "SEO Freelancer",
        "Suchmaschinenoptimierung Wien",
        "KI SEO",
        "AI SEO",
        "AEO Optimierung",
        "GEO Generative Engine Optimization",
        "ChatGPT SEO",
        "SEO Optimierung Selbstständige",
      ],
      eyebrow: "SEO & KI-Suchmaschinen-Optimierung",
      h1: "Gefunden werden — bei Google und in KI-Antworten.",
      subtitle:
        "Ich sorge dafür, dass Ihr Unternehmen dort auftaucht, wo Kunden heute suchen: in der Google-Suche und in KI-Antworten von ChatGPT, Perplexity & Google AI Overviews. Kein Ranking-Theater — ich optimiere auf Anfragen und Umsatz. Für einen Kunden habe ich den Umsatz so um 270 % gesteigert.",
      trustLine:
        "Echte Ergebnisse statt Versprechen — diese Seite hier ist live für KI-Suche optimiert",
      primaryCtaLabel: "Kostenloses SEO-Gespräch buchen",
      secondaryCtaLabel: "Was ich mache",

      problemLabel: "Das Problem",
      problemHeading:
        "Wenn Sie nicht gefunden werden, existieren Sie für neue Kunden nicht.",
      problemIntro:
        "Wer Sie bei Google nicht findet — oder wen die KI-Antwort zur Konkurrenz schickt — wird nie Ihr Kunde. Und das passiert gerade jeden Tag, leise.",
      pains: [
        {
          title: "Unsichtbar bei Google",
          copy: "Sie stehen auf Seite 2 oder gar nicht. Die ersten Treffer bekommen die Klicks — der Rest wird kaum gesehen. Jede Position, die Sie verlieren, kostet Anfragen.",
        },
        {
          title: "Die KI schickt Kunden woanders hin",
          copy: "Immer mehr Menschen fragen ChatGPT, Perplexity oder Google AI statt zu googeln. Wer dort nicht genannt wird, taucht in der Antwort nicht auf — und ist für den Suchenden unsichtbar.",
        },
        {
          title: "Besucher, aber keine Anfragen",
          copy: "Viele Agenturen liefern Rankings und Reports, aber keinen Umsatz. Traffic, der nicht zu Anfragen wird, bringt Ihnen nichts.",
        },
      ],

      roi: {
        label: "Was es bringt",
        heading: "Mehr Sichtbarkeit heißt mehr Anfragen — messbar.",
        statValue: "+270 %",
        statLabel: "Umsatz für einen Kunden durch SEO",
        copy: "Für einen Kunden habe ich den Umsatz um 270 % gesteigert, indem ich seine SEO neu aufgebaut und die richtigen Besucher gebracht habe. SEO ist kein Kostenpunkt — es ist die günstigste dauerhafte Quelle für neue Kunden.",
      },

      solutionLabel: "Die Lösung",
      solutionHeading: "SEO & KI-SEO — was ich für Sie mache.",
      solutionIntro:
        "Von der technischen Basis bis zur KI-Sichtbarkeit: alles darauf ausgerichtet, dass aus Suchenden Anfragen werden.",
      features: [
        {
          icon: "settings",
          title: "Technisches SEO & Performance",
          copy: "Schnelle Ladezeiten, saubere Struktur, crawlbar und indexierbar — die Basis, ohne die kein Ranking hält. Genau so, wie diese Seite gebaut ist.",
        },
        {
          icon: "search",
          title: "Keywords & Inhalte mit Kaufabsicht",
          copy: "Ich finde die Suchbegriffe, bei denen echte Kunden mit Kaufabsicht suchen — und baue Seiten, die genau diese Anfragen abholen, statt allgemeiner How-tos.",
        },
        {
          icon: "pin",
          title: "Lokales SEO & Google-Profil",
          copy: "Optimiertes Google-Unternehmensprofil, lokale Signale und Maps-Sichtbarkeit — damit Sie bei „… in Ihrer Stadt“ und „in der Nähe“ ganz oben auftauchen.",
        },
        {
          icon: "bot",
          title: "KI-SEO (AEO/GEO)",
          copy: "Optimierung für KI-Antwortmaschinen: zitierfähige Inhalte, strukturierte Daten (Schema), llms.txt und Marken­erwähnungen — damit ChatGPT, Perplexity & Google AI Sie nennen.",
        },
        {
          icon: "trending",
          title: "Aus Besuchern werden Anfragen",
          copy: "Sichtbarkeit ist nur die halbe Miete. Ich richte Ihre Seiten so aus, dass Besucher anrufen, buchen oder anfragen — nicht nur lesen und gehen.",
        },
        {
          icon: "chart",
          title: "Ehrliches Reporting — auf Umsatz, nicht nur Rankings",
          copy: "Sie sehen, was wirklich zählt: Anfragen, Sichtbarkeit, Entwicklung über die Zeit. Kein Fachjargon, keine geschönten Vanity-Metriken.",
        },
      ],

      processLabel: "So funktioniert's",
      processHeading: "In drei Schritten zu mehr Sichtbarkeit.",
      steps: [
        {
          title: "SEO-Check & Gespräch",
          copy: "Ich schaue mir Ihre Seite und Ihren Markt an und zeige Ihnen die größten Hebel — kostenlos und konkret, ohne Verkaufsdruck.",
        },
        {
          title: "Umsetzung",
          copy: "Technik, Inhalte, lokale Signale und KI-Sichtbarkeit — ich setze die Dinge um, die wirklich Anfragen bringen, und priorisiere nach Wirkung.",
        },
        {
          title: "Wächst & wird optimiert",
          copy: "SEO wirkt kumulativ. Ich bleibe dran, messe und verbessere laufend — Monat für Monat mehr Sichtbarkeit.",
        },
      ],

      midCtaHeading: "Wollen Sie wissen, was bei Ihnen drinsteckt?",
      midCtaCopy:
        "Im kostenlosen Gespräch zeige ich Ihnen die größten SEO- und KI-Hebel für Ihre Seite — ganz konkret.",

      why: {
        label: "Warum es funktioniert",
        heading: "SEO ist die günstigste Quelle für neue Kunden — und KI ist die nächste.",
        facts: [
          {
            icon: "trending",
            title: "SEO ist ein Vermögenswert, kein Werbebudget.",
            copy: "Anzeigen hören auf, sobald Sie zahlen. Gute Rankings bringen Anfragen, ohne dass Sie für jeden Klick zahlen — und der Effekt wächst mit der Zeit.",
          },
          {
            icon: "sparkles",
            title: "KI-Suche ist ein neues, offenes Feld.",
            copy: "Wer jetzt für KI-Antworten optimiert, wird genannt, bevor die Konkurrenz versteht, was passiert. Genau das ist hier auf meiner eigenen Seite umgesetzt.",
          },
        ],
      },

      proofHeading: "Echte Ergebnisse",

      ownership: {
        label: "Transparent & fair",
        heading: "Ihre Seite, Ihre Daten, ehrliche Arbeit.",
        intro:
          "Keine Black Box, keine Knebelverträge — Sie verstehen jederzeit, was passiert und warum.",
        points: [
          {
            icon: "lock",
            title: "Kein Lock-in",
            copy: "Monatlich kündbar. Alles, was ich aufbaue, gehört Ihnen — Sie bleiben, weil es Anfragen bringt.",
          },
          {
            icon: "fileCheck",
            title: "White-Hat, nachhaltig",
            copy: "Keine Tricks, die beim nächsten Google-Update abstürzen. Solide Arbeit, die hält — auch in der KI-Suche.",
          },
          {
            icon: "shield",
            title: "DSGVO-konform",
            copy: "Analyse und Umsetzung mit Blick auf EU-Datenschutz — wichtig für Unternehmen in Österreich und Deutschland.",
          },
        ],
      },

      offerLabel: "Preise",
      offerHeading: "Vom Projekt bis zur laufenden Betreuung.",
      offerIntro:
        "Ein einmaliges SEO-Projekt bringt die Grundlage in Form, danach wählen Sie die laufende Betreuung, die zu Ihnen passt. Klarer Preis, klares Ziel: mehr Anfragen.",
      offerNote:
        "Keine Ranking-Garantien (die seriös niemand geben kann) — dafür ehrliche Arbeit, gemessen an Anfragen und Umsatz.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Wie lange dauert es, bis SEO wirkt?",
          a: "Erste Effekte sieht man oft in einigen Wochen, die volle Wirkung baut sich über Monate auf. SEO ist ein Vermögenswert, der mit der Zeit wächst — kein Schalter, den man umlegt.",
        },
        {
          q: "Was ist KI-SEO bzw. AEO/GEO?",
          a: "Optimierung dafür, dass KI-Antwortmaschinen wie ChatGPT, Perplexity und Google AI Overviews Ihr Unternehmen nennen und verlinken. Technisch teilt es sich viel mit klassischem SEO: gut crawlbar, klar strukturiert, zitierfähig — plus strukturierte Daten und Markenerwähnungen.",
        },
        {
          q: "Garantieren Sie Platz 1 bei Google?",
          a: "Nein — und wer das verspricht, ist unseriös. Niemand kontrolliert Googles Ranking. Ich garantiere ehrliche, wirksame Arbeit, gemessen an dem, was zählt: Anfragen und Umsatz.",
        },
        {
          q: "Lohnt sich SEO auch für ein kleines Unternehmen oder als Selbstständiger?",
          a: "Gerade dann. SEO bringt Anfragen, ohne für jeden Klick zu zahlen — ideal für KMU, Freiberufler und Selbstständige mit begrenztem Werbebudget.",
        },
        {
          q: "Arbeiten Sie an meiner bestehenden Website?",
          a: "Ja. Ich optimiere Ihre bestehende Seite oder baue sie — wenn die Basis zu schwach ist — so um, dass SEO und KI-Sichtbarkeit überhaupt greifen können.",
        },
      ],

      finalCtaHeading:
        "Während Sie das lesen, findet ein Kunde gerade Ihren Mitbewerber — bei Google oder in der KI-Antwort.",
      finalCtaCopy:
        "Lassen Sie uns das ändern. Im kostenlosen SEO-Gespräch zeige ich Ihnen die größten Hebel für Ihre Sichtbarkeit — bei Google und in der KI-Suche.",
      finalCtaLabel: "Kostenloses SEO-Gespräch buchen",
    },

    en: {
      metaTitle:
        "SEO & AI Search Optimization (AEO/GEO) for SMBs in Austria & Germany",
      metaDescription:
        "SEO and AI SEO (AEO/GEO) for SMBs & freelancers: get found on Google and show up in AI answers (ChatGPT, Perplexity, Google AI Overviews). Results-focused — 270% revenue growth for one client through SEO.",
      keywords: [
        "SEO Austria",
        "SEO for SMBs",
        "SEO freelancer",
        "AI SEO",
        "AEO optimization",
        "GEO generative engine optimization",
        "ChatGPT SEO",
        "search optimization for the self-employed",
      ],
      eyebrow: "SEO & AI search optimization",
      h1: "Get found — on Google and in AI answers.",
      subtitle:
        "I make sure your business shows up where customers search today: Google search and AI answers from ChatGPT, Perplexity & Google AI Overviews. No ranking theatre — I optimize for inquiries and revenue. For one client this grew revenue by 270%.",
      trustLine:
        "Real results, not promises — this very page is live-optimized for AI search",
      primaryCtaLabel: "Book a free SEO call",
      secondaryCtaLabel: "What I do",

      problemLabel: "The problem",
      problemHeading:
        "If you can't be found, you don't exist to new customers.",
      problemIntro:
        "Anyone who can't find you on Google — or whom the AI answer sends to a competitor — never becomes your customer. And it's happening every day, quietly.",
      pains: [
        {
          title: "Invisible on Google",
          copy: "You're on page 2 or nowhere. The top results get the clicks — the rest is barely seen. Every position you lose costs inquiries.",
        },
        {
          title: "AI sends customers elsewhere",
          copy: "More and more people ask ChatGPT, Perplexity or Google AI instead of googling. If you're not named there, you don't appear in the answer — invisible to the searcher.",
        },
        {
          title: "Visitors, but no inquiries",
          copy: "Many agencies deliver rankings and reports but no revenue. Traffic that doesn't turn into inquiries does nothing for you.",
        },
      ],

      roi: {
        label: "What it brings",
        heading: "More visibility means more inquiries — measurable.",
        statValue: "+270%",
        statLabel: "revenue for one client through SEO",
        copy: "For one client I grew revenue by 270% by rebuilding their SEO and bringing in the right visitors. SEO isn't a cost — it's the cheapest durable source of new customers.",
      },

      solutionLabel: "The solution",
      solutionHeading: "SEO & AI SEO — what I do for you.",
      solutionIntro:
        "From the technical base to AI visibility: everything aimed at turning searchers into inquiries.",
      features: [
        {
          icon: "settings",
          title: "Technical SEO & performance",
          copy: "Fast load times, clean structure, crawlable and indexable — the base no ranking holds without. Exactly how this site is built.",
        },
        {
          icon: "search",
          title: "Keywords & intent-rich content",
          copy: "I find the terms real customers with buying intent search for — and build pages that capture exactly those inquiries, not generic how-tos.",
        },
        {
          icon: "pin",
          title: "Local SEO & Google profile",
          copy: "Optimized Google Business Profile, local signals and Maps visibility — so you show up top for “… in your town” and “near me”.",
        },
        {
          icon: "bot",
          title: "AI SEO (AEO/GEO)",
          copy: "Optimization for AI answer engines: quotable content, structured data (schema), llms.txt and brand mentions — so ChatGPT, Perplexity & Google AI name you.",
        },
        {
          icon: "trending",
          title: "Turning visitors into inquiries",
          copy: "Visibility is only half of it. I shape your pages so visitors call, book or inquire — not just read and leave.",
        },
        {
          icon: "chart",
          title: "Honest reporting — on revenue, not just rankings",
          copy: "You see what matters: inquiries, visibility, trend over time. No jargon, no flattering vanity metrics.",
        },
      ],

      processLabel: "How it works",
      processHeading: "Three steps to more visibility.",
      steps: [
        {
          title: "SEO check & call",
          copy: "I look at your site and your market and show you the biggest levers — free and concrete, no sales pressure.",
        },
        {
          title: "Execution",
          copy: "Tech, content, local signals and AI visibility — I do the things that actually bring inquiries, prioritized by impact.",
        },
        {
          title: "Grows & improves",
          copy: "SEO compounds. I stay on it, measure and keep improving — more visibility month after month.",
        },
      ],

      midCtaHeading: "Want to know what's in it for you?",
      midCtaCopy:
        "On a free call I'll show you the biggest SEO and AI levers for your site — concretely.",

      why: {
        label: "Why it works",
        heading: "SEO is the cheapest source of new customers — and AI is the next.",
        facts: [
          {
            icon: "trending",
            title: "SEO is an asset, not an ad budget.",
            copy: "Ads stop the moment you stop paying. Good rankings bring inquiries without paying per click — and the effect grows over time.",
          },
          {
            icon: "sparkles",
            title: "AI search is a new, open field.",
            copy: "Optimize for AI answers now and you get named before competitors understand what's happening. That's exactly what's done here on my own site.",
          },
        ],
      },

      proofHeading: "Real results",

      ownership: {
        label: "Transparent & fair",
        heading: "Your site, your data, honest work.",
        intro:
          "No black box, no restrictive contracts — you always understand what's happening and why.",
        points: [
          {
            icon: "lock",
            title: "No lock-in",
            copy: "Cancel monthly. Everything I build is yours — you stay because it brings inquiries.",
          },
          {
            icon: "fileCheck",
            title: "White-hat, durable",
            copy: "No tricks that crash on the next Google update. Solid work that lasts — in AI search too.",
          },
          {
            icon: "shield",
            title: "GDPR-compliant",
            copy: "Analysis and execution with EU data protection in mind — important for businesses in Austria and Germany.",
          },
        ],
      },

      offerLabel: "Pricing",
      offerHeading: "From project to ongoing support.",
      offerIntro:
        "A one-off SEO project gets the foundation in shape, then you choose the ongoing support that fits. Clear price, clear goal: more inquiries.",
      offerNote:
        "No ranking guarantees (no one credible can give those) — instead, honest work measured by inquiries and revenue.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "How long until SEO works?",
          a: "First effects often show within a few weeks; full impact builds over months. SEO is an asset that grows over time — not a switch you flip.",
        },
        {
          q: "What is AI SEO / AEO / GEO?",
          a: "Optimizing so AI answer engines like ChatGPT, Perplexity and Google AI Overviews name and link your business. Technically it shares a lot with classic SEO: crawlable, clearly structured, quotable — plus structured data and brand mentions.",
        },
        {
          q: "Do you guarantee #1 on Google?",
          a: "No — and anyone who promises that isn't being honest. No one controls Google's ranking. I guarantee honest, effective work measured by what matters: inquiries and revenue.",
        },
        {
          q: "Is SEO worth it for a small business or freelancer?",
          a: "Especially then. SEO brings inquiries without paying per click — ideal for SMBs, freelancers and the self-employed with a limited ad budget.",
        },
        {
          q: "Do you work on my existing website?",
          a: "Yes. I optimize your existing site, or — if the base is too weak — rebuild it so SEO and AI visibility can take hold at all.",
        },
      ],

      finalCtaHeading:
        "While you're reading this, a customer is finding your competitor — on Google or in an AI answer.",
      finalCtaCopy:
        "Let's change that. On a free SEO call I'll show you the biggest levers for your visibility — on Google and in AI search.",
      finalCtaLabel: "Book a free SEO call",
    },
  },
}
