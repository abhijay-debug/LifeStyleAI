// KeyBenefits.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  const images = [
    "/images/one.jpg",
    "/images/three.jpg",
    "/images/four.jpg",
    "/images/five.jpg",
    "/images/deep.jpg",
    "/images/coach.jpg",
  ];

  return (
    <section id="features" className="lg:py-24 py-10 bg-[#090a13]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why LifestyleAI?
        </motion.h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative group rounded-xl overflow-hidden cursor-pointer perspective"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Feature ${i + 1}`}
                  className="w-full mb-6 rounded-xl object-cover transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
                {/* Optional hover text */}
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-lg font-semibold">Feature {i + 1}</h3>
                  <p className="text-sm text-white/70">Amazing AI feature</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
