"use client"
import { useTheme } from "next-themes"
import { RxMoon, RxSun } from "react-icons/rx"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const base =
    "text-foreground/55 hover:bg-foreground/[0.06] hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"

  return (
    <>
      <button
        aria-label="Switch to light mode"
        onClick={() => setTheme("light")}
        className={`${base} hidden dark:flex`}
      >
        <RxSun className="size-[18px]" />
      </button>
      <button
        aria-label="Switch to dark mode"
        onClick={() => setTheme("dark")}
        className={`${base} flex dark:hidden`}
      >
        <RxMoon className="size-[18px]" />
      </button>
    </>
  )
}
