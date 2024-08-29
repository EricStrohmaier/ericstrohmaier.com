import Profile from "@/components/app/ProfileCard"
import React from "react"

export default function page() {
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
      />
    </div>
  )
}
