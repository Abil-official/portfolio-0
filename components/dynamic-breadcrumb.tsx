"use client";

import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

// Map of route segments to display names
const routeLabels: Record<string, string> = {
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    dashboard: "Dashboard",
};

export function DynamicBreadcrumb() {
    const pathname = usePathname();

    // Split the pathname into segments and filter out empty strings
    const segments = pathname.split("/").filter((segment) => segment !== "");

    // Generate breadcrumb items
    const breadcrumbItems = segments.map((segment, index) => {
        // Build the href for this segment
        const href = "/" + segments.slice(0, index + 1).join("/");
        // Get the display label (capitalize if not in routeLabels)
        const label =
            routeLabels[segment] ||
            segment.charAt(0).toUpperCase() + segment.slice(1);

        return {
            label,
            href,
            isLast: index === segments.length - 1,
        };
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* Home link - always shown */}
                {/* <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem> */}

                {/* Dynamic segments */}
                {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                        {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                        <BreadcrumbItem>
                            {item.isLast ? (
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}

                {/* If we're on the home page, show "Overview" as current page */}
                {segments.length === 0 && (
                    <>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Overview</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
