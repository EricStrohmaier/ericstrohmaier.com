/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0AwQeZp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 * install
 * npx shadcn-ui@latest add selectlabel selectitem selectgroup selectcontent select
 */
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "../ui/button"
import { Label } from "../ui/label"

export default function ContactForm() {

   const submit = (e: any) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">Contact Us</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
              <Button  onClick={(e)=> submit(e)} className="bg-gray-800 text-white" type="submit">
                Send message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

