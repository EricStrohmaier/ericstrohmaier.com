import Link from "next/link"
import { Plus } from "lucide-react"

import { listInvoices } from "./actions"
import { getProjects } from "@/app/dashboard/actions"
import { InvoicesList } from "@/components/invoices/InvoicesList"
import { CreateFromTimeDialog } from "@/components/invoices/CreateFromTimeDialog"

export const metadata = { title: "Invoices" }

export default async function InvoicesPage() {
  const [invoices, projects] = await Promise.all([
    listInvoices(),
    getProjects(),
  ])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Invoices</h1>
        <div className="flex items-center gap-2">
          <CreateFromTimeDialog projects={projects} />
          <Link
            href="/dashboard/invoices/new"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            <Plus className="size-4" />
            New invoice
          </Link>
        </div>
      </div>

      <InvoicesList invoices={invoices} />
    </div>
  )
}
