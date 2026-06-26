# SEO + AEO Playbook — ericstrohmaier.com

_Last updated: 2026-06-26. Living doc. Pairs with the audit + the Tim Soulo / Ahrefs
interview learnings. "AEO" = answer-engine optimization (ChatGPT, Perplexity, Google
AI Overviews, Copilot)._

---

## Focus first (read this if nothing else)

The technical baseline is **already excellent** — server-rendered `<html lang>`,
hreflang (en/de/x-default), canonical, sitemap, a coherent
Person → ProfessionalService → WebSite JSON-LD graph, `areaServed: [Austria, Germany]`.
Do **not** rebuild it. What's missing is **visible, funnel-connected surfaces at the
language + intent level DACH buyers actually search**, plus the brand/entity signals
AI engines reward.

**The single highest-leverage move:** finish and un-hide the German `/immobilienmakler`
landing page (it's ~90% built and currently 0% visible). Then wire the two free tools
into the booking funnel, build a real `/de/invoice`, and enrich the entity graph with
`Offer`s + per-product `SoftwareApplication` nodes carrying your real numbers.

Everything here is "fundamentals re-pointed at DACH intent and AI answer surfaces."
**Never publish a number you can't trace in the repo.**

---

## What the Tim Soulo / Ahrefs interview actually said (durable principles)

These are distilled from the real interview transcript you provided. They're the
worldview behind the plan below.

1. **Branded search is the durable lever — and ~half of all Google searches are
   branded.** People search *Neville copywriting*, not just *copywriting*. If they want
   **you** specifically they find you anywhere (Google, YouTube, TikTok); ranking #1 for
   a generic term is renting an algorithm until you drop. Going for "Eric Strohmaier" +
   his product names is 10× more durable than chasing "custom software developer."

2. **Fulfilling a branded search grows it.** Ahrefs had ~10–15/mo searching "Ahrefs Data
   Studio connector" and finding nothing; they built the connector + a page → people
   found it, used it, told others → the branded search *grew*. Same with "how to
   pronounce Ahrefs." **Monitor what people search about your brand and serve it**; serving
   it fuels more of it.

3. **Brand mentions are to AI what links were to Google.** Classic SEO: links are still
   #1. **AEO: the #1 factor is brand/product mentions** in favorable contexts. The more
   places mention "Eric Strohmaier" / "PromptSloth" / "AutoReview," the more AI engines
   surface them.

4. **AI citation sources are not equal — YouTube and Reddit dominate; LinkedIn is weak.**
   For AI visibility, a YouTube presence and genuine Reddit participation matter far more
   than LinkedIn posts. (LinkedIn is still fine for human reach / driving branded search.)

5. **New topics beat evergreen.** AI amalgamates 10-year-old evergreen topics and won't
   rank you for them. Be *first* on emerging/specific topics (a new tool, a new framework,
   a niche like "MaklerOS"); copycats pile on later with AI.

6. **Free tools are a growth engine, not a cost.** Ahrefs killed its affiliate program and
   built its own free tools (free backlink checker) to out-rank the affiliates. Free tools
   = recurring search traffic + branded search + genuine word of mouth. **You already have
   two (`/invoice`, `/timetracking`) and they're under-leveraged.**

7. **Build engines, not campaigns.** Blog, YouTube channel, data studies, free tools —
   compounding assets, not one-off pushes. Ahrefs crossed $100M ARR almost entirely
   **inbound** this way (SEO + brand + word of mouth), targeting the *problem* ("you want
   traffic → you need us"), not personas.

8. **Firsthand, real-world experience is uncopyable.** AI can't do crazy things in the real
   world and write about them (Neville's "homeless people selling bottled water" story).
   Your real outcomes — 270% client revenue, PromptSloth 7,000+ users on organic alone,
   Friends in Flats 0→20,000+ — are exactly this. Document them in first person.

9. **Be in the index to be in the answer; structure content to be quotable.** No LLM cites
   a page it never crawled. Lead each section with a complete one-paragraph answer under a
   question-shaped heading; use FAQ blocks, definitions, comparison tables.

10. **Don't panic-pivot the fundamentals.** AEO is mostly classic SEO re-pointed at new
    surfaces. Enrich what exists; skip hype tooling. Measure the answer layer (mentions,
    share-of-voice, AI citations) as a *trend*, not a snapshot.

11. **AI shifts the scarce skill to taste, and you build AI skills by example.** Tim's
    podcast-prep Claude skill works because he fed it dozens of his past prep notes and,
    after each run, told it to *update itself from his edits*. Same method applies to the
    SEO skills below: seed with real examples, iterate after every use.

---

## What this means for Eric

You're a solo engineer/founder selling custom software, internal tools, automations and
high-converting sites to DACH SMBs ("software that pays for itself" / "your software
partner"); offers ~€249, €2,500/mo, from €5,000. **DACH (Austria + Germany) is your
genuinely under-exploited edge:** the site geo-redirects AT/DE visitors to German, you
co-run the DSGVO-compliant `alpen.digital`, and you have real long-running AT/DE clients
(Kinderversicherer AT, Imperia Immobilien DE) and a Vienna track record (Friends in Flats)
— but the *visible* German content and local-trust framing barely exist outside one hidden
page. Your defensible E-E-A-T is real shipped numbers; the job is to make them **visible,
localized, funnel-connected, and entity-attributed.**

---

## ✅ Already implemented (this pass)

- **OG image fixed.** Was declared 1200×630 but served a 768×1024 portrait photo. Now a
  branded dynamic 1200×630 card at `app/api/og-card/route.tsx` (`?lang=de` variant),
  wired via `siteConfig.ogImage`. Uses bundled static Roboto fonts (`public/fonts/`).
- **Local schema.** `areaServed` Worldwide → `[Austria, Germany]` Country nodes;
  `PostalAddress` with `addressCountry: AT` (locality TODO); `availableLanguage [de,en]`;
  Person `knowsAbout` + `knowsLanguage`; WebSite `inLanguage`. (`app/layout.tsx`)
- **`/immobilienmakler` set to `noindex`** until its `[PLATZHALTER]` placeholders are real
  (interim safety — the strategic move is to *finish* it; see PRIMARY below).
- **`public/llms.txt`** added for AI-crawler discoverability.
- **Footer:** Impressum + Datenschutz links added (both locales).
- **Impressum + Datenschutz** German legal templates at `app/[lang]/impressum` and
  `/datenschutz` — **`noindex` until you fill the `[BITTE AUSFÜLLEN]` fields** (real
  address, UID, etc.), then remove the `robots` block.
- **Homepage "Free tools" section** surfacing `/invoice` + `/timetracking`
  (`app/[lang]/page.tsx`, dictionaries) — the first step of the free-tool engine.

---

## The plan (do in this order)

### PRIMARY — Ship the German `/immobilienmakler` landing page
- **What:** In `app/immobilienmakler/page.tsx`: replace every `[PLATZHALTER]` (config
  ~lines 41–75) with real numbers grounded in your Imperia Immobilien work; fix the FAQ
  heading `"Häufige Fragen. group"` (a Tailwind class leaked into the text) → `"Häufige
  Fragen"`; add `FAQPage` + `SoftwareApplication` JSON-LD (the FAQ array is ready-made);
  add canonical + OG (`/api/og-card?lang=de`); add the route to `app/sitemap.ts`; then
  **remove the `robots: { index: false }` block**. One booking CTA above the fold and again
  after pricing/FAQ.
- **Why:** Only place where intent-rich DACH demand, a finished German sales page, a named
  real client to ground it, and the geo-redirect plumbing all already exist. ~90% built,
  0% visible.
- **Leading indicator:** Within 4–6 weeks, GSC Pages shows `/immobilienmakler` crossing
  0 → non-zero impressions for an "immobilienmakler software/CRM" query. Binary flip.

### NEXT 1 — Wire the free tools into the funnel + finish their schema
- Add one soft CTA on `/invoice` and `/[lang]/timetracking`: _"Built by Eric — need custom
  software? Book a free call"_ → `siteConfig.bookingUrl`. Add `WebApplication` +
  `Offer(price:0)` + `isAccessibleForFree` JSON-LD to `/timetracking` (it has none;
  `/invoice` already does). Set `author`/`publisher` → `#person`. Replace timetracking's
  dashboard-only CTAs with the booking path.
- **Why:** Your only assets built to pull recurring branded-search traffic, and both
  dead-end today. One paragraph + one schema block converts existing traffic.
- **Leading indicator:** Booking/`/contact` sessions with referrer `/invoice` or
  `/timetracking` appear in PostHog/GA (structurally zero today).

### NEXT 2 — Build a real `/de/invoice` page
- `/invoice` targets German queries (Rechnung erstellen, Rechnungsvorlage, …) but serves an
  **English** page. Mirror the working `/de`+`/en`+hreflang pattern from
  `app/[lang]/timetracking/page.tsx`. Add it + `/immobilienmakler` to `app/sitemap.ts`.
- **Leading indicator:** GSC "Rechnung erstellen" impressions attach to a `/de/invoice` URL
  and average position improves vs. the English page.

### NEXT 3 — Enrich the JSON-LD entity graph
- `app/layout.tsx`: replace `priceRange: "$$"` with a `hasOfferCatalog` of three `Offer`s
  (€249, €2,500, from €5,000 — from `dictionaries/en/home.json`). Add `owns`/`sameAs` from
  `#person` to `promptsloth.com`, `getautoreview.com`, `alpen.digital`, each a per-product
  `SoftwareApplication` node with hard metrics. Fill `site-config.ts` `locality` + the
  `addressLocality` TODO once you confirm the city.
- **Leading indicator:** A fixed monthly prompt set (Ahrefs Brand Radar / saved
  ChatGPT/Perplexity prompt) for "custom software developer Austria/Germany" starts naming
  "Eric Strohmaier" and the mention count trends up.

---

## On-page / on-site idea backlog (grouped by effort)

### Small
- **`/invoice` CTA block** — wrap the bare `<InvoiceClient/>` with a crawlable intro + soft
  booking footer. Biggest single gap (no funnel path today). **High.**
- **`/timetracking` JSON-LD** — `WebApplication`+`Offer(0)`+`isAccessibleForFree`+ short
  DSGVO FAQ, mirroring `/invoice`. **Medium-High.**
- **`/timetracking` booking CTA** — "need a custom internal tool?" alongside dashboard CTAs.
- **Offer catalog + product `owns` on root graph** — Next 3. Turns vague `$$` into
  structured intent. **Medium-High.**
- **PromptSloth as a first-hand "organic growth" story** — rewrite its `longDescription`/
  `caseStudy` in `lib/project-graveyard.ts`. **Do NOT** fill the `[PLACEHOLDER]` Chrome
  rating. **Medium-High.**
- **Crawlable local-signal text** — Hero/About line: "Based in [city], Austria — building
  software for businesses across Austria and Germany since [year]"; tie trust-strip numbers
  to real projects so `TRUSTED_COUNT='10'` / "50,000+" are corroborated, not asserted.

### Medium
- **Finish + unhide `/immobilienmakler`** (PRIMARY).
- **Real `/de/invoice`** (Next 2).
- **270%-revenue SEO case study** — promote the buried homepage sentence into a
  `graveyardProjects` entry (anonymized OK), `caseStudyFeatured: true`. Auto-flows into
  FeaturedWork + sitemap. **High.**
- **Per-project JSON-LD** — `app/[lang]/projects/[slug]/page.tsx` emits none. Add
  `SoftwareApplication`/`Article` + `BreadcrumbList`, `creator` → `#person`. Compounds across
  ~17 indexed pages. **High.**
- **Homepage FAQ section** — localized self-contained Q&A near pricing ("What does custom
  software cost?", "Do you work with businesses in Austria and Germany?", "Is it
  DSGVO-compliant?", "Can I cancel monthly plans?"). Surfaces the DSGVO/EU-hosting/Made-in-
  Austria trust line where most visitors land. _Note: FAQ as visible copy + (optionally)
  `FAQPage` JSON-LD for AI citation — Google retired FAQ rich results for SERPs in May 2026,
  so don't expect SERP stars; the value is conversion + AI._ **Medium-High.**
- **"Free Tools" nav item** — promote tools from footer-only into TopNav / a `/[lang]/tools`
  hub; builds an internal-link cluster + branded-search habit. **Medium-High.**

### Large (compounding, later)
- **Lightweight bilingual `/blog`** — _only after_ the PRIMARY ships and tool CTAs convert.
  Seed exclusively from existing material (270% story, PromptSloth teardown, "free tools für
  Freelancer & KMU" explainer, MaklerOS FAQ), each `Article` + linking tools + booking. The
  durable AI-citation / topical-authority surface the site lacks.

---

## AEO readiness (project-agnostic — reusable on other projects)

- **Crawlable-first, always.** SSR/SSG (not client-only), server-rendered `<html lang>`,
  `robots.ts` disallowing only `/api/`, canonical + OG + hreflang on every indexable route.
  Intentional `noindex` (e.g. `/immobilienmakler` until finished) is a launch gate — track
  it, don't lose it by accident.
- **Quotable structure on every commercial page.** Question-shaped heading → one complete
  answer paragraph → detail. Tool pages: `WebApplication` + `Offer(price:0)` +
  `isAccessibleForFree` (the combo cited for "free X no signup").
- **Entity attribution is the moat.** `owns`/`creator`/`sameAs` edges (root graph +
  per-project) are how an AI engine attributes the 7,000- and 20,000-user proof to *you* and
  recommends "Eric Strohmaier" by name.
- **DACH trust framing as a differentiator.** "DSGVO-konform / EU-Hosting / Made in Austria"
  as explicit crawlable copy + schema. Cross-link `alpen.digital`.
- **Off-site is where AEO is won:** brand mentions (YouTube + Reddit > LinkedIn), a few
  authoritative backlinks (open-source READMEs linking back, guest posts, client case
  studies), and a Google Business Profile for the local/brand SERP.
- **Measure the answer layer monthly.** Ahrefs Brand Radar MCP (`brand-radar-*`) + `gsc-*` +
  PostHog conversions and "found via ChatGPT" signals. Baseline now; watch the trend.

---

## Reusable Claude Code SEO workflow (memory + skills)

**Durable memory** lives in this project's memory dir (see `MEMORY.md`): who Eric is + niches
+ geo; the site's architecture & current SEO gaps; the AEO principles above; the
free-tool→funnel rule; and the data inconsistencies to reconcile. Copy the AEO reference
memories to other projects — they're project-agnostic.

**Skills worth building** (seed each with real examples and iterate after every run, the way
Tim built his podcast-prep skill):
1. **`ai-citation-monitor`** — monthly AI-visibility report wrapping Ahrefs `brand-radar-*`
   (mentions, SoV, AI responses, cited pages) + `gsc-*` for "Eric Strohmaier" + product
   names; diff vs a stored baseline; output "up/down + why + 3 next moves." Pair with
   `/schedule` to run monthly.
2. **`free-tool-landing-generator`** — scaffolds (or audits) a tool page born SEO-complete:
   metadata + canonical/OG, `WebApplication`+`Offer(0)`+`isAccessibleForFree`+`FAQPage`,
   privacy-first feature list, booking CTA, sitemap entry, real `/de` route w/ hreflang.
3. **`case-study-from-shipped-work`** — generates a grounded `/projects/[slug]` page from
   `lib/project-graveyard.ts` + dictionaries; guardrails: never fill a `[PLACEHOLDER]`, flag
   number mismatches, require a repo source line for every metric; emits matching schema.
4. **`seo-preflight-drift-check`** — pre-deploy guard tailored to this repo: verifies SSR
   `<html lang>`, intentional-vs-accidental noindex (gate list), canonical/OG/hreflang, JSON-
   LD parses, and every indexable route is in `app/sitemap.ts`.
5. **`content-cluster-from-offers`** — turns offers + MaklerOS FAQ + case-study text into a
   bilingual hub-and-spoke plan with an internal-link matrix; hand to `seo-cluster` /
   `seo-content-brief` once `/blog` exists.

---

## ⛔ Stop doing
- **No from-scratch blog yet** — competes for the same hours as the four moves above. Seed it
  only after the PRIMARY ships, and only from existing material.
- **No fabricated/contradictory numbers in crawlable text or schema** — not the
  `[PLACEHOLDER]` Chrome rating, not `stats.githubRepos=49`; reconcile `stats.totalUsers`
  ("2700+") vs the homepage "50,000+ users served" to one defensible figure first.
- **No broad head-term / how-to content or "AI SEO hack" tooling** — AI answers those in
  place. Wire your existing bottom-funnel pages into the funnel instead.
- **No orphaned tools** — interlink `/invoice ↔ /timetracking ↔ /de/invoice` as a "kostenlose
  Tools für Freelancer & KMU" hub.

---

## Bigger plays — expand the engine (beyond the backlog above)

Grounded in the interview's distinctive lessons (branded search, brand mentions, free-tool
engines, firsthand stories, get-noticed tactics). Roughly highest-leverage first.

### A. More free-tool engines (each = a branded-search magnet + a lead funnel)
- **A Makler ROI calculator** — "Wie viel Provision verlieren Sie durch verpasste Anfragen?"
  Feeds MaklerOS, captures real-estate intent, gets shared. (New-topic + free-tool engine.)
- **A few DACH micro-tools** — Stundensatz-/Freelancer-Rechner, Mehrwertsteuer/UID-Rechner,
  Angebot/Kostenvoranschlag-Generator, DSGVO-Checkliste. Each is its own branded search and an
  internal-link node in the "kostenlose Tools" hub.
- **Add email capture** (not just a booking CTA) to the tools — build an owned audience from
  the recurring free-tool traffic, not just one-shot calls.

### B. Original-data / firsthand content (information-gain — uncopyable, citable)
- **Build-in-public teardowns** — document a real client automation: before/after, hours saved,
  € impact. This is the "homeless-people-selling-water" move — AI can't generate it without you.
- **A portfolio data-study** — "what I learned shipping 17 products / serving 50k users"
  (only after reconciling the conflicting totals). Original data that AI must cite.
- **PromptSloth organic-growth teardown** as the flagship proof-of-skill (already half-built).

### C. Brand-mention & AEO campaigns (off-site — where AI citations actually come from)
- **Reddit:** genuinely answer questions in DACH SMB/dev subs (r/selbststaendig, r/Unternehmer,
  r/de_EDV, r/webdev, r/SaaS). Reddit is a top AI-citation source.
- **YouTube shorts:** 60-sec "I automated X for a business" / free-tool teardowns. Also a top
  AI-citation source. (Both beat LinkedIn for AI citations.)
- **Get mentioned:** dev directories, "best Next.js developers DACH" listicles, a podcast guest
  spot or two, open-source READMEs linking back with descriptive anchor text.

### D. Bottom-funnel intent pages (match-intent, not head-term volume)
- **Comparison / alternatives pages** (use the `seo-competitor-pages` skill): "MaklerOS vs
  onOffice/Propstack", "individuelle Software vs. Standardsoftware", "Webseite erstellen lassen:
  Agentur vs. Freelancer".
- **A few genuinely-different service×location pages** (e.g. "Softwareentwicklung Wien") — only
  if each is real and distinct; do NOT spin thin city duplicates (quality-gated).

### E. Own the "Eric Strohmaier" SERP (serve branded search)
- **Google Business Profile** — the single biggest local + brand-SERP lever (off-repo).
- Consistent NAP everywhere; a rich `/about` that ranks for the name; serve product brand
  queries ("Eric Strohmaier PromptSloth"). Consider a Wikidata/Crunchbase entity for sameAs.

### F. "Get noticed" tactics (discoverability via doing something unique)
- A **"Roast my SMB website"** free teardown offer — gets noticed, earns mentions, generates
  leads. Eric's adaptation of the Soulo "hire yourself" / MFM-bounty style unconventional move.
- A small public challenge / build-in-public stunt worth talking about.

### G. Measurement engine (so this isn't flying blind)
- Set a **baseline now**: GSC (via Ahrefs `gsc-*`), Ahrefs Brand Radar `brand-radar-*`, and
  PostHog funnels (tool → booking). Then schedule the `ai-citation-monitor` skill monthly.

### H. Conversion / trust on existing pages
- **Reconcile the contradictory metrics** before anything else publishes them.
- Add real testimonials → `Review`/`AggregateRating` schema (only when real).
- Strengthen case-study proof with concrete before/after numbers.

---

## Audience-targeted plays — B + D + F (chosen focus)

Write FOR the buyer, not "anyone." The buyer is a **German-speaking SMB owner/Geschäftsführer**
(not a CTO): time-poor, ROI-driven, agency-skeptical, values DSGVO / EU-hosting / Made-in-Austria,
wants one trusted person. Three sub-niches: **Makler** (real estate, AT/DE), **Handwerker/local
service** (the AutoReview audience), **KMU on manual/Excel workflows**.

**Recommendation: don't spread across all three — start by owning the _Makler_ niche** (MaklerOS
+ the real Imperia Immobilien client already exist), then replicate the playbook for Handwerker.

### B — Firsthand / original-data content (German, owner-facing, uncopyable)
- **Original audit study (flagship — lead magnet + gets noticed + AI-citable):**
  _"Ich habe 30 Maklerseiten in Österreich getestet — bei den meisten dauert die erste Antwort
  auf eine Anfrage über 24 Stunden."_ Real data Eric collects himself; the exact pain MaklerOS
  solves; funnels straight to it. Replicate later for Handwerker.
- **Anonymized build-in-public story:** _"Wie ein Wiener Maklerbüro aufgehört hat, Anfragen zu
  verlieren — was ich gebaut habe und was es gebracht hat"_ (before/after, hours/€).
- **The 270% story as a German teardown:** _"270 % mehr Umsatz: die SEO-Änderungen, die ich für
  einen Kunden gemacht habe."_ Proof of the exact service.
- **Transparent ROI piece (the owner's #1 unspoken question):** _"Was kostet individuelle Software
  für ein KMU wirklich — und ab wann zahlt sie sich aus?"_ with a simple payback example.

### D — Bottom-funnel intent pages (real German searches, per niche)
- **Makler:** finish `/immobilienmakler`; add **"onOffice Alternative" / "Propstack Alternative" /
  "Maklersoftware Österreich" / "CRM für Immobilienmakler"** comparison/alternatives pages
  (use the `seo-competitor-pages` skill).
- **Handwerker/local:** _"Website für Handwerker"_, _"mehr Google-Bewertungen bekommen"_ (AutoReview),
  _"Terminbuchung Website"_.
- **KMU:** _"Excel ersetzen durch Software"_, _"Prozesse automatisieren lassen Österreich"_,
  _"internes Tool entwickeln lassen"_, _"individuelle Software vs. Standardsoftware"_,
  _"Webseite erstellen lassen Wien"_, _"Webagentur vs. Freelancer"_.
- Tie the free tools to intent: _"Zeiterfassung DSGVO-konform"_, _"Rechnung erstellen kostenlos"_
  → the real `/de/invoice` + `/timetracking`. Every page: lead-with-the-answer, German,
  DSGVO/Made-in-Austria trust line, real proof (Imperia, 270 %, 20k users), one booking CTA.

### F — Get-noticed tactics (niche-specific, NOT generic)
- **"Makler-Lead-Check" (highest-fit):** Eric submits a fake inquiry to a Makler's site, times the
  response, records a 2-min Loom showing exactly where they lose the lead, and sends it free. It
  *is* a live demo of MaklerOS's value; shareable in Makler circles; produces warm leads.
- **Build a free niche tool live + ask the niche what to build:** _"Ich baue ein kostenloses Tool
  für Makler — welches nervige Problem soll es lösen?"_ (the Soulo "hire-yourself"/MFM-bounty flip:
  engine + noticed + branded search).
- **Show up where the niche actually gathers** (not generic channels): AT/DE Makler & Handwerker
  forums / FB groups, WKO communities, Vienna founder/business meetups, a DACH-SMB newsletter
  guest piece; plus German YouTube shorts on one niche pain (top AI-citation source).

### Creative wedge that ties B+D+F together
- **A vertical free tool aimed at ONE niche** = the Ahrefs free-tool engine pointed at a single
  buyer: e.g. a free **"Exposé-/Angebots-Generator" for Makler**, or a **"Lead-Response-Rechner"**
  (_"Wie viel Provision verlieren Sie pro Monat durch zu langsame Antworten?"_). It ranks for the
  niche, gets shared, and converts straight into MaklerOS — content (B), intent page (D), and a
  get-noticed hook (F) in one asset. Build the Handwerker equivalent (a free "Angebot + Rechnung"
  tool) once the Makler wedge proves out.

**Suggested first sequence (Makler wedge):** finish `/immobilienmakler` (D) → run a handful of
free "Makler-Lead-Checks" (F) → publish the Maklerseiten audit study (B) linking to MaklerOS.

---

## Off-site (not in this repo, but the highest-leverage of all)
- **Google Business Profile** for your city — the biggest single lever for local "near me" /
  city searches and for owning the brand SERP. Link it to the site; gather a few real reviews.
- **A handful of authoritative backlinks** — open-source READMEs linking back with
  descriptive anchor text, a guest post or two, client case-study links.
- **A YouTube/Reddit presence** for AEO mentions (per the interview, these feed AI citations
  far more than LinkedIn).

_Key files: `app/immobilienmakler/page.tsx`, `app/invoice/page.tsx`,
`app/[lang]/timetracking/page.tsx`, `app/layout.tsx` (`@graph`), `app/sitemap.ts`,
`lib/project-graveyard.ts`, `site-config.ts` (empty `locality`), `app/api/og-card/route.tsx`._
