# Mega-Prompt — Real Estate (Immo) Landing Page

Paste this whole block into Claude Code. It builds a standalone, shareable landing page for
real estate agents. Edit the bracketed [PLATZHALTER] values (prices, booking link, testimonials)
before publishing.

**Decisions baked in (change if needed):**
- Language: **German** (your buyers are AT/DE agents). To get English instead, add "Write all copy in English" at the end.
- Currency: **EUR**.
- Route: `/immobilienmakler` (clean, shareable URL).
- Prices are placeholders: Setup from €3.500, Care Plan from €299/mo, Growth Partner from €1.500/mo.

---

```
Build a new standalone landing page in this repo aimed at REAL ESTATE AGENTS (Immobilienmakler)
in Austria and Germany. It's a sales page I will share directly with prospects, so it must be
focused, premium, and conversion-optimized. Read the repo first to match the existing stack and
design system before writing code.

STACK (already in repo — reuse, don't fork): Next.js 14 App Router, TypeScript, Tailwind,
shadcn/ui (components/ui), lucide-react icons, next-themes (light/dark). Create the page at
app/immobilienmakler/page.tsx. Add a Next.js metadata export (title, description, openGraph) so
the link previews nicely when shared on WhatsApp/LinkedIn/email.

LAYOUT: focused landing-page layout, NOT the full site nav. Header = logo + a single "Termin
buchen" CTA only. Minimal footer (impressum link placeholder + contact). Everything drives to one
action: book a call. Repeat the primary CTA at the top, middle, and bottom of the page.

LANGUAGE & TONE: Write ALL copy in GERMAN. Confident, clear, outcome-first, no fluff. Speak to a
busy Makler about money — more Abschlüsse, weniger verlorene Leads. Address them as "Sie".

WHO THIS IS FOR / THE OFFER: I build a "Lead-Maschine" for real estate agents — a system that
captures seller/buyer leads and follows up automatically so they stop losing deals to slow or
forgotten follow-up. The deal is a one-time setup project plus a monthly plan to run and improve it.

PAGE SECTIONS (in this order):

1. HERO
   - Outcome headline (German) about winning more deals / never losing a lead again.
     Example direction: "Verlieren Sie keinen Immobilien-Lead mehr — Ihre Lead-Maschine
     verkauft, während Sie verkaufen." (write a better one)
   - One-sentence subhead explaining the system in plain terms.
   - Primary CTA "Kostenloses Erstgespräch buchen" → [BOOKING_LINK_PLATZHALTER].
   - Secondary CTA "So funktioniert's" (scrolls down).
   - Small trust line under CTAs: "[PLATZHALTER: z. B. Vertraut von Maklern in AT & DE]".

2. DAS PROBLEM (agitate)
   - Punchy: leads kommen rein, aber Antwort dauert Stunden; die meisten Interessenten sind noch
     nicht abschlussbereit und werden nie wieder kontaktiert; Anfragen gehen in WhatsApp/Mail unter.
   - Make them feel the lost commission.

3. WAS SIE DAS KOSTET (the money math)
   - Frame: jeder verlorene Lead = eine verlorene Provision. A short, visual block:
     "Ihre durchschnittliche Provision: [€ PLATZHALTER]. Schon EIN zusätzlicher Abschluss pro Jahr
     bezahlt das System um ein Vielfaches."

4. DIE LÖSUNG — was Sie bekommen (the money machine)
   - 4 feature cards with lucide icons:
     a) Bewertungs-Landingpage ("Was ist meine Immobilie wert?") — der bewährte Verkäufer-Lead-Magnet.
     b) Sofortige automatische Antwort — neuer Lead bekommt in Sekunden eine Reaktion (E-Mail/SMS).
     c) Automatische Nachfass-Sequenz — pflegt Leads über Wochen/Monate bis zum Termin.
     d) Übersichtliches Dashboard — alle Leads an einem Ort, plus Objekt-Landingpages pro Listing.

5. SO FUNKTIONIERT'S (3 steps)
   - Schritt 1: Erstgespräch (wir schauen Ihren aktuellen Lead-Prozess an).
   - Schritt 2: Aufbau & Launch in [PLATZHALTER: z. B. 10 Werktagen].
   - Schritt 3: Läuft & wird laufend optimiert — Sie bekommen Termine, ich kümmere mich um die Technik.

6. WARUM ES FUNKTIONIERT (the two facts)
   - Speed-to-Lead: wer in Minuten reagiert, gewinnt — Ihr System reagiert in Sekunden.
   - Dranbleiben: die meisten Abschlüsse passieren erst nach mehrfachem Nachfassen; das System hört nie auf.

7. SIE BESITZEN ALLES (ownership / trust)
   - Kein Lock-in, keine Knebelverträge. Der Code und die Daten gehören Ihnen — Sie können
     jederzeit alles mitnehmen und selbst hosten. Daten in der EU, DSGVO-konform.

8. ERGEBNISSE / REFERENZEN (social proof — PLACEHOLDERS)
   - 1–2 testimonial cards with a real number (e.g. "+[X] qualifizierte Leads im ersten Monat"),
     reviewer name + role. Mark clearly as [PLATZHALTER] so I replace them.
   - Leave a slot for a logo/photo.

9. PREISE / DAS ANGEBOT (transparent, two parts)
   - Einmalige Einrichtung: ab [€3.500 PLATZHALTER] — Aufbau & Launch der kompletten Lead-Maschine.
   - Danach monatlich, zwei Optionen:
       • Care-Plan: ab [€299 PLATZHALTER]/Monat — Hosting, Wartung, kleine Anpassungen, neue
         Objekt-Landingpages.
       • Growth-Partner (am beliebtesten): ab [€1.500 PLATZHALTER]/Monat — aktive Betreuung,
         monatliche Kampagnen an Ihre Datenbank, laufende Optimierung & Reporting.
   - Reassurance line: "Keine Verträge. Monatlich kündbar. Sie bleiben, weil es sich rechnet."
   - Emphasize the Growth-Partner option visually.

10. FAQ (handle objections)
   - Wie lange dauert der Aufbau?
   - Gehört mir das System wirklich? (ja, voller Export)
   - Gibt es eine Vertragsbindung? (nein)
   - Ist das DSGVO-konform? (ja, EU-Hosting) — important for AT/DE.
   - Was, wenn ich schon eine Website habe? (wir integrieren / ersetzen)

11. ABSCHLUSS-CTA
   - Strong closing line + "Kostenloses Erstgespräch buchen" button → [BOOKING_LINK_PLATZHALTER].

DESIGN: clean, modern, premium (Linear/Stripe-calm, not flashy). Strong type hierarchy, generous
whitespace, fully responsive/mobile-first, works in light and dark mode. Use the existing Tailwind
tokens and shadcn components — match the site's look. Add subtle, tasteful scroll-in animations and
hover states using the tailwindcss-animate package already installed. Keep all per-client editable
text and prices easy to find (ideally near the top of the file or in a small config object) and
clearly marked [PLATZHALTER].

When done: run the build/lint, fix any errors, show me the page, and give me a short list of every
[PLATZHALTER] I still need to fill in (prices, booking link, testimonials, trust number, build time).
```

---

## Before you publish, fill in:
- Real prices (start with the placeholders, raise as you close deals).
- Booking link (Cal.com / Calendly).
- 1–2 real testimonials with a number, once you have your first client.
- Average-commission figure for the money-math block (or leave it generic).
- Build-time promise (e.g. "in 10 Werktagen").
- Impressum link (legally required for AT/DE business sites).
