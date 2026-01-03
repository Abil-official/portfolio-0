
import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@radix-ui/react-separator";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />

                  <DynamicBreadcrumb />
                </div>
              </header>

              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="" >
                  {children}
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
