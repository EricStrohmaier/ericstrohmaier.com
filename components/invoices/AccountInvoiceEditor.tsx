"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { toast } from "sonner"
import { ArrowLeft } from "lucide-react"
import InvoiceGenerator from "@/components/invoice/InvoiceGenerator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  saveInvoice,
  updateInvoiceStatus,
  type SavedInvoice,
} from "@/app/dashboard/invoices/actions"
import type { Invoice } from "@/types/invoice"

type SaveStatus = "idle" | "saving" | "saved" | "error"

interface AccountInvoiceEditorProps {
  invoiceId: string | null
  initialInvoice: SavedInvoice | null
}

const saveStatusLabel: Record<SaveStatus, string> = {
  idle: "All changes saved to your account",
  saving: "Saving…",
  saved: "Saved",
  error: "Save failed",
}

const saveStatusClass: Record<SaveStatus, string> = {
  idle: "text-foreground/50",
  saving: "text-foreground/60",
  saved: "text-green-600",
  error: "text-red-600",
}

export function AccountInvoiceEditor({
  invoiceId,
  initialInvoice,
}: AccountInvoiceEditorProps) {
  const [id, setId] = useState<string | null>(invoiceId)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle")
  const [status, setStatus] = useState(initialInvoice?.status ?? "draft")

  // Refs mirror state so the (debounced) autosave always sees the latest id /
  // status synchronously, and saves are serialized so a brand-new invoice can't
  // be created twice before its id lands.
  const idRef = useRef<string | null>(invoiceId)
  const statusRef = useRef<string>(initialInvoice?.status ?? "draft")
  const inFlightRef = useRef<Promise<void> | null>(null)

  const onPersist = (invoice: Invoice) => {
    const run = async () => {
      if (inFlightRef.current) {
        try {
          await inFlightRef.current
        } catch {
          // previous save failed; proceed with this one
        }
      }
      setSaveStatus("saving")
      const res = await saveInvoice(
        idRef.current,
        invoice,
        idRef.current ? undefined : statusRef.current,
      )
      if (res.error || !res.id) {
        setSaveStatus("error")
        if (res.error) toast.error(res.error)
        return
      }
      if (!idRef.current) {
        idRef.current = res.id
        setId(res.id)
        window.history.replaceState(null, "", `/dashboard/invoices/${res.id}`)
      }
      setSaveStatus("saved")
    }
    const p = run()
    inFlightRef.current = p.finally(() => {
      if (inFlightRef.current === p) inFlightRef.current = null
    })
  }

  const onStatusChange = async (value: string) => {
    setStatus(value)
    statusRef.current = value
    // For a not-yet-created invoice the chosen status is applied on first save.
    if (!idRef.current) return
    const res = await updateInvoiceStatus(idRef.current, value)
    if (res.error) {
      toast.error(res.error)
      return
    }
    toast.success("Status updated")
  }

  const title = `Invoice ${initialInvoice?.invoiceNumber || "new"}`

  const headerSlot = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <Link
          href="/dashboard/invoices"
          className="inline-flex w-fit items-center gap-1 text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Invoices
        </Link>
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          <span className={`text-xs ${saveStatusClass[saveStatus]}`}>
            {saveStatusLabel[saveStatus]}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-foreground/60">Status</span>
        <Select value={status} onValueChange={onStatusChange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  return (
    <InvoiceGenerator
      initialInvoice={initialInvoice}
      onPersist={onPersist}
      headerSlot={headerSlot}
    />
  )
}
