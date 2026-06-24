import { Suspense } from "react"
import type { Metadata } from "next"

import { LoginForm } from "@/components/auth/LoginForm"

export const metadata: Metadata = {
  title: "Log in",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen grid place-items-center bg-background px-5">
      <div className="w-full max-w-sm rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm">
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  )
}
