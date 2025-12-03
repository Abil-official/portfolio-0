"use client"

export function Timeline() {
  const events = [
    { time: "3:00 PM", event: "Guests Arrive", location: "Garden Entrance" },
    { time: "4:00 PM", event: "Ceremony", location: "Grand Pavilion" },
    { time: "5:30 PM", event: "Reception Cocktails", location: "Terrace" },
    { time: "7:00 PM", event: "Dinner & Dancing", location: "Grand Ballroom" },
    { time: "11:00 PM", event: "Send Off", location: "Garden Entrance" },
  ]

  return (
    <section id="timeline" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary">Wedding Timeline</h2>

        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block"></div>

          {events.map((event, index) => (
            <div key={index} className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Content */}
              <div className="flex-1 md:text-right md:pr-8">
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-sm uppercase tracking-wider text-accent font-semibold">{event.time}</p>
                  <p className="text-2xl font-serif text-primary mt-2">{event.event}</p>
                  <p className="text-muted-foreground mt-2">{event.location}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background mt-6"></div>
              </div>

              {/* Empty space */}
              <div className="flex-1 md:text-left md:pl-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
