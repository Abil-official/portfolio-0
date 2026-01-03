"use client";

import { ScrollRevealList } from "./ui/scroll-reveal";

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Professional Experience
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        A journey of continuous growth and learning across diverse technologies
        and challenging projects.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600 to-yellow-600 md:transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          <ScrollRevealList variant="fadeUp" staggerDelay={0.15} className="mb-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative
                  ${index % 2 === 0
                    ? "md:mr-1/2 md:pr-12"
                    : "md:ml-1/2 md:pl-12"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-full md:mr-[-8px] lg:left-1/2 top-6 w-4 h-4 bg-amber-600 rounded-full border-4 border-background lg:transform lg:-translate-x-1/2 md:-translate-y-1/2"></div>

                {/* Card */}
                <div className="ml-8 md:ml-0 p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-amber-600/50 transition-shadow">
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
  );
}
