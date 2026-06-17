import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  CalendarCheck,
  Zap,
  Repeat,
  Building2,
  Users,
  Home,
  Clock,
  TrendingUp,
  ShieldCheck,
  Lock,
  Database,
  PhoneCall,
  Rocket,
  Gauge,
  ChevronDown,
  Check,
  Star,
  Quote,
} from "lucide-react"
import { Reveal } from "@/components/app/Reveal"
import { siteConfig } from "@/site-config"

/* ======================================================================= */
/*  KONFIGURATION — alle pro Kunde editierbaren Texte & Preise hier.         */
/*  Suchen Sie nach [PLATZHALTER] für alles, was noch ausgefüllt werden muss.*/
/* ======================================================================= */
const config = {
  // Produktname & Tagline.
  productName: "MaklerOS",
  productTagline: "Das Betriebssystem für Ihr Maklerbüro.",

  // Buchungslink aus siteConfig (NEXT_PUBLIC_BOOKING_URL env var, mit
  // hardcodiertem Google-Calendar-Fallback).
  bookingUrl: siteConfig.bookingUrl,

  // [PLATZHALTER] Vertrauenszeile unter dem Haupt-CTA.
  trustLine: "Vertraut von Maklern in Österreich & Deutschland", // [PLATZHALTER]

  // [PLATZHALTER] Durchschnittliche Provision für die Rechen-Sektion.
  avgCommission: "8.000 €", // [PLATZHALTER]

  // [PLATZHALTER] Aufbauzeit.
  buildTime: "10 Werktagen", // [PLATZHALTER]

  // Preise [PLATZHALTER] — anpassen, sobald kalkuliert.
  setupPrice: "3.500 €", // [PLATZHALTER]
  carePrice: "299 €", // [PLATZHALTER]
  growthPrice: "1.500 €", // [PLATZHALTER]

  // Kontakt / Impressum (Footer).
  contactEmail: "contact@ericstrohmaier.com",
  impressumUrl: "#", // [PLATZHALTER] Link zum Impressum

  // Referenzen [PLATZHALTER] — durch echte ersetzen.
  testimonials: [
    {
      stat: "+14", // [PLATZHALTER]
      statLabel: "qualifizierte Leads im ersten Monat",
      quote:
        "Endlich geht keine Anfrage mehr unter. Das System meldet sich sofort, ich gehe nur noch zu den Terminen.", // [PLATZHALTER]
      name: "[PLATZHALTER: Name]",
      role: "[PLATZHALTER: Makler:in, Stadt]",
    },
    {
      stat: "3", // [PLATZHALTER]
      statLabel: "zusätzliche Abschlüsse im ersten Quartal",
      quote:
        "Die automatische Nachfass-Sequenz holt Verkäufer zurück, die ich sonst längst vergessen hätte.", // [PLATZHALTER]
      name: "[PLATZHALTER: Name]",
      role: "[PLATZHALTER: Maklerbüro, Stadt]",
    },
  ],
}

export const metadata: Metadata = {
  title:
    "MaklerOS — Das Betriebssystem für Ihr Maklerbüro | Leads, Objekte, Team & Termine an einem Ort",
  description:
    "MaklerOS erfasst Ihre Leads automatisch und fasst nach, verwaltet Ihre Objekte, lässt Termine direkt buchen und verbindet Ihr Team — damit Sie keinen Abschluss mehr verlieren. Für Makler in Österreich & Deutschland.",
  openGraph: {
    title: "MaklerOS — Das Betriebssystem für Ihr Maklerbüro",
    description:
      "Leads, Objekte, Team & Termine an einem Ort. Erfasst jede Anfrage, antwortet in Sekunden und fasst automatisch nach — bis zum Termin. Für Immobilienmakler in AT & DE.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaklerOS — Das Betriebssystem für Ihr Maklerbüro",
    description:
      "Leads, Objekte, Team & Termine an einem Ort — automatisch erfasst, beantwortet und nachgefasst.",
  },
}

/* ======================================================================= */
/*  PAGE                                                                     */
/* ======================================================================= */
export default function ImmobilienmaklerPage() {
  return (
    <div className="w-full">
      <LandingHeader />
      <main className="mx-auto w-full max-w-5xl px-5 md:px-8">
        <Hero />
        <Reveal>
          <Problem />
        </Reveal>
        <Reveal>
          <MoneyMath />
        </Reveal>
        <Reveal>
          <Solution />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <MidCta />
        </Reveal>
        <Reveal>
          <WhyItWorks />
        </Reveal>
        <Reveal>
          <Ownership />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
      </main>
      <LandingFooter />
    </div>
  )
}

/* ======================================================================= */
/*  Shared CTA button                                                        */
/* ======================================================================= */
function PrimaryCta({
  children = "Kostenloses Erstgespräch buchen",
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={config.bookingUrl}
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:gap-3 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  )
}

/* ======================================================================= */
/*  HEADER (focused — logo + single CTA)                                     */
/* ======================================================================= */
function LandingHeader() {
  return (
    <header className="border-foreground/[0.06] sticky top-0 z-30 border-b bg-[var(--background)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-semibold tracking-tight"
        >
          {config.productName}
          <span className="text-foreground/40 hidden text-sm font-normal sm:inline">
            für Immobilienmakler
          </span>
        </Link>
        <a
          href={config.bookingUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <Calendar className="size-4" />
          Termin buchen
        </a>
      </div>
    </header>
  )
}

/* ======================================================================= */
/*  HERO                                                                     */
/* ======================================================================= */
function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,_rgb(59,130,246),_transparent_45%)] opacity-[0.07]" />
      <p className="ont-semibold uppercase tracking-[0.2em] text-blue-500 text-blue-500">
        {config.productName} · für Immobilienmakler in AT & DE
      </p>
      <h1 className="mb-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
        {config.productTagline} Leads, Objekte, Team und Termine — an einem Ort.
      </h1>
      <p className="text-foreground/55 mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
        {config.productName} erfasst jede Anfrage, antwortet in Sekunden und
        fasst automatisch nach, verwaltet Ihre Objekte, lässt Termine direkt
        buchen und verbindet Ihr Team — statt verstreut über WhatsApp, Mail und
        Excel.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <PrimaryCta />
        <a
          href="#so-funktionierts"
          className="border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          So funktioniert&apos;s
        </a>
      </div>

      <p className="text-foreground/40 mt-7 flex items-center gap-2 text-sm">
        <span className="flex -space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-3.5 fill-blue-500 text-blue-500" />
          ))}
        </span>
        {config.trustLine}
      </p>
    </section>
  )
}

/* ======================================================================= */
/*  PROBLEM                                                                  */
/* ======================================================================= */
function Problem() {
  const pains = [
    {
      title: "Antwort dauert Stunden",
      copy: "Ein Lead kommt rein, Sie sind im Termin — und melden sich erst Stunden später. Da hat der Interessent längst drei andere Makler angeschrieben.",
    },
    {
      title: "Die meisten sind noch nicht so weit",
      copy: "Die wenigsten Verkäufer entscheiden sich beim ersten Kontakt. Wer nicht sofort kaufbereit ist, wird nie wieder kontaktiert — und ist für immer weg.",
    },
    {
      title: "Anfragen gehen unter",
      copy: "Zwischen WhatsApp, E-Mail, Portal-Postfach und Anrufliste verschwinden Leads spurlos. Jede verlorene Anfrage ist eine verlorene Provision.",
    },
  ]

  return (
    <Section id="problem">
      <SectionLabel>Das Problem</SectionLabel>
      <h2 className="mb-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Sie verlieren keine Leads, weil Sie schlecht sind. Sondern weil Sie zu
        beschäftigt sind.
      </h2>
      <p className="text-foreground/55 mb-8 max-w-2xl text-lg leading-relaxed">
        Jeder Lead, der zu spät oder gar nicht beantwortet wird, landet beim
        Mitbewerber. Und das passiert jede Woche — leise, ohne dass Sie es
        merken.
      </p>
      <div className="grid gap-3 md:grid-cols-3">
        {pains.map((p) => (
          <div
            key={p.title}
            className="border-foreground/[0.06] bg-foreground/[0.02] rounded-2xl border p-5"
          >
            <h3 className="text-foreground/90 mb-1.5 font-semibold">
              {p.title}
            </h3>
            <p className="text-foreground/55 text-sm leading-relaxed">
              {p.copy}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ======================================================================= */
/*  WAS SIE DAS KOSTET (money math)                                          */
/* ======================================================================= */
function MoneyMath() {
  return (
    <Section id="kosten">
      <SectionLabel>Was Sie das kostet</SectionLabel>
      <h2 className="mb-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Jeder verlorene Lead ist eine verlorene Provision.
      </h2>
      <div className="border-foreground/[0.06] bg-foreground/[0.02] relative overflow-hidden rounded-2xl border p-7 md:p-10">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_85%_20%,_rgb(16,185,129),_transparent_55%)] opacity-[0.06]" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-foreground/50 mb-2 text-sm font-medium uppercase tracking-wide">
              Ihre durchschnittliche Provision
            </p>
            <p className="text-5xl font-semibold tracking-tight text-emerald-500 md:text-6xl">
              {config.avgCommission}
            </p>
          </div>
          <div className="border-foreground/10 md:border-l md:pl-8">
            <p className="text-foreground/75 text-lg leading-relaxed">
              Schon{" "}
              <span className="font-semibold text-foreground">
                ein einziger zusätzlicher Abschluss pro Jahr
              </span>{" "}
              bezahlt das System um ein Vielfaches. Alles darüber ist reiner
              Gewinn — Monat für Monat.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ======================================================================= */
/*  DIE LÖSUNG (the money machine)                                           */
/* ======================================================================= */
function Solution() {
  const features = [
    {
      icon: Home,
      title: "Bewertungs-Landingpage",
      copy: '„Was ist meine Immobilie wert?" — der bewährte Lead-Magnet, der Verkäufer von selbst zu Ihnen bringt und ihre Kontaktdaten erfasst.',
    },
    {
      icon: Zap,
      title: "Sofortige automatische Antwort",
      copy: "Jeder neue Lead bekommt in Sekunden eine Reaktion per E-Mail - auch nachts, am Wochenende und wenn Sie im Termin sind.",
    },
    {
      icon: Repeat,
      title: "Automatische Nachfass-Sequenz",
      copy: "MaklerOS bleibt über Wochen und Monate dran und pflegt jeden Lead mit den richtigen Nachrichten — bis ein Termin gebucht ist.",
    },
    {
      icon: Building2,
      title: "Listing-CRM & Objekt-Landingpages",
      copy: "Verwalten Sie alle Objekte an einem Ort — mit Status, Interessenten je Listing und einer fertigen Landingpage pro Immobilie zum Teilen.",
    },
    {
      icon: CalendarCheck,
      title: "Integriertes Buchungssystem",
      copy: "Interessenten buchen Besichtigungen und Erstgespräche direkt in Ihren Kalender — keine Telefon-Pingpong, kein doppeltes Eintragen.",
    },
    {
      icon: Users,
      title: "Team-Zugänge & Dashboard",
      copy: "Laden Sie Mitarbeiter ein, verteilen Sie Leads und Objekte und behalten Sie im gemeinsamen Dashboard alles im Blick — jederzeit.",
    },
  ]

  return (
    <Section id="loesung">
      <SectionLabel>Die Lösung</SectionLabel>
      <h2 className="mb-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Alles in MaklerOS — was Sie bekommen.
      </h2>
      <p className="text-foreground/55 mb-8 max-w-2xl text-lg leading-relaxed">
        Alles, was Ihr Büro braucht, in einem System — von der ersten Anfrage
        bis zum unterschriebenen Vertrag.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="border-foreground/[0.06] bg-foreground/[0.02] hover:border-foreground/10 hover:bg-foreground/[0.04] group flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/15">
                <Icon className="size-5 text-blue-500" strokeWidth={1.75} />
              </div>
              <h3 className="text-foreground/90 mb-1.5 text-lg font-semibold">
                {f.title}
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed">
                {f.copy}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ======================================================================= */
/*  SO FUNKTIONIERT'S                                                        */
/* ======================================================================= */
function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: "Erstgespräch",
      copy: "Wir schauen uns Ihren aktuellen Lead-Prozess an und finden, wo Ihnen die meisten Abschlüsse durchrutschen.",
    },
    {
      icon: Rocket,
      title: `Aufbau & Launch`,
      copy: `Ich baue Ihr komplettes MaklerOS auf und bringe es in ${config.buildTime} live — ohne Aufwand für Sie.`,
    },
    {
      icon: TrendingUp,
      title: "Läuft & wird optimiert",
      copy: "Sie bekommen Termine, ich kümmere mich um die Technik — und verbessere das System laufend weiter.",
    },
  ]

  return (
    <Section id="so-funktionierts">
      <SectionLabel>So funktioniert&apos;s</SectionLabel>
      <h2 className="mb-8 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        In drei Schritten zu Ihrem MaklerOS.
      </h2>
      <div className="grid gap-3 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div
              key={step.title}
              className="border-foreground/[0.06] bg-foreground/[0.02] relative rounded-2xl border p-6"
            >
              <span className="text-foreground/10 absolute right-5 top-4 text-3xl font-bold tabular-nums">
                {i + 1}
              </span>
              <Icon className="mb-4 size-6 text-blue-500" strokeWidth={1.5} />
              <h3 className="text-foreground/90 mb-1.5 font-semibold">
                {step.title}
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed">
                {step.copy}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ======================================================================= */
/*  MID CTA                                                                  */
/* ======================================================================= */
function MidCta() {
  return (
    <section className="py-6 md:py-10">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-500/30 bg-blue-500/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Bereit, keinen Lead mehr zu verlieren?
          </h2>
          <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
            Im kostenlosen Erstgespräch finden wir Ihren größten Hebel — ganz
            ohne Verkaufsdruck.
          </p>
        </div>
        <PrimaryCta className="shrink-0" />
      </div>
    </section>
  )
}

/* ======================================================================= */
/*  WARUM ES FUNKTIONIERT                                                    */
/* ======================================================================= */
function WhyItWorks() {
  const facts = [
    {
      icon: Gauge,
      title: "Speed-to-Lead: Wer in Minuten reagiert, gewinnt.",
      copy: "Interessenten entscheiden sich fast immer für den, der zuerst antwortet. Ihr System reagiert nicht in Minuten — sondern in Sekunden, rund um die Uhr.",
    },
    {
      icon: Clock,
      title: "Dranbleiben: Die meisten Abschlüsse kommen erst beim Nachfassen.",
      copy: "Selten klappt es beim ersten Kontakt. Das System fasst automatisch nach — wieder und wieder, freundlich und konsequent — und hört nie auf.",
    },
  ]

  return (
    <Section id="warum">
      <SectionLabel>Warum es funktioniert</SectionLabel>
      <h2 className="mb-8 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Zwei einfache Wahrheiten — konsequent automatisiert.
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {facts.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="border-foreground/[0.06] bg-foreground/[0.02] rounded-2xl border p-6"
            >
              <Icon
                className="mb-4 size-7 text-emerald-500"
                strokeWidth={1.5}
              />
              <h3 className="text-foreground/90 mb-2 text-lg font-semibold">
                {f.title}
              </h3>
              <p className="text-foreground/55 leading-relaxed">{f.copy}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ======================================================================= */
/*  SIE BESITZEN ALLES                                                       */
/* ======================================================================= */
function Ownership() {
  const points = [
    {
      icon: Lock,
      title: "Kein Lock-in",
      copy: "Keine Knebelverträge, keine Abhängigkeit. Sie können jederzeit alles mitnehmen und selbst hosten.",
    },
    {
      icon: Database,
      title: "Code & Daten gehören Ihnen",
      copy: "Voller Export — das komplette System, alle Kontakte und alle Objektdaten sind und bleiben Ihr Eigentum.",
    },
    {
      icon: ShieldCheck,
      title: "DSGVO-konform, EU-Hosting",
      copy: "Ihre Daten liegen in der EU und werden datenschutzkonform verarbeitet — sicher für AT & DE.",
    },
  ]

  return (
    <Section id="eigentum">
      <SectionLabel>Sie besitzen alles</SectionLabel>
      <h2 className="mb-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Ihr System. Ihre Daten. Keine Abhängigkeit.
      </h2>
      <p className="text-foreground/55 mb-8 max-w-2xl text-lg leading-relaxed">
        Sie bleiben, weil das System sich rechnet — nicht, weil ein Vertrag Sie
        festhält.
      </p>
      <div className="grid gap-3 md:grid-cols-3">
        {points.map((p) => {
          const Icon = p.icon
          return (
            <div
              key={p.title}
              className="border-foreground/[0.06] bg-foreground/[0.02] rounded-2xl border p-5"
            >
              <Icon className="mb-3 size-6 text-blue-500" strokeWidth={1.5} />
              <h3 className="text-foreground/90 mb-1.5 font-semibold">
                {p.title}
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed">
                {p.copy}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ======================================================================= */
/*  TESTIMONIALS                                                             */
/* ======================================================================= */
function Testimonials() {
  return (
    <Section id="ergebnisse">
      <SectionLabel>Ergebnisse</SectionLabel>
      <h2 className="mb-8 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Was Makler mit MaklerOS erreichen.
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {config.testimonials.map((t, i) => (
          <div
            key={i}
            className="border-foreground/[0.06] bg-foreground/[0.02] flex flex-col rounded-2xl border p-6"
          >
            <Quote className="text-foreground/15 mb-4 size-7" />
            <p className="mb-1 text-3xl font-semibold tracking-tight text-emerald-500">
              {t.stat}{" "}
              <span className="text-foreground/55 text-sm font-normal">
                {t.statLabel}
              </span>
            </p>
            <p className="text-foreground/75 mb-6 mt-3 leading-relaxed">
              &bdquo;{t.quote}&ldquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              {/* [PLATZHALTER] Logo / Foto der Referenz */}
              <div className="bg-foreground/[0.06] text-foreground/30 flex size-11 shrink-0 items-center justify-center rounded-full text-[10px] font-medium">
                Logo
              </div>
              <div>
                <p className="text-foreground/90 text-sm font-semibold">
                  {t.name}
                </p>
                <p className="text-foreground/45 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-foreground/35 mt-4 text-xs">
        [PLATZHALTER] Referenzen durch echte Kundenstimmen, Zahlen, Namen und
        Logos/Fotos ersetzen.
      </p>
    </Section>
  )
}

/* ======================================================================= */
/*  PREISE                                                                   */
/* ======================================================================= */
function Pricing() {
  const plans = [
    {
      name: "Care-Plan",
      price: `ab ${config.carePrice}`,
      cadence: "/Monat",
      who: "Damit alles läuft und gepflegt bleibt.",
      bullets: [
        "Hosting & Wartung komplett übernommen",
        "Kleine Anpassungen inklusive",
        "Neue Objekt-Landingpages pro Listing",
        "Sicherheit & Updates laufend",
      ],
      featured: false,
    },
    {
      name: "Growth-Partner",
      price: `ab ${config.growthPrice}`,
      cadence: "/Monat",
      who: "Damit aus dem System aktiv neue Abschlüsse werden.",
      bullets: [
        "Alles aus dem Care-Plan",
        "Aktive Betreuung Ihres Lead-Prozesses",
        "Monatliche Kampagnen an Ihre Datenbank",
        "Laufende Optimierung & Reporting",
      ],
      featured: true,
    },
  ]

  return (
    <Section id="preise">
      <SectionLabel>Preise</SectionLabel>
      <h2 className="mb-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Transparent & fair — zwei Teile, ein Ergebnis.
      </h2>
      <p className="text-foreground/55 mb-8 max-w-2xl text-lg leading-relaxed">
        Eine einmalige Einrichtung baut Ihr MaklerOS auf. Danach wählen Sie den
        monatlichen Plan, der zu Ihnen passt.
      </p>

      {/* Einmalige Einrichtung */}
      <div className="border-foreground/[0.06] bg-foreground/[0.02] mb-3 flex flex-col items-start justify-between gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center md:px-8">
        <div>
          <p className="text-foreground/90 font-semibold">
            Einmalige Einrichtung
          </p>
          <p className="text-foreground/55 mt-1 text-sm leading-relaxed">
            Aufbau & Launch Ihres kompletten MaklerOS.
          </p>
        </div>
        <p className="flex shrink-0 items-baseline">
          <span className="text-3xl font-semibold tracking-tight text-foreground">
            ab {config.setupPrice}
          </span>
        </p>
      </div>

      {/* Monatliche Pläne */}
      <div className="grid gap-3 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
              plan.featured
                ? "border-blue-500/40 bg-blue-500/[0.06] shadow-sm shadow-blue-600/10 hover:bg-blue-500/[0.08]"
                : "border-foreground/[0.06] bg-foreground/[0.02] hover:border-foreground/10 hover:bg-foreground/[0.04]"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-2.5 left-6 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                Am beliebtesten
              </span>
            )}
            <h3 className="text-foreground/90 text-lg font-semibold">
              {plan.name}
            </h3>
            <p className="text-foreground/55 mb-4 mt-1 text-sm leading-relaxed">
              {plan.who}
            </p>
            <p className="mb-5 flex items-baseline">
              <span className="text-3xl font-semibold tracking-tight text-foreground">
                {plan.price}
              </span>
              <span className="text-foreground/40 ml-1 text-sm">
                {plan.cadence}
              </span>
            </p>
            <ul className="mb-6 mt-auto space-y-2">
              {plan.bullets.map((b) => (
                <li
                  key={b}
                  className="text-foreground/65 flex items-start gap-2 text-sm"
                >
                  <Check
                    className={`mt-0.5 size-4 shrink-0 ${
                      plan.featured ? "text-blue-500" : "text-emerald-500"
                    }`}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={config.bookingUrl}
              target="_blank"
              rel="noopener"
              className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
                plan.featured
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-500 focus-visible:ring-blue-500"
                  : "border-foreground/10 text-foreground/70 hover:border-foreground/20 focus-visible:ring-foreground/20 border hover:text-foreground"
              }`}
            >
              Erstgespräch buchen
            </a>
          </div>
        ))}
      </div>

      <p className="text-foreground/50 mt-5 text-sm">
        Keine Verträge. Monatlich kündbar. Sie bleiben, weil es sich rechnet.
      </p>
    </Section>
  )
}

/* ======================================================================= */
/*  FAQ                                                                      */
/* ======================================================================= */
function Faq() {
  const faqs = [
    {
      q: "Wie lange dauert der Aufbau?",
      a: `In der Regel ist Ihr MaklerOS in ${config.buildTime} live. Den Großteil der Arbeit übernehme ich — Ihr Aufwand bleibt minimal.`,
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
      a: "Kein Problem. Wir integrieren MaklerOS in Ihre bestehende Website oder ersetzen sie — je nachdem, was für Sie mehr Abschlüsse bringt.",
    },
  ]

  return (
    <Section id="faq">
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="mb-8 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Häufige Fragen. group
      </h2>
      <div className="divide-foreground/[0.06] border-foreground/[0.06] divide-y overflow-hidden rounded-2xl border">
        {faqs.map((f) => (
          <details key={f.q} className="bg-foreground/[0.02] group">
            <summary className="hover:bg-foreground/[0.02] flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="text-foreground/40 size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="text-foreground/55 px-5 pb-5 leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}

/* ======================================================================= */
/*  ABSCHLUSS-CTA                                                            */
/* ======================================================================= */
function FinalCta() {
  return (
    <section className="py-14 md:py-20">
      <div className="border-foreground/[0.06] bg-foreground/[0.03] relative overflow-hidden rounded-3xl border px-6 py-14 text-center md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgb(59,130,246),_transparent_50%),radial-gradient(circle_at_80%_50%,_rgb(16,185,129),_transparent_50%)] opacity-[0.06]" />
        <div className="relative">
          <h2 className="mx-auto mb-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Während Sie das lesen, schreibt Ihr nächster Verkäufer einen anderen
            Makler an.
          </h2>
          <p className="text-foreground/55 mx-auto mb-8 max-w-lg text-lg leading-relaxed">
            Lassen Sie uns das ändern. Im kostenlosen Erstgespräch zeige ich
            Ihnen, wie Ihr MaklerOS ab Tag eins für Sie arbeitet.
          </p>
          <PrimaryCta />
        </div>
      </div>
    </section>
  )
}

/* ======================================================================= */
/*  FOOTER (minimal)                                                         */
/* ======================================================================= */
function LandingFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-foreground/[0.06] mt-8 border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center md:px-8">
        <p className="text-foreground/45">© {year} Eric Strohmaier</p>
        <div className="text-foreground/55 flex items-center gap-5">
          <a
            href={config.impressumUrl}
            className="transition-colors hover:text-foreground"
          >
            Impressum
          </a>
          <a
            href={`mailto:${config.contactEmail}`}
            className="transition-colors hover:text-foreground"
          >
            {config.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ======================================================================= */
/*  Shared section primitives                                                */
/* ======================================================================= */
function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="border-foreground/[0.06] scroll-mt-20 border-t py-12 md:py-16"
    >
      {children}
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-foreground/30 mb-3 text-xs font-medium uppercase tracking-[0.2em]">
      {children}
    </p>
  )
}
