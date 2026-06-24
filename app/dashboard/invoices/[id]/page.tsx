import { notFound } from "next/navigation"
import { getInvoice } from "@/app/dashboard/invoices/actions"
import { AccountInvoiceEditor } from "@/components/invoices/AccountInvoiceEditor"

export const metadata = { title: "Edit invoice" }

export default async function EditInvoicePage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  if (id === "new") {
    return <AccountInvoiceEditor invoiceId={null} initialInvoice={null} />
  }

  const invoice = await getInvoice(id)
  if (!invoice) notFound()

  return <AccountInvoiceEditor invoiceId={id} initialInvoice={invoice} />
}
