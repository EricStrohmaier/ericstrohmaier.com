"use client"

import { BlobProvider } from "@react-pdf/renderer"
import { FileText } from "lucide-react"

import type { TimeEntry, Project } from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"
import TimeTrackingPDF from "./TimeTrackingPDF"
import type { TimeTrackingPDFButtonProps } from "./TimeTrackingPDFButton"

export default function PDFExportInner({
  timeEntries,
  projects,
  startDate,
  endDate,
  projectName,
  disabled = false,
}: TimeTrackingPDFButtonProps) {
  const generateFileName = () => {
    const dateStr = new Date().toISOString().split("T")[0]
    return `time-report-${dateStr}.pdf`
  }

  return (
    <BlobProvider
      document={
        <TimeTrackingPDF
          timeEntries={timeEntries}
          projects={projects}
          startDate={startDate}
          endDate={endDate}
          projectName={projectName}
        />
      }
    >
      {({ url, loading, error }) => (
        <Button
          variant="outline"
          className="gap-2"
          disabled={
            disabled || loading || timeEntries.length === 0 || !!error
          }
          onClick={() => {
            if (url) {
              const link = window.document.createElement("a")
              link.href = url
              link.download = generateFileName()
              link.click()
            }
          }}
        >
          <FileText className="size-4" />
          {loading ? "Generating..." : "Export PDF"}
        </Button>
      )}
    </BlobProvider>
  )
}
