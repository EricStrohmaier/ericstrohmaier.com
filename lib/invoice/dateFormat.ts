export function formatDate(date: string, format: string = "YYYY-MM-DD"): string {
  if (!date) return ""

  // A date-only string (yyyy-MM-dd) must be read as a local calendar date.
  // `new Date("yyyy-MM-dd")` parses as UTC midnight, which getDate()/getMonth()
  // then shift back a day for negative-offset timezones. Parse the parts
  // directly when the input is date-only; otherwise fall back to Date parsing.
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(date)
  const d = m
    ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
    : new Date(date)

  if (isNaN(d.getTime())) return ""

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")

  switch (format) {
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`
    case "DD/MM/YYYY":
      return `${day}/${month}/${year}`
    case "DD.MM.YYYY":
      return `${day}.${month}.${year}`
    case "YYYY-MM-DD":
    default:
      return `${year}-${month}-${day}`
  }
}
