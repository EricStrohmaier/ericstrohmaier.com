"use client"
import { FC } from "react"

import {
  CalendarIcon,
  CheckIcon,
  FileIcon,
  FlagIcon,
  GitBranchIcon,
  InboxIcon,
  ListIcon,
  LucideProjector,
  Projector,
  ProjectorIcon,
  User,
} from "lucide-react"
import { ListNavItem } from "./ListNavItem"
import { NavItem } from "./NavItem"
import { BsLinkedin } from "react-icons/bs"

const NavList: FC = () => {
  return (
    <div className="my-10 flex w-full flex-col justify-between">
      <div className="flex flex-col items-center space-y-5 md:items-center">
        {/* Adjust this grid to be 1 column on small screens and 2 columns on medium screens and up */}
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:w-[90%]">
          <NavItem
            href="/today"
            title="Today"
            Icon={CalendarIcon}
            style="bg-blue-600"
          />
          <NavItem
            href="/projects"
            title="Projects"
            Icon={Projector}
            style="bg-red-600"
          />
          <NavItem
            href="/contact"
            title="Contact"
            Icon={FlagIcon}
            style="bg-yellow-500"
          />
          <NavItem
            href="/profile"
            title="About Me"
            Icon={User}
            style="bg-salmon"
          />
        </div>
        <div className="w-full md:w-[90%]">
          <h3 className="text-center text-sm font-semibold md:text-left md:text-lg">
            Lists
          </h3>
          <nav className="mt-2 flex w-full flex-col items-center justify-center space-y-3 md:block md:items-start">
            <ListNavItem
              href="/reminders"
              title="Reminders"
              Icon={ListIcon}
              iconClassName="bg-blue-600 rounded-full"
            />
          </nav>
        </div>
        <div className="w-full md:w-[90%]">
          <h3 className="text-center text-sm font-semibold md:text-left md:text-lg">
            Links
          </h3>
          <nav className="mt-4 flex w-full flex-col items-center justify-center space-y-1 md:block md:items-start">
            <ListNavItem
              href="https://github.com/EricStrohmaier"
              targetBlank
              title="Github"
              Icon={GitBranchIcon}
            />
            <ListNavItem
              href="https://www.linkedin.com/in/eric-strohmaier-3a0767267/"
              targetBlank
              title="LinkedIn"
              Icon={BsLinkedin}
            />
            <ListNavItem
              href="https://docs.google.com/document/d/1H-QrgIzORvaLmw6OnFKiL0ef5MYoLAIIq9WH5lZZpkU/edit?usp=sharing"
              targetBlank
              title="Resume/CV"
              Icon={FileIcon}
            />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavList
