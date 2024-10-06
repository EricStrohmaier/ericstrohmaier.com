import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col space-y-4 p-4">
      <Skeleton className="mt-4 h-8 w-20 rounded-md bg-gray-700 dark:bg-gray-100 md:h-10 md:w-64" />
      <Skeleton className="mt-2 h-4 w-32 rounded-md bg-gray-700 dark:bg-gray-100 md:h-5 md:w-96" />
    </div>
  )
}
