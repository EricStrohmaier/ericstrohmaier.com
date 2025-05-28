import React from "react"
import NavList from "./NavList"
import CloseButtons from "./CloseButtons"
import ProfileButton from "./ProfileButton"

interface LayoutProps {
  children: React.ReactNode
}

export function LayoutPage({ children }: LayoutProps) {
  return (
    <div className="flex size-full min-h-screen items-center justify-center bg-[var(--background)] py-2 text-[var(--text)] sm:p-9">
      <div className="mx-2 my-6 flex size-full min-h-[90%] max-w-7xl overflow-hidden rounded-[40px] bg-[var(--primary)] md:mx-3">
        <div className="z-20 h-full w-fit border-r border-border bg-[var(--primary)] lg:min-h-full lg:w-1/3">
          <div className="mx-1 flex h-full w-fit flex-col justify-between lg:mx-0 lg:w-full">
            <div>
              <CloseButtons />
              <NavList />
            </div>
            <ProfileButton />
          </div>
        </div>
        <div className="w-full flex-col">{children}</div>
      </div>
    </div>
  )
}

export default LayoutPage
