"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Wrench, Cpu, Users, FileText, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { skills } from "@/data/portfolio";

type FilterType = "all" | "technical" | "soft";

const skillCategories = [
  {
    id: 1,
    name: "Solar Energy Systems",
    icon: Zap,
    filter: "technical",
    skillList: [
      "Solar PV Design",
      "Grid-tie Systems",
      "Off-grid Solutions",
      "Battery Storage",
      "Site Survey",
    ],
  },
  {
    id: 2,
    name: "Power Systems",
    icon: Zap,
    filter: "technical",
    skillList: [
      "Inverter Design",
      "UPS Systems",
      "Load Calculations",
      "Power Factor",
      "Voltage Regulation",
    ],
  },
  {
    id: 3,
    name: "Electrical Design",
    icon: Wrench,
    filter: "technical",
    skillList: [
      "Panel Design",
      "Circuit Design",
      "AutoCAD",
      "MATLAB",
      "PLC Programming",
    ],
  },
  {
    id: 4,
    name: "Leadership",
    icon: Users,
    filter: "soft",
    skillList: [
      "Team Management",
      "Project Planning",
      "Client Communication",
      "Technical Documentation",
    ],
  },
  {
    id: 5,
    name: "Energy Management",
    icon: TrendingUp,
    filter: "technical",
    skillList: [
      "Energy Auditing",
      "Efficiency Analysis",
      "Cost Optimization",
      "Reporting",
    ],
  },
  {
    id: 6,
    name: "Problem Solving",
    icon: Cpu,
    filter: "soft",
    skillList: [
      "Technical Analysis",
      "Root Cause Analysis",
      "Solution Design",
      "Innovation",
    ],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredCategories =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.filter === activeFilter);

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All Skills", value: "all" },
    { label: "Technical", value: "technical" },
    { label: "Soft Skills", value: "soft" },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[150px]" />

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
                background: "rgba(0,201,167,0.1)",
                color: "var(--accent2)",
                border: "1px solid rgba(0,201,167,0.3)",
              }}
            >
              Expertise
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
              Skills & Knowledge
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Comprehensive technical and professional competencies
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

          {/* Skills grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  variants={fadeUp}
                  className="group bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] cursor-pointer"
                >
                  {/* Icon and category name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(245,166,35,0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3
                      className="font-[var(--font-syne)] font-bold text-xl"
                      style={{ fontWeight: 700, color: "var(--text)" }}
                    >
                      {category.name}
                    </h3>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium font-[var(--font-dm-sans)] transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                        }}
                        whileHover={{
                          background: "rgba(245,166,35,0.1)",
                          color: "var(--accent)",
                          borderColor: "rgba(245,166,35,0.3)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional info */}
          <motion.div
            variants={fadeUp}
            className="text-center pt-8"
          >
            <p
              className="font-[var(--font-dm-sans)] text-sm leading-relaxed max-w-3xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Continuously expanding knowledge through hands-on project experience,
              professional development, and staying current with industry best practices
              in renewable energy and electrical engineering.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
