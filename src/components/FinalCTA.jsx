import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section
      id="cta"
      className="py-16 bg-gradient-to-r from-[#855afc] via-[#0ea5e9] to-[#f97316] text-white text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Scale Your Coaching?
        </motion.h2>

        <motion.p
          className="mb-6 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          With <span className="font-semibold">LifestyleAI</span>, you can finally reach
          everyone who needs your guidance — and deliver an exceptional coaching
          experience — without being tied to a 24/7 schedule.
        </motion.p>

        <motion.a
          href="#"
          className="inline-block px-6 py-3 rounded-[12px] font-semibold bg-white text-[#0c0e1a] shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#f97316] hover:via-[#0ea5e9] hover:to-[#855afc] transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get Started for Free
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
