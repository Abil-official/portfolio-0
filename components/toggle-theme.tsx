"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function ToggleTheme() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <SidebarMenuButton className="w-full justify-start gap-2">
                <Sun className="h-4 w-4" />
                <span>Toggle Theme</span>
            </SidebarMenuButton>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <SidebarMenuButton
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-full justify-start gap-2 hover:bg-accent cursor-pointer"
            tooltip={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {isDark ? (
                <Sun className="h-4 w-4 text-amber-500" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </SidebarMenuButton>
    );
}
