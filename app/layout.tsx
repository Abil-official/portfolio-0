import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Forever Starts Here | Wedding",
  description: "Celebrating love and the beginning of forever",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_playfair.variable} ${_montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
