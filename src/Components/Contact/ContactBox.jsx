import React from 'react';
import { FiMail, FiMapPin, FiArrowRight, FiMessageSquare, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactBox = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const message = "Hello Mide! I'd like to inquire about building a website for my business.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-14 bg-black/90 relative overflow-hidden" id="contact-cta">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-brand-400 mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight" data-aos="fade-up" data-aos-delay="60">
            Let's Build Something That Works
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="120">
            Based in Ibadan, working with businesses worldwide. Ready when you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT — Contact Details (60%) */}
          <div className="lg:col-span-3 space-y-3">
            {/* Email */}
            <a
              href="mailto:oyediranolumide97@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-brand-500/50 hover:bg-white/[0.08] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform duration-300">
                <FiMail className="text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-wider text-gray-300 mb-0.5">
                  Email
                </p>
                <p className="text-sm sm:text-base font-semibold text-white truncate">
                 oyediranolumide97@gmail.com
                </p>
              </div>
              <FiArrowRight className="text-gray-300 group-hover:text-brand-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2347088136059"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-brand-500/50 hover:bg-white/[0.08] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="210"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-wider text-gray-300 mb-0.5">
                  WhatsApp &amp; Phone
                </p>
                <p className="text-sm sm:text-base font-semibold text-white truncate">
                  +234 708 813 6059
                </p>
              </div>
              <FiArrowRight className="text-gray-300 group-hover:text-brand-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md" data-aos="fade-up" data-aos-delay="270">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-300">
                <FiMapPin className="text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-wider text-gray-300 mb-0.5">
                  Location
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  Ibadan, Nigeria · Serving Clients Worldwide
                </p>
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-2 px-1 pt-2 text-xs text-gray-300" data-aos="fade-up" data-aos-delay="300">
              <FiClock className="text-brand-400 text-sm" />
              <span>Usually replies within a few hours on WhatsApp</span>
            </div>
          </div>

          {/* RIGHT — Action Card (40%) */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="180">
            <div className="flex flex-col h-full p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-mono uppercase tracking-wider mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                  Available Now
                </span>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Fastest Way to Start
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Skip the long back-and-forth. Message me directly with your project brief.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                {/* Primary Developer WhatsApp CTA */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.55)] active:scale-[0.98]"
                >
                  <span className="text-emerald-300 font-bold">❯_</span>
                  <FaWhatsapp className="text-base text-emerald-300" />
                  <span>Connect on WhatsApp</span>
                </button>

                {/* Secondary Dev Form Link */}
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#0a0c16] hover:bg-[#12162a] border border-white/10 hover:border-brand-500/40 text-gray-200 hover:text-white font-mono font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-[0.98]"
                >
                  <span className="text-gray-500">//</span>
                  <FiMessageSquare className="text-sm" />
                  <span>Send Project Specs</span>
                  <FiArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;