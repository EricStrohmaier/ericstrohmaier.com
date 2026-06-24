"use client"

import dynamic from "next/dynamic"

// Load the editor client-side only so @react-pdf/renderer never runs during SSR
const InvoiceGenerator = dynamic(
  () => import("@/components/invoice/InvoiceGenerator"),
  { ssr: false }
)

export function InvoiceClient() {
  return <InvoiceGenerator />
}
