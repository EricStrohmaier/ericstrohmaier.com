import React from "react"
import NavList from "./NavList"
import CloseButtons from "./CloseButtons"
import ProfileButton from "./ProfileButton"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
}

export function LayoutPage({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden items-center justify-center bg-[var(--background)] text-[var(--text)]">
      <div className="mx-2 flex w-full h-[90vh] max-w-7xl overflow-hidden rounded-[40px] bg-[var(--primary)] md:mx-3">
        <div className="z-20 h-full w-fit border-r border-border bg-[var(--primary)] lg:min-h-full lg:w-1/3">
          <div className="mx-1 flex h-full w-fit flex-col justify-between lg:mx-0 lg:w-full">
            <div>
              <CloseButtons />
              <NavList />
            </div>
            <ProfileButton />
          </div>
        </div>
        <div className="flex w-full flex-col overflow-y-scroll hide-scrollbar">
          <div className="px-4 pt-4 md:px-8 md:pt-6">
            <Header />
          </div>
          <main className="w-full px-4 py-4 md:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
