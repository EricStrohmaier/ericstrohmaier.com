"use client"
import { FC } from "react"
import { FolderOpen, Mail, Home } from "lucide-react"
import { ListNavItem } from "./ListNavItem"
import { NavItem } from "./NavItem"
import { BsLinkedin, BsGithub } from "react-icons/bs"

const NavList: FC = () => {
  return (
    <div className="my-10 flex w-full flex-col justify-between">
      <div className="flex flex-col items-center space-y-5 md:items-center">
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:w-[90%]">
          <NavItem href="/" title="Home" Icon={Home} style="bg-stone-500" />
          <NavItem
            href="/projects"
            title="Projects"
            Icon={FolderOpen}
            style="bg-blue-600"
          />
          <NavItem
            href="/contact"
            title="Contact"
            Icon={Mail}
            style="bg-emerald-600"
          />
        </div>
        <div className="w-full md:w-[90%]">
          <h3 className="text-center text-sm font-semibold md:text-left md:text-lg">
            Links
          </h3>
          <nav className="mt-4 flex w-full flex-col items-center justify-center space-y-1 md:block md:items-start">
            <ListNavItem
              href="https://github.com/EricStrohmaier"
              targetBlank
              title="GitHub"
              Icon={BsGithub}
            />
            <ListNavItem
              href="https://www.linkedin.com/in/eric-strohmaier-3a0767267/"
              targetBlank
              title="LinkedIn"
              Icon={BsLinkedin}
            />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavList
