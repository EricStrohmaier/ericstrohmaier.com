import Profile from "@/components/app/ProfileCard"
import React from "react"
import {
  fetchPageBySlug,
  getPageMetaData,
  fetchPageContent,
} from "@/lib/notion"

export default async function Page() {
  const page = await fetchPageBySlug("profile")
  let content = ""

  if (page) {
    const meta = getPageMetaData(page)
    content = await fetchPageContent(page.id)
  }

  return (
    <div className="h-full w-full">
      <div className="-m-8 -mt-12">
        <img
          className="mb-4 h-52 w-full object-cover"
          src="/nost-desk.jpg"
          alt={`my profile banner`}
        />
      </div>

      <Profile
        email="eric.strohmaier00@gmail.com"
        displayName="Eric Strohmaier"
        picture="/eric-head.jpeg"
        about="Adventure guy programing"
        content={content}
      />
    </div>
  )
}
