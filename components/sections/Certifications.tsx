"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[var(--accent2)] opacity-[0.04] blur-[120px]" />
      <div className="absolute top-0 left-0 w-[35vw] h-[35vw] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[100px]" />

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
              Credentials
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
              Professional Certifications
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Industry-recognized certifications and professional credentials
            </p>
          </motion.div>

          {/* Certifications grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <FlipCard key={cert.id} certification={cert} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FlipCard({ certification }: { certification: typeof certifications[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="relative h-96 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front face */}
        <div
          className="absolute w-full h-full bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Icon */}
          <div
            className="p-4 rounded-2xl"
            style={{
              background: "rgba(245,166,35,0.1)",
              color: "var(--accent)",
            }}
          >
            <Award size={40} />
          </div>

          {/* Title */}
          <h3
            className="font-[var(--font-syne)] font-bold text-xl"
            style={{ fontWeight: 700, color: "var(--text)" }}
          >
            {certification.title}
          </h3>

          {/* Issuer */}
          <p className="font-[var(--font-dm-sans)] font-semibold" style={{ color: "var(--accent2)" }}>
            {certification.issuer}
          </p>

          {/* Year */}
          <div
            className="px-4 py-2 rounded-lg text-sm font-semibold font-[var(--font-dm-sans)]"
            style={{
              background: "rgba(255,255,255,0.03)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            {certification.year}
          </div>

          {/* Flip hint */}
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-xs font-[var(--font-dm-sans)] uppercase tracking-wider"
            style={{ color: "var(--muted)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click or hover to flip
          </motion.div>
        </div>

        {/* Back face */}
        <div
          className="absolute w-full h-full bg-[rgba(19,24,32,0.8)] backdrop-blur-md border-2 border-[var(--accent)] rounded-2xl p-8 flex flex-col justify-center space-y-5 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Credential ID */}
          <div>
            <p
              className="font-[var(--font-dm-sans)] text-xs uppercase tracking-wider mb-1"
              style={{ color: "var(--muted)" }}
            >
              Credential ID
            </p>
            <p
              className="font-[var(--font-syne)] font-bold text-lg"
              style={{ fontWeight: 700, color: "var(--accent)" }}
            >
              {certification.credential}
            </p>
          </div>

          {/* Issuer */}
          <div>
            <p
              className="font-[var(--font-dm-sans)] text-xs uppercase tracking-wider mb-1"
              style={{ color: "var(--muted)" }}
            >
              Issuing Organization
            </p>
            <p
              className="font-[var(--font-dm-sans)] font-semibold"
              style={{ color: "var(--text)" }}
            >
              {certification.issuer}
            </p>
          </div>

          {/* Year */}
          <div>
            <p
              className="font-[var(--font-dm-sans)] text-xs uppercase tracking-wider mb-1"
              style={{ color: "var(--muted)" }}
            >
              Year Obtained
            </p>
            <p
              className="font-[var(--font-syne)] font-bold text-lg"
              style={{ fontWeight: 700, color: "var(--text)" }}
            >
              {certification.year}
            </p>
          </div>

          {/* Status indicator */}
          <div className="pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="font-[var(--font-dm-sans)] text-sm font-semibold" style={{ color: "var(--accent2)" }}>
                Active & Valid
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
