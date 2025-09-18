import React from "react";
import { motion } from "framer-motion";

const Industries = () => {
  const industries = [
    {
      title: "Coaches & Creators",
      desc: "Build deeper relationships with your audience through personalised guidance and community management."
    },
    {
      title: "Healthcare & Wellness",
      desc: "Empower patients with 24/7 support for lifestyle changes—diabetes, heart health, pregnancy and more."
    },
    {
      title: "Fitness & Sports",
      desc: "Deliver customised training and nutrition plans that adjust to each athlete’s progress and feedback."
    },
    {
      title: "Finance & Professional Services",
      desc: "Automate client communications and provide instant answers to routine inquiries about wealth and business advisory."
    },
    {
      title: "Lifestyle Medical Professionals",
      desc: "Doctors and specialists in chronic conditions who want to extend support beyond clinic hours."
    },
    {
      title: "Astrology & Spiritual Guides",
      desc: "Astrology readers and spiritual mentors who want to engage followers with real-time personalized insights."
    }
  ];

  return (
    <section id="industries" className="lg:py-24 py-10 bg-[#090a13]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-semibold text-center mb-12 text-white">
          Tailored Solutions for Every Domain
        </h2>
        <div className="w-full lg:flex flex-wrap gap-6 justify-center items-center">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0c0e1a] lg:w-1/4 h-[30vh] rounded-xl mb-4 p-6 border border-white/5 hover:scale-105 hover:shadow-xl transition-transform duration-500"
            >
              <h3 className="text-lg text-[#855afc] mb-2">{ind.title}</h3>
              <p className="text-sm text-[#8c8fa6]">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
