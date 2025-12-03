"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
            Abil Rai
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#experience"
              className="text-sm hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Bootstrap-style collapsible menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3 border-t border-border">
            <a
              href="#experience"
              onClick={closeMenu}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-sm hover:text-primary transition-colors py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
