
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
  title: {
    default: "Abil Rai - Expert Laravel & React Developer",
    template: "%s | Abil Rai",
  },
  description:
    "Senior Full-stack Developer specializing in Laravel, React, and Next.js. Building scalable, high-performance web applications with modern architecture.",
  keywords: [
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "PHP Expert",
    "Web Application Development",
    "Software Engineer Portfolio",
    "Abil Rai",
  ],
  authors: [{ name: "Abil Rai", url: "https://abilrai.com.np" }],
  creator: "Abil Rai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abilrai.com.np",
    title: "Abil Rai - Expert Laravel & React Developer",
    description:
      "Senior Full-stack Developer specializing in Laravel, React, and Next.js. Building scalable, high-performance web applications.",
    siteName: "Abil Rai Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Abil Rai - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abil Rai - Expert Laravel & React Developer",
    description:
      "Senior Full-stack Developer specializing in Laravel, React, and Next.js. Building scalable, high-performance web applications.",
    images: ["/og-image.png"],
    creator: "@AbilRai", // Replace with actual handle if known, or generic
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abil Rai",
              url: "https://abilrai.com.np",
              image: "https://abilrai.com.np/AR-logo.png",
              sameAs: [
                "https://github.com/Abil-official",
                "https://linkedin.com/in/abil-rai",
                "mailto:abilrai.official@gmail.com",
              ],
              jobTitle: "Laravel Developer",
              description:
                "Full-stack developer with expertise in Laravel, React, and building scalable web applications.",
              knowsAbout: [
                "Laravel",
                "React",
                "Next.js",
                "PHP",
                "Web Development",
                "Software Architecture",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
