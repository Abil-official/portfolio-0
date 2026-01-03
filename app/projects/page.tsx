"use client";

import {
    BellIcon,
    Bot,
    Cloud,
    FormInputIcon,
    Globe,
} from "lucide-react";
import React from "react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Meteors } from "@/components/ui/meteors";

const features = [
    {
        Icon: Bot,
        name: "Certifyi.ai",
        description:
            "AI-powered Governance, Risk, and Compliance (GRC) platform designed to simplify compliance, mitigate risks, and build trust. Automates repetitive tasks like evidence collection, reporting, and controls testing.",
        href: "https://certifyi.ai/",
        cta: "Go",
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className:
            "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 h-[100%]",
        technologies: ["Laravel", "React", "Postgres", "AI Integration"],
        year: "2023",
        github: "",
    },
    {
        Icon: Cloud,
        name: "Lapsi Cloud",
        description:
            "Cloud service provider platform where users can subscribe to services. Worked with APIs, implemented secure endpoints, built subscription-based model with roles and permissions management.",
        href: "https://datalaya.com.np/",
        cta: "Go",
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
        technologies: ["Laravel", "PHP", "MySQL", "REST APIs"],
        year: "2021 – 2022",
        github: "",
    },
    {
        Icon: FormInputIcon,
        name: "DarataChalani",
        description:
            "Grievance submission platform built with Laravel and React. Maintained database, created APIs, and completed CRUD operations for grievances with logical flow management.",
        href: "",
        cta: "Go",
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
        technologies: ["Laravel", "React", "MySQL", "REST APIs"],
        year: "2022",
        github: "",
    },
    {
        Icon: Globe,
        name: "Bhugolpark",
        description:
            "Polling and news platform in Nepal. Implemented CRUD operations for multiple functionalities using Service Repo pattern. Created real-time candidate data import and display during 2022 elections.",
        href: "https://bhugolpark.com/",
        cta: "Go",
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
        technologies: ["Laravel", "PHP", "MySQL", "Real-time APIs"],
        year: "2021",
        github: "",
    },
    {
        Icon: BellIcon,
        name: "Cedero",
        description:
            "Business website for cryptocurrency. Designed and developed using Vue.js with modern UI/UX principles.",
        href: "",
        cta: "Learn more",
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
        technologies: ["Vue.js", "JavaScript", "Responsive Design"],
        year: "2022",
        github: "",
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-amber-50 dark:bg-background text-foreground transition-colors duration-200">
            {/* Meteors - fixed position to cover entire viewport */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <Meteors className="" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-12 md:py-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        A selection of significant projects I've built and contributed to,
                        showcasing diverse technical skills.
                    </p>

                    <BentoGrid className="grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:max-h-[90vh] mb-4">
                        {features.map((feature) => (
                            <BentoCard key={feature.name} {...feature} />
                        ))}
                    </BentoGrid>
                </section>
            </main>
        </div>
    );
}
