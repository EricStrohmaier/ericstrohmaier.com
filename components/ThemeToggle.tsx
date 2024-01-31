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
                <RxSun className="w-[29px] h-[29px]"/>
            </button >
            <button
                onClick={() => setTheme("dark")}
                className="flex  text-gray-600 dark:hidden">
                <RxMoon className="w-[29px] h-[29px]" />
            </button >
        </div>
    )
}
