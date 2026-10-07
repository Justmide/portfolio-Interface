import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCpu,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiZap,
  FiMessageSquare,
  FiDollarSign,
  FiShield,
  FiRotateCcw,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Pre-configured industry blueprints tailored for Nigerian and international SME clients
// Timelines realistically scale with project size: Minimum blog is 1-2 weeks, larger SME/apps scale accordingly
export const INDUSTRY_PRESETS = [
  {
    id: 'blog',
    name: '📝 Blog & Content Site',
    label: 'Blog / Media / Writer',
    recommendedPackage: 'Starter Business',
    priceNGN: '₦180,000',
    priceUSD: '$350',
    timeline: '1 – 2 Weeks',
    keyFeatures: [
      'Clean typography & reader-first responsive layout',
      'Categorized article directory with instant search',
      'Newsletter email subscription & lead capture',
      'Social share triggers & WhatsApp broadcast links',
      'SEO schema markup for Google Discover ranking',
    ],
    growthTip:
      'A professional content blog requires a minimum of 1 week for proper SEO architecture, category indexing, and mobile readability optimization.',
    summary:
      'A fast, search-optimized publishing platform designed for writers, journalists, and niche bloggers to build a loyal readership.',
  },
  {
    id: 'logistics',
    name: '🚚 Logistics & Courier',
    label: 'Logistics / Transport',
    recommendedPackage: 'Business Growth',
    priceNGN: '₦350,000',
    priceUSD: '$750',
    timeline: '2 – 3 Weeks',
    keyFeatures: [
      'Real-time WhatsApp shipment quote calculator',
      'Mobile-first shipment tracking & hub directory',
      'Sub-2s mobile loading for all mobile connections',
      'Branded email (dispatch@yourdomain.com)',
      'Local Google Maps & Search ranking for your city',
    ],
    growthTip:
      'Logistics clients convert 3x higher when they can verify delivery rates and initiate pickups on WhatsApp in under 30 seconds.',
    summary:
      'A high-trust logistics web portal designed to capture freight inquiries, reduce support calls, and automate dispatch requests straight into WhatsApp.',
  },
  {
    id: 'school',
    name: '🏫 School & Education',
    label: 'School / Academy',
    recommendedPackage: 'Business Growth',
    priceNGN: '₦350,000',
    priceUSD: '$750',
    timeline: '2 – 4 Weeks',
    keyFeatures: [
      'Interactive online admissions application form',
      'Virtual school tour, curriculum & calendar showcase',
      'Direct WhatsApp admissions hotline for parents',
      'Professional staff emails (admissions@school.edu.ng)',
      'High-speed mobile performance with zero lag',
    ],
    growthTip:
      'Parents judge school credibility heavily by website modernism and speed. Having instant WhatsApp consultation speeds up term enrollments.',
    summary:
      'A prestigious academic website that instills parental trust, streamlines termly admissions, and establishes educational authority.',
  },
  {
    id: 'hotel',
    name: '🏨 Hotel & Hospitality',
    label: 'Hotel / Shortlet / Lounge',
    recommendedPackage: 'Custom Web App / Growth',
    priceNGN: '₦380,000 – ₦650,000',
    priceUSD: '$800 – $1,400',
    timeline: '3 – 4 Weeks',
    keyFeatures: [
      'Interactive room / suite showcase with high-res galleries',
      'Direct WhatsApp reservation engine with date picker',
      'QR digital menu system for dining & lounge',
      'Google Maps directions & local tourism SEO',
      'Paystack / Card / Bank transfer payment integration',
    ],
    growthTip:
      'Direct website bookings bypass OTA commission fees (saving 15-25% per booking) and deposit payments directly into your bank account.',
    summary:
      'A luxury booking & visual experience that turns browsing travelers into confirmed room guests with zero intermediary commissions.',
  },
  {
    id: 'ecommerce',
    name: '🛍️ E-Commerce & Retail',
    label: 'Online Store / Fashion',
    recommendedPackage: 'Custom Web App',
    priceNGN: '₦450,000 – ₦650,000',
    priceUSD: '$950 – $1,400',
    timeline: '3 – 5 Weeks',
    keyFeatures: [
      'Dynamic product catalog with instant search & filters',
      'Automated Paystack, Flutterwave & bank transfer checkout',
      '1-Click "Order on WhatsApp" alternative for quick shoppers',
      'Automated customer order receipt & stock management',
      'Superfast mobile checkout optimized for mobile data',
    ],
    growthTip:
      'Giving shoppers both Paystack card checkout AND direct WhatsApp checkout increases conversion rates by over 45%.',
    summary:
      'A sales-driven e-commerce platform that sells 24/7, accepts multi-currency payments, and links directly with your smartphone inventory.',
  },
  {
    id: 'corporate',
    name: '💼 Corporate & Consulting',
    label: 'Audit / Law / Consulting',
    recommendedPackage: 'Business Growth',
    priceNGN: '₦350,000',
    priceUSD: '$750',
    timeline: '2 – 3 Weeks',
    keyFeatures: [
      'Corporate compliance, partner bios & accreditation badges',
      'Secure consultation brief booking funnel',
      'Up to 5 Google Workspace / Zoho business emails',
      'Client document portal & encrypted contact forms',
      'Top-tier Google search visibility for corporate keywords',
    ],
    growthTip:
      'High-net-worth corporate clients expect instant credibility, verified credentials, and prompt confidential communication.',
    summary:
      'An elite corporate presence engineered to position your firm at the pinnacle of industry trust, winning high-ticket retainer contracts.',
  },
  {
    id: 'healthcare',
    name: '🏥 Healthcare & Clinic',
    label: 'Clinic / Dental / Care',
    recommendedPackage: 'Business Growth',
    priceNGN: '₦350,000',
    priceUSD: '$750',
    timeline: '2 – 4 Weeks',
    keyFeatures: [
      'Emergency WhatsApp hotline & appointment scheduler',
      'Doctor & specialist profiles with treatment guides',
      'Local "clinic near me" Google SEO optimization',
      'Patient privacy assurance & SSL security badge',
      'Clear consultation fee structure & inquiry forms',
    ],
    growthTip:
      'Patients search on their phones during urgent times; a website that loads in under 2 seconds with immediate WhatsApp calling wins the patient.',
    summary:
      'A compassionate, authoritative clinic website designed to build patient trust, simplify appointment scheduling, and guide emergencies.',
  },
  {
    id: 'startup',
    name: '🚀 Startup & Tech Service',
    label: 'SaaS / Tech / Agency',
    recommendedPackage: 'Starter or Custom',
    priceNGN: '₦250,000 – ₦500,000',
    priceUSD: '$550 – $1,100',
    timeline: '3 – 6 Weeks',
    keyFeatures: [
      'Modern dark-mode UI with sleek framer-motion micro-interactions',
      'Interactive product demo or feature matrix',
      'Waitlist / lead capture form with instant email alerts',
      'Investor-ready metrics and testimonial showcase',
      'Global CDN deployment with sub-2s worldwide latency',
    ],
    growthTip:
      'First impressions make or break tech startups. A polished, ultra-responsive site attracts both early adopters and serious investors.',
    summary:
      'A high-tech digital landing experience that demonstrates cutting-edge capability and converts curious visitors into early subscribers.',
  },
];

const AISuggestionsSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRY_PRESETS[0]);
  const [customInput, setCustomInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeBlueprint, setActiveBlueprint] = useState(INDUSTRY_PRESETS[0]);
  const [isCustom, setIsCustom] = useState(false);

  const handleSelectIndustry = (preset) => {
    setIsCustom(false);
    setSelectedIndustry(preset);
    setIsGenerating(true);
    setTimeout(() => {
      setActiveBlueprint(preset);
      setIsGenerating(false);
    }, 250);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsGenerating(true);
    setIsCustom(true);

    const lower = customInput.toLowerCase();
    let matched = INDUSTRY_PRESETS[1]; // default logistics / SME

    if (
      lower.includes('blog') ||
      lower.includes('content') ||
      lower.includes('writer') ||
      lower.includes('article') ||
      lower.includes('news') ||
      lower.includes('landing') ||
      lower.includes('single page')
    ) {
      matched = INDUSTRY_PRESETS[0]; // Blog: 1 - 2 Weeks
    } else if (
      lower.includes('school') ||
      lower.includes('academy') ||
      lower.includes('tutor') ||
      lower.includes('education') ||
      lower.includes('student')
    ) {
      matched = INDUSTRY_PRESETS[2]; // School: 2 - 4 Weeks
    } else if (
      lower.includes('hotel') ||
      lower.includes('shortlet') ||
      lower.includes('lounge') ||
      lower.includes('club') ||
      lower.includes('restaurant') ||
      lower.includes('food')
    ) {
      matched = INDUSTRY_PRESETS[3]; // Hotel: 3 - 4 Weeks
    } else if (
      lower.includes('shop') ||
      lower.includes('store') ||
      lower.includes('fashion') ||
      lower.includes('sell') ||
      lower.includes('cloth') ||
      lower.includes('product') ||
      lower.includes('ecom')
    ) {
      matched = INDUSTRY_PRESETS[4]; // E-Commerce: 3 - 5 Weeks
    } else if (
      lower.includes('law') ||
      lower.includes('audit') ||
      lower.includes('account') ||
      lower.includes('tax') ||
      lower.includes('consult') ||
      lower.includes('firm')
    ) {
      matched = INDUSTRY_PRESETS[5]; // Corporate: 2 - 3 Weeks
    } else if (
      lower.includes('health') ||
      lower.includes('clinic') ||
      lower.includes('hospital') ||
      lower.includes('dental') ||
      lower.includes('doctor') ||
      lower.includes('med')
    ) {
      matched = INDUSTRY_PRESETS[6]; // Healthcare: 2 - 4 Weeks
    } else if (
      lower.includes('tech') ||
      lower.includes('app') ||
      lower.includes('software') ||
      lower.includes('saas') ||
      lower.includes('agency')
    ) {
      matched = INDUSTRY_PRESETS[7]; // Tech SaaS: 3 - 6 Weeks
    } else {
      matched = {
        id: 'custom',
        name: `💡 ${customInput.trim().slice(0, 32)}`,
        label: customInput.trim().slice(0, 25),
        recommendedPackage: 'Business Growth',
        priceNGN: '₦350,000',
        priceUSD: '$750',
        timeline: '2 – 3 Weeks',
        keyFeatures: [
          'Tailored responsive layout built for your industry niche',
          '1-Click WhatsApp lead generation funnel',
          'Sub-2s mobile loading speed guarantee',
          'Branded business email setup',
          'Local Google Search & Maps listing optimization',
        ],
        growthTip:
          'Project timelines are calculated based on project depth. Multi-page sites need 2–3 weeks for bespoke UI design, copywriting, and responsive device testing.',
        summary: `Custom high-converting digital platform tailored for "${customInput.trim()}". Engineered for fast load times, local search ranking, and instant WhatsApp customer acquisition.`,
      };
    }

    setTimeout(() => {
      setSelectedIndustry(matched);
      setActiveBlueprint(matched);
      setIsGenerating(false);
    }, 350);
  };

  const handleReset = () => {
    setIsCustom(false);
    setSelectedIndustry(INDUSTRY_PRESETS[0]);
    setActiveBlueprint(INDUSTRY_PRESETS[0]);
    setCustomInput('');
  };

  const handleSendToWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const plan = activeBlueprint;
    const businessName = plan?.name || 'My Business';
    const message = `Hello Mide! I just used your AI Website Blueprint Generator on your portfolio for: "${businessName}".

Here is the blueprint estimate:
• Recommended Package: ${plan?.recommendedPackage || 'Business Growth'} (${plan?.priceNGN || '₦350,000'} / ${plan?.priceUSD || '$750'})
• Estimated Turnaround: ${plan?.timeline || '2 – 3 Weeks'}
• Core Features:
  - ${plan?.keyFeatures?.[0] || '1-Click WhatsApp Lead Funnel'}
  - ${plan?.keyFeatures?.[1] || 'Sub-2.0s Mobile Speed Optimization'}
  - ${plan?.keyFeatures?.[2] || 'Local Google Search Ranking'}
  - ${plan?.keyFeatures?.[3] || 'Branded Business Email'}

I'd like to get this website built for my business. Can we discuss kicking off?`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="ai-advisor" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-xs font-mono uppercase tracking-wider mb-4">
          <FiCpu className="text-sm animate-pulse" />
          <span>Interactive AI Project Advisor</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Instant Website Blueprint &amp; Cost Estimator
        </h2>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-quicksand">
          Select your industry or type in your specific project vision. Our interactive AI advisor maps out your recommended architecture, turnaround timeline, and exact transparent quote.
        </p>
      </div>

      {/* Main Grid: Left Selector & Right Dynamic Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Industry Presets & Custom Input Form */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-[#0c0e17]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
                <FiZap className="text-brand-400" />
                <span>1. Choose Business Industry</span>
              </span>
              {isCustom && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-brand-400 hover:text-brand-300 flex items-center gap-1 transition-colors"
                >
                  <FiRotateCcw className="text-xs" />
                  <span>Reset to Presets</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {INDUSTRY_PRESETS.map((preset, idx) => {
                const isSelected = !isCustom && selectedIndustry?.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectIndustry(preset)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left font-mono transition-all group ${
                      isSelected
                        ? 'bg-brand-500/20 border-brand-500 shadow-[0_0_15px_rgba(0,102,255,0.3)]'
                        : 'bg-[#0a0d18] hover:bg-[#12162a] border-white/[0.08] hover:border-brand-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className={`text-[10px] font-bold ${isSelected ? 'text-brand-400' : 'text-gray-500 group-hover:text-gray-400'}`}>
                        {String(idx + 1).padStart(2, '0')}:
                      </span>
                      <span
                        className={`text-xs font-semibold truncate ${
                          isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}
                      >
                        {preset.name.replace(/^[^\s]+\s/, '')}
                      </span>
                    </div>
                    <FiArrowRight
                      className={`text-xs transition-transform flex-shrink-0 ml-1 ${
                        isSelected
                          ? 'text-brand-400 translate-x-0.5'
                          : 'text-gray-600 group-hover:text-brand-400 group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-white/[0.08]" />
              <span className="flex-shrink mx-3 text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                // Or Enter Bespoke Spec
              </span>
              <div className="flex-grow border-t border-white/[0.08]" />
            </div>

            {/* Custom Description Form */}
            <form onSubmit={handleCustomSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                  &gt;_ Describe your project or system requirements:
                </label>
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="e.g. Interior design studio in Lagos with client gallery and Paystack booking..."
                  className="w-full px-4 py-3 rounded-xl bg-[#090b14] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-brand-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={!customInput.trim()}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 disabled:opacity-40 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,102,255,0.25)] active:scale-[0.99]"
              >
                <span>❯_</span>
                <FiZap />
                <span>Compile Custom Blueprint</span>
              </button>
            </form>

            <div className="mt-4 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-gray-400 flex items-start gap-2.5">
              <FiShield className="text-brand-400 text-sm mt-0.5 flex-shrink-0" />
              <span>
                All blueprints include full responsive design, WhatsApp lead funnels, business email, and transparent Nigerian (NGN) &amp; Global (USD) cost estimates.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Dynamic Blueprint Card */}
        <div className="lg:col-span-7">
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e111d] via-[#090b12] to-[#07080d] border border-brand-500/30 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Subtle radial corner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Generating Overlay State */}
            {isGenerating && (
              <div className="py-24 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 animate-spin">
                  <FiZap className="text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Generating Strategic Architecture...
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">
                    Analyzing funnel conversions · Calculating realistic timeline &amp; quote
                  </p>
                </div>
              </div>
            )}

            {/* Active Blueprint Content */}
            {!isGenerating && activeBlueprint && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBlueprint.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 relative z-10"
                >
                  {/* Blueprint Header */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-500/15 via-white/[0.03] to-transparent border border-brand-500/30">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-1.5">
                        <FiCpu className="text-xs" />
                        <span>Recommended Blueprint</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Sub-2.0s Speed Guarantee
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                      {activeBlueprint.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-quicksand">
                      {activeBlueprint.summary}
                    </p>
                  </div>

                  {/* Timeline & Investment Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                        <FiDollarSign className="text-brand-400" />
                        <span>Estimated Investment</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {activeBlueprint.priceNGN}
                      </div>
                      <div className="text-xs font-mono text-gray-400 mt-0.5">
                        {activeBlueprint.priceUSD} · {activeBlueprint.recommendedPackage}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                        <FiClock className="text-brand-400" />
                        <span>Estimated Launch Timeline</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {activeBlueprint.timeline}
                      </div>
                      <div className="text-xs font-mono text-gray-400 mt-0.5">
                        From project kickoff to live deploy
                      </div>
                    </div>
                  </div>

                  {/* Recommended Core Features */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                      <span>Included Core Stack &amp; Conversion Features:</span>
                    </h4>
                    <div className="space-y-2.5">
                      {activeBlueprint.keyFeatures.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-[13px] text-gray-200"
                        >
                          <FiCheckCircle className="text-brand-400 text-sm mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Growth Tip */}
                  <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/25">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-300 mb-1.5">
                      <FiZap className="text-sm" />
                      <span>Conversion &amp; Growth Strategy</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-quicksand">
                      {activeBlueprint.growthTip}
                    </p>
                  </div>

                  {/* High-Converting Developer Action CTAs */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.35)] hover:shadow-[0_0_35px_rgba(0,102,255,0.6)] transition-all duration-300 active:scale-[0.99] group/wa"
                    >
                      <span className="text-emerald-300 font-bold">❯_</span>
                      <FaWhatsapp className="text-xl text-emerald-300 group-hover/wa:scale-110 transition-transform" />
                      <span>Push Blueprint to WhatsApp</span>
                    </button>

                    <div className="flex gap-3">
                      <a
                        href="mailto:oyediranolumide97@gmail.com?subject=Website%20Blueprint%20Inquiry%20from%20Portfolio"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#090b14] hover:bg-[#111526] border border-white/10 hover:border-brand-500/40 text-xs font-mono font-semibold text-gray-300 hover:text-white uppercase tracking-wider transition-colors"
                      >
                        <span className="text-gray-500">//</span>
                        <FiMessageSquare className="text-xs" />
                        <span>Inquire via Email</span>
                      </a>

                      {isCustom && (
                        <button
                          type="button"
                          onClick={handleReset}
                          className="flex-1 py-3 px-4 rounded-xl bg-[#090b14] hover:bg-[#111526] border border-white/10 hover:border-brand-500/40 text-xs font-mono font-semibold text-gray-300 hover:text-white uppercase tracking-wider transition-colors"
                        >
                          <span>// Reset Specs</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuggestionsSection;
