"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"
interface NavItemProps {
  href?: string
  title?: string
  Icon: any
  style?: string
  number?: string
}
export const NavItem: FC<NavItemProps> = ({
  href,
  title,
  Icon,
  style,
  number,
}) => {
  const router = usePathname()

  const path = router?.split("/")[1]
  const isActive = `/${path}` === href

  const determineTextColor = (style: string | undefined) => {
    if (
      style?.includes("bg-gray-600") ||
      style?.includes("bg-blue-600") ||
      style?.includes("bg-yellow-500") ||
      style?.includes("bg-red-600") ||
      style?.includes("bg-salmon")
    ) {
      return "text-gray-100"
    }

    return ""
  }
  const textColor = determineTextColor(style)

  const navItemStyle = `relative flex items-center justify-start rounded-[10px] p-4 ${isActive ? `${style} ${textColor}` : "bg-[var(--secondary)]"} `

  return (
    <Link href={href || ""}>
      <div className={navItemStyle}>
        <div className="absolute right-0 top-0 p-1 text-xs font-bold">
          {number}
        </div>
        <div className="flex items-center justify-start space-x-1">
          <Icon className="mr-2 size-[30px]" />
          <span className="hidden text-sm font-semibold lg:block">{title}</span>
        </div>
      </div>
    </Link>
  )
}
