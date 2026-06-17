# ericstrohmaier.com — Redesign Prompt Pack

Positioning: **Your software partner. I build custom tools and websites that make SMBs more money.**

Run these prompts in Claude Code **in order**, one at a time. Review the diff after each before moving on. Prompt 0 is the brief — paste it first so every following prompt inherits the strategy.

---

## PROMPT 0 — The brief (paste first, don't skip)

```
You're helping me reposition my personal dev site (this repo) from a personal/philosophy
portfolio into a commercial site that sells my services. Read the repo first to understand
the stack and current content before changing anything.

Stack (already in repo): Next.js 14 App Router, TypeScript, Tailwind, shadcn/ui components
(components/ui), lucide-react icons, next-themes (dark mode), content authored as markdown in
/content rendered with react-markdown. Keep this stack. Don't add heavy dependencies.

POSITIONING
- Brand line: "Your software partner."
- Core promise: I build custom software and websites that make SMBs more money — internal
  tools and automations that cut cost and save time, and websites/lead systems that bring in
  revenue. The throughline of everything: software that pays for itself.
- Target client: small and mid-sized business owners and operators (not enterprises, not other
  devs). They care about outcomes — more leads, more revenue, less manual work — not tech stacks.

VOICE
- Confident, plain-spoken, zero fluff. Clarity over noise. Outcome-first.
- Sound like a sharp operator who happens to be a great engineer, not a hobbyist.
- Keep a little of my personality (self-taught, builder, figures things out) but as seasoning,
  not the headline.

OFFER LADDER (this is the spine of the site)
1. Website + Care Plan — entry tier. Get found, capture leads, fully managed. Low commitment.
2. Custom Software / Internal Tools — core offer. Dashboards, CRMs, booking, automations, AI
   tools — software built to make or save the client money.
3. Software Partner (monthly retainer) — ongoing development + maintenance, "a senior dev on call."
   Month-to-month, no lock-in.

Pricing posture: transparent, no contracts, "you stay because it works." (Exact numbers come in a
later prompt — don't invent them yet.)

For now: just confirm you understand, summarize the plan for the homepage sections you'd build,
and DON'T write code yet. I'll approve the outline, then we build section by section.
```

---

## PROMPT 1 — Homepage rebuild

```
Rebuild the homepage (app/page.tsx + any home content) around the offer ladder. Replace the
current personal-essay homepage. Sections, in order:

1. HERO — headline that leads with the outcome (making SMBs more money), one-sentence subhead,
   primary CTA "Book a free call", secondary CTA "See the work". Add a small trust line under the
   CTAs (e.g. "Trusted by [N] businesses" — leave a placeholder I can edit).
2. THE PROBLEM — short, punchy. The cost of manual work / a website that doesn't convert. Make the
   reader feel the money they're leaving on the table.
3. WHAT I BUILD — three cards: (a) Revenue websites & lead systems, (b) Internal tools &
   automations, (c) Ongoing software partnership. Each card = outcome-focused blurb + 2-3 concrete
   examples. Use lucide icons.
4. HOW IT WORKS — three steps: Call → Build → Maintain & grow.
5. FEATURED WORK — placeholder grid that will pull from projects/case studies (we wire this next).
6. PRICING — placeholder section, three tiers (we fill numbers in a later prompt).
7. ABOUT (condensed) — 2-3 sentences of my self-taught/builder story as credibility, with a link
   to the full About page. Keep the existing /profile content as the source, just trim for the home.
8. FINAL CTA — strong close + "Book a free call" button.

Design: clean, modern, lots of whitespace, strong type hierarchy, works in light and dark mode.
Reuse existing shadcn/ui components and Tailwind tokens — match the existing design system, don't
fork it. Mobile-first and fully responsive. Keep it a single cohesive page; extract reusable
section components into components/app if it keeps the file readable.

Don't break the existing nav, routing, or other pages. Show me the homepage when done.
```

---

## PROMPT 2 — Pricing section

```
Fill in the pricing section with three transparent tiers. No long-term contracts; cancel anytime.

Tier 1 — Website Care Plan: managed website, hosting, security, small monthly changes, uptime
monitoring. Entry point / foot in the door. Price: from $[X]/mo. (I'll set the number — use $249/mo
as a placeholder.)

Tier 2 — Custom Software: scoped builds of internal tools, automations, and revenue features.
Starts as a project, then rolls into a care/partner plan. Price: "Projects from $[X]" placeholder
$5,000.

Tier 3 — Software Partner (most popular): ongoing development + maintenance, a senior dev on call,
one shipped improvement most weeks. Price: from $[X]/mo, placeholder $2,500/mo. Mark this tier as
"Most popular".

Each tier: name, one-line who-it's-for, price, 5-7 bullet features (outcome-focused), CTA button.
Add a reassurance line under the table: "No contracts. No lock-in. You stay because it pays for
itself." Match the homepage design. Make the middle/partner tier visually emphasized.
```

---

## PROMPT 3 — Case studies & featured work

```
Upgrade the projects system into outcome-driven case studies, and wire the homepage Featured Work
section to it.

- Keep my existing real projects that have users — don't delete them.
- Extend the project/case-study data model (the markdown frontmatter in /content and the types) to
  support: client name, the problem, what I built, the RESULT (a metric where possible — more
  leads, revenue, hours saved), a testimonial quote, and the reviewer's name/role.
- Update the project card + detail page (app/projects) to surface the result metric prominently and
  show the testimonial.
- On the homepage Featured Work section, show 3 featured case studies as cards with the headline
  result visible.
- Add ONE example client case study as a template I can copy (use placeholder content clearly marked
  PLACEHOLDER so I know to replace it).

Keep everything responsive and on-brand. Show me a project card and the detail page when done.
```

---

## PROMPT 4 — Polish pass (make it "kill it")

```
Do a design + conversion polish pass on the homepage and pricing:
- Tighten type scale, spacing, and visual rhythm so it feels premium (think Linear/Stripe calm,
  not flashy).
- Add subtle, tasteful micro-interactions (hover states, fade/slide-in on scroll) using CSS or
  the tailwindcss-animate already installed — nothing heavy.
- Make sure the primary CTA is impossible to miss and repeats at the top, middle, and bottom.
- Check contrast and readability in both light and dark mode.
- Verify mobile layout end to end.
- Run the build (npm run build / lint) and fix any errors.

Then give me a short punch-list of anything that still needs my input (copy, real metrics, photos,
the booking link).
```

---

## Things only you can supply (have these ready)
- Real numbers for each tier (start with the placeholders, adjust once you've quoted a few clients).
- A booking link (Cal.com / Calendly) for the "Book a free call" CTAs.
- 1–3 real client results + testimonials for the case studies.
- The trust number ("Trusted by N businesses") or remove it until you can back it up.

## After it's live
- Point your About page at the LEGO/self-taught story (great as personality, weak as a front door).
- Add one niche-focused content/SEO page (e.g. "Custom internal tools for small businesses").
- Convert your existing freelance clients to a Care Plan or Partner retainer first — fastest MRR.
```
