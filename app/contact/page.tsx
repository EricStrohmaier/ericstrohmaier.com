import FeedbackForm from "./FeedbackForm"
import { siteConfig } from "@/site-config"

export const metadata = {
  title: "Contact",
  description: "Get in touch with me",
}

export default function ContactPage() {
  return (
    <div>
      <h1 className="mb-1 text-xl font-medium">contact</h1>
      <p className="foreground/50 mb-8">
        send me a message or email me at{" "}
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="text-foreground/70 underline underline-offset-2"
        >
          {siteConfig.supportEmail}
        </a>
      </p>
      <FeedbackForm />
    </div>
  )
}
