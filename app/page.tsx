import Image from "next/image"

type Note =
  | { text: string; done: boolean; image?: undefined; href?: string; highlight?: boolean }
  | { text: string; done: boolean; image: string; href?: string; highlight?: boolean }

const notes: Note[] = [
  {
    text: "promptsloth.com — 2,000+ users, 26 paying subscribers. Chrome extension for AI prompts.",
    done: true,
    href: "https://promptsloth.com",
  },
  {
    text: "2 long-term freelance clients — 2+ years each, happy partnerships still going",
    done: true,
  },
  {
    text: "alpen.digital — AI automation agency. Setting up personal AI assistants for businesses.",
    done: true,
    href: "https://11.alpendigital.strohstacks.xyz/openclaw-setup-wien",
  },
  {
    text: "15+ projects shipped — SaaS, Telegram bots, Chrome extensions, landing pages",
    done: true,
  },
  {
    text: "mydigitalcalendar — shipped it, free digital year planner",
    done: true,
    image: "/calendar-2026.png",
  },
  {
    text: "slackactivity.com — Slack status keeper, shipped",
    done: true,
    href: "https://slackactivity.com",
  },
  {
    text: "your project — let's talk",
    done: false,
    href: "/contact",
    highlight: true,
  },
]

export default function Home() {
  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">let&apos;s build something</h1>
      <p className="text-foreground/50 mb-8">
        I build AI-powered software. Fast. And it works.
      </p>
      <ul className="space-y-3">
        {notes.map((note, i) => (
          <li key={i}>
            <div className="flex items-start gap-3">
              <span
                className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded border ${
                  note.done
                    ? "border-foreground/20 bg-foreground/10 text-foreground/60"
                    : note.highlight
                      ? "border-blue-400 bg-blue-400/10"
                      : "border-foreground/15"
                }`}
              >
                {note.done && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="text-current"
                  >
                    <path
                      d="M2 5.5L4 7.5L8 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              {note.href ? (
                <a
                  href={note.href}
                  target={note.href.startsWith("http") ? "_blank" : undefined}
                  rel={note.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={
                    note.highlight
                      ? "text-blue-400 font-medium hover:underline"
                      : note.done
                        ? "text-foreground/40 line-through hover:text-foreground/60"
                        : "text-foreground/80 hover:underline"
                  }
                >
                  {note.text}
                </a>
              ) : (
                <span
                  className={
                    note.done
                      ? "text-foreground/40 line-through"
                      : "text-foreground/80"
                  }
                >
                  {note.text}
                </span>
              )}
            </div>
            {note.image && (
              <div className="ml-8 mt-2 max-w-[600px] rounded-lg">
                <Image
                  src={note.image}
                  alt="my 2025 plan"
                  width={600}
                  height={400}
                  className="g roundnded-lg rounded-lg border object-cover"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-10 border-t border-foreground/10 pt-6">
        <p className="text-foreground/60 text-sm">
          I work fast, ship quality, and stick around.{" "}
          <a href="/contact" className="text-blue-400 hover:underline">
            Let&apos;s build something together.
          </a>
        </p>
      </div>
    </div>
  )
}
