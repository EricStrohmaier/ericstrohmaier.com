"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"

// Text input for decimal numbers that accepts "." or "," as the decimal
// separator. It keeps what the user typed (e.g. "2," or "2.0") while editing
// and only reformats on blur, so a trailing separator isn't swallowed.
const parse = (raw: string): number => {
  const cleaned = raw.replace(/\s/g, "").replace(",", ".")
  const value = parseFloat(cleaned)
  return Number.isFinite(value) ? value : 0
}

type DecimalInputProps = {
  value: number
  onValueChange: (value: number) => void
  format?: (value: number) => string
  max?: number
  className?: string
  placeholder?: string
}

export function DecimalInput({
  value,
  onValueChange,
  format = (v) => String(v),
  max = 999999999.99,
  className,
  placeholder,
}: DecimalInputProps) {
  const [text, setText] = useState(value ? format(value) : "")
  const [focused, setFocused] = useState(false)

  // Follow outside changes (e.g. loading a saved invoice) while not editing.
  useEffect(() => {
    if (!focused) setText(value ? format(value) : "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, focused])

  return (
    <Input
      type="text"
      inputMode="decimal"
      className={className}
      placeholder={placeholder}
      value={text}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={(e) => {
        // Digits plus at most one "." or ",".
        const next = e.target.value.replace(/[^0-9.,]/g, "")
        if ((next.match(/[.,]/g) || []).length > 1) return
        const parsed = parse(next)
        if (parsed > max) return
        setText(next)
        onValueChange(Math.max(0, parsed))
      }}
    />
  )
}
