export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-2 rounded-xl bg-[var(--secondary)] px-4 py-2.5 text-sm text-foreground/40">
        <span className="size-1.5 animate-pulse rounded-full bg-foreground/30" />
        loading
      </div>
    </div>
  )
}
