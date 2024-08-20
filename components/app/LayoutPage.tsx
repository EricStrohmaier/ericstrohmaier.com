import React from "react"
import NavList from "./NavList"
import CloseButtons from "./CloseButtons"
import ProfileButton from "./ProfileButton"

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
              <ProfileButton />
            </div>
          </div>
          <div className="w-full flex-col">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
