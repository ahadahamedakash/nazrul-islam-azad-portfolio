"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link, Code, ChevronUp } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { contact } from "@/data/portfolio";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative py-16 md:py-20"
      style={{ background: "var(--surface)" }}
    >
      {/* Top gradient strip */}

      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Left column - Logo and copyright */}
          <div className="space-y-4">
            <motion.a
              href="#"
              className="group relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="font-[var(--font-syne)] font-extrabold text-2xl tracking-tight"
                style={{ fontWeight: 800, letterSpacing: "-0.05em" }}
              >
                <span className="text-white">Md.</span>{" "}
                <span className="text-[var(--accent)] group-hover:drop-shadow-[0_0_8px_rgba(245,166,35,0.5)] transition-all duration-300">
                  Azad
                </span>
              </span>
            </motion.a>
            <p
              className="font-[var(--font-dm-sans)] leading-relaxed max-w-sm"
              style={{ color: "var(--muted)" }}
            >
              Electrical & Electronics Engineer specializing in solar energy
              systems, power solutions, and sustainable energy initiatives.
            </p>
            <p
              className="font-[var(--font-dm-sans)] text-sm"
              style={{ color: "var(--muted)" }}
            >
              © {new Date().getFullYear()} Md. Azad. All rights reserved.
            </p>
          </div>

          {/* Center column - Quick links */}
          <div>
            <h4
              className="font-[var(--font-syne)] font-bold text-lg mb-4"
              style={{ fontWeight: 700, color: "var(--text)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="font-[var(--font-dm-sans)] transition-all duration-300 inline-block relative group"
                    style={{ color: "var(--muted)" }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="group-hover:text-[var(--accent)] transition-colors">
                      {link.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Contact info */}
          <div className="space-y-4">
            <h4
              className="font-[var(--font-syne)] font-bold text-lg mb-4"
              style={{ fontWeight: 700, color: "var(--text)" }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 font-[var(--font-dm-sans)] transition-all duration-300 group"
                style={{ color: "var(--muted)" }}
              >
                <Mail
                  size={18}
                  className="text-[var(--accent)] group-hover:scale-110 transition-transform"
                />
                <span className="group-hover:text-[var(--text)] transition-colors">
                  {contact.email}
                </span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 font-[var(--font-dm-sans)] transition-all duration-300 group"
                style={{ color: "var(--muted)" }}
              >
                <Phone
                  size={18}
                  className="text-[var(--accent)] group-hover:scale-110 transition-transform"
                />
                <span className="group-hover:text-[var(--text)] transition-colors">
                  {contact.phone}
                </span>
              </a>
              <div
                className="flex items-center gap-3 font-[var(--font-dm-sans)]"
                style={{ color: "var(--muted)" }}
              >
                <MapPin size={18} className="text-[var(--accent)]" />
                <span>{contact.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              {contact.linkedin && (
                <motion.a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(245,166,35,0.1)",
                    color: "var(--accent)",
                    borderColor: "rgba(245,166,35,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link size={20} />
                </motion.a>
              )}
              {contact.github && (
                <motion.a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(245,166,35,0.1)",
                    color: "var(--accent)",
                    borderColor: "rgba(245,166,35,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={20} />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Credits */}
            <p
              className="font-[var(--font-dm-sans)] text-sm text-center md:text-left"
              style={{ color: "var(--muted)" }}
            >
              Built with Next.js, React Three Fiber, and Framer Motion
            </p>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-[var(--font-dm-sans)] font-semibold text-sm transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
              whileHover={{
                y: -2,
                background: "rgba(245,166,35,0.1)",
                color: "var(--accent)",
                borderColor: "rgba(245,166,35,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp size={16} />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
