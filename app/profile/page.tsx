import Profile from "@/components/app/ProfileCard"
import {
  fetchPageBySlug,
  getPageMetaData,
  fetchPageContent,
} from "@/lib/notion"

export const metadata = {
  title: "Profile",
  description: "Get in touch with me",
}

export default async function Page() {
  const page = await fetchPageBySlug("profile")
  let content = ""
  let title = ""

  if (page) {
    let meta = getPageMetaData(page)
    title = meta.title
    content = await fetchPageContent(page.id)
  }

  return (
    <div className="size-full">
      <div className="-m-8 -mt-12">
        <img
          className="mb-4 h-52 w-full object-cover"
          src="/nost-desk.jpg"
          alt={`my profile banner`}
        />
      </div>

      <Profile
        title={title}
        email="eric.strohmaier00@gmail.com"
        picture="/eric-head.jpeg"
        content={content}
      />
    </div>
  )
}
