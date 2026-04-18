"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[var(--accent2)] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
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
              Career Path
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
              Work Experience
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Professional journey in electrical engineering and energy systems
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--border)] rounded-full" />

            {/* Experience cards */}
            <div className="space-y-12">
              {experience.map((job, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={job.id}
                    variants={isEven ? slideInLeft : slideInRight}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center z-10"
                         style={{ background: "var(--accent)", boxShadow: "0 0 20px rgba(245,166,35,0.5)" }}>
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--bg)]" />
                    </div>

                    {/* Card - desktop */}
                    <div className="hidden lg:block">
                      {isEven ? (
                        /* Left card */
                        <div className="pr-12">
                          <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(245,166,35,0.15)] transition-shadow duration-300">
                            <ExperienceCard job={job} />
                          </div>
                        </div>
                      ) : (
                        /* Right card */
                        <div className="pl-12 ml-auto" style={{ maxWidth: "50%" }}>
                          <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(245,166,35,0.15)] transition-shadow duration-300">
                            <ExperienceCard job={job} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card - mobile */}
                    <div className="lg:hidden">
                      <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(245,166,35,0.15)] transition-shadow duration-300">
                        <ExperienceCard job={job} />
                      </div>
                    </div>

                    {/* Connecting line for mobile */}
                    <div className="lg:hidden absolute left-5 top-20 bottom-0 w-0.5 bg-[var(--border)]" style={{ transform: "translateY(2rem)" }} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ job }: { job: typeof experience[0] }) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <h3
            className="font-[var(--font-syne)] font-bold text-2xl"
            style={{ fontWeight: 700, color: "var(--text)" }}
          >
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-1.5" style={{ color: "var(--accent)" }}>
              <Building2 size={16} />
              <span className="font-semibold">{job.company}</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <div
          className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap"
          style={{
            background: "rgba(0,201,167,0.1)",
            color: "var(--accent2)",
            border: "1px solid rgba(0,201,167,0.3)",
          }}
        >
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {job.period}
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        className="font-[var(--font-dm-sans)] leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        {job.description}
      </p>

      {/* Achievements */}
      {job.achievements && job.achievements.length > 0 && (
        <div className="space-y-2 pt-2">
          <p
            className="font-[var(--font-syne)] font-bold text-sm uppercase tracking-wider"
            style={{ fontWeight: 700, color: "var(--text)" }}
          >
            Key Achievements
          </p>
          <ul className="space-y-2">
            {job.achievements.map((achievement, index) => (
              <li
                key={index}
                className="font-[var(--font-dm-sans)] text-sm flex items-start gap-2"
                style={{ color: "var(--muted)" }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
