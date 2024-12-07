import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./providers/theme-provider"
import { DotCursor } from "@/components/ui/cursor"
import { BirthdayCelebration } from "@/components/birthday-celebration"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Esraa Elayashy Gallery",
  description: "A showcase of creative works and projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DotCursor />
          <BirthdayCelebration />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
