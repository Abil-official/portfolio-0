"use client"

import * as React from "react"
import Image from "next/image"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher() {
  const { isMobile } = useSidebar()



  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
            <Image
              src="/ar-logo-neon.png"
              alt="AR Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="text-xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
              Abil Rai
            </span>

          </div>
        </SidebarMenuButton>

      </SidebarMenuItem>
    </SidebarMenu >
  )
}
