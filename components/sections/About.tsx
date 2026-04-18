"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { personalInfo, skills } from "@/data/portfolio";

export default function About() {
  const topSkills = skills.technical.slice(0, 6);

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[var(--accent2)] opacity-[0.05] blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px]" />

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
              About Me
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
              Electrical Engineer & Energy Specialist
            </h2>
          </motion.div>

          {/* Main content - Two column layout */}
          <motion.div
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Column - Profile Card */}
            <motion.div
              variants={fadeUp}
              className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-8 space-y-6"
            >
              {/* Profile image placeholder */}
              <div className="flex justify-center">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-extrabold border-4"
                  style={{
                    borderColor: "var(--accent)",
                    background: "rgba(245,166,35,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  {personalInfo.name.split(" ")[1][0]}
                </div>
              </div>

              {/* Name and title */}
              <div className="text-center space-y-2">
                <h3
                  className="font-[var(--font-syne)] font-extrabold"
                  style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)" }}
                >
                  {personalInfo.name}
                </h3>
                <p
                  className="font-[var(--font-dm-sans)] font-semibold text-lg"
                  style={{ color: "var(--accent)" }}
                >
                  {personalInfo.title}
                </p>
                <p className="text-[var(--muted)]" style={{ fontSize: "0.95rem" }}>
                  {personalInfo.company}
                </p>
              </div>

              {/* Info items */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Briefcase size={18} className="text-[var(--accent)]" />
                  <span className="text-[var(--text)]">{personalInfo.role}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <MapPin size={18} className="text-[var(--accent)]" />
                  <span className="text-[var(--text)]">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Mail size={18} className="text-[var(--accent)]" />
                  <span className="text-[var(--text)]">{personalInfo.email}</span>
                </div>
              </div>

              {/* Bio */}
              <div className="pt-4 border-t border-[var(--border)]">
                <p
                  className="font-[var(--font-dm-sans)] leading-relaxed"
                  style={{ color: "var(--text)", fontSize: "0.95rem" }}
                >
                  Results-driven electrical engineer specializing in solar PV systems,
                  inverter & UPS solutions, and sustainable energy initiatives. Proven track
                  record of delivering high-quality projects at ACI Motors Limited with expertise
                  in energy auditing, project management, and technical leadership.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Key Skills */}
            <motion.div
              variants={fadeUp}
              className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-8 space-y-6"
            >
              <div className="space-y-2">
                <h3
                  className="font-[var(--font-syne)] font-extrabold text-2xl"
                  style={{ fontWeight: 800, color: "var(--text)" }}
                >
                  Key Skills
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  Core competencies and technical expertise
                </p>
              </div>

              {/* Progress bars */}
              <div className="space-y-5 pt-4">
                {topSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className="font-[var(--font-dm-sans)] font-medium"
                        style={{ color: "var(--text)", fontSize: "0.9rem" }}
                      >
                        {skill}
                      </span>
                      <span
                        className="font-[var(--font-dm-sans)] font-semibold text-sm"
                        style={{ color: "var(--accent)" }}
                      >
                        {90 - index * 5}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--surface2)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${90 - index * 5}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional info */}
              <div className="pt-6 border-t border-[var(--border)]">
                <p
                  className="font-[var(--font-dm-sans)] text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  With expertise spanning renewable energy systems, power electronics, and
                  project management, I bring a comprehensive skillset to deliver innovative
                  energy solutions that drive efficiency and sustainability.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
