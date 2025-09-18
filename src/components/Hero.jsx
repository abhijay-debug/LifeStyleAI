import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const heading = "Scale Your Coaching Business with an AI Digital Twin".split(" ");

  return (
    <section
      id="hero"
      className="relative flex py-20 items-center justify-center min-h-[90vh] text-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bgg.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,26,0.8)] to-[rgba(12, 14, 26, 0.13)]"></div>

      {/* Radial Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <div className="relative z-10 max-w-3xl px-4">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#855afc] via-[#0ea5e9] to-[#f97316]"
        >
          {heading.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: i * 0.08 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="text-[#8c8fa6] text-base md:text-lg mb-8"
        >
          LifestyleAI is a B2B AI SaaS platform that creates a digital twin of you – an AI-powered clone that can engage, coach, and{" "}
          <strong>manage up to 10,000 customers simultaneously</strong> with consistent quality.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {["#demo", "#cta"].map((href, idx) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold ${idx === 0 ? "bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white" : "border border-[#855afc] text-[#855afc] bg-transparent"}`}
            >
              {idx === 0 ? "See it in action" : "Start free trial"} <span>→</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
