import { NextResponse } from "next/server"

import { sendSlackNotification } from "@/lib/slackHook"
import { siteConfig } from "@/site-config"

export async function POST(request: Request) {
  try {
    const { name, email, topic, message } = await request.json()

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: "Email and message are required" },
        { status: 400 },
      )
    }

    const from = name ? `${name} <${email}>` : email
    await sendSlackNotification(
      `Platform: ${siteConfig.domain}\nFrom: ${from}${
        topic ? `\nTopic: ${topic}` : ""
      }\n\nMessage: ${message}`,
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending Slack notification:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send feedback" },
      { status: 500 },
    )
  }
}
