"use client"

import React, { useState } from "react"
import { toast } from "sonner"

const TOPICS = [
  "New project / custom software",
  "Website & lead generation",
  "Internal tools & automation",
  "Ongoing software partnership",
  "Something else",
]

const inputClasses =
  "w-full rounded-xl border border-border bg-foreground/[0.02] px-4 py-3 text-sm text-foreground/80 placeholder:text-foreground/30 outline-none transition-colors focus:border-foreground/40"

export default function FeedbackForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("")
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
        body: JSON.stringify({ name, email, topic, message }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          toast.success("Message sent", {
            description: "Thanks, I'll get back to you.",
          })
          setName("")
          setEmail("")
          setTopic("")
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
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
          aria-label="Your name"
          className={inputClasses}
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          aria-label="Your email"
          className={inputClasses}
        />
      </div>
      <select
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        aria-label="Select a topic"
        className={`${inputClasses} ${topic ? "" : "text-foreground/30"}`}
      >
        <option value="">Select a topic</option>
        {TOPICS.map((t) => (
          <option key={t} value={t} className="text-foreground">
            {t}
          </option>
        ))}
      </select>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={6}
        placeholder="How can I help you?"
        aria-label="Your message"
        className={`${inputClasses} resize-none`}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
