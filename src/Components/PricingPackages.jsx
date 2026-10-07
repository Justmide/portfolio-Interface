import React, { useState } from 'react';
import { FiCheck, FiArrowRight, FiZap, FiShield, FiBriefcase } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const PricingPackages = () => {
  const [currency, setCurrency] = useState('NGN'); // 'NGN' | 'USD'

  const packages = [
    {
      id: 'starter',
      name: 'Starter Business',
      tagline: 'Best for local service businesses & single landing pages',
      icon: FiZap,
      popular: false,
      price: {
        NGN: '₦180,000',
        USD: '$350',
      },
      timeline: '1 – 2 Weeks',
      features: [
        '1–3 clean, high-converting pages or blog',
        'WhatsApp click-to-chat integration',
        'Mobile-first responsive design',
        '1 professional business email',
        'Basic local Google SEO setup',
        'Free 1st month maintenance & cPanel',
      ],
      idealFor: 'Blogs, logistics brokers, interior designers, salons, single-service firms',
    },
    {
      id: 'growth',
      name: 'Business Growth',
      tagline: 'Most popular for established SMEs looking to win clients',
      icon: FiBriefcase,
      popular: true,
      price: {
        NGN: '₦350,000',
        USD: '$750',
      },
      timeline: '2 – 3 Weeks',
      features: [
        'Up to 7 custom designed high-speed pages',
        'WhatsApp instant quote generator & lead capture',
        'Up to 5 business emails (Zoho / Google Workspace)',
        'Google Business Profile & local SEO ranking',
        'Interactive services catalog & reviews section',
        'CDN + SSL security installation',
        'Free 3 months technical support & backup',
      ],
      idealFor: 'Schools, hotels, accounting firms, logistics fleets, clinics',
    },
    {
      id: 'enterprise',
      name: 'Custom Web App',
      tagline: 'For stores, booking engines, or custom business software',
      icon: FiShield,
      popular: false,
      price: {
        NGN: '₦650,000+',
        USD: '$1,400+',
      },
      timeline: '4 – 6 Weeks',
      features: [
        'Full custom full-stack application (React, Node, DB)',
        'Paystack, Flutterwave, Stripe & bank transfer checkout',
        'Admin dashboard for orders & enquiries',
        'Customer accounts & automated invoicing',
        'High-capacity cloud deployment',
        'Automated SMS / WhatsApp alerts',
        'Priority 24/7 developer support',
      ],
      idealFor: 'E-commerce brands, hotel booking systems, school portals',
    },
  ];

  const handleSelectPackage = (pkgName) => {
    const phoneNumber = '2347088136059';
    const message = `Hello Mide! I'm interested in the "${pkgName}" package (${currency}). Could we discuss this for my business?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-14 bg-black/90 relative overflow-hidden" id="packages">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-brand-400 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Simple, Transparent Packages
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            No hidden fees. Every project includes fast code, mobile optimization, and direct post-launch support.
          </p>

          {/* Developer Environment Currency Switch */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-[#0c0e18] border border-white/10 font-mono">
            <button
              type="button"
              onClick={() => setCurrency('NGN')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-300 ${
                currency === 'NGN'
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 border border-brand-400/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ₦ [NGN]
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-300 ${
                currency === 'USD'
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 border border-brand-400/50'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              $ [USD]
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
className={`
  relative flex flex-col rounded-2xl p-7 transition-all duration-500
  ${
    pkg.popular
      ? 'bg-white/[0.05] border border-brand-500/50 lg:-translate-y-2 lg:scale-[1.02]'
      : 'bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-white/[0.18]'
  }
  hover:-translate-y-1
`}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Icon + Timeline */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      pkg.popular
                        ? 'bg-brand-500/15 border border-brand-500/30 text-brand-400'
                        : 'bg-white/[0.04] border border-white/[0.08] text-gray-400'
                    }`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-600 uppercase tracking-wider">
                    {pkg.timeline}
                  </span>
                </div>

                {/* Name + Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {pkg.tagline}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/[0.06]">
                  <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {pkg.price[currency]}
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1.5">
                    {currency === 'NGN'
                      ? '50% upfront · 50% on launch'
                      : 'Milestone-based delivery'}
                  </p>
                </div>

                {/* Ideal For */}
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold block mb-2">
                    Ideal For
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-8 flex-grow">
                  <span className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold block mb-2">
                    What's Included
                  </span>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                      <FiCheck className="text-brand-400 mt-0.5 flex-shrink-0 text-sm" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Developer Deployment CTA */}
                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.name)}
                  className={`
                    w-full py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider
                    flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] group/btn
                    ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]'
                        : 'bg-[#0e1220] hover:bg-[#141a2e] text-gray-200 hover:text-white border border-white/10 hover:border-brand-500/50 shadow-md'
                    }
                  `}
                >
                  <span className="text-brand-300 font-bold">❯_</span>
                  <FaWhatsapp className="text-base text-emerald-300 group-hover/btn:scale-110 transition-transform" />
                  <span>Deploy {pkg.name.split(' ')[0]}</span>
                  <FiArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Inquiry */}
        <div
          className="mt-12 text-center p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
          data-aos="fade-up"
        >
          <p className="text-sm text-gray-400 mb-3">
            Need something different — a custom portal, multi-branch platform, or site redesign?
          </p>
          <a
            href="https://wa.me/2347088136059?text=Hello%20Mide%2C%20I%20have%20a%20custom%20website%20project%20and%20need%20a%20tailored%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm transition-colors"
          >
            Request a Custom Quote
            <FiArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;