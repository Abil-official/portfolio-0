"use client"

import type React from "react"

import { useState } from "react"

export function Rsvp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "1",
    dietary: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your RSVP! We look forward to celebrating with you.")
    setFormData({ name: "", email: "", attending: "yes", guests: "1", dietary: "" })
  }

  return (
    <section id="rsvp" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-primary">Celebrate With Us</h2>
        <p className="text-center text-muted-foreground mb-12">
          Please let us know of your intention to attend by April 10, 2025
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm uppercase tracking-wider text-primary font-semibold mb-3">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              placeholder="Sarah Johnson"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider text-primary font-semibold mb-3">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              placeholder="sarah@example.com"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider text-primary font-semibold mb-3">
              Will You Attend?
            </label>
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground cursor-pointer"
            >
              <option value="yes">Yes, I'll be there with joy</option>
              <option value="no">Sorry, I cannot attend</option>
              <option value="maybe">Maybe, I'll let you know</option>
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider text-primary font-semibold mb-3">
              Number of Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground cursor-pointer"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider text-primary font-semibold mb-3">
              Dietary Restrictions
            </label>
            <textarea
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              placeholder="Please let us know any dietary restrictions..."
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-105 mt-8"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  )
}
