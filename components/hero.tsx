"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
        {/* Decorative line */}
        <div className="inline-flex items-center justify-center">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="px-4 text-sm uppercase tracking-widest text-muted-foreground">Two hearts, one love</div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-muted-foreground italic">Together with their families</p>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary animate-float">Sarah & Michael</h1>
          <p className="text-lg md:text-xl text-muted-foreground italic">request the honor of your presence</p>
        </div>

        {/* Date and Location */}
        <div className="space-y-3 pt-8">
          <p className="text-lg text-foreground font-medium">May 10, 2025</p>
          <p className="text-foreground">The Grand Pavilion, Sonoma Valley</p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <a
            href="#rsvp"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            RSVP Now
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
