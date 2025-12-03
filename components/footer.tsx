export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-3">Sarah & Michael</h3>
            <p className="text-primary-foreground/80">Celebrating love and the beginning of forever.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 uppercase text-sm tracking-wider">Location</h4>
            <p className="text-primary-foreground/80">
              The Grand Pavilion
              <br />
              Sonoma Valley, CA
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 uppercase text-sm tracking-wider">Date</h4>
            <p className="text-primary-foreground/80">
              May 10, 2025
              <br />
              3:00 PM - 11:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>With love and gratitude • © 2025 Sarah & Michael</p>
        </div>
      </div>
    </footer>
  )
}
