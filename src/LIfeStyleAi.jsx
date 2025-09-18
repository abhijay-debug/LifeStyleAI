import React, { useState } from "react";
import ScalingChallenge from "./components/ScalingChallenge";
import OurSolution from "./components/OurSolution";
import OurVision from "./components/OurVision";
import Features from "./components/Features";
import Hero from "./components/Hero";
import DemoChat from "./components/DemoChat";
import WorkFlow from "./components/WorkFlow";
import Industries from "./components/Industries";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";

// Usage:
// 1) Project must have TailwindCSS configured.
// 2) Place your images in /public/assets/ (hero_vibrant.png, square_vibrant.png, vertical_vibrant.png)
// 3) Import this component in App.jsx and render <LandingPage />

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0e1a] text-[#e5e7eb] font-inter">
      {/* Header */}
    <Header/>

      {/* Hero */}
      <main className="pt-2">
                <Hero/>
           <ScalingChallenge/>
           <OurSolution/>
        {/* Features */}
        {/* <section id="features" className="py-24 bg-[#090a13]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Why LifestyleAI?</h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: '24/7 Coaching',
                  desc: 'Your AI twin never sleeps. It responds instantly to clients anytime they need support, ensuring continuous engagement and satisfaction.',
                  icon: (
                    <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"></path><path d="M12 6v6l3 3"></path></svg>
                  )
                },
                {
                  title: 'Hyper‑Personalized',
                  desc: 'Every conversation is tailored. Our AI remembers client history, goals and preferences, providing customized plans and nuanced advice.',
                  icon: (
                    <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12v-2a4 4 0 0 1 4-4h14"></path><path d="M3 12v2a4 4 0 0 0 4 4h14"></path><path d="M3 8h.01"></path><path d="M3 16h.01"></path></svg>
                  )
                },
                {
                  title: 'Scales Effortlessly',
                  desc: 'Serve 10k+ clients with consistent quality. Our infrastructure manages conversations at scale, freeing you from operational bottlenecks.',
                  icon: (
                    <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M5 12h14"></path><path d="M19 5l-7 7 7 7"></path></svg>
                  )
                },
                {
                  title: 'Data‑Driven Insights',
                  desc: 'Gain actionable analytics about client engagement, progress and sentiment. Make informed decisions to optimise programs and marketing.',
                  icon: (
                    <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"></path><path d="M12 6v6l4 2"></path></svg>
                  )
                }
              ].map((f, i) => (
                <div key={i} className="bg-[#0c0e1a] border border-white/5 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
                  <div>{f.icon}</div>
                  <h3 className="text-lg font-semibold text-[#855afc] mb-2 text-center">{f.title}</h3>
                  <p className="text-sm text-[#8c8fa6] text-center">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
          <Features/>

        {/* Demo chat */}
        <DemoChat/>

        {/* Workflow */}
       <WorkFlow/>

        {/* Industries */}
       <Industries/>

        {/* Testimonials */}
           <Testimonials />
         <OurVision/>
        {/* CTA */}
       <FinalCTA/>

        {/* Footer */}
        <Footer/>
      </main>
    </div>
  );
}
