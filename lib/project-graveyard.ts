export type ProjectStatus =
  | "live"
  | "archived"
  | "on-hold"
  | "in-progress"
  | "offline"

export interface Testimonial {
  quote: string
  name: string
  role: string
}

/** A small trust signal rendered as a chip on the featured-work card. */
export interface ProofPoint {
  /** Which icon to show. Defaults to a neutral check. */
  icon?: "star" | "users" | "store" | "check" | "trending"
  /** Short label, e.g. "4.8 on the Chrome Web Store" or "20,000+ users". */
  label: string
}

export interface CaseStudy {
  /** Who it was for. Optional for personal/own products. */
  client?: string
  /** The problem they were facing - make the reader feel the cost. */
  problem: string
  /** What I built to solve it. */
  built: string
  /** The outcome. A metric wherever possible (leads, revenue, hours, users). */
  result: string
  /** Optional client testimonial. Only rendered when present. */
  testimonial?: Testimonial
  /** Small trust-signal chips shown on the featured-work card (~1-2). */
  proof?: ProofPoint[]
}

export interface GraveyardProject {
  name: string
  slug: string
  description: string
  longDescription?: string
  role?: string
  experienceType?: string
  location?: string
  workMode?: string
  date: string
  status: ProjectStatus
  users: string | number
  url?: string
  github?: string
  tags?: string[]
  image?: string
  /** Caption + alt for `image` (English; project copy is English on both locales). */
  imageCaption?: string
  featured?: boolean
  /** Outcome-driven case study. Drives the result metric + testimonial UI. */
  caseStudy?: CaseStudy
  /** Surface this case study in the homepage Featured Work section (pick ~3). */
  caseStudyFeatured?: boolean
}

export const graveyardProjects: GraveyardProject[] = [
  {
    name: "AutoReview",
    slug: "getautoreview",
    description: "Automating review collection for local small businesses",
    longDescription:
      "AutoReview helps local service businesses (roofers, plumbers, contractors) win more Google reviews without chasing customers by hand. Connect a customer list - via BCC on invoices, a CRM/POS integration (QuickBooks, Zapier), CSV upload, or manual entry - and it automatically emails each new customer a one-tap review request, with smart follow-ups on day 3 and 7. Unhappy customers get routed to a private feedback form before they post publicly. The collected reviews can be embedded back on the business's site through drop-in widgets (Wall of Love, carousel, badges) with a single script tag, plus automatic schema markup so star ratings show up in Google search. Rounded out with moderation, AI sentiment analysis, auto-replies, and social sharing.",
    date: "2026",
    status: "live",
    url: "https://getautoreview.com",
    users: "Live early access",
    tags: [
      "SaaS",
      "Reviews",
      "Automation",
      "Local Business",
      "Google Reviews",
      "Email Campaigns",
    ],
    caseStudyFeatured: true,
    caseStudy: {
      client: "Local service businesses",
      problem:
        "Local contractors leave easy Google reviews on the table because chasing customers by hand after every job never actually happens.",
      built:
        "An automated review engine: one-tap review requests with day-3 and day-7 follow-ups, private routing for unhappy customers before they post publicly, and embeddable review widgets with schema markup for star ratings in search.",
      result:
        "Turns every new customer into an automated review request - no manual chasing.",
      proof: [
        { icon: "star", label: "More 5-star Google reviews" },
        { icon: "check", label: "Day-3 & day-7 follow-ups" },
      ],
    },
  },
  {
    name: "AgentTodo",
    slug: "agenttodo",
    description:
      "A shared todo list for you and your AI agents - one task queue, full control",
    longDescription:
      "A task management platform that bridges humans and AI agents. One centralized task queue where autonomous agents grab tasks, do the work, and report back - while you stay in control. Features a unified dashboard for monitoring, a single REST API for seamless integration, board and list views, and quick access via keyboard shortcuts. Built for anyone delegating work to AI agents who wants visibility and oversight over the execution process.",
    date: "2025",
    status: "on-hold",
    url: "https://agenttodo.vercel.app/",
    github: "https://github.com/EricStrohmaier/agenttodo",
    users: "Beta",
    tags: ["AI", "Agents", "Task Management", "API", "Productivity"],
    featured: false,
  },
  {
    name: "PromptSloth",
    slug: "promptsloth",
    description:
      "Chrome extension that helps people write better prompts and build stronger AI habits",
    longDescription:
      "Built PromptSloth to fix my own lazy prompting habits. The extension grew organically to 7,000+ Chrome Store installs. It helps users quickly improve prompts and build a consistent prompting workflow directly in the browser.",
    date: "2025",
    status: "live",
    url: "https://promptsloth.com/",
    users: "7,000+",
    image: "/proof/promptsloth-search-console-chart.png",
    imageCaption:
      "Organic search performance (Google Search Console): around 240,000 impressions and 11,100 clicks in 6 months — no paid ads, purely SEO.",
    tags: [
      "AI",
      "Chrome Extension",
      "Productivity",
      "Prompt Engineering",
      "7,000+ Installs",
    ],
    featured: true,
    caseStudyFeatured: true,
    caseStudy: {
      problem:
        "Most people write lazy, low-effort AI prompts and get weak results - then blame the tool instead of the prompt.",
      built:
        "A Chrome extension that improves prompts inline, anywhere you type, and nudges users toward a consistent prompting workflow.",
      result:
        "Grew organically to 7,000+ Chrome Store installs and 50 paying subscribers.",
      proof: [
        // [PLACEHOLDER] swap in the real Chrome Web Store rating when you have it.
        { icon: "store", label: "7,000+ Chrome installs" },
        { icon: "users", label: "50 paying subscribers" },
      ],
    },
  },
  {
    name: "My Digital Calendar",
    slug: "mydigitalcalender",
    description:
      "Free digital year planner - see all 12 months and 365 days on one screen",
    longDescription:
      "A free web-based year planning tool inspired by Jesse Itzler's Big Ass Calendar methodology. Plan your entire year on a single screen with a drag-and-drop interface, custom color-coding by category, and export to PDF, PNG, or phone wallpaper. Built around three planning concepts: Misogi (one epic annual challenge), Big Rocks (3-5 top priorities), and Mini-adventures (quarterly experiences). Public sharing for accountability, unlimited exports, and no signup required.",
    date: "2025",
    status: "live",
    url: "https://mydigitalcalender.com",
    users: "Free tool",
    tags: ["Productivity", "Planning", "Calendar", "Free Tool"],
    featured: true,
  },
  {
    name: "alpen.digital",
    slug: "alpen-digital",
    description:
      "AI automation agency for SMEs in the DACH region - turning manual processes into smart workflows",
    longDescription:
      "An AI automation agency I'm building with friends, focused on helping small and medium businesses in Austria, Germany, and Switzerland automate their workflows. We connect existing business systems (CRM, ERP, e-commerce), deploy AI for document analysis and knowledge systems, and build end-to-end automated workflows with human-in-the-loop oversight. DSGVO-compliant, integration-first approach - we work with your existing tools instead of replacing them. Made in Austria by a small team of engineers and ML specialists.",
    date: "2025",
    status: "live",
    url: "https://alpen.digital",
    users: "Agency",
    tags: ["AI", "Automation", "Agency", "DACH", "B2B"],
    featured: true,
  },
  {
    name: "Kinderversicherer",
    slug: "kinderversicherer",
    description:
      "Comparison and advisory platform for children's supplemental insurance in Austria",
    longDescription:
      "A client project I've built and managed since 2024. Kinderversicherer helps Austrian parents compare and choose supplemental health insurance for their children - covering private physician access, hospital stays, dental care, and physiotherapy. I handle the build and ongoing maintenance of the platform.",
    date: "2024 - Present",
    status: "live",
    url: "https://www.kinderversicherer.at/",
    users: "",
    tags: ["Client Project", "Insurance", "Austria", "Web"],
    featured: true,
  },
  {
    name: "Imperia Immobilien",
    slug: "imperia-immobilien",
    description:
      "Website for a German real estate investment firm specializing in capital investment properties",
    longDescription:
      "A client I've partnered with since late 2024. Imperia Immobilien is a German real estate investment firm offering turnkey capital investment properties - sourcing, financing, management, and rental - for investors across the DACH region. I build and maintain their web presence.",
    date: "Late 2024 - Present",
    status: "live",
    url: "https://imperiaimmobilien.de/",
    users: "",
    tags: ["Client Project", "Real Estate", "Germany", "Web"],
    featured: true,
  },
  {
    name: "Bitvocation",
    slug: "bitvocation",
    description:
      "Bitcoin job aggregation platform with automated sourcing and Telegram distribution",
    longDescription:
      "Full-stack Engineer (part-time), remote from Vienna. Built an automated job aggregation system that scraped 20+ Bitcoin job sites and processed around 40 jobs weekly. Built custom alerts and filtering for Telegram distribution, and the platform has now reached 2,500+ active users.",
    date: "Jan 2023 - Feb 2024",
    status: "live",
    url: "https://bitvocation.com",
    users: "2,500+",
    tags: ["Bitcoin", "Jobs", "Telegram", "Automation", "PostgreSQL", "Docker"],
    featured: true,
    caseStudy: {
      client: "Bitvocation",
      problem:
        "Bitcoin job listings were scattered across 20+ sites, so candidates missed roles and employers struggled to reach them.",
      built:
        "An automated aggregation system that scraped 20+ job boards and processed ~40 roles a week, with custom alerts and filtering distributed through Telegram.",
      result:
        "Grew the platform to 2,500+ active users from a fully automated pipeline.",
    },
  },

  {
    name: "Slackactivity",
    slug: "slackactivity",
    description:
      "Tool that keeps your Slack status active during work hours automatically",
    longDescription:
      "A utility I built to remove manual Slack status updates. It automatically keeps Slack active during configured work hours so you stay visible without constant interaction.",
    date: "2024",
    status: "live",
    url: "https://slackactivity.com/",
    github: "https://github.com/EricStrohmaier/slackactivity.com",
    users: "Personal project",
    tags: ["Slack", "Productivity", "Remote Work", "Automation"],
    featured: true,
    caseStudy: {
      problem:
        "Remote workers get judged on an 'away' Slack dot even when they're heads-down working - and updating it by hand never sticks.",
      built:
        "A set-and-forget tool that keeps Slack active automatically during configured work hours.",
      result: "Relied on daily for 3+ years at 99.5% uptime.",
    },
  },
  {
    name: "Friends in Flats",
    slug: "friends-in-flats",
    description:
      "Shared flat booking platform for students in Vienna, from listings to move-in",
    longDescription:
      "Full-stack Engineer (hybrid in Vienna). Joined as the first technical hire when operations were still manual and built the platform from scratch to 20,000+ users. Automated the workflow from listings to tenant applications, booking, digital contracts, and move-in coordination. Optimized for SEO and mobile, then led a team of 4 developers.",
    date: "Feb 2024 - Apr 2025",
    role: "Full-stack Engineer",
    experienceType: "Job",
    location: "Vienna, Austria",
    workMode: "Hybrid",
    status: "live",
    url: "https://www.friends-in-flats.com/",
    users: "20,000+",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Stripe",
      "Docker",
      "PandaDoc",
      "n8n",
      "Make.com",
    ],
    caseStudyFeatured: true,
    caseStudy: {
      client: "Friends in Flats (Vienna)",
      problem:
        "A student-housing startup was running everything by hand - listings, applications, contracts, move-in - and couldn't grow without drowning in manual work.",
      built:
        "Joined as the first technical hire and built the platform from scratch: an automated listings-to-move-in workflow with digital contracts, payments, and SEO - then led a team of 4 developers.",
      result: "Took it from manual operations to 20,000+ users.",
      proof: [
        { icon: "users", label: "20,000+ users" },
        { icon: "trending", label: "Led a team of 4" },
      ],
    },
  },
  {
    name: "MenuSnap",
    slug: "menusnap",
    description:
      "Turn text menus into visual menus with AI-generated food photos",
    longDescription:
      "Transform boring text-only menus into beautiful visual experiences. Upload a menu and AI generates appetizing photos for each dish, making it easier for customers to decide what to order. Built for restaurants and cafes looking to improve their menu presentation.",
    date: "2024",
    status: "archived",
    url: "https://menusnap.ericstrohmaier.com/",
    users: "Beta",
    tags: ["AI", "Restaurant", "Food Photography"],
  },

  {
    name: "AdChat",
    slug: "adchat",
    description:
      "AI-powered chat interface for managing and optimizing ad campaigns",
    date: "2026",
    status: "live",
    url: "https://adchat.app",
    users: "Beta",
    tags: ["SaaS", "AI", "Advertising"],
  },

  {
    name: "Tools Collection",
    slug: "tools",
    description:
      "Simple tools for simple tasks - time tracking and Invoice creation",
    longDescription:
      "A collection of productivity tools built for managing freelance work. Includes time tracking, project management features, and various utilities. Built to scratch my own itch as a freelancer.",
    date: "April 2025",
    status: "live",
    url: "https://tools.ericstrohmaier.com/",
    github: "https://github.com/EricStrohmaier/tools.ericstrohmaier.com",
    users: "Personal use",
    tags: ["Time Tracking", "Invoice", "Productivity", "Tools"],
  },
  {
    name: "Boring Landing Page",
    slug: "boring-landing-page",
    description: "Next.js boilerplate template for launching projects fast",
    longDescription:
      "A clean, minimal boilerplate for quickly spinning up landing pages. Built with Next.js, Tailwind, and all the essentials pre-configured. Used as the foundation for multiple projects.",
    date: "August 2024 - January 2025",
    status: "live",
    url: "https://public-boilerplate.vercel.app/",
    users: "Template",
    tags: ["Template", "Boilerplate", "Next.js", "Tailwind"],
  },
  {
    name: "Bitvocation Telegram Bot",
    slug: "bitvocation-bot",
    description: "Automated Bitcoin job posting bot for Telegram",
    longDescription:
      "The engine behind Bitvocation's job feed. Automatically scrapes, processes, and posts Bitcoin job opportunities to Telegram channels. Running since 2023, delivering fresh job postings to the Bitcoin community.",
    date: "2023",
    status: "live",
    github: "https://github.com/EricStrohmaier/bitvocation_bot",
    users: "1500+ subscribers",
    tags: ["Telegram Bot", "Bitcoin", "Automation", "TypeScript"],
  },
  {
    name: "Motivation Buddy",
    slug: "motivation-buddy",
    description: "Telegram bot for daily motivational messages",
    longDescription:
      "A simple Telegram bot that sends motivational messages throughout the day. Customizable timing and message categories to keep you going.",
    date: "December 2024",
    status: "archived",
    users: "2",
    tags: ["Telegram Bot", "Motivation", "Automation"],
  },
  {
    name: "Alina Licht Portfolio",
    slug: "alina-licht",
    description: "Artist portfolio website - clean, minimal design",
    url: "https://alinalicht.com",
    longDescription:
      "A portfolio website designed for an artist to showcase their work. Focused on clean, minimal design that lets the art speak for itself.",
    date: "August 2024, updated October 2025",
    status: "live",
    users: "Client project",
    tags: ["Portfolio", "Artist", "Design", "Freelance"],
  },
  {
    name: "Recipe API",
    slug: "recipe-api",
    description: "Scraped 1000+ veggie recipes with a searchable interface",
    longDescription:
      "A web scraping project that collected over 1000 vegetarian recipes from a popular food blog and built a searchable database with a clean UI for browsing and filtering recipes.",
    date: "January 2024",
    status: "archived",
    users: "Personal project",
    tags: ["API", "Web Scraping", "Food", "Python"],
  },
  {
    name: "ericstrohmaier.com",
    slug: "personal-site",
    description: "This website - my personal corner of the internet",
    longDescription:
      "The site you're on right now. Built with Next.js and constantly evolving as I experiment with new ideas and showcase my work.",
    date: "January 2024",
    status: "live",
    url: "https://ericstrohmaier.com/",
    github: "https://github.com/EricStrohmaier/ericstrohmaier.com",
    users: "You're here!",
    tags: ["Portfolio", "Next.js", "Personal"],
  },
  // ---------------------------------------------------------------------------
  // PLACEHOLDER CASE STUDY - copy this entry, replace every PLACEHOLDER value
  // with a real client story, then delete this one. It demonstrates the full
  // case-study + testimonial UI on the card and detail page.
  // ---------------------------------------------------------------------------
  // {
  //   name: "Acme Co. - PLACEHOLDER",
  //   slug: "example-case-study",
  //   description:
  //     "PLACEHOLDER: one-line summary of what you built for this client.",
  //   date: "2026",
  //   status: "live",
  //   url: "https://example.com",
  //   users: "Client project",
  //   tags: ["PLACEHOLDER", "Case Study"],
  //   caseStudy: {
  //     client: "PLACEHOLDER - Client name & industry (e.g. Acme Co., HVAC)",
  //     problem:
  //       "PLACEHOLDER: the painful, expensive problem before you showed up. Make the reader feel the time or money being lost.",
  //     built:
  //       "PLACEHOLDER: what you actually built - the tool, automation, or site, in plain language.",
  //     result:
  //       "PLACEHOLDER: the outcome, with a metric where possible - e.g. '12 hours/week saved' or '3x more booked calls'.",
  //     testimonial: {
  //       quote:
  //         "PLACEHOLDER: a short, specific quote from the client about the result.",
  //       name: "PLACEHOLDER Name",
  //       role: "PLACEHOLDER Role, Company",
  //     },
  //   },
  // },
]

/**
 * Google's favicon service for a project URL. www.google.com is whitelisted in
 * next.config image remotePatterns. Returns null when there's no usable URL.
 */
export function faviconUrl(url?: string, size = 64): string | null {
  if (!url) return null
  try {
    const host = new URL(url).hostname
    return `https://www.google.com/s2/favicons?domain=${host}&sz=${size}`
  } catch {
    return null
  }
}

export function getProjectBySlug(slug: string): GraveyardProject | undefined {
  return graveyardProjects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): GraveyardProject[] {
  return graveyardProjects.filter((p) => p.featured)
}

/** All projects that have a case study attached. */
export function getCaseStudies(): GraveyardProject[] {
  return graveyardProjects.filter((p) => p.caseStudy)
}

/** Case studies to surface on the homepage Featured Work section. */
export function getFeaturedCaseStudies(): GraveyardProject[] {
  return graveyardProjects.filter((p) => p.caseStudy && p.caseStudyFeatured)
}

/**
 * Slugs to feature in the homepage "credibility strip" (logo + name row under
 * the hero). Order matters; keep it to recognizable, live products.
 */
const CREDIBILITY_SLUGS = [
  "friends-in-flats",
  "kinderversicherer",
  "imperia-immobilien",
  "getautoreview",
  "promptsloth",
]

/** Notable live projects for the under-hero credibility strip, in order. */
export function getCredibilityProjects(): GraveyardProject[] {
  return CREDIBILITY_SLUGS.map((slug) =>
    graveyardProjects.find((p) => p.slug === slug),
  ).filter((p): p is GraveyardProject => Boolean(p && p.url))
}

/**
 * Homepage testimonials. Replace each PLACEHOLDER with a real client quote -
 * the section only renders entries whose quote does not start with "PLACEHOLDER".
 */
export const homepageTestimonials: Testimonial[] = [
  {
    quote:
      "PLACEHOLDER: a short, specific quote about the result you delivered - name the outcome (time saved, revenue, users).",
    name: "PLACEHOLDER Name",
    role: "PLACEHOLDER Role, Company",
  },
  {
    quote:
      "PLACEHOLDER: a second quote, ideally about how you work - reliability, speed, being easy to work with.",
    name: "PLACEHOLDER Name",
    role: "PLACEHOLDER Role, Company",
  },
]

/** Only testimonials that have been filled in with a real quote. */
export function getRealTestimonials(): Testimonial[] {
  return homepageTestimonials.filter((t) => !t.quote.startsWith("PLACEHOLDER"))
}

export function getLiveProjects(): GraveyardProject[] {
  return graveyardProjects.filter((p) => p.status === "live")
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>()
  graveyardProjects.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => tagsSet.add(tag))
    }
  })
  return Array.from(tagsSet).sort()
}

export function getAllStatuses(): ProjectStatus[] {
  return ["live", "in-progress", "on-hold", "offline", "archived"]
}

export function getStatusDisplayName(status: ProjectStatus): string {
  switch (status) {
    case "live":
      return "Live"
    case "in-progress":
      return "In Progress"
    case "on-hold":
      return "On Hold"
    case "offline":
      return "Offline"
    case "archived":
      return "Archived"
    default:
      return status
  }
}

// Stats
export const stats = {
  totalProjects: graveyardProjects.length,
  liveProjects: graveyardProjects.filter((p) => p.status === "live").length,
  totalUsers: "2700+", // Bitvocation 1500 + Friends in Flats 1200 + others
  githubRepos: 49,
  githubStars: 100,
}
