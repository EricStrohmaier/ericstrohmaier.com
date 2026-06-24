import { redirect } from "next/navigation"
import { headers } from "next/headers"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { auth } from "@/lib/auth"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LogoutButton } from "@/components/timetracking/LogoutButton"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) redirect("/login")

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <h1 className="text-base font-semibold tracking-tight">
            Time Tracking
          </h1>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-foreground/55 transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span className="hidden sm:inline">Site</span>
            </Link>
            <ThemeToggle />
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 py-8">{children}</main>
    </div>
  )
}
