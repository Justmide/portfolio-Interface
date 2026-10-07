import React from 'react';
import { FiShield, FiZap, FiSmartphone, FiMail, FiCheck, FiHeadphones } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ClientTrustBanner = () => {
  const highlights = [
    {
      icon: FiZap,
      title: 'Sub-2.0s Speed Guarantee',
      desc: 'Lightweight code engineered to load fast on all mobile devices.',
    },
    {
      icon: FiSmartphone,
      title: '1-Click WhatsApp Funnels',
      desc: 'Every button connects paying customers straight to your chat.',
    },
    {
      icon: FiMail,
      title: 'Corporate Business Email',
      desc: 'Branded addresses (info@domain.com) with SSL padlock security.',
    },
    {
      icon: FiShield,
      title: '30-Day Free Warranty',
      desc: 'Free post-launch technical support, maintenance & backups.',
    },
  ];

  const handleWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const message = "Hello Mide! I'd like to book a free 15-minute consultation for my business website.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-gradient-to-b from-black/90 via-[#0b0d18]/90 to-black/90 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Guarantee Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-xs font-mono uppercase tracking-wider text-brand-300">
                <FiShield className="text-sm" />
                <span>The Skryptvolt Guarantee</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Built to Turn Website Visitors Into <span className="bg-gradient-to-r from-brand-400 via-blue-300 to-white bg-clip-text text-transparent">Paying Clients</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-quicksand">
                Most websites look fancy but fail to generate revenue because they load too slowly or make it difficult for customers to get in touch. Every website I build is engineered with speed, direct WhatsApp communication, and verified local SEO ranking.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all duration-300 active:scale-[0.98]"
                >
                  <span className="text-emerald-300">❯_</span>
                  <FaWhatsapp className="text-lg text-emerald-300" />
                  <span>Initialize 15-Min Briefing</span>
                </button>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <FiHeadphones className="text-brand-400" />
                  <span>No obligation · Prompt response</span>
                </div>
              </div>
            </div>

            {/* Right Col: Trust Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/40 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-2.5">
                      <Icon className="text-base" />
                    </div>
                    <h3 className="text-xs font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-quicksand">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTrustBanner;
