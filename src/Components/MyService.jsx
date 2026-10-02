import React from 'react';
import {
  FiSmartphone,
  FiMessageCircle,
  FiMail,
  FiZap,
  FiSearch,
  FiServer,
  FiArrowRight,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const MyService = () => {
  const services = [
    {
      icon: FiSmartphone,
      title: 'Mobile-First Websites',
      description:
        'Sites built for schools, logistics, hotels, and studios. Optimized for Nigerian mobile speeds with clean, modern design.',
      badge: 'High Conversion',
    },
    {
      icon: FiMessageCircle,
      title: 'WhatsApp Lead Funnels',
      description:
        '1-click WhatsApp buttons, quote calculators, and instant booking alerts sent straight to your phone.',
      badge: 'Local Favorite',
    },
    {
      icon: FiMail,
      title: 'Business Email Setup',
      description:
        'Branded addresses like info@yourcompany.com via Zoho, Google Workspace, or cPanel webmail.',
      badge: 'Brand Credibility',
    },
    {
      icon: FiZap,
      title: 'Sub-2-Second Loading',
      description:
        'Optimized images, lightweight code, and global CDN delivery — opens fast even on spotty data.',
      badge: 'Speed Optimized',
    },
    {
      icon: FiSearch,
      title: 'Local Google SEO',
      description:
        'Structured metadata and Google Business setup so customers in Ibadan, Lagos, Abuja, or PH find you first.',
      badge: 'Local Reach',
    },
    {
      icon: FiServer,
      title: 'Hosting & cPanel Help',
      description:
        'Domain registration (.com, .ng), cPanel config, free SSL, and dependable continuous hosting.',
      badge: 'Peace of Mind',
    },
  ];

  const handleWhatsApp = (serviceTitle) => {
    const phoneNumber = '2347088136059';
    const message = `Hello Mide! I'm interested in your "${serviceTitle}" service for my business. Can we talk?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-14 bg-black/90 relative overflow-hidden" id="services">
      
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-brand-400 mb-4">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Services for Growing Businesses
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Fast websites, WhatsApp integration, business emails, and full deployment support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-brand-500/40 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-5 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                  <Icon className="text-xl" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2.5 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Badge + Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-600">
                    {service.badge}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleWhatsApp(service.title)}
                    aria-label={`Inquire about ${service.title}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    <FaWhatsapp className="text-sm" />
                    <FiArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
          data-aos="fade-up"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
              Have a special project in mind?
            </h4>
            <p className="text-sm text-gray-500">
              From design concept to domain setup and final launch — I handle it all.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleWhatsApp('Custom Project')}
            className="flex-shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand-500/25"
          >
            <FaWhatsapp className="text-base" />
            <span>Discuss on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default MyService;