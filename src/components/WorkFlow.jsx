import React from 'react';
import { motion } from 'framer-motion';

const WorkFlow = () => {
  const steps = [
    {
      number: "1",
      title: "Awareness & Lead Generation",
      desc: "Attract potential clients with AI-driven content and interactions. Your digital twin can engage curious followers on social media or your website, answering initial questions and sparking interest automatically."
    },
    {
      number: "2",
      title: "Lead Nurturing & Management",
      desc: "Once someone shows interest, the AI smoothly follows up. It can greet new sign-ups, provide them with personalized resources, and keep them engaged with timely messages."
    },
    {
      number: "3",
      title: "Client Acquisition & Payment",
      desc: "LifestyleAI guides new leads through onboarding and payment, answering detailed inquiries and assisting with invoicing or subscription sign-ups."
    },
    {
      number: "4",
      title: "Onboarding Interview & Assessment",
      desc: "The AI twin conducts an intake interview with each new client, asking questions to learn about their goals, preferences, and challenges."
    },
    {
      number: "5",
      title: "Daily Engagement & Coaching",
      desc: "Your AI assistant becomes a daily companion, providing motivation, feedback, and personalized tips."
    },
    {
      number: "6",
      title: "Progress Tracking & Reviews",
      desc: "LifestyleAI monitors activities and outcomes, sending progress reports, milestone check-ins, and real-time feedback."
    },
    {
      number: "7",
      title: "Retention & Support",
      desc: "AI agents predict when clients might disengage and proactively reach out with encouragement and solutions."
    },
    {
      number: "8",
      title: "Upselling & Cross-Selling",
      desc: "The AI identifies opportunities to offer additional services, recommending them in a natural, personalized way."
    }
  ];

  return (
    <section id="workflow" className="py-10 bg-[#090a13]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-semibold text-center mb-12 text-white">
          Turn Your Expertise into a Digital Twin
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-[#0c0e1a] overflow-hidden border border-white/5 rounded-xl p-6 hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-transform duration-500"
            >
              <div className="absolute -top-4 -right-4 pl-2 pt-2 w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-start font-bold text-white shadow-lg">
                {s.number}
              </div>
              <h3 className="text-xl font-semibold text-[#855afc] mt-6 mb-2">{s.title}</h3>
              <p className="text-sm text-[#8c8fa6]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
