import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hello, feel free to
          reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
            <Mail
              className="text-amber-700 dark:text-amber-500 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="font-bold mb-1">Email</h3>
              <a
                href="mailto:abilrai.official@gmail.com"
                className="text-amber-700 dark:text-amber-500 hover:underline"
              >
                abilrai.official@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
            <Phone
              className="text-amber-700 dark:text-amber-500 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="font-bold mb-1">Phone</h3>
              <a
                href="tel:+9841386576"
                className="text-amber-700 dark:text-amber-500 hover:underline"
              >
                +984 138 6576
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
            <MapPin
              className="text-amber-700 dark:text-amber-500 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="font-bold mb-1">Location</h3>
              <p className="text-muted-foreground">Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card">
            <Linkedin
              className="text-amber-700 dark:text-amber-500 mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="font-bold mb-1">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/abil-rai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 dark:text-amber-500 hover:underline"
              >
                linkedin.com/in/abil-rai
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Abil-official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-700 to-yellow-600 text-white rounded-lg hover:from-amber-800 hover:to-yellow-700 transition-all duration-300 font-medium shadow-lg"
          >
            <Github size={20} /> Visit GitHub
          </a>
          <a
            href="https://linkedin.com/in/abil-rai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-700 dark:border-amber-600 text-amber-900 dark:text-amber-200 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-950 transition-all duration-300 font-medium"
          >
            <Linkedin size={20} /> LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
