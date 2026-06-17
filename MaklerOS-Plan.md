# MaklerOS — Business & Product Plan

> Working name: **MaklerOS** (alt: ImmoOS)
> Tagline: *Das Betriebssystem für Ihr Maklerbüro. Leads, Objekte, Team & Termine an einem Ort.*
> One sentence: **Custom software that makes real estate agents more money — by capturing leads and following up automatically so they stop losing deals.**

---

## 1. The Idea

Move from hourly freelancing to a **recurring-revenue software business** by building one repeatable product for a single niche: **Immobilienmakler (real estate agents) in Austria & Germany.**

The product is a "Lead-Maschine" — a system that captures seller/buyer leads, responds in seconds, and follows up automatically until the lead books a call. Agents lose deals to *slow and forgotten follow-up*, not lack of leads. This fixes exactly that.

The brand promise across everything: **software that pays for itself.** One extra closed deal a year covers the cost many times over.

---

## 2. The Business Model (recurring revenue, not hourly)

The old model: $45/hour, trading time for money, no recurring income.

The new model: a **productized service with a monthly retainer** — the agency model, but solo and niche. Two revenue events per client:

1. **One-time setup** — build & launch their Lead-Maschine.
2. **Monthly retainer** — host, maintain, run, and improve it. This is the recurring revenue (MRR).

Hourly rate never appears anywhere. It's only used privately as the engine to sanity-check prices (internal target ~€85–100/hr equivalent). Clients see **outcomes and monthly prices**, not hours.

### The offer ladder
| Rung | What | Purpose |
|------|------|---------|
| Website / Care Plan | Entry tier, productized, low commitment | Foot in the door + base MRR |
| Custom build (the Lead-Maschine) | Core one-time project | The real value, the upsell |
| Software Partner (retainer) | Ongoing dev + maintenance + campaigns | The recurring engine |

Lead the brand with the **software/outcome** (premium, differentiated), not with cheap websites. Websites are the funnel; software is where the money is.

---

## 3. The Customer — Who & Why

**Target:** Immobilienmakler (solo agents, small teams, and brokerages) in AT & DE.

Why this niche:
- **Huge commission per deal** — one extra sale = thousands in commission, so the ROI math closes the sale for you.
- **Low software adoption** — most run on manual processes, WhatsApp, and spreadsheets. A basic tool looks impressive.
- **Networked & local** — agents refer heavily; immo in DACH runs on word-of-mouth and trust. One happy client opens a brokerage.
- **Repeatable** — the same product fits every agent, so you build once and clone.

**Tiebreaker for first clients:** Eric already knows several agents → start with a warm door.

---

## 4. What They Really Need (the problem)

Agents don't need "a website." They need **more closed deals.** Specifically they're bleeding money on:

- **Slow response** — a new lead waits hours for a reply; whoever answers in minutes wins.
- **No follow-up** — most leads aren't ready now and close months later, but agents stop chasing after a try or two.
- **Lost inquiries** — leads buried in WhatsApp/email, never worked.
- **No system** — no single place to see leads, listings, team, and appointments.

Every one of those is a lost commission they can feel.

---

## 5. What They Get (the product)

The "money machine," identical for every client:

- **Bewertungs-Landingpage** ("Was ist meine Immobilie wert?") — the proven seller-lead magnet.
- **Instant auto-response** — new lead gets an email/SMS reply within seconds (speed-to-lead).
- **Automated nurture sequence** — keeps following up over weeks/months until the lead books.
- **Simple dashboard / CRM-lite** — all leads in one place; roles for the team.
- **Per-listing property pages** — upsell, one per new Objekt.
- **Monthly market-update campaigns** (Growth tier) — nurtures their whole database for repeat & referral business.

Scope summary the agent sees: **Leads, Objekte, Team & Termine — an einem Ort.**

---

## 6. The Offer & Pricing (EUR — placeholders, raise as you close)

**One-time setup: from €3.500** — build & launch the full Lead-Maschine.

Then monthly, two options:
- **Care-Plan: from €299/mo** — hosting, maintenance, small changes, new listing pages. Passive upkeep.
- **Growth-Partner (most popular): from €1.500/mo** — active management, monthly campaigns to their database, ongoing optimization & reporting.

Posture: **No contracts. Monthly cancellable. "Sie bleiben, weil es sich rechnet."**

**How to set the numbers:** these are starting prices. Quote them; if clients say yes instantly with no flinch, raise the next quote 10–20%. Keep raising until ~1 in 4 pushes back — that's your right price. Never lower the published number to win a deal; reduce scope instead.

---

## 7. Why It Works (the sales argument)

- **Speed-to-Lead:** leads contacted in minutes convert far better than in hours; the system replies in seconds.
- **Relentless follow-up:** most deals close after multiple touches; the system never stops.
- **ROI math (the close):** "Your average commission is €X. This costs €Y. One extra deal a year pays for it many times over — everything after is profit."

---

## 8. Ownership & Portability (a real selling point)

Each client gets their **own separate project** — their own code and data. No lock-in, no contracts; if they ever leave, they can take the code and self-host it. Data hosted in the EU, **DSGVO-konform** (critical for AT/DE).

This is both a trust-builder ("you own everything, no ransom") and the reason for the separate-project architecture below.

---

## 9. Technical Structure & Stack

**Architecture: clone-per-client (separate project each), not multi-tenant** — chosen so clients can take and self-host their code. One clean **boilerplate** is cloned per client; per-client differences are config/branding, not forked code.

> Discipline: keep the boilerplate identical across clients. Put shared logic (CRM, auth, automations, email) in an **internal core package** the client apps import, so a fix ships everywhere via a version bump instead of editing N repos. The moment each client's code drifts, maintenance cost explodes.

**The stack (cheap, portable, self-hostable):**
| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14 App Router + TS + Tailwind + shadcn/ui | Already Eric's stack |
| Database | **Turso (libSQL)** + Drizzle ORM | DB-per-client model, very cheap, exportable (Neon/Postgres if real Postgres is wanted) |
| Auth & roles | **Better-Auth** (self-hosted) | Owns its data, has organizations/roles (RBAC) built in, stays portable |
| Storage | **Cloudflare R2** | Cheapest, zero egress, S3-compatible — for property photos & docs |
| Email | **nodemailer (SMTP) + React Email + `scheduled_emails` table + cron** | One layer for login, auto-replies, reminders, nurture; provider set by env (Resend → SES), so nothing is locked in |
| Billing | **Stripe** subscriptions | Auto-charge the monthly retainers |
| Hosting | Vercel (or Cloudflare Pages) | — |

**Roles/permissions:** because each client is single-tenant (own DB), no row-level security needed — roles (owner/broker, agent, assistant) are **app-layer RBAC** enforced in server actions/middleware. Better-Auth handles this.

**Per-client infra cost:** a few euros/month, easily absorbed by the Care-Plan price.

---

## 10. Per-Project Delivery Structure

1. **Erstgespräch** — review their current lead process.
2. **Clone the boilerplate** → new project for the client.
3. **Configure** — branding, domain, agent info (config, not code).
4. **Build any custom modules** behind feature flags (don't fork).
5. **Launch** in ~10 working days.
6. **Hand to retainer** — Care-Plan or Growth-Partner takes over for upkeep/optimization.

---

## 11. Go-To-Market (how to get clients)

**Order by ROI — do the warm, cheap stuff first.**

1. **Warm intros** — Eric's existing agent contacts → first 2–3 clients & case studies.
2. **Founding-client deal** — discounted/free setup for the first agent in exchange for a testimonial (with real numbers) + referrals.
3. **Referral engine** — explicitly ask every client "who else do you know?"; offer a reward. Agents are highly networked.
4. **Referral partners** — marketers, designers, accountants who serve agents but don't build software; they hand you overflow.
5. **Direct outreach** — personalized, ROI-framed, on LinkedIn / **XING** / email. Offer a free Loom audit.
6. **Local presence** — immo associations, broker meetups, regional groups.
7. **German SEO content** — target "Makler Website / Leadgenerierung Immobilienmakler."

**Weekly sales cadence:** ~5 hrs/week — 10 outreaches, 1 referral ask, 1 partner conversation, 1 piece of content. Consistency beats bursts.

### On paid ads
**Not the first move.** This is a high-ticket, trust-based sale to a small audience; cold ads to an unknown solo with no proof rarely pay off. Ads *amplify* a proven offer — you don't have the proof or funnel yet.
- **Now:** spend that budget/energy on warm outreach to get the first case studies.
- **Later (the one exception):** **Google Search ads** on high-intent keywords ("Makler Website erstellen lassen") catch in-market buyers — worth a small test once the funnel converts.
- **Last:** Meta/LinkedIn retargeting + lookalikes once there's a proven, profitable funnel.

---

## 12. Roadmap / Phases

- **Phase 1 (clients 1–3):** ship fast, learn the real requirements. Clone a simple boilerplate per client, or even integrate Airtable/GoHighLevel for the CRM layer and only custom-build the landing pages. Don't over-engineer a platform before you have customers.
- **Phase 2 (clients 3+):** patterns are clear → consolidate the shared logic into a clean core package; tighten the boilerplate. (Stay clone-per-client for the ownership promise.)
- **Always:** scope everything per-client from day one so the boilerplate stays clean and repeatable.

---

## 13. Brand & Naming

- **Name:** MaklerOS (speaks directly to the buyer; cleaner to say). Alt: ImmoOS (broader, room to expand beyond agents).
- **Tagline:** *Das Betriebssystem für Ihr Maklerbüro.*
- **TODO:** secure the domain (`makleros.de/.at`) and check the trademark before committing.

---

## 14. What Eric Needs to Supply / Next Steps

- [ ] Lock the name + secure domain + check trademark.
- [ ] Final prices (start with placeholders, raise as deals close).
- [ ] Booking link (Cal.com / Calendly) for all CTAs.
- [ ] First founding client → real case study with numbers.
- [ ] Average-commission figure for the ROI block.
- [ ] Impressum (legally required for AT/DE sites).
- [ ] Build the boilerplate (Next.js + Turso + Drizzle + Better-Auth + R2 + email module).
- [ ] Build & ship the `/immobilienmakler` landing page (prompt ready in `MAKLER-LANDING-PROMPT.md`).
- [ ] Write German outreach messages to warm contacts.
