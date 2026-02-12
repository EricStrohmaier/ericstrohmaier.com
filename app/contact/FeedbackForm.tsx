"use client"

import React, { useState } from "react"
import { toast } from "sonner"

export default function FeedbackForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address", {
        description: "Please enter a valid email address.",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          toast.success("Message sent", {
            description: "Thanks, I'll get back to you.",
          })
          setEmail("")
          setMessage("")
        } else {
          throw new Error(data.error || "Failed to send")
        }
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast.error("Failed to send", {
        description:
          error instanceof Error ? error.message : "Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-foreground/50">
          email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 text-foreground/80 placeholder:text-foreground/25 outline-none focus:border-foreground/40"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-foreground/50">
          message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="what's on your mind?"
          className="w-full resize-none rounded-xl border border-border bg-transparent px-4 py-2.5 text-foreground/80 placeholder:text-foreground/25 outline-none focus:border-foreground/40"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl border border-border px-5 py-2 text-sm text-foreground/60 transition-colors hover:border-foreground/40 hover:text-foreground/80 disabled:opacity-40"
      >
        {isSubmitting ? "sending..." : "send message"}
      </button>
    </form>
  )
}
