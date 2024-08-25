import { FC } from "react"
import Link from "next/link"

interface ProfileProps {
  picture: string
  displayName?: string
  website?: string
  about?: string
}

const Profile: FC<ProfileProps> = ({
  picture,
  displayName,
  website,
  about,
}) => {
  return (
    <div className="mb-2 flex h-fit flex-col gap-2 md:mx-0 md:px-2">
      <div className="flex h-fit flex-row">
        <div
          className="-mt-24 h-fit"
          style={{ maxWidth: "136px" } as React.CSSProperties}
        >
          {picture && (
            <img
              alt="profile"
              src={picture}
              width="128"
              height="128"
              className="h-full w-full rounded-full border-2 object-cover"
            />
          )}
        </div>
        <div className="mr-16 flex flex-1 items-center justify-end lg:mx-1">
          <div className="flex">
            {/* <Link
              href="/profile/edit"
              className="flex items-center text-xs md:text-lg"
            >
              Edit Profile
            </Link> */}
          </div>
        </div>
      </div>
      <>
        <div className="flex-1">
          <span className="mr-2 text-xl font-semibold">
            <span>{displayName}</span>
          </span>
          <div className="flex space-x-3 text-sm"></div>
        </div>
        <div className="py-2">
          <p className="text-sm">{about}</p>
        </div>
      </>
    </div>
  )
}

export default Profile
