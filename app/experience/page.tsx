"use client";

import { ScrollRevealList } from "@/components/ui/scroll-reveal";
import { Meteors } from "@/components/ui/meteors";

const experiences = [
    {
        role: "Full-stack Developer",
        company: "DigiNep",
        period: "06/2024 – Present",
        location: "Kathmandu, Nepal",
        description:
            "Developing new projects on new requirements, maintaining existing Laravel projects with seamless integration with existing codebase. Develop database, maintain clean codebase. Provide assistance and communicate with clients to understand requirements.",
        technologies: ["Laravel", "React", "MySQL", "REST APIs"],
    },
    {
        role: "Mid. Laravel Developer",
        company: "Sysqube Technology",
        period: "11/2022 – 05/2024",
        location: "Kathmandu, Nepal",
        description:
            "Developed new projects on new requirements, maintained existing Laravel projects with seamless integration. Developed databases, maintained clean codebase. Provided assistance and communicated with clients.",
        technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Vue.js"],
    },
    {
        role: "Jr. Laravel Developer",
        company: "Bhugolpark",
        period: "09/2021 – 11/2022",
        location: "Kathmandu, Nepal",
        description:
            "Maintained and enhanced BhugolPark and Hamro Neta websites. Ensured stability, security, and optimized performance. Developed new features and integrated them with existing systems.",
        technologies: ["Laravel", "PHP", "React", "MySQL"],
    },
];

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-amber-50 dark:bg-background text-foreground transition-colors duration-200">
            {/* Meteors - fixed position to cover entire viewport */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <Meteors className="" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-12 md:py-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional Experience
                    </h1>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        A journey of continuous growth and learning across diverse technologies
                        and challenging projects.
                    </p>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600 to-yellow-600"></div>

                        <div className="space-y-12">
                            <ScrollRevealList variant="fadeUp" staggerDelay={0.15} className="mb-4">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative ml-8 md:ml-16">
                                        {/* Timeline dot */}
                                        <div className="absolute -left-8 md:-left-16 top-6 w-4 h-4 bg-amber-600 rounded-full border-4 border-background transform -translate-x-1/2"></div>

                                        {/* Card */}
                                        <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-amber-600/50 transition-shadow">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold text-foreground">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-amber-700 dark:text-amber-500 font-medium">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <p className="text-sm text-muted-foreground mb-3">
                                                {exp.location}
                                            </p>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ScrollRevealList>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
