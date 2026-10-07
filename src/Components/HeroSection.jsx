import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const message = "Hello Mide! I came across your portfolio and I'm interested in building a website for my business.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleTikTok = () => {
    window.open('https://www.tiktok.com/@skryptbymide', '_blank');
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="pt-16 w-full min-h-[92vh] bg-black/85 text-white flex flex-col items-center justify-center px-6 sm:px-10 lg:px-14 relative overflow-hidden select-none"
      id="hero-section"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-brand-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-16 pb-12">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-gray-300 mb-5 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          <span>Websites for Businesses</span>
        </motion.div>

        {/* Name + Location */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] sm:text-sm font-mono uppercase tracking-[0.25em] text-brand-400 mb-5"
        >
          Olumide Oyediran · Nigeria
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08] text-white"
        >
          Websites that turn visitors{' '}
          <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            into clients.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Fast, mobile-first websites designed to generate real enquiries. Perfect for service businesses that want a clean, modern online presence with WhatsApp built in.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-14"
        >
          {/* Primary Developer Execution Button (WhatsApp) */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="group relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-600 shadow-[0_0_25px_rgba(0,102,255,0.35)] hover:shadow-[0_0_35px_rgba(0,102,255,0.6)] transition-all duration-300 active:scale-[0.98]"
          >
            <div className="relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-[11px] bg-gradient-to-b from-[#0f1322] to-[#080912] group-hover:from-[#131930] group-hover:to-[#0b0e1a] transition-all duration-300">
              <span className="font-mono text-brand-400 font-bold text-sm tracking-tight">❯_</span>
              <FaWhatsapp className="text-emerald-400 text-lg group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono font-bold text-xs sm:text-sm tracking-wider uppercase text-white">
                Connect on WhatsApp
              </span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase font-semibold">
                Online
              </span>
            </div>
          </button>

          {/* Secondary Developer Terminal Button (Explore Projects) */}
          <button
            type="button"
            onClick={scrollToProjects}
            className="group relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#090b14]/90 hover:bg-[#111526] border border-white/10 hover:border-brand-500/50 text-gray-200 hover:text-white font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-[0.98]"
          >
            <span className="text-gray-500 group-hover:text-brand-400 transition-colors">//</span>
            <span>View Architecture &amp; Code</span>
            <FiArrowRight className="text-gray-400 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
          </button>

          {/* Developer TikTok & Devlog Channel */}
          <button
            type="button"
            onClick={handleTikTok}
            className="group flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
          >
            <FaTiktok className="text-sm text-gray-400 group-hover:text-white transition-colors" />
            <span>DevLogs</span>
          </button>
        </motion.div>

        {/* Metric Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-3xl pt-8 border-t border-white/[0.08]"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              &lt; 2.0s
            </span>
            <span className="text-xs text-gray-400 font-mono mt-1">Mobile Load Time</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Direct</span>
            <span className="text-xs text-gray-400 font-mono mt-1">WhatsApp Leads</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Custom</span>
            <span className="text-xs text-gray-400 font-mono mt-1">info@domain.com</span>
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">100%</span>
            <span className="text-xs text-gray-400 font-mono mt-1">Mobile Responsive</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;