import type { Comparison } from "./types"

/**
 * MaklerOS (custom system) as an alternative to standard Makler-CRM SaaS
 * (onOffice, Propstack). Fair framing: "theirs" stays at the categorical level
 * of standard subscription software — no invented prices or specific features.
 */
export const onofficeAlternative: Comparison = {
  slug: "onoffice-alternative",
  accent: "blue",
  funnelTo: "leistungen/immobilienmakler",
  proofSlugs: ["imperia-immobilien", "friends-in-flats"],
  content: {
    de: {
      metaTitle: "onOffice-Alternative: individuelle Maklersoftware, die Ihnen gehört",
      metaDescription:
        "Suchen Sie eine Alternative zu onOffice oder Propstack? Statt Standard-Abo pro Nutzer bekommen Sie ein individuelles Makler-System, das genau zu Ihren Abläufen passt, Ihnen gehört und ohne Lock-in läuft.",
      keywords: [
        "onOffice Alternative",
        "Propstack Alternative",
        "Maklersoftware Alternative",
        "Alternative zu onOffice",
        "individuelle Maklersoftware",
        "Makler CRM Alternative",
        "Maklersoftware Österreich",
      ],
      eyebrow: "onOffice- & Propstack-Alternative",
      h1: "Eine Maklersoftware, die Ihnen gehört — statt Abo pro Nutzer.",
      subtitle:
        "Standard-Tools wie onOffice oder Propstack sind ausgereift — aber alle Makler bekommen dasselbe, und Daten wie System bleiben beim Anbieter.",
      intro:
        "Die Alternative: ein individuelles Makler-System (MaklerOS), das genau auf Ihre Abläufe zugeschnitten ist, Ihnen gehört, ohne Lock-in läuft und Anfragen automatisch erfasst, beantwortet und nachfasst. Kein Abo pro Nutzer — Sie besitzen, was Sie bezahlen.",
      primaryCtaLabel: "Kostenloses Erstgespräch buchen",

      tableHeading: "MaklerOS vs. Standard-Maklersoftware",
      oursLabel: "MaklerOS (individuell)",
      theirsLabel: "Standard-Software (onOffice, Propstack …)",
      rows: [
        {
          label: "Anpassung an Ihre Abläufe",
          ours: "Komplett auf Sie zugeschnitten",
          theirs: "Standard, für alle gleich",
        },
        {
          label: "Eigentum an System & Daten",
          ours: "Gehört Ihnen, voller Export",
          theirs: "System & Daten beim Anbieter",
        },
        {
          label: "Bindung & Lizenz",
          ours: "Monatlich kündbar, kein Lock-in",
          theirs: "Abo, oft pro Nutzer/Lizenz",
        },
        {
          label: "Speed-to-Lead-Automatisierung",
          ours: "Sofort-Antwort & Nachfass eingebaut",
          theirs: "Je nach Tarif / Zusatzmodul",
        },
        {
          label: "Website + CRM",
          ours: "Aus einer Hand, integriert",
          theirs: "Oft getrennt / Zusatzkosten",
        },
        {
          label: "Ansprechpartner",
          ours: "Eine Person, die es gebaut hat",
          theirs: "Support-Ticket / Hotline",
        },
        {
          label: "Datenstandort",
          ours: "EU-Hosting, Sie kontrollieren die Daten",
          theirs: "Anbieterabhängig",
        },
      ],

      reasonsLabel: "Warum wechseln",
      reasonsHeading: "Wann sich ein eigenes System lohnt.",
      reasons: [
        {
          icon: "sparkles",
          title: "Heben Sie sich ab",
          copy: "Wenn alle Makler dieselbe Software nutzen, sehen alle gleich aus. Ein eigenes System bildet genau Ihren Stil und Ihre Abläufe ab — ein echter Unterschied im Markt.",
        },
        {
          icon: "lock",
          title: "Sie besitzen alles",
          copy: "Kein Lock-in, keine Abhängigkeit. Code, Kontakte und Objektdaten gehören Ihnen — mit vollem Export, jederzeit.",
        },
        {
          icon: "zap",
          title: "Speed-to-Lead eingebaut",
          copy: "Jede Anfrage wird in Sekunden beantwortet und über Wochen automatisch nachgefasst — ohne Zusatzmodul, von Anfang an Teil des Systems.",
        },
        {
          icon: "message",
          title: "Ein Ansprechpartner",
          copy: "Sie reden direkt mit dem, der es gebaut hat — keine Hotline, keine Warteschleife. Änderungen werden umgesetzt, nicht vertröstet.",
        },
        {
          icon: "banknote",
          title: "Kein Abo pro Nutzer",
          copy: "Statt monatlicher Lizenzen, die mit jedem Mitarbeiter teurer werden, investieren Sie einmal in ein System, das Ihnen gehört.",
        },
        {
          icon: "trending",
          title: "Wächst mit Ihnen",
          copy: "Neue Abläufe, neue Funktionen, neue Mitarbeiter — Ihr System wird erweitert, wie Sie es brauchen, nicht wie eine Roadmap es vorgibt.",
        },
      ],

      honestLabel: "Ehrlich gesagt",
      honestHeading: "Wann onOffice oder Propstack die bessere Wahl sind.",
      honestCopy:
        "Standard-Maklersoftware ist ausgereift und sofort startklar. Wenn Sie mit den Standardfunktionen zufrieden sind, schnell loslegen wollen und keine eigenen Abläufe abbilden müssen, sind onOffice oder Propstack eine solide Wahl — dafür sind sie gebaut. Ein individuelles System lohnt sich, wenn Standard Sie einengt, Sie sich abheben wollen oder volle Kontrolle und Eigentum wichtig sind. Im kostenlosen Gespräch sage ich Ihnen ehrlich, was für Sie mehr Sinn macht.",

      faqLabel: "FAQ",
      faqHeading: "Häufige Fragen.",
      faqs: [
        {
          q: "Kann ich meine Daten aus onOffice/Propstack mitnehmen?",
          a: "In der Regel ja. Die meisten Systeme erlauben einen Export Ihrer Kontakte und Objekte. Wir übernehmen Ihre Daten beim Aufbau Ihres eigenen Systems, soweit ein Export möglich ist.",
        },
        {
          q: "Ist ein eigenes System nicht teurer?",
          a: "Am Anfang investieren Sie einmalig mehr. Dafür entfällt das Abo pro Nutzer, und das System gehört Ihnen. Über die Zeit — und mit mehreren Mitarbeitern — rechnet sich das oft, plus Sie sind nicht an Lizenzpreise gebunden.",
        },
        {
          q: "Wie lange dauert die Umstellung?",
          a: "In der Regel ist Ihr System in wenigen Wochen live. Den Großteil übernehme ich; Ihr Aufwand bleibt minimal, und wir stellen so um, dass im Tagesgeschäft nichts liegen bleibt.",
        },
        {
          q: "Was ist mit Support und Updates?",
          a: "Beides läuft über die monatliche Betreuung — direkt mit mir, ohne Ticket-Hotline. Sicherheit, Updates und kleine Änderungen sind inklusive.",
        },
      ],

      serviceLinkLabel: "Mehr zu MaklerOS",
      finalCtaHeading: "Sehen Sie, was ein eigenes System für Ihr Maklerbüro tun kann.",
      finalCtaCopy:
        "Im kostenlosen Erstgespräch vergleichen wir ehrlich Ihre Optionen — und finden, was für Sie am meisten Abschlüsse bringt.",
      finalCtaLabel: "Kostenloses Erstgespräch buchen",
    },

    en: {
      metaTitle: "onOffice Alternative: custom real-estate software you own",
      metaDescription:
        "Looking for an alternative to onOffice or Propstack? Instead of a per-seat subscription, get a custom real-estate system tailored to your workflows, owned by you, with no lock-in.",
      keywords: [
        "onOffice alternative",
        "Propstack alternative",
        "real estate software alternative",
        "custom real estate CRM",
        "real estate software Austria",
      ],
      eyebrow: "onOffice & Propstack alternative",
      h1: "Real-estate software you own — instead of a per-seat subscription.",
      subtitle:
        "Standard tools like onOffice or Propstack are mature — but every agent gets the same thing, and both data and system stay with the vendor.",
      intro:
        "The alternative: a custom real-estate system (MaklerOS) tailored exactly to your workflows, owned by you, with no lock-in, that captures, answers and follows up on inquiries automatically. No per-seat subscription — you own what you pay for.",
      primaryCtaLabel: "Book a free intro call",

      tableHeading: "MaklerOS vs. standard real-estate software",
      oursLabel: "MaklerOS (custom)",
      theirsLabel: "Standard software (onOffice, Propstack …)",
      rows: [
        {
          label: "Fit to your workflows",
          ours: "Tailored entirely to you",
          theirs: "Standard, same for everyone",
        },
        {
          label: "Ownership of system & data",
          ours: "Yours, full export",
          theirs: "System & data with the vendor",
        },
        {
          label: "Lock-in & licensing",
          ours: "Cancel monthly, no lock-in",
          theirs: "Subscription, often per seat",
        },
        {
          label: "Speed-to-lead automation",
          ours: "Instant reply & follow-up built in",
          theirs: "Depends on plan / add-on",
        },
        {
          label: "Website + CRM",
          ours: "One source, integrated",
          theirs: "Often separate / extra cost",
        },
        {
          label: "Point of contact",
          ours: "One person who built it",
          theirs: "Support ticket / hotline",
        },
        {
          label: "Data location",
          ours: "EU hosting, you control the data",
          theirs: "Vendor-dependent",
        },
      ],

      reasonsLabel: "Why switch",
      reasonsHeading: "When a system of your own pays off.",
      reasons: [
        {
          icon: "sparkles",
          title: "Stand out",
          copy: "When every agent uses the same software, everyone looks the same. A system of your own reflects your exact style and workflows — a real difference in the market.",
        },
        {
          icon: "lock",
          title: "You own everything",
          copy: "No lock-in, no dependency. Code, contacts and listing data are yours — with full export, any time.",
        },
        {
          icon: "zap",
          title: "Speed-to-lead built in",
          copy: "Every inquiry is answered in seconds and followed up automatically for weeks — no add-on, part of the system from the start.",
        },
        {
          icon: "message",
          title: "One point of contact",
          copy: "You talk directly to the person who built it — no hotline, no queue. Changes get done, not deferred.",
        },
        {
          icon: "banknote",
          title: "No per-seat subscription",
          copy: "Instead of monthly licenses that get pricier with every employee, you invest once in a system that's yours.",
        },
        {
          icon: "trending",
          title: "Grows with you",
          copy: "New workflows, features, employees — your system gets extended as you need, not as a roadmap dictates.",
        },
      ],

      honestLabel: "Honestly",
      honestHeading: "When onOffice or Propstack are the better choice.",
      honestCopy:
        "Standard real-estate software is mature and ready to go. If you're happy with the standard features, want to start fast and don't need to reflect your own workflows, onOffice or Propstack are a solid choice — that's what they're built for. A custom system pays off when standard constrains you, you want to stand out, or full control and ownership matter. On a free call I'll tell you honestly what makes more sense for you.",

      faqLabel: "FAQ",
      faqHeading: "Common questions.",
      faqs: [
        {
          q: "Can I bring my data over from onOffice/Propstack?",
          a: "Usually yes. Most systems allow an export of your contacts and listings. We migrate your data when building your own system, as far as an export is available.",
        },
        {
          q: "Isn't a custom system more expensive?",
          a: "Upfront you invest more once. In return, the per-seat subscription goes away and the system is yours. Over time — and with several employees — it often pays off, plus you're not tied to license pricing.",
        },
        {
          q: "How long does switching take?",
          a: "Your system is usually live within a few weeks. I do the heavy lifting; your effort stays minimal, and we switch so nothing falls through in day-to-day business.",
        },
        {
          q: "What about support and updates?",
          a: "Both run through monthly care — directly with me, no ticket hotline. Security, updates and small changes are included.",
        },
      ],

      serviceLinkLabel: "More about MaklerOS",
      finalCtaHeading: "See what a system of your own can do for your real-estate office.",
      finalCtaCopy:
        "On a free intro call we honestly compare your options — and find what brings you the most closings.",
      finalCtaLabel: "Book a free intro call",
    },
  },
}
