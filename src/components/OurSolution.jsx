// OurSolution.jsx
import React from "react";
import { Workflow, Clock, Users, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function OurSolution() {
  const features = [
    {
      icon: <Workflow className="w-10 h-10 text-[#e5e7eb] mb-4" />,
      title: "End-to-End Client Interaction",
      desc: (
        <>
          Your AI twin manages the full customer lifecycle — awareness, lead nurturing,
          onboarding, engagement, progress reviews, retention, and upsells — all
          orchestrated via <span className="font-semibold text-indigo-600">rocky.ai</span>{" "}
          so every touchpoint feels authentic and on-brand.
        </>
      ),
    },
    {
      icon: <Clock className="w-10 h-10 text-[#e5e7eb] mb-4" />,
      title: "Always Available, Always Consistent",
      desc: (
        <>
          Hosted on <span className="font-semibold text-indigo-600">rocky.ai</span>, your
          digital twin is available 24/7. It answers late-night questions, checks in on
          daily progress, and ensures every interaction is consistent, personal, and
          true to your brand voice.
        </>
      ),
    },
    {
      icon: <Users className="w-10 h-10 text-[#e5e7eb] mb-4" />,
      title: "Scalable Coaching Without Limits",
      desc: (
        <>
          With LifestyleAI and <span className="font-semibold text-indigo-600">rocky.ai</span>,
          you can support thousands of clients simultaneously while preserving the human
          touch. Multiply your reach and impact without sacrificing personalization or
          quality.
        </>
      ),
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#e5e7eb] mb-4" />,
      title: "Seamless Client Experience",
      desc: (
        <>
          No complex tech needed — <span className="font-semibold text-indigo-600">rocky.ai</span>{" "}
          delivers your AI services through an easy-to-use mobile app and WhatsApp
          integration, letting clients connect naturally on platforms they already use.
        </>
      ),
    },
  ];

  return (
    <section id="our-solution" className="py-16 bg-[#090A13] text-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-semibold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The LifestyleAI Solution{" "}
          <span className="text-indigo-600">(rocky.ai)</span>
        </motion.h2>

        <motion.p
          className="text-lg text-white/60 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          LifestyleAI creates a digital twin of you — an AI-powered version trained on your
          expertise, coaching style, and communication approach. This twin operates through{" "}
          <span className="font-semibold text-indigo-600">rocky.ai</span>’s conversational
          interface, mirroring your persona to deliver coaching, motivation, and progress
          tracking in your unique voice.
        </motion.p>

        {/* Grid Layout with scroll animation */}
        <div className="grid md:grid-cols-2 gap-10 text-center">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-[#0c0e1a] border border-white/5 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {f.icon}
              <h3 className="text-2xl font-semibold text-[#855afc] mb-3">{f.title}</h3>
              <p className="text-[#8c8fa6]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
