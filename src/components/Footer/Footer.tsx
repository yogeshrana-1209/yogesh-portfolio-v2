import { Codepen, Facebook, Github, Instagram, Linkedin, X } from 'lucide-react'

const socialIcons = [
  { href: '#', icon: <Github size={16} /> },
  { href: '#', icon: <Linkedin size={16} /> },
  { href: '#', icon: <Codepen size={16} /> },
  { href: '#', icon: <X size={16} /> },
  { href: '#', icon: <Instagram size={16} /> },
  { href: '#', icon: <Facebook size={16} /> },
]

const footerSections = [
  {
    title: 'John Doe',
    href: '#home',
    content: 'Crafting high-performance web applications.',
  },
  {
    title: 'About',
    href: '/about',
    content: 'Get to know my journey and expertise.',
  },
  {
    title: 'Projects',
    href: '#projects',
    content: 'Explore my most impactful work.',
  },
  {
    title: 'Skills',
    href: '#skills',
    content: 'Technologies and tools I excel at.',
  },
  {
    title: 'Services',
    href: '#services',
    content: 'What I can offer to bring value to your project.',
  },
]

const Footer = () => {
  return (
    <footer className="bg-secondary px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Top Sections */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-5">
          {footerSections.map((section, index) => (
            <section
              key={index}
              className="rounded-2xl border border-neutral bg-secondary p-5 transition-colors duration-300 hover:border-accent"
            >
              <a href={section.href} className="block">
                <h2 className="text-neutral text-lg font-semibold">
                  {section.title}
                </h2>
                <p className="text-tertiary-content mt-2 text-sm">
                  {section.content}
                </p>
              </a>
            </section>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="border-t border-neutral pt-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* Copyright */}
            <p className="text-tertiary-content text-sm text-center md:text-left">
              © 2026 Yogesh Rana | Built with passion using modern web technologies.
            </p>

            {/* Social Icons */}
            <ul className="flex flex-wrap justify-center gap-4">
              {socialIcons.map((item, index) => (
                <li
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral text-neutral transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  <a
                    href={item.href}
                    className="flex h-full w-full items-center justify-center"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer