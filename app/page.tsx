"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/navigation";
import NewHero from "@/components/new-hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { Meteors } from "@/components/ui/meteors";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {


  return (
    <div className="min-h-screen bg-amber-50 dark:bg-background text-foreground transition-colors duration-200">

      {/* Meteors - fixed position to cover entire viewport */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Meteors className="" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewHero />
        <ScrollReveal variant="fadeUp">
          <Experience />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <Projects />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <Skills />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <Contact />
        </ScrollReveal>
      </main>

      <footer className="mt-24 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Abil Rai. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Abil-official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abil-rai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:abilrai.official@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
