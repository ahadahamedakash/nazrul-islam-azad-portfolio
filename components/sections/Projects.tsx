"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer, scaleIn } from "@/lib/animations";
import { projects } from "@/data/portfolio";

type FilterType = "all" | "Solar Energy" | "Power Systems" | "Energy Management";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All Projects", value: "all" },
    { label: "Solar Energy", value: "Solar Energy" },
    { label: "Power Systems", value: "Power Systems" },
    { label: "Energy Management", value: "Energy Management" },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />
      <div className="absolute top-0 right-0 w-[35vw] h-[35vw] rounded-full bg-[var(--accent2)] opacity-[0.04] blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <motion.div
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(245,166,35,0.1)",
                color: "var(--accent)",
                border: "1px solid rgba(245,166,35,0.3)",
              }}
            >
              Portfolio
            </motion.div>
            <h2
              className="font-[var(--font-syne)] font-extrabold"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                color: "var(--text)",
              }}
            >
              Featured Projects
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Successfully delivered engineering solutions across multiple domains
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {filterButtons.map((button) => (
              <motion.button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className="px-6 py-3 rounded-full font-[var(--font-dm-sans)] font-semibold text-sm transition-all duration-300"
                style={{
                  background:
                    activeFilter === button.value
                      ? "var(--accent)"
                      : "rgba(255,255,255,0.05)",
                  color: activeFilter === button.value ? "var(--bg)" : "var(--text)",
                  border:
                    activeFilter === button.value
                      ? "1px solid var(--accent)"
                      : "1px solid var(--border)",
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {button.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="group bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,166,35,0.2)] hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-[var(--surface2)] flex items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                  <span className="text-4xl font-extrabold text-[var(--muted)] relative z-10">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category badge */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(0,201,167,0.1)",
                      color: "var(--accent2)",
                      border: "1px solid rgba(0,201,167,0.3)",
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-[var(--font-syne)] font-bold text-xl"
                    style={{ fontWeight: 700, color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-[var(--font-dm-sans)] text-sm leading-relaxed"
                    style={{
                      color: "var(--muted)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded text-xs font-medium font-[var(--font-dm-sans)]"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details button */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-[var(--font-dm-sans)] font-semibold text-sm transition-all duration-300"
                    style={{
                      background: "rgba(245,166,35,0.1)",
                      color: "var(--accent)",
                      border: "1px solid rgba(245,166,35,0.3)",
                    }}
                    whileHover={{
                      background: "var(--accent)",
                      color: "var(--bg)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(11,15,20,0.9)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="p-4 md:p-6 border-b border-[var(--border)] flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1 min-w-0">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(0,201,167,0.1)",
                      color: "var(--accent2)",
                      border: "1px solid rgba(0,201,167,0.3)",
                    }}
                  >
                    {selectedProject.category}
                  </div>
                  <h3
                    className="font-[var(--font-syne)] font-bold text-xl md:text-2xl break-words"
                    style={{ fontWeight: 700, color: "var(--text)" }}
                  >
                    {selectedProject.title}
                  </h3>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg transition-colors flex-shrink-0"
                  style={{ color: "var(--muted)" }}
                  whileHover={{ background: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Modal content */}
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* Image placeholder */}
                <div className="aspect-video bg-[var(--surface2)] rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] opacity-20"
                  />
                  <span className="text-4xl md:text-6xl font-extrabold text-[var(--muted)] relative z-10">
                    {selectedProject.title.charAt(0)}
                  </span>
                </div>

                {/* Description */}
                <div>
                  <h4
                    className="font-[var(--font-syne)] font-bold text-base md:text-lg mb-2"
                    style={{ fontWeight: 700, color: "var(--text)" }}
                  >
                    Project Overview
                  </h4>
                  <p
                    className="font-[var(--font-dm-sans)] text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4
                    className="font-[var(--font-syne)] font-bold text-base md:text-lg mb-3"
                    style={{ fontWeight: 700, color: "var(--text)" }}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium font-[var(--font-dm-sans)]"
                        style={{
                          background: "rgba(245,166,35,0.1)",
                          color: "var(--accent)",
                          border: "1px solid rgba(245,166,35,0.3)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-center gap-2 pt-4 border-t border-[var(--border)]">
                  <span className="text-xs md:text-sm font-[var(--font-dm-sans)]" style={{ color: "var(--muted)" }}>
                    Completed in:
                  </span>
                  <span
                    className="font-[var(--font-syne)] font-bold text-base md:text-lg"
                    style={{ fontWeight: 700, color: "var(--accent)" }}
                  >
                    {selectedProject.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
