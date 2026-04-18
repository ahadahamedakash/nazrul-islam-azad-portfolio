"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Briefcase, Zap, Battery, Wrench, LucideIcon } from "lucide-react";

interface StatItem {
  id: number;
  value: string;
  label: string;
  suffix?: string;
  icon: LucideIcon;
}

const stats: StatItem[] = [
  { id: 1, value: "3", suffix: "+", label: "Years Experience", icon: Briefcase },
  { id: 2, value: "15", suffix: "+", label: "Solar Projects", icon: Zap },
  { id: 3, value: "2000", suffix: " kW", label: "Energy Installed", icon: Battery },
  { id: 4, value: "50", suffix: "+", label: "Systems Maintained", icon: Wrench },
];

function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [currentValue, setCurrentValue] = useState(0);
  const targetValue = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds animation

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCurrentValue(Math.floor(easeOutQuart * targetValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {currentValue}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section
      className="w-full bg-[var(--surface)] py-16 border-y border-[var(--border)] relative"
      style={{
        borderTop: "2px solid transparent",
        background: "linear-gradient(to bottom, var(--surface), var(--surface)) padding-box, linear-gradient(to right, var(--accent), var(--accent2)) border-box",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              className="relative group flex flex-col items-center justify-center text-center px-4 py-6 rounded-xl transition-all duration-300 hover:bg-[var(--surface2)]"
            >
              {/* Divider - not on last item */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-[var(--border)]" />
              )}

              {/* Icon */}
              <div className="mb-3 text-[var(--accent)] opacity-70 group-hover:opacity-100 transition-opacity">
                <stat.icon size={24} />
              </div>

              {/* Number with hover glow */}
              <div
                className="font-[var(--font-syne)] font-extrabold text-[var(--accent)] mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(245,166,35,0.6)]"
                style={{ fontSize: "2.5rem", fontWeight: 800 }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="font-[var(--font-dm-sans)] text-[var(--muted)] text-xs uppercase tracking-wider" style={{ fontSize: "0.75rem" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
