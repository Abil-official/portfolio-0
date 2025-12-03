import { ArrowRight } from "lucide-react";
import { Meteors } from "./ui/meteors";
import React from "react";

export default function Hero() {
  return (
    <React.Fragment>
      <section className="py-20 md:py-32 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
            <br />
            Specializing in Laravel & React
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            I'm a dedicated and seasoned Laravel developer with over 4 years of
            proven expertise, specializing in meeting organizational staffing
            needs and surpassing project requirements. A results-driven
            professional with exceptional problem-solving and communication
            skills.
          </p>

          <div className="text-muted-foreground mb-8">
            <p className="flex items-center gap-2 mb-2">
              <span className="text-primary">📍</span> Kathmandu, Nepal
            </p>
            <p className="flex items-center gap-2">
              <span className="text-primary">📧</span>{" "}
              abilrai.official@gmail.com
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="https://linkedin.com/in/abil-rai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
