import React from "react"
import { CheckIcon, MinusIcon, XIcon } from "lucide-react"
import Link from "next/link"

export default function CloseButtons() {
  return (
    <div className="ml-2 mt-8 flex items-center justify-start space-x-2 md:ml-7">
      <Link
        href={"/"}
        className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f56] md:h-4 md:w-4"
      >
        <XIcon className="opacity-0 hover:text-black hover:opacity-50" />
      </Link>
      <Link
        href={"/"}
        className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ffbd2e] md:h-4 md:w-4"
      >
        <MinusIcon className="opacity-0 hover:text-black hover:opacity-50" />
      </Link>
      <Link
        href={"/"}
        className="flex h-3 w-3 items-center justify-center rounded-full bg-[#27c93f] md:h-4 md:w-4"
      >
        <CheckIcon className="opacity-0 hover:text-black hover:opacity-50" />
      </Link>
    </div>
  )
}
