import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abil Rai - Laravel Developer",
  description:
    "Full-stack developer with 4+ years of expertise in Laravel, React, and building scalable web applications.",
  icons: {
    icon: [
      {
        url: "AR-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "AR-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "AR-logo.png",
        type: "image/png",
      },
    ],
    apple: "AR-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
