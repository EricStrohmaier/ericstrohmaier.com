import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/app/Header"

export default function Loading() {
  return (
    <>
      <Header />
      <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col space-y-4 p-4">
        <Skeleton className="mt-4 h-10 w-64 rounded-md bg-gray-700 dark:bg-gray-100" />
        <Skeleton className="mt-2 h-5 w-96 rounded-md bg-gray-700 dark:bg-gray-100" />
      </div>
    </>
  )
}
