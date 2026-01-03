import {
  Bell,
  BellIcon,
  Bot,
  Cloud,
  ExternalLink,
  FormInput,
  FormInputIcon,
  Github,
  Globe,
} from "lucide-react";
import React from "react";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { ScrollReveal } from "./ui/scroll-reveal";

const features = [
  // technologies: ["Laravel", "React", "MySQL", "AI Integration"],
  // year: "2023",
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
export default function Projects() {
  return (
    <React.Fragment>
      <section id="projects" className="py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of significant projects I've built and contributed to,
          showcasing diverse technical skills.
        </p>

        <ScrollReveal variant="fadeUp">
          <BentoGrid className="grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:max-h-[90vh] mb-4">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </ScrollReveal>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-amber-600/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                  {project.name}
                </h3>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-amber-600/10 text-amber-700 dark:text-amber-500 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </React.Fragment>
  );
}
