"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeUp, slideInRight } from "@/lib/animations";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section detection
  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        sectionRefs.current[section] = element;
        observer.observe(element);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Smooth scroll with Lenis
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Smooth scroll with Lenis
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={slideInRight}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease ${
          isScrolled
            ? "bg-[rgba(11,15,20,0.85)] backdrop-blur-md border-b border-[var(--border)]"
            : "bg-[rgba(11,15,20,0.3)] backdrop-blur-md"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="font-[var(--font-syne)] font-extrabold text-xl tracking-tight"
                style={{ fontWeight: 800, letterSpacing: "-0.05em" }}
              >
                <span className="text-white">Nazrul Islam</span>{" "}
                <span className="text-[var(--accent)] group-hover:drop-shadow-[0_0_8px_rgba(245,166,35,0.5)] transition-all duration-300">
                  Azad
                </span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-[var(--font-dm-sans)] text-[0.9rem] font-medium transition-colors duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[var(--accent)]"
                      : "text-white hover:text-[var(--accent)]"
                  }`}
                  style={{
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "var(--accent)"
                        : "rgba(255,255,255,0.8)",
                  }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-[var(--surface)] z-40 md:hidden overflow-y-auto"
            style={{ height: "calc(100vh - 5rem)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className={`font-[var(--font-dm-sans)] text-2xl font-medium transition-colors duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--accent)]"
                  }`}
                  style={{
                    transitionDelay: `${index * 0.08}s`,
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
