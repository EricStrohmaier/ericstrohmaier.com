import React from "react"
import NavList from "./NavList"
import CloseButtons from "./CloseButtons"
import Link from "next/link"
import Image from "next/image"

interface LayoutProps {
  children: React.ReactNode
  params?: {
    slug: string
  }
}

export function LayoutPage({ children, params }: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center bg-[var(--background)] py-2 text-[var(--text)] sm:p-9">
      <div className="flex h-full min-h-[90%] w-full items-center justify-center">
        <div className="mx-3 my-6 flex h-full w-full max-w-7xl overflow-hidden rounded-[40px] border-[var(--text)] bg-[var(--primary)]">
          <div className="border-r-[1px] bg-[var(--primary)] lg:w-1/3">
            <div className="mx-1 flex h-full flex-col justify-between lg:mx-0 lg:w-full">
              <div>
                <CloseButtons />
                <NavList />
              </div>
              <div className="relative w-full border-t-[0.5px] bg-[var(--primary)] p-4">
                <div className="flex w-full items-center justify-between">
                  <Link
                    href="/profile"
                    className="flex w-full flex-1 items-center space-x-3 rounded-[20px] px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800"
                  >
                    <Image
                      src={`/eric-head.jpeg`}
                      width={50}
                      height={50}
                      alt={"User avatar"}
                      className="w-15 h-auto rounded-full"
                    />
                    <span className="truncate text-base font-medium">
                      See Full Profile
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
