const notes = [
  { text: "ship personal site v2", done: true },
  { text: "finish bitvocation telegram bot rewrite", done: true },
  { text: "promptsloth.com - growth & marketing", done: false },
  { text: "slackactivity.com oauth flow", done: true },
  { text: "clean up github repos", done: false },
]

export default function Home() {
  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">todos</h1>
      <p className="text-foreground/50 mb-8">things on my mind</p>
      <ul className="space-y-3">
        {notes.map((note, i) => (
          <li key={i} className="flex items-start gap-3">
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
          </li>
        ))}
      </ul>
    </div>
  )
}
