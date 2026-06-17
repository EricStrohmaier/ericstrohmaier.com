export const siteConfig = {
  supportEmail: "contact@ericstrohmaier.com",
  name: "Eric Strohmaier",
  domain: "ericstrohmaier.com",
  url: "https://ericstrohmaier.com",
  // Booking/calendar link. Override via NEXT_PUBLIC_BOOKING_URL env var,
  // otherwise falls back to the hardcoded Google Calendar appointment link.
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://calendar.app.google/hAPJNZHrEtykHPMg9",
  tagline: "Your software partner.",
  description:
    "I build custom software, internal tools, automations, and high-converting websites for small and mid-sized businesses — software that pays for itself.",
  keywords: [
    "Eric Strohmaier",
    "custom software development",
    "software for small businesses",
    "internal tools",
    "business automation",
    "workflow automation",
    "lead generation websites",
    "custom web development",
    "AI automation",
    "AI tools for business",
    "SaaS development",
    "freelance software engineer",
    "software partner",
    "dashboards and CRMs",
    "Next.js developer",
  ],
  ogImage: "https://ericstrohmaier.com/og-image.jpeg",
  links: {
    twitter: "https://twitter.com/EricStrohmaier",
    github: "https://github.com/EricStrohmaier",
    linkedin: "https://www.linkedin.com/in/eric-strohmaier-3a0767267/",
    email: "mailto:contact@ericstrohmaier.com",
  },
}
