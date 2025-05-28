import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import FeedbackForm from "./FeedbackForm"
import { siteConfig } from "@/site-config"
import Header from "@/components/app/Header"

export const metadata = {
  title: "Contact Me",
  description: "Get in touch with me",
}

interface PageProps {
  searchParams: {
    message?: string
    [key: string]: string | string[] | undefined
  }
}
export default function ContactPage({ searchParams }: PageProps) {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-[700px] max-w-2xl px-4 py-8">
        <Card className="rounded-[40px] border-border bg-[var(--primary)] text-[var(--text)]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Me</CardTitle>
            <CardDescription className="text-[var(--text)]">
              You can reach me directly at{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-[var(--text)] hover:underline"
              >
                {siteConfig.supportEmail}
              </a>{" "}
              or use the form below.
            </CardDescription>
          </CardHeader>
          <FeedbackForm message={searchParams.message} />
        </Card>
      </div>
    </>
  )
}
