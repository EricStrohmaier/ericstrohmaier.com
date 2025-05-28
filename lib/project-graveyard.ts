export type ProjectStatus =
  | "live"
  | "archived"
  | "on-hold"
  | "in-progress"
  | "offline"

export interface GraveyardProject {
  name: string
  description: string
  date: string
  status: ProjectStatus
  users: string | number
  url?: string
  tags?: string[]
  originalStatus?: string // Keep the original status for reference
}

export const graveyardProjects: GraveyardProject[] = [
  {
    name: "recipe-api",
    description:
      "Scraped one recipe blog with 1000+ veggie recipes made a beautiful website to query it",
    date: "January 2, 2024",
    status: "offline",
    originalStatus: "offline",
    users: "0",
    tags: ["API", "Web Scraping", "Food"],
  },
  {
    name: "Coverletter GPT",
    description:
      "Taking Linkedin urls and writing personalised job applications coverletters",
    date: "November 6, 2023",
    status: "archived",
    originalStatus: "archived",
    users: "0",
    tags: ["AI", "Career", "Automation"],
  },
  {
    name: "Nostr Websites",
    description:
      "Playing with nostr technology, created a documentation website",
    date: "2023",
    status: "live",
    originalStatus: "archived/live",
    users: "0",
    tags: ["Nostr", "Documentation", "Web Development"],
  },
  {
    name: "linkedin api wrapper",
    description: "Posting to LinkedIn with AI via telegram",
    date: "January 4, 2024",
    status: "offline",
    originalStatus: "localhost/deprecated",
    users: "0",
    tags: ["API", "LinkedIn", "Automation", "AI"],
  },
  {
    name: "Insta-Telegram bot",
    description: "Instagram posts via telegram",
    date: "December 9, 2023",
    status: "offline",
    originalStatus: "localhost",
    users: "",
    tags: ["Bot", "Instagram", "Telegram", "Automation"],
  },
  {
    name: "e-commerce store template",
    description: "Just a template learning coding",
    date: "July 2, 2024",
    status: "live",
    originalStatus: "live",
    users: "0",
    tags: ["E-commerce", "Template", "Learning"],
  },
  {
    name: "alinalicht.com",
    description: "Artist personal website",
    date: "August 2, 2024",
    status: "live",
    originalStatus: "live",
    users: "?",
    tags: ["Portfolio", "Artist", "Personal Website"],
  },
  {
    name: "Slackactivity",
    description: "Always online in slack",
    date: "August 4, 2024",
    status: "live",
    originalStatus: "live",
    url: "https://slackactivity.com/",
    users: "1",
    tags: ["Slack", "Productivity", "Tool"],
  },
  {
    name: "Localboards",
    description: "Surfboard rental marketplace",
    date: "July 18, 2024",
    status: "live",
    originalStatus: "frozen/live",
    url: "https://local-boards.com/",
    users: "0",
    tags: ["Marketplace", "Surfing", "Rental"],
  },
  {
    name: "Oddpillow",
    description: "Curated list of odd amazon pillows",
    date: "January 15, 2025",
    status: "live",
    originalStatus: "live",
    url: "https://oddpillow.com/",
    users: "0",
    tags: ["Curation", "E-commerce", "Niche"],
  },
  {
    name: "ericstrohmaier.com",
    description: "Personal website with random information",
    date: "January 30, 2024",
    status: "live",
    originalStatus: "live",
    url: "https://ericstrohmaier.com/",
    users: "0+",
    tags: ["Personal Website", "Portfolio"],
  },
  {
    name: "Online-Birthday Card wisher",
    description: "Sending digital birthday wishes",
    date: "September 14, 2024",
    status: "offline",
    originalStatus: "frozen/localhost",
    users: "1",
    tags: ["Birthday", "Digital Cards", "Social"],
  },
  {
    name: "Motivations buddy Telegram bot",
    description: "Motivation during your day",
    date: "December 12, 2024",
    status: "live",
    originalStatus: "live",
    users: "2",
    tags: ["Motivation", "Telegram", "Bot"],
  },
  {
    name: "Bitvocation- Scraper + Website",
    description:
      "Scraping Bitcoin jobs and posting them on Telegram, Nostr + website coming soon",
    date: "December 9, 2023 - December 2024",
    status: "live",
    originalStatus: "live",
    users: "1500+",
    tags: ["Bitcoin", "Jobs", "Scraper", "Telegram", "Nostr"],
  },
  {
    name: "red-flag-guy Mobile app",
    description: 'Copy facebook community group "Are we dating the same guy?"',
    date: "December 21, 2024",
    status: "offline",
    originalStatus: "localhost-frozen",
    users: "0",
    tags: ["Mobile App", "Social", "Dating"],
  },
  {
    name: "Friends in Flats",
    description: "Startup - Student monthly rentals easy",
    date: "February 1, 2024",
    status: "live",
    originalStatus: "live",
    url: "https://www.friends-in-flats.com/",
    users: "1200+",
    tags: ["Rental", "Students", "Housing"],
  },
  {
    name: "kinderversicherer.at",
    description:
      "Freelance: Versicherungs website - calculating offers + online checkout",
    date: "February 7, 2024",
    status: "live",
    originalStatus: "live",
    url: "https://www.kinderversicherer.at/",
    users: "500+",
    tags: ["Insurance", "Calculator", "Checkout", "Freelance"],
  },
  {
    name: "imperal backoffice",
    description:
      "Freelance fullstack: Developing a backoffice app for internal use",
    date: "November 12, 2024",
    status: "live",
    originalStatus: "live",
    url: "https://wiener-altbau-brief.beehiiv.com/",
    users: "50+",
    tags: ["Backoffice", "Internal Tool", "Fullstack", "Freelance"],
  },
  {
    name: "Wiener altbau brief",
    description: "Scraping willhaben - and creating a data newsletter off it",
    date: "January 1, 2025",
    status: "on-hold",
    originalStatus: "frozen…data is off",
    users: "0",
    tags: ["Newsletter", "Scraper", "Real Estate", "Data"],
  },
  {
    name: "boringlandingpage.com",
    description: "Boilerplate template for future projects",
    date: "August 2024 - Jan 2025",
    status: "live",
    originalStatus: "live",
    url: "https://public-boilerplate.vercel.app/",
    users: "1",
    tags: ["Template", "Boilerplate", "Landing Page"],
  },
  {
    name: "invoice generator",
    description: "Creating beautiful invoices",
    date: "January 30, 2025",
    status: "live",
    originalStatus: "live",
    url: "https://boringinvoice.ericstrohmaier.com/",
    users: "1",
    tags: ["Invoice", "Generator", "Tool", "Business"],
  },
  {
    name: "lazy.surf",
    description: "A digital surf tracker history",
    date: "March 1, 2025",
    status: "on-hold",
    originalStatus: "on hold",
    url: "http://lazy.surf",
    users: "",
    tags: ["Surf", "Tracker", "Mobile App"],
  },
  {
    name: "kochcopilot.com",
    description: "Mobile app cooking ai",
    date: "March 10, 2025",
    status: "on-hold",
    originalStatus: "development",
    users: "Waiting list 5",
    tags: ["Cooking", "AI", "Mobile App"],
  },
  {
    name: "time tracker tool",
    description: "Personal tools for my freelance",
    date: "April 2025",
    status: "live",
    originalStatus: "live",
    url: "https://tools.ericstrohmaier.com/",
    users: "?",
    tags: ["Time Tracking", "Freelance", "Tool"],
  },
  {
    name: "The 7-Day Unfollow Challenge",
    description: "Email challenge for detox?",
    date: "Mid April 2025",
    status: "live",
    originalStatus: "live",
    url: "https://challenge.unfollowthedefault.com/",
    users: "0",
    tags: ["Challenge", "Email", "Digital Detox"],
  },
  {
    name: "Roast Me GPT",
    description: "AI wrapper around roasting you or friends fun app",
    date: "April 2025",
    status: "offline",
    originalStatus: "research/localhost",
    users: "0",
    tags: ["AI", "Fun", "Social"],
  },
  {
    name: "FastFix - Security agency",
    description:
      "Agency with security focus or finish your AI vibe coding apps",
    date: "April 27, 2025",
    status: "live",
    originalStatus: "live",
    url: "https://fastfix.ericstrohmaier.com/",
    users: "0",
    tags: ["Security", "Agency", "AI", "Coding"],
  },
  {
    name: "finishmycode.dev",
    description: "Marketplace for unfinished projects - what an irony",
    date: "May 05, 2025",
    status: "live",
    originalStatus: "live",
    users: "0",
    tags: ["Marketplace", "Code", "Unfinished Projects"],
  },
  {
    name: "whisper.cards",
    description: "Personalised affirmation cards - created with AI",
    date: "May 15, 2025",
    status: "live",
    originalStatus: "live",
    users: "~10",
    tags: ["Affirmation", "Cards", "AI", "Personalization"],
  },
]

// Helper function to get all unique tags
export function getAllTags(): string[] {
  const tagsSet = new Set<string>()

  graveyardProjects.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => tagsSet.add(tag))
    }
  })

  return Array.from(tagsSet).sort()
}

// Helper function to get all unique statuses
export function getAllStatuses(): ProjectStatus[] {
  // Return the fixed set of statuses we want to use
  return ["live", "in-progress", "on-hold", "offline", "archived"]
}

// Helper function to get status display name
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
