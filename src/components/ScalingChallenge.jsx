// ScalingChallenge.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ScalingChallenge() {
 

  return (
    <section className="bg-[#0c0e1a] lg:py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl md:text-4xl mt-4 font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Scaling Challenge
        </motion.h2>

        {/* Animated Paragraphs */}
        <motion.p
          className="text-white/70 mb-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Growing a coaching or influencer business is hard to scale. Today, guiding a 
          client through their journey requires many manual touchpoints and human helpers 
          at each stage – awareness, lead nurturing, onboarding, daily engagement, progress 
          reviews, retention, upsells, and more. Ensuring every follower or client gets 
          timely, high-quality attention is nearly impossible when your audience grows large.
        </motion.p>

        <motion.p
          className="text-white/70 text-md leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          You either hit a ceiling on how many people you can help, or you need to hire and 
          manage a team for support. Inconsistent follow-ups, delayed responses, and varying 
          service quality become inevitable as you try to serve more clients. The result is 
          often a compromised experience and lost opportunities.
        </motion.p>

        
      </div>
    </section>
  );
}
