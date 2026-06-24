"use client"

import { format } from "date-fns"
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"

import type { TimeEntry, Project } from "@/app/dashboard/actions"

const formatDuration = (seconds?: number | null): string => {
  if (!seconds) return "0h 0m"
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours}h ${minutes}m`
}

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#333333",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: "#1a1a1a",
  },
  headerGrid: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 40,
  },
  headerCol: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: "#666666",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 12,
    marginBottom: 15,
  },
  table: {
    marginTop: 30,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  projectCell: {
    flex: 2,
    paddingRight: 10,
  },
  descriptionCell: {
    flex: 3,
    paddingRight: 10,
  },
  dateCell: {
    width: "20%",
    paddingRight: 10,
  },
  durationCell: {
    width: "15%",
    textAlign: "right",
    paddingRight: 10,
  },
  summarySection: {
    marginTop: 30,
    alignItems: "flex-end",
  },
  summaryRow: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  summaryLabel: {
    width: 100,
    textAlign: "right",
    paddingRight: 10,
    color: "#666666",
  },
  summaryValue: {
    width: 80,
    textAlign: "right",
  },
  total: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  footer: {
    marginTop: "auto",
    paddingTop: 30,
    paddingHorizontal: 0,
    fontSize: 10,
    color: "#666666",
    textAlign: "center",
  },
})

export interface TimeTrackingPDFProps {
  timeEntries: TimeEntry[]
  projects: Record<string, Project>
  startDate?: string
  endDate?: string
  projectName?: string
}

const TimeTrackingPDF = ({
  timeEntries,
  projects,
  startDate,
  endDate,
  projectName,
}: TimeTrackingPDFProps) => {
  // Calculate total hours
  const totalSeconds = timeEntries.reduce(
    (total, entry) => total + (entry.duration || 0),
    0,
  )
  const totalHours = (totalSeconds / 3600).toFixed(2)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Time Tracking Report</Text>

        <View style={styles.headerGrid}>
          <View style={styles.headerCol}>
            {startDate && (
              <>
                <Text style={styles.label}>Date Range</Text>
                <Text style={styles.value}>
                  {format(new Date(`${startDate}T00:00:00`), "MMM dd, yyyy")}
                  {endDate &&
                    ` - ${format(
                      new Date(`${endDate}T00:00:00`),
                      "MMM dd, yyyy",
                    )}`}
                </Text>
              </>
            )}

            {projectName && (
              <>
                <Text style={styles.label}>Project</Text>
                <Text style={styles.value}>{projectName}</Text>
              </>
            )}
          </View>

          <View style={styles.headerCol}>
            <Text style={styles.label}>Total Hours</Text>
            <Text style={styles.value}>{totalHours}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.projectCell}>Project</Text>
            <Text style={styles.descriptionCell}>Description</Text>
            <Text style={styles.dateCell}>Date</Text>
            <Text style={styles.durationCell}>Duration</Text>
          </View>

          {timeEntries.map((entry, index) => {
            const project = entry.project_id
              ? projects[entry.project_id]
              : undefined
            return (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.projectCell}>{project?.name || ""}</Text>
                {entry.description ? (
                  <Text style={styles.descriptionCell}>{entry.description}</Text>
                ) : (
                  <View style={styles.descriptionCell} />
                )}
                <Text style={styles.dateCell}>
                  {format(new Date(entry.start_time), "MMM dd, yyyy")}
                </Text>
                <Text style={styles.durationCell}>
                  {formatDuration(entry.duration)}
                </Text>
              </View>
            )
          })}
        </View>

        <View style={styles.summarySection}>
          <View style={[styles.summaryRow, styles.total]}>
            <Text style={[styles.summaryLabel, styles.totalLabel]}>
              Total Hours
            </Text>
            <Text style={[styles.summaryValue, styles.totalValue]}>
              {totalHours}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default TimeTrackingPDF
