import {
  getProjects,
  getTimeEntries,
  getActiveTimeEntry,
} from "./actions"
import { Dashboard } from "@/components/timetracking/Dashboard"

export const metadata = { title: "Dashboard" }

function currentMonthRange() {
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
  const fmt = (d: Date) => {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")
    return `${y}-${m}-${day}`
  }
  return { startDate: fmt(start), endDate: fmt(end) }
}

export default async function DashboardPage() {
  const range = currentMonthRange()
  const [projects, timeEntries, activeEntry] = await Promise.all([
    getProjects(),
    getTimeEntries(range),
    getActiveTimeEntry(),
  ])

  return (
    <Dashboard
      initialProjects={projects}
      initialEntries={timeEntries}
      initialActiveEntry={activeEntry}
      initialRange={range}
    />
  )
}
