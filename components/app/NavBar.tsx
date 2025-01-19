"use client"
import React, { FC, useContext } from "react"
import { FaServer, FaClock } from "react-icons/fa"
import { ThemeToggle } from "../ThemeToggle"
import { TimeContext } from "@/lib/time"
import { NavItem } from "./NavItem"

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const { currentTime } = useContext(TimeContext)

  return (
    <div
      className="my-5 mt-7 w-full px-2"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}
    >
      <div className="flex w-full items-center justify-between">
        <div
          className={`flex items-center justify-center rounded-[70px]  border-[1.5px] px-2 `}
        >
          <FaClock className="mr-2 size-[24px]" />
          <p className={`ml-[5px] text-sm `}> {currentTime}</p>
        </div>

        <div className="flex items-center space-x-1 lg:space-x-3">
          <div>{children}</div>
          <NavItem Icon={FaServer} />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
