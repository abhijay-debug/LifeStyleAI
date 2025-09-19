import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(12,14,26,0.95)] border-b border-white/5 backdrop-blur px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-[#855afc] via-[#0ea5e9] to-[#f97316] bg-clip-text text-transparent">
          LifestyleAI
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {["Features", "Demo", "Industries", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-[#8c8fa6] hover:text-[#0ea5e9] transition-colors"
            >
              {item}
            </a>
          ))}
           <a
            //   key={item}
              href="#work"
              className="text-sm text-[#8c8fa6] hover:text-[#0ea5e9] transition-colors"
            >
             How It Works
            </a>
          <a
            href="https://forms.gle/WXd75AEmrViwKVPY6"
            className="ml-2 inline-flex items-center gap-2 rounded-[12px] px-4 py-2 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white shadow-md hover:-translate-y-1 transition-transform"
          >
            Try for Free <span>→</span>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <motion.button
            aria-label="menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            {/* Hamburger Lines */}
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-8 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-white rounded"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-3 px-6 pb-4 bg-[rgba(12,14,26,0.95)] border-t border-white/5 overflow-hidden"
          >
            {["Features", "Demo", "Industries", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="py-2 text-[#e5e7eb] hover:text-[#0ea5e9] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
               
                href="#work"
                className="py-2 text-[#e5e7eb] hover:text-[#0ea5e9] transition-colors"
              >
               How it Works
              </a>
             <a
            href="https://forms.gle/WXd75AEmrViwKVPY6"
            className="ml-2 inline-flex items-center gap-2 rounded-[12px] px-4 py-2 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white shadow-md hover:-translate-y-1 transition-transform"
          >
            Try for Free <span>→</span>
          </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
