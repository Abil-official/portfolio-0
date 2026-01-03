"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Sparkles, MessageSquare } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { ScrollRevealList, ScrollReveal } from "@/components/ui/scroll-reveal";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "abilrai.official@gmail.com",
        href: "mailto:abilrai.official@gmail.com",
        isLink: true,
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+984 138 6576",
        href: "tel:+9841386576",
        isLink: true,
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Kathmandu, Nepal",
        href: null,
        isLink: false,
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        value: "linkedin.com/in/abil-rai",
        href: "https://linkedin.com/in/abil-rai",
        isLink: true,
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-amber-50 dark:bg-background text-foreground transition-colors duration-200">
            {/* Meteors - fixed position to cover entire viewport */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <Meteors className="" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-12 md:py-16">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 text-sm font-medium mb-4">
                            <Sparkles size={16} />
                            Let&apos;s Connect
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                            Get In Touch
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            I&apos;m always excited to discuss new projects, creative ideas,
                            or opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <MessageSquare className="text-amber-600" size={24} />
                                Contact Information
                            </h2>

                            <ScrollRevealList variant="fadeUp" staggerDelay={0.1} className="space-y-4 mb-8">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:shadow-lg hover:border-amber-500/50 hover:bg-card transition-all duration-300"
                                    >
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-950 dark:to-yellow-950 group-hover:from-amber-200 group-hover:to-yellow-200 dark:group-hover:from-amber-900 dark:group-hover:to-yellow-900 transition-colors duration-300">
                                            <info.icon
                                                className="text-amber-700 dark:text-amber-400"
                                                size={22}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                                            {info.isLink && info.href ? (
                                                <a
                                                    href={info.href}
                                                    target={info.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="text-amber-700 dark:text-amber-400 hover:underline transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-muted-foreground">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </ScrollRevealList>

                            {/* Social Links */}
                            <ScrollReveal variant="fadeUp" delay={0.4}>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://github.com/Abil-official"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-xl hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 font-medium shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
                                    >
                                        <Github size={20} />
                                        Visit GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/abil-rai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-600 dark:border-amber-500 text-amber-700 dark:text-amber-400 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-all duration-300 font-medium hover:-translate-y-0.5"
                                    >
                                        <Linkedin size={20} />
                                        LinkedIn Profile
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <ScrollReveal variant="fadeLeft" delay={0.2}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl"></div>
                                <div className="relative p-8 rounded-2xl border border-border bg-card/90 backdrop-blur-sm">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Send className="text-amber-600" size={24} />
                                        Send a Message
                                    </h2>

                                    {isSubmitted && (
                                        <div className="mb-6 p-4 rounded-xl bg-green-100 dark:bg-green-950/50 border border-green-300 dark:border-green-800 text-green-800 dark:text-green-300">
                                            <p className="font-medium">Thank you for your message! 🎉</p>
                                            <p className="text-sm mt-1">I&apos;ll get back to you as soon as possible.</p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-200"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-200"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-200"
                                                placeholder="Project Inquiry"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-200 resize-none"
                                                placeholder="Tell me about your project or inquiry..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-xl hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-amber-500/25 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={20} />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
        </div>
    );
}
