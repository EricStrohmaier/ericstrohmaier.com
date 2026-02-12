import Image from "next/image"

type Note =
  | { text: string; done: boolean; image?: undefined }
  | { text: string; done: boolean; image: string }

const notes: Note[] = [
  {
    text: "agenttodo - built it, now dogfooding it & getting the word out",
    done: false,
  },
  {
    text: "mydigitalcalendar - shipped it, planned my whole year with it",
    done: true,
    image: "/calendar-2026.png",
  },
  {
    text: "alpen.digital - running an AI automation agency on the side",
    done: true,
  },
  { text: "ship personal site v2 - you're looking at it", done: true },
  {
    text: "bitvocation telegram bot rewrite - finally done, mass off my chest",
    done: true,
  },
  {
    text: "promptsloth.com - growth & marketing, the never-ending story",
    done: false,
  },
  {
    text: "slackactivity.com oauth flow - shipped, never touching oauth again",
    done: true,
  },
  { text: "clean up github repos - yeah... eventually", done: false },
]

export default function Home() {
  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">todos</h1>
      <p className="text-foreground/50 mb-8">things on my mind</p>
      <ul className="space-y-3">
        {notes.map((note, i) => (
          <li key={i}>
            <div className="flex items-start gap-3">
              <span
                className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded border ${
                  note.done
                    ? "border-foreground/20 bg-foreground/10 text-foreground/60"
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
              <span
                className={
                  note.done
                    ? "text-foreground/40 line-through"
                    : "text-foreground/80"
                }
              >
                {note.text}
              </span>
            </div>
            {note.image && (
              <div className="ml-8 mt-2">
                <Image
                  src={note.image}
                  alt="my 2025 plan"
                  width={600}
                  height={400}
                  className="border-foreground/10 rounded-lg border"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
