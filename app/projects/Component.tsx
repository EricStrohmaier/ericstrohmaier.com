"use client"
import React from "react"
import {
  graveyardProjects,
  getAllTags,
  getAllStatuses,
  getStatusDisplayName,
  ProjectStatus,
} from "@/lib/project-graveyard"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ClientSideProjectList() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedTag, setSelectedTag] = React.useState<string>("all-tags")
  const [selectedStatus, setSelectedStatus] = React.useState<
    string | ProjectStatus
  >("all-statuses")

  const allTags = getAllTags()
  const allStatuses = getAllStatuses()

  const filteredProjects = graveyardProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTag =
      selectedTag === "all-tags" ||
      (project.tags && project.tags.includes(selectedTag))

    const matchesStatus =
      selectedStatus === "all-statuses" ||
      project.status.includes(selectedStatus)

    return matchesSearch && matchesTag && matchesStatus
  })

  // Sort projects by status priority and then by date (newest first)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    // Define status priority (in-progress first, then live, then others)
    const getStatusPriority = (status: ProjectStatus): number => {
      switch (status) {
        case "in-progress":
          return 1
        case "live":
          return 2
        case "on-hold":
          return 3
        case "offline":
          return 4
        case "archived":
          return 5
        default:
          return 6
      }
    }

    // First sort by status priority
    const statusDiff = getStatusPriority(a.status) - getStatusPriority(b.status)
    if (statusDiff !== 0) return statusDiff

    // If same status, sort by date (newest first)
    const getYear = (dateStr: string) => {
      const match = dateStr.match(/\d{4}/)
      return match ? parseInt(match[0]) : 0
    }

    return getYear(b.date) - getYear(a.date)
  })

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl"
          />
        </div>

        <div className="flex gap-2">
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-[180px] rounded-xl">
              <SelectValue placeholder="Filter by tag" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-background">
              <SelectItem value="all-tags">All Tags</SelectItem>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px] rounded-xl">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-background">
              <SelectItem value="all-statuses">All Statuses</SelectItem>
              {allStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {getStatusDisplayName(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project, index) => (
          <Card key={index} className="flex h-full flex-col rounded-xl">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between gap-2">
                <span className="truncate text-base" title={project.name}>
                  {project.name}
                </span>
                <Badge
                  variant={getStatusVariant(project.status)}
                  className="shrink-0"
                >
                  {getStatusDisplayName(project.status)}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pt-2">
              <p
                className="mb-4 line-clamp-3 text-sm text-muted-foreground"
                title={project.description}
              >
                {project.description}
              </p>
              <p className="mb-2 text-xs text-muted-foreground">
                Date: {project.date}
              </p>
              {project.users && (
                <p className="mb-4 text-xs text-muted-foreground">
                  Users: {project.users}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5">
                {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="cursor-pointer text-xs"
                    onClick={() => setSelectedTag(tag)}
                    title={tag}
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags && project.tags.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </CardContent>
            {project.url && (
              <CardFooter>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text text-sm hover:underline"
                >
                  Visit Project →
                </Link>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {sortedProjects.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground">
            No projects found matching your filters.
          </p>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          Total projects: {graveyardProjects.length} | Showing:{" "}
          {sortedProjects.length}
        </p>
      </div>
    </div>
  )
}

// Helper function to determine badge variant based on status
function getStatusVariant(
  status: ProjectStatus,
):
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "archived"
  | "on-hold" {
  switch (status) {
    case "live":
      return "default" // green
    case "in-progress":
      return "secondary" // blue
    case "on-hold":
      return "on-hold" // amber
    case "offline":
      return "destructive" // red
    case "archived":
      return "archived" // gray
    default:
      return "outline"
  }
}
