import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', type: 'route', path: '/' },
    { name: 'Projects', type: 'route', path: '/projects' },
    { name: 'Services', type: 'hash', targetId: 'services' },
    { name: 'Packages', type: 'hash', targetId: 'packages' },
    { name: 'FAQs', type: 'hash', targetId: 'faq' },
    { name: 'Contact', type: 'route', path: '/contact' },
  ];

  const handleNavClick = (item) => {
    setMenuOpen(false);

    if (item.type === 'route') {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.type === 'hash') {
      if (location.pathname === '/') {
        const el = document.getElementById(item.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${item.targetId}`);
      }
    }
  };

  const gotoHome = () => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const message = 'Hello Mide! I came across your portfolio and wanted to discuss a website for my business.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleTikTok = () => {
    window.open('https://www.tiktok.com/@skryptbymide', '_blank');
  };

  return (
    <nav className="w-full fixed top-0 left-0 px-4 sm:px-8 lg:px-14 py-3 bg-black/85 backdrop-blur-xl z-50 border-b border-white/[0.08] shadow-lg shadow-black/80 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo only */}
        <button
          type="button"
          onClick={gotoHome}
          aria-label="Go to homepage"
          className="flex items-center focus:outline-none group flex-shrink-0"
        >
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7 items-center">
            {navItems.map((item) => {
              const isActive = item.type === 'route' && location.pathname === item.path;

              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item)}
                    className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-brand-400'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-400 rounded-full shadow-[0_0_8px_#34d399]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleTikTok}
              aria-label="Follow on TikTok"
              title="Follow on TikTok"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-gray-400 hover:text-white transition-all duration-200"
            >
              <FaTiktok className="text-sm" />
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="relative group overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-600 shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.55)] transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-[11px] bg-[#0c0e18] group-hover:bg-[#12162a] transition-colors">
                <span className="font-mono text-brand-400 font-bold text-xs">❯_</span>
                <FaWhatsapp className="text-emerald-400 text-sm group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-white">
                  Chat With Dev
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden fixed top-[67px] left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] flex flex-col gap-1 p-6 shadow-2xl animate-fadeIn">
          {navItems.map((item) => {
            const isActive = item.type === 'route' && location.pathname === item.path;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`py-3 px-4 rounded-xl text-left font-medium transition-all ${
                  isActive
                    ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                    : 'text-gray-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {item.name}
              </button>
            );
          })}

          <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 text-white rounded-xl font-mono uppercase font-bold text-xs tracking-wider shadow-lg shadow-brand-500/25 transition-all active:scale-[0.98]"
            >
              <span className="font-mono text-emerald-300">❯_</span>
              <FaWhatsapp className="text-base text-emerald-300" />
              <span>Connect on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                handleTikTok();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#0d101a] hover:bg-[#141829] border border-white/10 text-gray-300 hover:text-white rounded-xl font-mono uppercase text-xs tracking-wider transition-all"
            >
              <FaTiktok className="text-sm" />
              <span>DevLogs on TikTok</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;