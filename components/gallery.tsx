"use client"

export function Gallery() {
  const images = [
    { alt: "Engagement photo 1", query: "engagement%20photo%20romantic" },
    { alt: "Engagement photo 2", query: "couple%20laughing%20outdoor" },
    { alt: "Engagement photo 3", query: "couple%20sunset%20portrait" },
    { alt: "Engagement photo 4", query: "romantic%20couple%20kiss" },
    { alt: "Engagement photo 5", query: "couple%20walking%20together" },
    { alt: "Engagement photo 6", query: "elegant%20couple%20portrait" },
  ]

  return (
    <section id="gallery" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-primary">Moments Together</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <img
                src={`/.jpg?height=400&width=400&query=${image.query}`}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
