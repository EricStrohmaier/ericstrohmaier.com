import { pathColorMapping } from "@/constans"

interface ProjectData {
  title: string
  description: string
  id: string
}

export default function ProjectPostComponent({
  project,
}: {
  project: ProjectData
}) {
  const { title, description, id } = project

  const idParts = id.split("/")
  const extractedPath = idParts[idParts.length - 1].replace(".md", "")

  const titleColor = pathColorMapping[extractedPath] || "text-[var(--text)]"

  return (
    <div className="px-4">
      <div>
        <p className={`text-6xl font-semibold ${titleColor}`}>{title}</p>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}
