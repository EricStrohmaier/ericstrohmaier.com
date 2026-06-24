"use server"

import { db } from "@/lib/db"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import type { Invoice, InvoiceItem } from "@/types/invoice"
import { getProject, getTimeEntries } from "@/app/dashboard/actions"

const requireUserId = async (): Promise<string> => {
  const session = await auth.api.getSession({ headers: await headers() })
  const userId = session?.user?.id
  if (!userId) throw new Error("Unauthorized")
  return userId
}

export type InvoiceSummary = {
  id: string
  invoiceNumber: string
  billTo: string
  issueDate: string | null
  dueDate: string | null
  total: number
  currency: string
  status: string
  updatedAt: string
}

export type SavedInvoice = Invoice & { id: string; status: string }

const num = (v: unknown) => (v == null ? 0 : Number(v))
const str = (v: unknown) => (v == null ? "" : String(v))

const mapItem = (row: Record<string, unknown>): InvoiceItem => ({
  id: str(row.id),
  description: str(row.description),
  unitCost: num(row.unit_cost),
  quantity: num(row.quantity),
  amount: num(row.amount),
})

const mapInvoice = (
  row: Record<string, unknown>,
  items: InvoiceItem[],
): SavedInvoice => ({
  id: str(row.id),
  invoiceNumber: str(row.invoice_number),
  issueDate: str(row.issue_date),
  dueDate: str(row.due_date),
  companyDetails: str(row.company_details),
  billTo: str(row.bill_to),
  items,
  subtotal: num(row.subtotal),
  taxRate: num(row.tax_rate),
  tax: num(row.tax),
  shippingFee: num(row.shipping_fee),
  total: num(row.total),
  notes: str(row.notes),
  bankDetails: str(row.bank_details),
  currency: str(row.currency) || "$",
  status: str(row.status) || "draft",
})

export const listInvoices = async (): Promise<InvoiceSummary[]> => {
  const userId = await requireUserId()
  const res = await db.execute({
    sql: `SELECT id, invoice_number, bill_to, issue_date, due_date, total, currency, status, updated_at
          FROM invoices WHERE user_id = ? ORDER BY updated_at DESC`,
    args: [userId],
  })
  return res.rows.map((r) => {
    const row = r as Record<string, unknown>
    return {
      id: str(row.id),
      invoiceNumber: str(row.invoice_number),
      billTo: str(row.bill_to),
      issueDate: str(row.issue_date),
      dueDate: str(row.due_date),
      total: num(row.total),
      currency: str(row.currency) || "$",
      status: str(row.status) || "draft",
      updatedAt: str(row.updated_at),
    }
  })
}

export const getInvoice = async (id: string): Promise<SavedInvoice | null> => {
  const userId = await requireUserId()
  const head = await db.execute({
    sql: "SELECT * FROM invoices WHERE id = ? AND user_id = ? LIMIT 1",
    args: [id, userId],
  })
  const row = head.rows[0] as Record<string, unknown> | undefined
  if (!row) return null
  const itemsRes = await db.execute({
    sql: "SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY position ASC",
    args: [id],
  })
  const items = itemsRes.rows.map((r) => mapItem(r as Record<string, unknown>))
  return mapInvoice(row, items)
}

// Upsert an invoice (header + items) for the current user. Pass id to update an
// existing one (ownership-checked); pass null/undefined to create a new one.
export const saveInvoice = async (
  id: string | null,
  invoice: Invoice,
  status?: string,
): Promise<{ id?: string; error?: string }> => {
  try {
    const userId = await requireUserId()
    const now = new Date().toISOString()

    let invoiceId = id
    if (invoiceId) {
      const owns = await db.execute({
        sql: "SELECT 1 FROM invoices WHERE id = ? AND user_id = ? LIMIT 1",
        args: [invoiceId, userId],
      })
      if (owns.rows.length === 0) return { error: "Invoice not found" }
    } else {
      invoiceId = crypto.randomUUID()
    }

    const statusValue = status ?? "draft"

    const headerSql = id
      ? {
          sql: `UPDATE invoices SET
                  invoice_number = ?, issue_date = ?, due_date = ?, bill_to = ?,
                  company_details = ?, currency = ?, subtotal = ?, tax_rate = ?,
                  tax = ?, shipping_fee = ?, total = ?, notes = ?, bank_details = ?,
                  status = COALESCE(?, status), updated_at = ?
                WHERE id = ? AND user_id = ?`,
          args: [
            invoice.invoiceNumber,
            invoice.issueDate || null,
            invoice.dueDate || null,
            invoice.billTo || null,
            invoice.companyDetails || null,
            invoice.currency || "$",
            invoice.subtotal,
            invoice.taxRate,
            invoice.tax,
            invoice.shippingFee,
            invoice.total,
            invoice.notes || null,
            invoice.bankDetails || null,
            status ?? null,
            now,
            invoiceId,
            userId,
          ],
        }
      : {
          sql: `INSERT INTO invoices
                  (id, user_id, invoice_number, issue_date, due_date, bill_to,
                   company_details, currency, subtotal, tax_rate, tax, shipping_fee,
                   total, notes, bank_details, status, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          args: [
            invoiceId,
            userId,
            invoice.invoiceNumber,
            invoice.issueDate || null,
            invoice.dueDate || null,
            invoice.billTo || null,
            invoice.companyDetails || null,
            invoice.currency || "$",
            invoice.subtotal,
            invoice.taxRate,
            invoice.tax,
            invoice.shippingFee,
            invoice.total,
            invoice.notes || null,
            invoice.bankDetails || null,
            statusValue,
            now,
            now,
          ],
        }

    // Replace items atomically with the header write.
    const batch: { sql: string; args: (string | number | null)[] }[] = [
      headerSql,
      {
        sql: "DELETE FROM invoice_items WHERE invoice_id = ?",
        args: [invoiceId],
      },
    ]
    invoice.items.forEach((item, position) => {
      batch.push({
        sql: `INSERT INTO invoice_items (id, invoice_id, description, unit_cost, quantity, amount, position)
              VALUES (?, ?, ?, ?, ?, ?, ?)`,
        args: [
          crypto.randomUUID(),
          invoiceId!,
          item.description || null,
          item.unitCost || 0,
          item.quantity || 0,
          item.amount || 0,
          position,
        ],
      })
    })

    await db.batch(batch, "write")
    revalidatePath("/dashboard/invoices")
    return { id: invoiceId }
  } catch (error) {
    console.error("Error saving invoice:", error)
    return { error: "Failed to save invoice" }
  }
}

export const deleteInvoice = async (
  id: string,
): Promise<{ success?: boolean; error?: string }> => {
  try {
    const userId = await requireUserId()
    const owns = await db.execute({
      sql: "SELECT 1 FROM invoices WHERE id = ? AND user_id = ? LIMIT 1",
      args: [id, userId],
    })
    if (owns.rows.length === 0) return { success: true }
    // libSQL doesn't enforce FK ON DELETE CASCADE without PRAGMA
    // foreign_keys=ON, so delete the items explicitly to avoid orphans.
    await db.batch(
      [
        { sql: "DELETE FROM invoice_items WHERE invoice_id = ?", args: [id] },
        {
          sql: "DELETE FROM invoices WHERE id = ? AND user_id = ?",
          args: [id, userId],
        },
      ],
      "write",
    )
    revalidatePath("/dashboard/invoices")
    return { success: true }
  } catch (error) {
    console.error("Error deleting invoice:", error)
    return { error: "Failed to delete invoice" }
  }
}

export const updateInvoiceStatus = async (
  id: string,
  status: string,
): Promise<{ success?: boolean; error?: string }> => {
  try {
    const userId = await requireUserId()
    await db.execute({
      sql: "UPDATE invoices SET status = ?, updated_at = ? WHERE id = ? AND user_id = ?",
      args: [status, new Date().toISOString(), id, userId],
    })
    revalidatePath("/dashboard/invoices")
    return { success: true }
  } catch (error) {
    console.error("Error updating invoice status:", error)
    return { error: "Failed to update status" }
  }
}

const round2 = (n: number) => Math.round(n * 100) / 100

// Build a draft invoice from a project's tracked time in a date range. Each
// distinct task description becomes a line item: quantity = hours, unitCost =
// the project's hourly rate. Returns the new invoice id (open it in the editor).
export const createInvoiceFromTimeEntries = async (input: {
  projectId: string
  startDate?: string
  endDate?: string
  timezone?: string
}): Promise<{ id?: string; error?: string }> => {
  try {
    const userId = await requireUserId()
    const project = await getProject(input.projectId)
    if (!project) return { error: "Project not found" }

    const entries = await getTimeEntries({
      projectId: input.projectId,
      startDate: input.startDate,
      endDate: input.endDate,
      timezone: input.timezone,
    })
    if (entries.length === 0) {
      return { error: "No tracked time found for that project and range" }
    }

    const rate = project.hourly_rate ?? 0

    // Group by task description; entries with no description group per day.
    const groups = new Map<string, { label: string; seconds: number }>()
    for (const e of entries) {
      const desc = (e.description || "").trim()
      const day = (e.start_time || "").slice(0, 10)
      const key = desc || `__day__${day}`
      const label = desc || `Work on ${day}`
      const g = groups.get(key) || { label, seconds: 0 }
      g.seconds += e.duration || 0
      groups.set(key, g)
    }

    const items: InvoiceItem[] = Array.from(groups.values()).map((g) => {
      const hours = round2(g.seconds / 3600)
      return {
        id: crypto.randomUUID(),
        description: g.label,
        unitCost: rate,
        quantity: hours,
        amount: round2(hours * rate),
      }
    })

    const subtotal = round2(items.reduce((s, i) => s + i.amount, 0))
    const today = new Date()
    const issueDate = today.toISOString().slice(0, 10)
    const due = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000)
    const dueDate = due.toISOString().slice(0, 10)

    // Sequential-ish invoice number based on existing count.
    const countRes = await db.execute({
      sql: "SELECT COUNT(*) AS c FROM invoices WHERE user_id = ?",
      args: [userId],
    })
    const seq = num((countRes.rows[0] as Record<string, unknown>).c) + 1
    const invoiceNumber = `INV-${String(seq).padStart(3, "0")}`

    const draft: Invoice = {
      invoiceNumber,
      issueDate,
      dueDate,
      companyDetails: "",
      billTo: project.client || "",
      items,
      subtotal,
      taxRate: 0,
      tax: 0,
      shippingFee: 0,
      total: subtotal,
      currency: "$",
      notes: "Payment is due within 15 days",
      bankDetails: "",
    }

    const saved = await saveInvoice(null, draft, "draft")
    if (saved.error || !saved.id) return { error: saved.error || "Failed" }

    // Tag the source project (best-effort; the invoice already exists, so don't
    // fail the whole action if this side update errors).
    try {
      await db.execute({
        sql: "UPDATE invoices SET source_project_id = ? WHERE id = ? AND user_id = ?",
        args: [input.projectId, saved.id, userId],
      })
    } catch (tagError) {
      console.error("Could not tag source project:", tagError)
    }

    return { id: saved.id }
  } catch (error) {
    console.error("Error creating invoice from time:", error)
    return { error: "Failed to create invoice from time" }
  }
}
