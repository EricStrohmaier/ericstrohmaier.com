"use client"

import dynamic from "next/dynamic"
import { FileText } from "lucide-react"

import type { TimeEntry, Project } from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"

// Both BlobProvider and the PDF document must only ever run client-side.
// Loading the inner renderer via next/dynamic({ ssr: false }) guarantees
// @react-pdf/renderer is never pulled into the server bundle.
const PDFExportInner = dynamic(() => import("./PDFExportInner"), {
  ssr: false,
  loading: () => (
    <Button variant="outline" disabled className="gap-2">
      <FileText className="size-4" />
      Export PDF
    </Button>
  ),
})

export interface TimeTrackingPDFButtonProps {
  timeEntries: TimeEntry[]
  projects: Record<string, Project>
  startDate?: string
  endDate?: string
  projectName?: string
  disabled?: boolean
}

export function TimeTrackingPDFButton(props: TimeTrackingPDFButtonProps) {
  return <PDFExportInner {...props} />
}
