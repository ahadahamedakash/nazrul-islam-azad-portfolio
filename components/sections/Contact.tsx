"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Link, Code, CheckCircle } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { contact } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[50vw] h-[50vw] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[150px]" />

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
              Get In Touch
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
              Let's Connect
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Reach out!
            </p>
          </motion.div>

          {/* Main content - Two columns */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left column - Contact form */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-[var(--font-dm-sans)] font-semibold text-xs md:text-sm mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-3 rounded-xl font-[var(--font-dm-sans)] text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(245,166,35,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-[var(--font-dm-sans)] font-semibold text-xs md:text-sm mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-3 rounded-xl font-[var(--font-dm-sans)] text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(245,166,35,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-[var(--font-dm-sans)] font-semibold text-xs md:text-sm mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-3 rounded-xl font-[var(--font-dm-sans)] text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(245,166,35,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-[var(--font-dm-sans)] font-semibold text-xs md:text-sm mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 md:px-4 py-3 rounded-xl font-[var(--font-dm-sans)] text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(245,166,35,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-xl font-[var(--font-syne)] font-bold transition-all duration-300 disabled:opacity-50 text-sm md:text-base"
                    style={{
                      background: isSuccess ? "var(--accent2)" : "var(--accent)",
                      color: "var(--bg)",
                    }}
                    whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(245,166,35,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[var(--bg)] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right column - Contact info */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="space-y-4">
                {/* Email card */}
                <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-4 md:p-6 hover:shadow-[0_0_30px_rgba(245,166,35,0.15)] transition-shadow duration-300">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div
                      className="p-2 md:p-3 rounded-xl flex-shrink-0"
                      style={{
                        background: "rgba(245,166,35,0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-[var(--font-dm-sans)] font-semibold text-xs md:text-sm uppercase tracking-wider mb-1"
                        style={{ color: "var(--muted)" }}
                      >
                        Email
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="font-[var(--font-dm-sans)] font-semibold text-sm md:text-lg hover:text-[var(--accent)] transition-colors break-all"
                        style={{ color: "var(--text)" }}
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone card */}
                <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-4 md:p-6 hover:shadow-[0_0_30px_rgba(245,166,35,0.15)] transition-shadow duration-300">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div
                      className="p-2 md:p-3 rounded-xl flex-shrink-0"
                      style={{
                        background: "rgba(245,166,35,0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      <Phone size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-[var(--font-dm-sans)] font-semibold text-xs md:text-sm uppercase tracking-wider mb-1"
                        style={{ color: "var(--muted)" }}
                      >
                        Phone
                      </p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="font-[var(--font-dm-sans)] font-semibold text-sm md:text-lg hover:text-[var(--accent)] transition-colors"
                        style={{ color: "var(--text)" }}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location card */}
                <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-4 md:p-6 hover:shadow-[0_0_30px_rgba(245,166,35,0.15)] transition-shadow duration-300">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div
                      className="p-2 md:p-3 rounded-xl flex-shrink-0"
                      style={{
                        background: "rgba(245,166,35,0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-[var(--font-dm-sans)] font-semibold text-xs md:text-sm uppercase tracking-wider mb-1"
                        style={{ color: "var(--muted)" }}
                      >
                        Location
                      </p>
                      <p
                        className="font-[var(--font-dm-sans)] font-semibold text-sm md:text-lg break-words"
                        style={{ color: "var(--text)" }}
                      >
                        {contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-[rgba(19,24,32,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-6">
                <p
                  className="font-[var(--font-dm-sans)] font-semibold text-sm uppercase tracking-wider mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {contact.linkedin && (
                    <motion.a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl transition-all duration-300"
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
                      <Link size={24} />
                    </motion.a>
                  )}
                  {contact.github && (
                    <motion.a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl transition-all duration-300"
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
                      <Code size={24} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Availability badge */}
              {contact.availableForFreelance && (
                <div className="bg-[rgba(0,201,167,0.1)] border border-[rgba(0,201,167,0.3)] rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[var(--accent2)] animate-pulse" />
                    <div>
                      <p
                        className="font-[var(--font-syne)] font-bold text-lg"
                        style={{ fontWeight: 700, color: "var(--accent2)" }}
                      >
                        Available for Projects
                      </p>
                      <p className="font-[var(--font-dm-sans)] text-sm" style={{ color: "var(--muted)" }}>
                        Open to freelance and consulting opportunities
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
