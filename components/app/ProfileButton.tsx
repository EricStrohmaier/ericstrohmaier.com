"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function ProfileButton() {
  const pathname = usePathname()
  const isActive = pathname === "/profile"

  return (
    <div className="relative w-full border-t-[0.5px] p-2">
      <div className="flex w-full items-center justify-between">
        <Link
          href="/profile"
          className={`${isActive && "bg-stone-300 dark:bg-stone-700"} flex w-full flex-1 items-center space-x-3 rounded-[20px] transition-all duration-150 ease-in-out hover:bg-stone-200 dark:text-white dark:hover:bg-stone-700 md:px-2 md:py-1.5`}
        >
          <Image
            src={`/eric-head.jpeg`}
            width={50}
            height={50}
            alt={"User avatar"}
            className="w-15 h-15 rounded-full"
          />
          <span className="hidden truncate text-base font-medium md:flex">
            Eric Strohmaier
          </span>
        </Link>
      </div>
    </div>
  )
}
