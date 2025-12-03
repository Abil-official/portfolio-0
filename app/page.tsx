import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Couple } from "@/components/couple"
import { Timeline } from "@/components/timeline"
import { Gallery } from "@/components/gallery"
import { Rsvp } from "@/components/rsvp"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Couple />
      <Timeline />
      <Gallery />
      <Rsvp />
      <Footer />
    </main>
  )
}
