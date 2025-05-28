"use client"
import { ThemeToggle } from "../ThemeToggle"
import { TimeContext } from "@/lib/time"
import { useContext } from "react"
import { RxClock } from "react-icons/rx"

export default function Header() {
  const { currentTime } = useContext(TimeContext)

  return (
    <div>
      <header className="mb-5 flex content-center items-center justify-between md:mx-3">
        <div className="flex gap-4"></div>
        <div className="flex items-center justify-between gap-4">
          <div
            className={`flex max-h-8 max-w-20 items-center rounded-[70px] border-[1.5px] border-border px-2 `}
          >
            <RxClock className="" />
            <p className={`ml-[5px] text-sm`}> {currentTime}</p>
          </div>
          <ThemeToggle />
        </div>
      </header>
    </div>
  )
}
