const currentYear = new Date().getFullYear();

const CONTACT_EMAIL = "naveenrajput7686@gmail.com";
const WHATSAPP_URL = "https://wa.me/919518657342";

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b14] px-6 pb-8 pt-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-3">
          <div>
            <a href="/#home" className="text-2xl font-bold tracking-tight">
              Naveen<span className="text-sky-300">.</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Java Full Stack Developer passionate about building modern,
              scalable and user-friendly web applications. Let&apos;s turn
              ideas into digital experiences.
            </p>
            <p className="mt-6 text-sm text-sky-300">
              Open to Opportunities
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:translate-x-1 hover:text-sky-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact & Social
            </h3>
            <div className="mt-6 space-y-4 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block break-all text-gray-300 transition hover:text-sky-300"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition hover:text-emerald-400"
              >
                WhatsApp: +91 9518657342 ↗
              </a>
            </div>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Interested in working together? Let&apos;s connect and discuss
              your next project.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/naveen-tanwar-422325251/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-sky-300 hover:text-sky-300"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/_naveen_tanwar__/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-sky-300 hover:text-sky-300"
              >
                Instagram ↗
              </a>
              <a
                href="https://stackoverflow.com/users/33113943/naveen"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-sky-300 hover:text-sky-300"
              >
                Stack Overflow ↗
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear} Naveen Rajput. All rights reserved.
          </p>
          <a
            href="/#home"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-sky-300"
          >
            Back to Top
            <span className="transition-transform group-hover:-translate-y-1">↑</span>
          </a>
          <p className="text-xs text-gray-600">Designed & Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
