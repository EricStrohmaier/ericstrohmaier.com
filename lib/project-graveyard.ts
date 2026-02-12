export type ProjectStatus =
  | "live"
  | "archived"
  | "on-hold"
  | "in-progress"
  | "offline"

export interface GraveyardProject {
  name: string
  slug: string
  description: string
  longDescription?: string
  date: string
  status: ProjectStatus
  users: string | number
  url?: string
  github?: string
  tags?: string[]
  image?: string
  featured?: boolean
}

export const graveyardProjects: GraveyardProject[] = [
  {
    name: "AgentTodo",
    slug: "agenttodo",
    description:
      "A shared todo list for you and your AI agents - one task queue, full control",
    longDescription:
      "A task management platform that bridges humans and AI agents. One centralized task queue where autonomous agents grab tasks, do the work, and report back — while you stay in control. Features a unified dashboard for monitoring, a single REST API for seamless integration, board and list views, and quick access via keyboard shortcuts. Built for anyone delegating work to AI agents who wants visibility and oversight over the execution process.",
    date: "2025",
    status: "live",
    url: "https://agenttodo.vercel.app/",
    github: "https://github.com/EricStrohmaier/agenttodo",
    users: "Beta",
    tags: ["AI", "Agents", "Task Management", "API", "Productivity"],
    featured: true,
  },
  {
    name: "PromptSloth",
    slug: "promptsloth",
    description:
      "Chrome extension for better AI prompts - one-click improvements and 2000+ templates",
    longDescription:
      "A Chrome extension that helps craft better AI prompts. Features one-click prompt improvements, 2000+ expert templates across categories like copywriting, coding, marketing, and research. Works with ChatGPT, Claude, Gemini, and any AI tool. Includes quick actions, //shortcuts for instant template insertion, and custom saved prompts. 5-star rating on Chrome Web Store.",
    date: "2024",
    status: "live",
    url: "https://promptsloth.com/",
    users: "2000+",
    tags: ["AI", "Chrome Extension", "Productivity", "ChatGPT", "Claude"],
    featured: true,
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
      "An AI automation agency I'm building with friends, focused on helping small and medium businesses in Austria, Germany, and Switzerland automate their workflows. We connect existing business systems (CRM, ERP, e-commerce), deploy AI for document analysis and knowledge systems, and build end-to-end automated workflows with human-in-the-loop oversight. DSGVO-compliant, integration-first approach — we work with your existing tools instead of replacing them. Made in Austria by a small team of engineers and ML specialists.",
    date: "2025",
    status: "live",
    url: "https://alpen.digital",
    users: "Agency",
    tags: ["AI", "Automation", "Agency", "DACH", "B2B"],
    featured: true,
  },
  {
    name: "Bitvocation",
    slug: "bitvocation",
    description:
      "The talent stack for hyperbitcoinization - Bitcoin job aggregation platform",
    longDescription:
      "A comprehensive career platform for the Bitcoin ecosystem. Automatically scrapes job listings from multiple sources and distributes them across Telegram channels and Nostr relays. Features include a curated job feed, talent exchange program (BTX), and POW Lab educational community. Partnered with major Bitcoin companies and serving 1500+ subscribers looking for Bitcoin-related careers.",
    date: "December 2023 - Present",
    status: "live",
    url: "https://bitvocation.com",
    users: "2500+",
    tags: ["Bitcoin", "Jobs", "Telegram", "Nostr", "Career Platform"],
    featured: true,
  },

  {
    name: "Slackactivity",
    slug: "slackactivity",
    description:
      "Keep your Slack status active - automatic status management every 5 minutes",
    longDescription:
      "Solves the problem of Slack setting you to 'away' after 30 minutes of inactivity. Slackactivity keeps your status active every 5 minutes, even during meetings or video calls. Secure OAuth integration - only requests status update permission, never accesses messages or files. Set custom working hours and manage multiple workspaces. Free forever.",
    date: "August 2024",
    status: "live",
    url: "https://slackactivity.com/",
    github: "https://github.com/EricStrohmaier/slackactivity.com",
    users: "5 Active users",
    tags: ["Slack", "Productivity", "Remote Work", "Automation"],
    featured: true,
  },
  {
    name: "Friends in Flats",
    slug: "friends-in-flats",
    description:
      "AI-powered student housing platform - connecting students with roommates in Vienna",
    longDescription:
      "An accommodation platform partnered with WU Vienna and TU Wien that connects international students with like-minded roommates. Features AI-powered matching, fully furnished rooms, online booking, and a dedicated quality team that inspects and certifies each room. Students get hassle-free housing without in-person viewings.",
    date: "2024",
    status: "live",
    url: "https://www.friends-in-flats.com/",
    users: "1200+",
    tags: ["PropTech", "Student Housing", "Vienna", "AI Matching"],
  },
  {
    name: "MenuSnap",
    slug: "menusnap",
    description:
      "Turn text menus into visual menus with AI-generated food photos",
    longDescription:
      "Transform boring text-only menus into beautiful visual experiences. Upload a menu and AI generates appetizing photos for each dish, making it easier for customers to decide what to order. Built for restaurants and cafes looking to improve their menu presentation.",
    date: "2024",
    status: "live",
    url: "https://menusnap.ericstrohmaier.com/",
    users: "Beta",
    tags: ["AI", "Restaurant", "Food Photography"],
  },
  {
    name: "Tools Collection",
    slug: "tools",
    description:
      "Simple tools for simple tasks - time tracking and freelance utilities",
    longDescription:
      "A collection of productivity tools built for managing freelance work. Includes time tracking, project management features, and various utilities. Built to scratch my own itch as a freelancer.",
    date: "April 2025",
    status: "live",
    url: "https://tools.ericstrohmaier.com/",
    github: "https://github.com/EricStrohmaier/tools.ericstrohmaier.com",
    users: "Personal use",
    tags: ["Time Tracking", "Freelance", "Productivity", "Tools"],
  },
  {
    name: "Invoice Generator",
    slug: "invoice-generator",
    description:
      "Create beautiful, professional invoices instantly - no signup required",
    longDescription:
      "A clean, simple invoice generator for freelancers and small businesses. Fill in the details and download your PDF. No account needed, just get your invoice and go.",
    date: "January 2025",
    status: "live",
    url: "https://boringinvoice.ericstrohmaier.com/",
    users: "Free tool",
    tags: ["Invoice", "Business", "Freelance", "PDF"],
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
    status: "offline",
    users: "2",
    tags: ["Telegram Bot", "Motivation", "Automation"],
  },
  {
    name: "Alina Licht Portfolio",
    slug: "alina-licht",
    description: "Artist portfolio website - clean, minimal design",
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
    status: "offline",
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
]

export function getProjectBySlug(slug: string): GraveyardProject | undefined {
  return graveyardProjects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): GraveyardProject[] {
  return graveyardProjects.filter((p) => p.featured)
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
