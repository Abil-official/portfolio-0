"use client"

export function Couple() {
  return (
    <section id="story" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary">Our Story</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <img
              src="/happy-couple-wedding-photo.jpg"
              alt="Sarah and Michael"
              className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 object-cover"
            />
          </div>

          {/* Right: Story */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Sarah and Michael met on a rainy autumn day at a coffee shop in Portland. What started as a simple
              conversation about their favorite novels turned into countless late-night talks, shared dreams, and an
              undeniable connection.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Three years later, on the same bench where they first kissed, Michael got down on one knee with his
              grandmother's ring. Through laughter and tears, Sarah said yes to forever.
            </p>
            <div className="pt-6 space-y-3">
              <p className="text-primary font-serif text-2xl">✨ Two souls, one journey</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                We can't wait to celebrate with you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
