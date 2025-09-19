import React from "react";
import { Shield, CheckCircle, RefreshCcw, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function OurVision() {
  const visionCards = [
    { icon: <Shield className="w-10 h-10 text-[#e5e7eb] mx-auto mb-3" />, title: "Privacy" },
    { icon: <CheckCircle className="w-10 h-10 text-[#e5e7eb] mx-auto mb-3" />, title: "Reliability" },
    { icon: <RefreshCcw className="w-10 h-10 text-[#e5e7eb] mx-auto mb-3" />, title: "Continuous Improvement" },
    { icon: <Star className="w-10 h-10 text-[#e5e7eb] mx-auto mb-3" />, title: "High Consistency & Quality" },
  ];

  return (
    <section id="our-vision" className="lg:py-10 py-10 bg-[#090a13] text-[#e5e7eb]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-semibold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#855afc]">Vision</span>
        </motion.h2>

        {/* Vision Statement */}
        <motion.p
          className="text-lg text-[#8c8fa6] max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          At <span className="font-semibold text-indigo-600">LifestyleAI</span>, we envision a
          world where <span className="font-semibold">personalized coaching is accessible</span> 
          to everyone who needs it — and where experts can amplify their impact without limits 
          of time or headcount.
        </motion.p>
        <motion.p
          className="text-lg text-[#8c8fa6] max-w-3xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          By blending <span className="font-semibold">AI with human expertise</span>, we aim to 
          democratize mentorship and support. Your wisdom can now touch lives at scale, breaking 
          the trade-off between <span className="font-semibold">quantity</span> and{" "}
          <span className="font-semibold">quality</span>.
        </motion.p>

        {/* Promises List */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {visionCards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-[#090a13] rounded-xl p-6 border border-white/5 shadow hover:shadow-lg hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              {card.icon}
              <h3 className="text-lg font-semibold text-[#855afc]">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
