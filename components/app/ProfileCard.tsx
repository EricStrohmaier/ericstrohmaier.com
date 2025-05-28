import { FC } from "react"
import MDPreviewComponent from "@/components/app/MDPreviewComponent"
import { MdStringObject } from "notion-to-md/build/types"

interface ProfileProps {
  picture: string
  displayName?: string
  website?: string
  about?: string
  email?: string
  content?: MdStringObject
  title: string
}

const Profile: FC<ProfileProps> = ({
  picture,
  displayName,
  website,
  about,
  email,
  content,
  title,
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
              className="size-full rounded-full border-2 border-border object-cover"
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
        {content && (
          <div>
            <MDPreviewComponent
              project={{
                slug: "profile",
                title: title,
                id: "profile",
                content: content,
                tags: [],
              }}
            />
          </div>
        )}
      </>
    </div>
  )
}

export default Profile
