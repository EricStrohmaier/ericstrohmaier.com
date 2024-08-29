"use client"
import { FC } from "react"

import {
  CalendarIcon,
  CheckIcon,
  FlagIcon,
  GitBranchIcon,
  InboxIcon,
  ListIcon,
} from "lucide-react"
import { ListNavItem } from "./ListNavItem"
import { NavItem } from "./NavItem"
import { BsLinkedin } from "react-icons/bs"

const NavList: FC = () => {
  return (
    <div className="my-10 flex min-h-[50vh] w-full flex-col justify-between">
      <div className="flex flex-col space-y-5 md:items-center">
        {/* Adjust this grid to be 1 column on small screens and 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:w-[90%]">
          <NavItem
            href="/today"
            title="Today"
            Icon={CalendarIcon}
            style="bg-blue-600"
            number="2"
          />
          <NavItem
            href="/all"
            title="All"
            Icon={InboxIcon}
            style="bg-gray-600"
            number="65"
          />
          <NavItem
            href="/todo"
            title="Todo"
            Icon={FlagIcon}
            style="bg-yellow-500"
            number="1"
          />
          <NavItem
            href="/projects"
            title="Projects"
            Icon={CheckIcon}
            style="bg-yellow-500"
            number="4"
          />
        </div>
        <div className="mx-1 md:w-[90%]">
          <h3 className="text-sm font-semibold">Lists</h3>
          <nav className="mt-4 flex w-full flex-col items-start justify-center space-y-3 md:block">
            <ListNavItem
              href="/reminders"
              title="Reminders"
              Icon={ListIcon}
              number={5}
              iconBgColor="blue-600"
            />
            <ListNavItem
              href="/resume"
              title="Resume"
              Icon={ListIcon}
              number={10}
              iconBgColor="yellow-500"
            />
          </nav>
        </div>
        <div className="mx-1 md:w-[90%]">
          <h3 className="text-sm font-semibold">Links</h3>
          <nav className="mt-4 flex w-full flex-col items-start justify-center space-y-1 md:block">
            <ListNavItem
              href="https://github.com/EricStrohmaier"
              targetBlank
              title="Github"
              Icon={GitBranchIcon}
              iconBgColor=""
            />
            <ListNavItem
              href="https://www.linkedin.com/in/eric-strohmaier-3a0767267/"
              targetBlank
              title="LinkedIn"
              Icon={BsLinkedin}
              iconBgColor=""
            />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavList
