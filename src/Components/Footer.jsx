import React from 'react';
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (target, type = 'route') => {
    if (type === 'route') {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (type === 'hash') {
      if (location.pathname === '/') {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${target}`);
      }
    }
  };

  const handleWhatsApp = (topic = 'General Inquiry') => {
    const phoneNumber = '2347088136059';
    const message = `Hello Mide! I am inquiring about ${topic} for my business.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className="w-full bg-black text-white pt-16 pb-12 px-4 sm:px-8 lg:px-14 border-t border-white/[0.08] relative overflow-hidden"
      id="footer"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[160px] bg-brand-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            {/* Logo only */}
            <button
              type="button"
              onClick={() => handleNav('/', 'route')}
              className="group flex items-center focus:outline-none select-none"
              aria-label="Go to homepage"
            >
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-quicksand">
              Based in Ibadan · Helping Nigerian &amp; international businesses build
              high-converting websites and modern digital systems that bring real revenue.
            </p>

            {/* Social Links (Developer System Links) */}
            <div className="flex items-center gap-2.5 pt-2 font-mono">
              <a
                href="https://wa.me/2347088136059"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/30 text-emerald-400 hover:bg-brand-500 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/justmide"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub Repositories"
                className="w-9 h-9 rounded-xl bg-[#090b14] border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/40 hover:bg-[#12162a] flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/interface-i-b15357253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#090b14] border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/40 hover:bg-[#12162a] flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@skryptbymide"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="Follow on TikTok"
                className="w-9 h-9 rounded-xl bg-[#090b14] border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/40 hover:bg-[#12162a] flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/skryptbymide"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                title="Follow on X"
                className="w-9 h-9 rounded-xl bg-[#090b14] border border-white/10 text-gray-300 hover:text-white hover:border-brand-500/40 hover:bg-[#12162a] flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-mono font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/', 'route')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/projects', 'route')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  Projects &amp; Demos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services', 'hash')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  SME Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('packages', 'hash')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  Starting Packages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faq', 'hash')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  FAQs &amp; Pricing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/contact', 'route')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-mono font-semibold mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services', 'hash')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  SME Web Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleWhatsApp('WhatsApp Lead Integration')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  WhatsApp Lead Funnels
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services', 'hash')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  Business Email Setup
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services', 'hash')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  Local Google SEO
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services', 'hash')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  E-Commerce Paystack
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleWhatsApp('cPanel and Hosting')}
                  className="text-gray-400 hover:text-brand-400 transition-colors text-left"
                >
                  cPanel &amp; SSL Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 font-mono font-semibold mb-3">
              Direct Comms
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <FiMail className="text-brand-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:oyediranolumide97@gmail.com"
                  className="text-gray-300 hover:text-brand-400 transition-colors break-all"
                >
                  oyediranolumide97@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <FiPhone className="text-brand-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+2347088136059"
                  className="text-gray-300 hover:text-brand-400 transition-colors"
                >
                  +234 708 813 6059
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <FiMapPin className="text-brand-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Ibadan, Nigeria · Operating Globally
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p className="font-mono text-center sm:text-left">
            © {new Date().getFullYear()} SKRYPTVOLT · Mission Control Ibadan · All Systems Operational.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c0e18] hover:bg-[#12162a] border border-white/10 hover:border-brand-500/50 text-gray-400 hover:text-white transition-all font-mono text-xs cursor-pointer shadow-sm"
          >
            <span className="text-brand-400">^</span>
            <span>return_to_top()</span>
            <FiArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;