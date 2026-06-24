"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { format, parseISO } from "date-fns"
import { toast } from "sonner"

import type { InvoiceSummary } from "@/app/dashboard/invoices/actions"
import { deleteInvoice } from "@/app/dashboard/invoices/actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface InvoicesListProps {
  invoices: InvoiceSummary[]
}

const STATUS_VARIANT: Record<string, "default" | "secondary" | "outline"> = {
  paid: "default",
  sent: "secondary",
  draft: "outline",
}

function formatDate(value: string | null) {
  if (!value) return "—"
  try {
    return format(parseISO(value), "MMM d, yyyy")
  } catch {
    return value
  }
}

function firstLine(value: string) {
  const line = (value || "").split("\n")[0]?.trim()
  return line || "—"
}

export function InvoicesList({ invoices }: InvoicesListProps) {
  const router = useRouter()
  const [pendingDelete, setPendingDelete] = useState<InvoiceSummary | null>(
    null,
  )
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    if (!pendingDelete) return
    setDeleting(true)
    try {
      const res = await deleteInvoice(pendingDelete.id)
      if (res.error) {
        toast.error(res.error)
      } else {
        toast.success("Invoice deleted")
        setPendingDelete(null)
        router.refresh()
      }
    } catch {
      toast.error("Failed to delete invoice")
    } finally {
      setDeleting(false)
    }
  }

  if (invoices.length === 0) {
    return (
      <div className="rounded-2xl border border-[var(--card-border)] bg-card p-10 text-center shadow-sm">
        <p className="text-foreground/55 text-sm">
          No invoices yet. Create one from scratch or from tracked time.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-2xl border border-[var(--card-border)] bg-card p-2 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Number</TableHead>
              <TableHead>Bill to</TableHead>
              <TableHead>Issue date</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">
                  {invoice.invoiceNumber || "—"}
                </TableCell>
                <TableCell>{firstLine(invoice.billTo)}</TableCell>
                <TableCell>{formatDate(invoice.issueDate)}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {`${invoice.currency} ${invoice.total.toFixed(2)}`}
                </TableCell>
                <TableCell>
                  <Badge variant={STATUS_VARIANT[invoice.status] ?? "outline"}>
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full"
                    >
                      <Link href={`/dashboard/invoices/${invoice.id}`}>
                        Open
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full text-red-600 hover:bg-red-500/10 hover:text-red-600"
                      onClick={() => setPendingDelete(invoice)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog
        open={pendingDelete !== null}
        onOpenChange={(o) => !o && setPendingDelete(null)}
      >
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Delete invoice</DialogTitle>
            <DialogDescription>
              Delete invoice {pendingDelete?.invoiceNumber}? This cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              className="rounded-full"
              onClick={() => setPendingDelete(null)}
              disabled={deleting}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="rounded-full bg-red-600 text-white hover:bg-red-500"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
