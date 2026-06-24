import type { Metadata } from "next"
import { InvoiceClient } from "@/components/invoice/InvoiceClient"

export const metadata: Metadata = {
  title: "Invoice Generator",
  description:
    "Free invoice generator with PDF export. Your data stays in your browser.",
}

export default function InvoicePage() {
  return <InvoiceClient />
}
