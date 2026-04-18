"use client";

import { motion } from "framer-motion";
import { ChevronDown, Circle, ArrowRight, Download } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import HeroScene from "@/components/3d/HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects - Behind Canvas */}
      <div className="absolute inset-0 bg-[var(--bg)] overflow-hidden">
        {/* Amber radial gradient - top-right, stronger */}
        <div className="absolute top-0 right-0 w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full bg-[var(--accent)] opacity-[0.18] blur-[120px]" />

        {/* Teal radial gradient - bottom-left, stronger */}
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] rounded-full bg-[var(--accent2)] opacity-[0.12] blur-[100px]" />

        {/* Background dead zones fix - edge gradients */}
        {/* Left edge teal gradient */}
        <div
          className="absolute top-0 left-0 w-[40vw] max-w-[400px] h-full rounded-full bg-[var(--accent2)] opacity-[0.1]"
          style={{ filter: "blur(150px)", transform: "translateX(-40%)" }}
        />

        {/* Right edge amber gradient */}
        <div
          className="absolute top-0 right-0 w-[35vw] max-w-[350px] h-full rounded-full bg-[var(--accent)] opacity-[0.12]"
          style={{ filter: "blur(150px)", transform: "translateX(35%)" }}
        />

        {/* Center-top blue radial - complements panel reflection */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full opacity-[0.15]"
          style={{
            background: "rgba(30, 60, 120, 0.15)",
            filter: "blur(150px)",
          }}
        />
      </div>

      {/* 3D Scene - Full Background */}
      <HeroScene />

      {/* Dark Gradient Overlay - Rebalanced */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to top, rgba(11,15,20,0.92) 0%, rgba(11,15,20,0.5) 40%, rgba(11,15,20,0) 70%),
            linear-gradient(to right, rgba(11,15,20,0.35) 0%, transparent 60%)
          `,
        }}
      />

      {/* Scan Line Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Text Overlay - Positioned 45-85% of viewport height */}
      <div
        className="absolute inset-0 flex items-end px-4 md:px-0"
        style={{ height: "85%", top: "15%" }}
      >
        <div className="container w-full" style={{ paddingBottom: "12%" }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 w-full max-w-[680px]"
          >
            {/* Animated Badge with shimmer */}
            <motion.div
              variants={fadeIn}
              className="relative inline-flex items-center gap-2.5 px-3 md:px-4 py-2 rounded-full text-[var(--accent)] overflow-hidden"
              style={{
                background: "rgba(245,166,35,0.08)",
                border: "1px solid rgba(245,166,35,0.3)",
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(245,166,35,0.2), transparent)",
                }}
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <Circle
                  size={8}
                  fill="currentColor"
                  className="text-[var(--accent2)]"
                />
              </motion.div>
              <span className="text-xs md:text-sm font-medium relative z-10">
                Available for Projects
              </span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1 variants={fadeUp} className="leading-none">
              <span
                className="font-[var(--font-syne)] font-extrabold text-[var(--text)]"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  letterSpacing: "-0.1em",
                }}
              >
                Nazrul Islam{" "}
              </span>
              <span
                className="font-[var(--font-syne)] font-extrabold text-[var(--accent)] relative inline-block"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  letterSpacing: "-0.1em",
                }}
              >
                Azad
                {/* Amber underline */}
                <span className="absolute bottom-4 left-0 right-0 h-1 bg-[var(--accent)] opacity-60" />
              </span>
            </motion.h1>

            {/* Role Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-[var(--font-syne)] font-semibold text-[var(--accent2)] text-[1.1rem]"
              style={{ fontWeight: 600 }}
            >
              Assistant Manager · EEE Engineer · Energy Systems Specialist
            </motion.p>

            {/* Short Bio - Max 1.5 lines */}
            <motion.p
              variants={fadeUp}
              className="text-[var(--text)] font-[var(--font-dm-sans)] text-base leading-snug max-w-xl"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 1.5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Results-driven electrical engineer specializing in solar PV
              systems, inverter & UPS solutions, and sustainable energy
              initiatives at ACI Motors.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 md:gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-[10px] font-[var(--font-syne)] font-bold text-[var(--bg)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] text-sm md:text-base"
                style={{
                  fontWeight: 700,
                  background: "var(--accent)",
                  minWidth: "160px",
                }}
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>
              <motion.a
                href="/cv.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-[10px] font-[var(--font-syne)] font-bold text-[var(--text)] transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_0_20px_rgba(245,166,35,0.1)] text-sm md:text-base"
                style={{
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.15)",
                  minWidth: "160px",
                }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]"
      >
        <span className="text-xs uppercase tracking-wider">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
