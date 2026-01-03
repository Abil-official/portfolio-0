"use client";

import { ScrollRevealList } from "@/components/ui/scroll-reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { HyperText } from "@/components/ui/hyper-text";
import { Meteors } from "@/components/ui/meteors";

const skillCategories = [
    {
        category: "Backend Development",
        skills: [
            "Laravel",
            "PHP",
            "MySQL",
            "REST APIs",
            "Database Design",
            "Query Optimization",
            "Middleware",
            "Task Scheduling",
        ],
    },
    {
        category: "Frontend Development",
        skills: [
            "React",
            "Vue.js",
            "JavaScript",
            "Responsive Design",
            "UI/UX Implementation",
            "State Management",
            "HTML/CSS",
        ],
    },
    {
        category: "Tools & Technologies",
        skills: [
            "Git/GitHub",
            "GitLab",
            "Docker",
            "MySQL",
            "Agile Methodology",
            "Slack",
            "Teams",
        ],
    },
    {
        category: "Key Skills",
        skills: [
            "Communication",
            "Problem Solving",
            "Database Normalization",
            "Version Control",
            "Project Management",
            "Code Refactoring",
        ],
    },
];

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-amber-50 dark:bg-background text-foreground transition-colors duration-200">
            {/* Meteors - fixed position to cover entire viewport */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <Meteors className="" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-12 md:py-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills & Expertise
                    </h1>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        A comprehensive range of technical and professional skills developed
                        through 4+ years of experience.
                    </p>

                    <ScrollRevealList variant="fadeUp" staggerDelay={0.15} className="mb-4">
                        <Card className="relative w-[100%] overflow-hidden">
                            <CardContent className="pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-3xl font-bold text-primary mb-2 justify-start text-center">
                                        <HyperText>+4</HyperText>
                                        <p className="text-muted-foreground text-base font-normal">Years of Experience</p>
                                    </div>
                                    <div className="text-3xl font-bold text-primary mb-2 text-center">
                                        <HyperText>+10</HyperText>
                                        <p className="text-muted-foreground text-base font-normal">Major Projects</p>
                                    </div>
                                    <div className="text-3xl font-bold text-primary mb-2 text-center">
                                        <HyperText>100%</HyperText>
                                        <p className="text-muted-foreground text-base font-normal">Client Satisfaction</p>
                                    </div>
                                </div>
                            </CardContent>

                            <BorderBeam
                                duration={6}
                                size={400}
                                className="from-transparent via-red-500 to-transparent"
                            />
                            <BorderBeam
                                duration={6}
                                delay={3}
                                size={400}
                                borderWidth={2}
                                className="from-transparent via-blue-500 to-transparent"
                            />
                        </Card>

                        {skillCategories.map((category, index) => (
                            <div
                                key={`skill-${index}`}
                                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-amber-600/50 transition-shadow"
                            >
                                <h3 className="text-lg font-bold mb-4 text-amber-700 dark:text-amber-500">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={`skill-${i}`}
                                            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-600/20 text-foreground hover:border-amber-600/50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </ScrollRevealList>
                </section>
            </main>
        </div>
    );
}
