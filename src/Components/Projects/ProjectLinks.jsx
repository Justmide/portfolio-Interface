import React, { useRef, useState } from 'react';
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ProjectLinks = () => {
  const scrollRef = useRef(null);
  const [loaded, setLoaded] = useState({});

  // WordPress mShots — optimized resolution for faster 3G loading
  const getPreview = (url) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const w = isMobile ? 450 : 650;
    const h = isMobile ? 280 : 400;
    return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;
  };

  const projects = [
    {
      title: 'Adetunji Babajide & Co.',
      resultNote:
        'Chartered accountants (ICAN & CITN, est. 2009) covering audit, tax & advisory — built for corporate trust and client acquisition.',
      tags: ['Corporate', 'Audit & Tax', 'Professional Services'],
      liveLink: 'https://adetunjibabajideandco.com',
      category: 'Professional Services',
    },
    {
      title: 'SkyBridge Pathways Global',
      resultNote:
        'Logistics & delivery platform for Ibadan-to-worldwide shipping — real-time tracking, hub network, 99.2% on-time delivery.',
      tags: ['Logistics', 'Tracking UI', 'Mobile-First'],
      liveLink: 'https://skybridgepathwayglobal.com',
      category: 'Logistics & Delivery',
    },
    {
      title: 'E-Travel Agent (SkyBridge)',
      resultNote:
        'UK-registered visa consultancy — 98% success rate, 12k+ visas processed, end-to-end immigration services across 50+ countries.',
      tags: ['Travel', 'Visa & Immigration', 'Conversion Funnel'],
      liveLink: 'https://e-travelagent.co.uk',
      category: 'Travel & Immigration',
    },
    {
      title: 'SpedEveryday Autism Support',
      resultNote:
        'U.S.-trained autism parent coaching & screening — 500+ families supported, 98% satisfaction, culturally responsive care.',
      tags: ['Healthcare', 'Coaching', 'Community'],
      liveLink: 'https://spedeveryday.com',
      category: 'Healthcare & Coaching',
    },
    {
      title: 'Dynamic Cleaning Services',
      resultNote:
        'UK commercial & domestic cleaning company — focused on instant quote requests and booking conversions.',
      tags: ['Service Funnel', 'Booking', 'SME Site'],
      liveLink: 'https://dynamiccleaningexpert.co.uk/',
      category: 'SME Commercial Site',
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.85;
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const openWhatsApp = (title) => {
    const phoneNumber = '2347088136059';
    const message = title
      ? `Hello Mide! I'm interested in a website like your "${title}" project for my business.`
      : "Hello Mide! I looked through your recent client projects and I'd like to build something similar for my business.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-14 bg-black/90 relative overflow-hidden" id="projects">
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-brand-400 mb-4">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Projects That Drive Results
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Real client sites across accounting, logistics, travel, and healthcare — built to convert.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-end gap-2 mb-8">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="p-2.5 rounded-xl bg-[#0b0e18] border border-white/10 hover:border-brand-500/50 text-gray-400 hover:text-white transition-all shadow-sm font-mono"
          >
            <FiChevronLeft className="text-lg" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="p-2.5 rounded-xl bg-[#0b0e18] border border-white/10 hover:border-brand-500/50 text-gray-400 hover:text-white transition-all shadow-sm font-mono"
          >
            <FiChevronRight className="text-lg" />
          </button>
        </div>

        {/*
          ZIGZAG CAROUSEL
          - The wrapper has extra vertical padding so alternating cards can shift up/down.
          - Each card rotates slightly toward the center of the row and translates on the Y axis.
          - On hover, cards snap back to level (rotate-0, translate-y-0) for a "driving in" effect.
        */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pt-12 pb-16 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => {
            // Alternate direction: even = up/left-tilt, odd = down/right-tilt
            const isEven = index % 2 === 0;
            const zigzag = isEven
              ? 'lg:-translate-y-6 lg:rotate-[-1.5deg]'
              : 'lg:translate-y-6 lg:rotate-[1.5deg]';

            return (
              <div
                key={index}
                className={`
                  group snap-center flex-shrink-0
                  w-[85vw] sm:w-[400px] lg:w-[420px]
                  flex flex-col overflow-hidden rounded-2xl
                  bg-white/[0.03] border border-white/[0.08] backdrop-blur-md
                  transition-all duration-700 ease-out
                  hover:border-brand-500/50 hover:bg-white/[0.08]
                  hover:rotate-0 hover:translate-y-0 hover:scale-[1.02]
                  hover:shadow-2xl hover:shadow-brand-500/10
                  ${zigzag}
                `}
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                {/* Live Screenshot Preview */}
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  {!loaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                      <div className="w-6 h-6 border-2 border-white/10 border-t-brand-400 rounded-full animate-spin" />
                    </div>
                  )}

                  <img
                    src={getPreview(project.liveLink)}
                    alt={`${project.title} live preview`}
                    className={`w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ${
                      loaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
                    onError={() => setLoaded((prev) => ({ ...prev, [index]: false }))}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white">
                    {project.category}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">
                    {project.resultNote}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/[0.05]">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all duration-300"
                    >
                      <span className="text-emerald-300">❯_</span>
                      <FiExternalLink className="text-xs" />
                      <span>Launch Preview</span>
                    </a>
                    <button
                      onClick={() => openWhatsApp(project.title)}
                      aria-label={`Discuss ${project.title}`}
                      className="p-2.5 rounded-xl bg-[#090b14] hover:bg-[#12162a] border border-white/10 hover:border-brand-500/50 text-gray-400 hover:text-emerald-400 transition-all"
                    >
                      <FaWhatsapp className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center" data-aos="fade-up">
          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.35)] hover:shadow-[0_0_35px_rgba(0,102,255,0.6)] transition-all duration-300 active:scale-[0.98]"
          >
            <span className="text-emerald-300 font-bold">❯_</span>
            <FaWhatsapp className="text-base text-emerald-300" />
            <span>Initialize Your Project Build</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectLinks;