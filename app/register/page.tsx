import type { Metadata } from "next"

import { RegisterForm } from "@/components/auth/RegisterForm"

export const metadata: Metadata = {
  title: "Create account",
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid place-items-center bg-background px-5">
      <div className="w-full max-w-sm rounded-2xl border border-[var(--card-border)] bg-card p-6 shadow-sm">
        <RegisterForm />
      </div>
    </main>
  )
}
