"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Settings, Edit2, X } from "lucide-react"
import { ContactsManager } from "@/components/invoice/ContactsManager"
import { PDFDownloadButton } from "@/components/invoice/PDFDownloadButton"
import {
  Contact,
  InvoiceItem,
  Invoice,
  CompanySettings,
} from "@/types/invoice"
import { FaRegFilePdf } from "react-icons/fa"
import {
  secureLocalStorage,
  getFromSecureLocalStorage,
} from "@/lib/invoice/encryption"
import InvoicePDF from "@/components/invoice/InvoicePDF"

// Dynamically import PDFViewer with no SSR
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <div>Loading PDF preview...</div>,
  }
)

const textFieldClass =
  "min-h-24 w-full rounded-md border border-input bg-background p-2 text-sm"

const selectFieldClass =
  "w-full rounded-md border border-input bg-background p-2 text-sm"

const defaultCompanySettings: CompanySettings = {
  name: "",
  address: "",
  email: "",
  bankDetails: "",
  notes: "Payment is due within 15 days",
  language: "en",
  dateFormat: "MM/DD/YYYY",
}

interface InvoiceGeneratorProps {
  // Account mode: when `onPersist` is provided, the editor hydrates from
  // `initialInvoice` and autosaves (debounced) via `onPersist` instead of
  // localStorage. With no props it stays the public localStorage tool.
  initialInvoice?: Invoice | null
  onPersist?: (invoice: Invoice) => void
  headerSlot?: React.ReactNode
}

const InvoiceGenerator = ({
  initialInvoice = null,
  onPersist,
  headerSlot,
}: InvoiceGeneratorProps) => {
  const isAccount = typeof onPersist === "function"
  const hydratedRef = useRef(false)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [activeTab, setActiveTab] = useState("editor")

  // Update showPDF when tab changes
  useEffect(() => {
    if (activeTab === "preview") {
      setShowPDF(true)
    }
  }, [activeTab])
  const [showCompanySettings, setShowCompanySettings] = useState(false)

  // Initialize state with data from localStorage if it exists
  const [companySettings, setCompanySettings] = useState<CompanySettings>(
    defaultCompanySettings
  )

  useEffect(() => {
    const loadCompanySettings = async () => {
      if (typeof window !== "undefined") {
        const settings = await getFromSecureLocalStorage<CompanySettings>(
          "companySettings"
        )
        if (settings) {
          setCompanySettings(settings)
          // Update company details when settings are loaded
          const details = `${settings.name}
${settings.address}
${settings.email || ""}`.trim()
          setCompanyDetails(details)
        }
      }
    }
    loadCompanySettings()
  }, [])

  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: crypto.randomUUID(),
      description: "",
      unitCost: 0,
      quantity: 0,
      amount: 0,
    },
  ])
  const [subtotal, setSubtotal] = useState(0)
  const [taxRate, setTaxRate] = useState(0)
  const [tax, setTax] = useState(0)
  const [shippingFee, setShippingFee] = useState(0)
  const [total, setTotal] = useState(0)
  const [showPDF, setShowPDF] = useState(false)
  const [invoiceNumber, setInvoiceNumber] = useState("001")
  const [companyDetails, setCompanyDetails] = useState("")
  const [billTo, setBillTo] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [selectedContactId, setSelectedContactId] = useState<string>("")

  const [currency, setCurrency] = useState("$")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  // Update company settings and save to localStorage
  const updateCompanySettings = async (
    field: keyof CompanySettings,
    value: string
  ) => {
    const newSettings = { ...companySettings, [field]: value }
    setCompanySettings(newSettings)
    await secureLocalStorage("companySettings", newSettings)

    // Update company details if relevant fields change
    if (["name", "address", "email"].includes(field)) {
      const newDetails = `${newSettings.name}
${newSettings.address}
${newSettings.email || ""}`.trim()
      setCompanyDetails(newDetails)
    }
  }

  // Set initial company details from settings
  useEffect(() => {
    if (companySettings) {
      const details = `${companySettings.name}
${companySettings.address}
${companySettings.email || ""}`.trim()
      setCompanyDetails(details)
    }
  }, [])

  // Hydrate the invoice: from the account record (account mode) or localStorage
  // (public tool). companyDetails/notes/bankDetails come from the company
  // profile effect, same in both modes.
  useEffect(() => {
    const applyInvoice = (invoice: Invoice) => {
      if (invoice.items && invoice.items.length) setItems(invoice.items)
      setSubtotal(invoice.subtotal || 0)
      setTaxRate(invoice.taxRate || 0)
      setTax(invoice.tax || 0)
      setShippingFee(invoice.shippingFee || 0)
      setTotal(invoice.total || 0)
      setInvoiceNumber(invoice.invoiceNumber || "")
      setBillTo(invoice.billTo || "")
      setInvoiceDate(invoice.issueDate || "")
      setDueDate(invoice.dueDate || "")
      setSelectedContactId(invoice.selectedContactId || "")
      if (invoice.currency) setCurrency(invoice.currency)
    }
    const load = async () => {
      if (isAccount) {
        if (initialInvoice) applyInvoice(initialInvoice)
        hydratedRef.current = true
        return
      }
      const invoice = await getFromSecureLocalStorage<Invoice>("currentInvoice")
      if (invoice) applyInvoice(invoice)
      hydratedRef.current = true
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Persist on change: debounced to the account (account mode) or immediately
  // to localStorage (public tool).
  useEffect(() => {
    const invoice: Invoice = {
      invoiceNumber,
      issueDate: invoiceDate,
      dueDate,
      companyDetails,
      billTo,
      items,
      subtotal,
      taxRate,
      tax,
      shippingFee,
      total,
      selectedContactId,
      notes: companySettings.notes,
      bankDetails: companySettings.bankDetails,
      currency,
    }
    if (isAccount) {
      if (!hydratedRef.current) return
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
      saveTimerRef.current = setTimeout(() => onPersist?.(invoice), 800)
      return
    }
    secureLocalStorage("currentInvoice", invoice)
  }, [
    items,
    subtotal,
    taxRate,
    tax,
    shippingFee,
    total,
    invoiceNumber,
    companyDetails,
    billTo,
    invoiceDate,
    dueDate,
    selectedContactId,
    companySettings,
    currency,
  ])

  const addItem = () => {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        description: "",
        unitCost: 0,
        quantity: 0,
        amount: 0,
      },
    ])
  }

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index)
    setItems(newItems)
    calculateTotal(newItems)
  }

  const updateItem = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }

    if (field === "unitCost" || field === "quantity") {
      newItems[index].amount =
        newItems[index].unitCost * newItems[index].quantity
    }

    setItems(newItems)
    calculateTotal(newItems)
  }

  const calculateTotal = (currentItems: InvoiceItem[]) => {
    const newSubtotal = currentItems.reduce(
      (sum, item) => sum + (item.amount || 0),
      0
    )
    setSubtotal(newSubtotal)

    // Calculate tax
    const newTax = (newSubtotal * taxRate) / 100
    setTax(newTax)

    // Calculate total
    const newTotal = newSubtotal + newTax + shippingFee
    setTotal(newTotal)
  }

  const handleContactSelect = (contact: Contact) => {
    setSelectedContactId(contact.id)
    setSelectedContact(contact)
    setCurrency(contact.currency || "$")
    setBillTo(
      `${contact.name}${contact.companyName ? `\n${contact.companyName}` : ""}
${contact.address}
${contact.email || ""}`.trim()
    )
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-4 md:space-y-6">
      <Dialog open={showCompanySettings} onOpenChange={setShowCompanySettings}>
        <DialogContent className="max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Company Settings</DialogTitle>
            <DialogDescription>
              Your company details will be saved in local storage and used in
              all invoices, leave fields blank to not display in the invoice.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Company Name</Label>
                <Input
                  value={companySettings?.name || ""}
                  onChange={(e) => updateCompanySettings("name", e.target.value)}
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={companySettings?.email || ""}
                  onChange={(e) =>
                    updateCompanySettings("email", e.target.value)
                  }
                  placeholder="company@example.com"
                />
              </div>
            </div>
            <div>
              <Label>Address</Label>
              <textarea
                className={textFieldClass}
                value={companySettings?.address || ""}
                onChange={(e) =>
                  updateCompanySettings("address", e.target.value)
                }
                placeholder="Company Address"
              />
            </div>

            <div>
              <Label>Default Payment Terms</Label>
              <textarea
                className={textFieldClass}
                value={companySettings?.notes || ""}
                onChange={(e) => updateCompanySettings("notes", e.target.value)}
                placeholder="Payment Terms"
              />
            </div>
            <div>
              <Label>Bank Details</Label>
              <textarea
                className={textFieldClass}
                value={companySettings?.bankDetails || ""}
                onChange={(e) =>
                  updateCompanySettings("bankDetails", e.target.value)
                }
                placeholder="Bank Account Details"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Language</Label>
                <select
                  className={selectFieldClass}
                  value={companySettings?.language || "en"}
                  onChange={(e) =>
                    updateCompanySettings("language", e.target.value)
                  }
                >
                  <option value="en">English</option>
                  <option value="de">German</option>
                  <option value="fr">French</option>
                  <option value="it">Italian</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
              <div>
                <Label>Date Format</Label>
                <select
                  className={selectFieldClass}
                  value={companySettings?.dateFormat || "MM/DD/YYYY"}
                  onChange={(e) =>
                    updateCompanySettings("dateFormat", e.target.value)
                  }
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  <option value="DD.MM.YYYY">DD.MM.YYYY</option>
                </select>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {headerSlot ?? (
        <div className="mb-6 flex flex-col">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight">
            Invoice Generator
          </h1>
          <p className="text-sm text-foreground/55">
            A simple invoice generator. Your data stays in your browser - no
            servers, no tracking.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-4">
        {/* Left Sidebar - Contacts */}
        <Card className="order-2 lg:order-1 lg:col-span-1">
          <CardContent className="p-4">
            <ContactsManager onSelectContact={handleContactSelect} />
          </CardContent>
        </Card>

        {/* Main Content Area */}
        <div className="order-1 lg:order-2 lg:col-span-3">
          <Tabs
            defaultValue="editor"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <Card className="mb-4 flex flex-col items-center justify-between gap-2 p-1 sm:flex-row sm:gap-4">
              <div className="w-full sm:w-auto">
                <TabsList className="flex w-full gap-2 rounded-lg bg-muted p-1 sm:w-auto md:gap-4">
                  <TabsTrigger
                    value="editor"
                    className="flex items-center gap-2 data-[state=active]:bg-background"
                  >
                    <Edit2 className="h-4 w-4" />
                    Editor
                  </TabsTrigger>
                  <TabsTrigger
                    value="preview"
                    className="flex items-center gap-2 data-[state=active]:bg-background"
                  >
                    <FaRegFilePdf className="h-4 w-4" />
                    Preview
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="flex w-full flex-wrap justify-center gap-2 sm:w-auto sm:justify-end">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setShowCompanySettings(true)}
                >
                  <Settings className="h-4 w-4" />
                  Your Profile
                </Button>

                <PDFDownloadButton
                  document={
                    <InvoicePDF
                      invoiceNumber={invoiceNumber}
                      issueDate={invoiceDate}
                      dueDate={dueDate}
                      companyDetails={companyDetails}
                      billTo={billTo}
                      items={items}
                      subtotal={subtotal}
                      taxRate={taxRate}
                      tax={tax}
                      shippingFee={shippingFee}
                      total={total}
                      notes={companySettings.notes}
                      bankDetails={companySettings.bankDetails}
                      currency={currency}
                      settings={companySettings}
                    />
                  }
                  fileName={`${invoiceNumber || "draft"}.pdf`}
                />
              </div>
            </Card>

            <TabsContent value="preview" className="mt-0">
              {showPDF ? (
                <div
                  className="rounded-lg border border-[var(--card-border)] bg-white p-4"
                  style={{ height: "800px" }}
                >
                  <PDFViewer width="100%" height="100%">
                    <InvoicePDF
                      invoiceNumber={invoiceNumber}
                      issueDate={invoiceDate}
                      dueDate={dueDate}
                      companyDetails={companyDetails}
                      billTo={billTo}
                      items={items}
                      subtotal={subtotal}
                      taxRate={taxRate}
                      tax={tax}
                      shippingFee={shippingFee}
                      total={total}
                      notes={companySettings.notes}
                      bankDetails={companySettings.bankDetails}
                      currency={currency}
                      settings={companySettings}
                    />
                  </PDFViewer>
                </div>
              ) : (
                <div
                  className="flex items-center justify-center"
                  style={{ height: "800px" }}
                >
                  <div className="text-center">
                    <div className="mb-4 text-muted-foreground">
                      Loading PDF preview...
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setShowPDF(true)}
                      disabled
                    >
                      Preparing Preview
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="editor">
              <Card className="mx-auto max-w-[1400px]">
                <CardContent className="space-y-6 p-4 md:p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <Label>Invoice Number</Label>
                        <Input
                          placeholder="INV-001"
                          value={invoiceNumber}
                          onChange={(e) => {
                            let value = e.target.value
                            if (!value) value = "001"
                            if (!value.startsWith("INV-")) value = `INV-${value}`
                            setInvoiceNumber(value)
                          }}
                        />
                      </div>
                      <div>
                        <Label>Bill To</Label>
                        <textarea
                          className={textFieldClass}
                          placeholder="Client billing information"
                          value={billTo}
                          onChange={(e) => setBillTo(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Invoice Date</Label>
                          <div className="relative">
                            <Input
                              type="date"
                              value={invoiceDate}
                              onChange={(e) => {
                                const newDate = e.target.value
                                setInvoiceDate(newDate)
                                // Calculate due date (15 days from invoice date).
                                // Guard the cleared/invalid case so toISOString()
                                // doesn't throw on an Invalid Date.
                                if (!newDate) {
                                  setDueDate("")
                                  return
                                }
                                const due = new Date(newDate)
                                if (isNaN(due.getTime())) return
                                due.setDate(due.getDate() + 15)
                                setDueDate(due.toISOString().split("T")[0])
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Due Date</Label>
                          <div className="relative">
                            <Input
                              type="date"
                              value={dueDate}
                              onChange={(e) => {
                                const newDate = e.target.value
                                setDueDate(newDate)
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Items Table */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-12 gap-2 text-sm font-medium md:gap-4 md:text-base">
                      <div className="col-span-5 md:col-span-6">Description</div>
                      <div className="col-span-3 text-right md:col-span-2">
                        Unit Cost{" "}
                      </div>
                      <div className="col-span-2 text-right">Quantity</div>
                      <div className="col-span-2 text-right">Amount</div>
                    </div>

                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-12 items-center gap-2 text-sm md:gap-4 md:text-base"
                      >
                        <div className="col-span-5 md:col-span-6">
                          <Input
                            placeholder="Item description"
                            value={item.description}
                            maxLength={100}
                            onChange={(e) =>
                              updateItem(
                                index,
                                "description",
                                e.target.value.slice(0, 100)
                              )
                            }
                          />
                        </div>
                        <div className="col-span-3 md:col-span-2">
                          <Input
                            type="text"
                            inputMode="decimal"
                            className="text-right"
                            placeholder={`${currency}0.00`}
                            value={
                              item.unitCost === 0
                                ? ""
                                : item.unitCost.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })
                            }
                            onChange={(e) => {
                              const value =
                                parseFloat(e.target.value.replace(/,/g, "")) || 0
                              if (value > 999999999.99) return
                              updateItem(index, "unitCost", Math.max(0, value))
                            }}
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="text"
                            inputMode="numeric"
                            className="text-right"
                            placeholder="0"
                            value={item.quantity || ""}
                            onChange={(e) => {
                              const value =
                                parseInt(
                                  e.target.value.replace(/[^0-9]/g, "")
                                ) || 0
                              if (value > 999999) return
                              updateItem(index, "quantity", Math.max(0, value))
                            }}
                          />
                        </div>
                        <div className="col-span-2 flex items-center gap-1">
                          <span
                            className="w-full cursor-help truncate text-right text-sm md:text-base"
                            title={`${currency} ${item.amount.toLocaleString(
                              "en-US",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}`}
                          >
                            {currency}{" "}
                            {item.amount.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeItem(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={addItem}
                    >
                      Add Item
                    </Button>
                  </div>

                  {/* Summary Section */}
                  <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
                    <div className="col-span-1 space-y-4"></div>
                    <div className="col-span-1 w-full space-y-4 lg:w-80 lg:justify-self-end">
                      <div className="flex items-center justify-between">
                        <span>Subtotal:</span>
                        <span
                          className="min-w-[120px] cursor-help text-right"
                          title={`${currency} ${subtotal.toLocaleString(
                            "en-US",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}`}
                        >
                          {currency}{" "}
                          {subtotal.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tax Rate:</span>
                        <Input
                          type="text"
                          inputMode="decimal"
                          className="w-32 text-right"
                          placeholder="0%"
                          value={taxRate || ""}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9.]/g, "")
                            const newTaxRate = parseFloat(value) || 0
                            if (newTaxRate > 100) return
                            setTaxRate(newTaxRate)
                            const newTax = (subtotal * newTaxRate) / 100
                            setTax(newTax)
                            setTotal(subtotal + newTax + shippingFee)
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tax Amount:</span>
                        <span
                          className="min-w-[120px] cursor-help text-right"
                          title={`${currency} ${tax.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`}
                        >
                          {currency}{" "}
                          {tax.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Shipping:</span>
                        <Input
                          type="text"
                          inputMode="decimal"
                          className="w-32 text-right"
                          placeholder={`${currency}0.00`}
                          value={
                            shippingFee === 0
                              ? ""
                              : shippingFee.toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })
                          }
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9.]/g, "")
                            const newShippingFee = parseFloat(value) || 0
                            if (newShippingFee > 999999999.99) return
                            setShippingFee(newShippingFee)
                            setTotal(subtotal + tax + newShippingFee)
                          }}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Total:</span>
                        <span
                          className="min-w-[120px] cursor-help text-right font-bold"
                          title={`${currency} ${total.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`}
                        >
                          {currency}{" "}
                          {total.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default InvoiceGenerator
