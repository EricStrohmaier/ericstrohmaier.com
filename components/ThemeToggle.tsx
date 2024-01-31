"use client"
import { useTheme } from "next-themes"
import { RxMoon, RxSun } from "react-icons/rx"

export function ThemeToggle() {
    const { setTheme } = useTheme()
    return (
        <div >
            <button
                onClick={() => setTheme("light")}
                className="hidden  text-gray-300 dark:flex">
                <RxSun className="w-[34px] h-[34px]"/>
            </button >
            <button
                onClick={() => setTheme("dark")}
                className="flex w-[34px] h-[34px] text-gray-600 dark:hidden">
                <RxMoon className="w-[34px] h-[34px]" />
            </button >
        </div>
    )
}
