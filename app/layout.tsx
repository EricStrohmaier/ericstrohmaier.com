import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/app/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import LayoutPage from "@/components/app/LayoutPage";


export const metadata: Metadata = {
  title: "let's be aware",
  description: "starting something new",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class">
          <LayoutPage>
            <div className="prose-xl mx-auto my-20 w-full max-w-4xl px-4 dark:prose-invert md:px-0">
              <Header />
              <main>{children}</main>
            </div>
          </LayoutPage>
        </ThemeProvider>
      </body>
    </html>
  );
}
