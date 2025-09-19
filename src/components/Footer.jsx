import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#090a13] text-[#8c8fa6] py-12 relative overflow-hidden"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-[#855afc]/40 via-[#0ea5e9]/30 to-[#f97316]/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-[#f97316]/30 via-[#0ea5e9]/40 to-[#855afc]/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div>
          <h4 className="text-[#e5e7eb] font-semibold mb-2">About LifestyleAI</h4>
          <p className="text-sm w-xs">
            We build AI digital twins that help coaches, health professionals and experts scale their impact and revenue. Our mission is to make personalised coaching accessible to everyone.
          </p>
          
        </div>

        <div>
          <h4 className="text-[#e5e7eb] font-semibold mb-2">Company</h4>
          <nav className="text-sm">
            <a className="block mb-1 hover:text-white transition-colors" href="#features">Features</a>
            <a className="block mb-1 hover:text-white transition-colors" href="#work">How It Works</a>
            <a className="block mb-1 hover:text-white transition-colors" href="#industries">Industries</a>
            <a className="block mb-1 hover:text-white transition-colors" href="#testimonials">Testimonials</a>
            <a className="block mb-1 hover:text-white transition-colors" href="#cta">Pricing</a>
          </nav>
        </div>

       

        <div>
          <h4 className="text-[#e5e7eb] font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: abhijay@lifestyleai.co</p>
          <p className="text-sm">Phone: +91 7805010044</p>
          <p className="text-sm">Address: Andheri East Mumba</p>

          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        <div className="flex gap-4 mt-6 ">
            <Link to="/terms">
            <a  className="hover:text-white transition-colors">Terms & Conditions</a>
            </Link>
            <Link to="/privacy-policy">
            <a  className="hover:text-white transition-colors">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-[#8c8fa6] mt-8 relative z-10">© 2025 LifestyleAI, Inc. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
