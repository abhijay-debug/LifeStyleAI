import React from "react";
import { motion } from "framer-motion";

export default function DemoChat() {
  const messages = [
    { text: "I'm training for a half marathon—can you help me create a workout plan?", sender: "user" },
    { text: "Absolutely! Let's tailor a 12‑week running program with progressive mileage, cross‑training days and rest. How many days per week can you commit to?", sender: "ai" },
    { text: "I can commit to four days a week.", sender: "user" },
    { text: "Great! We'll schedule two runs, one strength day and one recovery day. I'll also track your progress and adjust as we go.", sender: "ai" },
  ];

  return (
    <section id="demo" className="lg:py-20">
      <div
        className="max-w-3xl mx-auto px-4 py-6 rounded-2xl"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
        }}
      >
        <h2 className="text-4xl font-semibold text-center mb-12 text-white">
          See LifestyleAI in Conversation
        </h2>

        <div className="space-y-6">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`max-w-[80%] px-4 py-3 rounded-xl shadow-lg ${
                msg.sender === "user"
                  ? "ml-auto bg-[#855afc]/20 text-[#855afc]"
                  : "bg-[#0ea5e9]/20 text-[#0ea5e9]"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
