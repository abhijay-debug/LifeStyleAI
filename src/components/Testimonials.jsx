import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I doubled my revenue without hiring additional staff. LifestyleAI manages client conversations better than any VA I’ve tried.",
    author: "Sara , Instagram Influencer (1.5M followers)"
  },
  {
    text: "The AI twin makes every patient feel personally cared for, even outside of appointments. Our retention jumped 30%.",
    author: "Dr. Amit , Senior Doctor in Mumbai"
  },
  {
    text: "Members love the digital coach! It keeps them motivated between sessions and holds them accountable—it’s like having 10 trainers for the price of one.",
    author: "Raj G., Gym Franchise Manager"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="lg:py-14 bg-[#090a13]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-semibold text-center mb-12 text-white">
          Our Users Say It Best
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-[#0c0e1a] p-6 rounded-xl border border-white/5 italic hover:scale-105 hover:shadow-xl transition-transform duration-500"
            >
              "{t.text}"{" "}
              <cite className="block mt-3 font-semibold not-italic text-[#0ea5e9]">
                — {t.author}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
