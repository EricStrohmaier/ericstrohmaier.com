// Formats decimal hours (as stored in the QTY column) as whole hours and
// minutes, e.g. 56.52 -> "56 h 31 min".
export const formatHoursMinutes = (decimalHours: number): string => {
  const totalMinutes = Math.round(decimalHours * 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return minutes === 0 ? `${hours} h` : `${hours} h ${minutes} min`
}
