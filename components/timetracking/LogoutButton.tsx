"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"

export function LogoutButton() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await authClient.signOut()
      router.push("/login")
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLogout}
      disabled={isLoading}
      className="gap-2 text-foreground/55 hover:text-foreground"
    >
      <LogOut className="size-4" />
      <span className="hidden sm:inline">
        {isLoading ? "Logging out..." : "Log out"}
      </span>
    </Button>
  )
}
