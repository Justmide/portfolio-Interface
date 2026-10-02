import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiTrendingUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: 'Adetunji Babajide & Co.',
      role: 'Chartered Accountants',
      result: '98% Client Retention',
      quote:
        'Mide delivered a website that reflects the rigour we bring to every audit. Our clients now find us online with confidence.',
      site: 'adetunjibabajideandco.com',
    },
    {
      name: 'SkyBridge Pathways Global',
      role: 'Logistics & Delivery',
      result: '1,000+ Businesses',
      quote:
        'Real-time tracking and a clean mobile experience. The site works as hard as our couriers do.',
      site: 'skybridgepathwayglobal.com',
    },
    {
      name: 'E-Travel Agent',
      role: 'Visa & Immigration',
      result: '12,000+ Visas',
      quote:
        'Premium, trustworthy, and easy to navigate. The consultation booking flow boosted our conversion rate.',
      site: 'e-travelagent.co.uk',
    },
    {
      name: 'SpedEveryday Autism Support',
      role: 'Healthcare & Coaching',
      result: '500+ Families',
      quote:
        'A warm, professional site families trust immediately. Our parent community has grown steadily since launch.',
      site: 'spedeveryday.com',
    },
    {
      name: 'Dynamic Cleaning Services',
      role: 'Commercial Cleaning',
      result: '+42% Enquiries',
      quote:
        'Booking flow is effortless for UK clients. Automated quote requests save our team hours every week.',
      site: 'dynamiccleaningexpert.co.uk',
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.85;
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const message = "Hello Mide! I saw the work you did for your clients and I'd like to discuss a website for my business.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-14 bg-black/90 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header + Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10" data-aos="fade-up">
          <div>
            <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-brand-400 mb-3">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Trusted by Businesses
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group snap-start flex-shrink-0 w-[85vw] sm:w-[360px] flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-brand-500/40 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              {/* Result Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-mono uppercase tracking-wider mb-5 self-start">
                <FiTrendingUp className="text-[9px]" />
                {item.result}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-white/[0.06]">
                <h4 className="text-white font-bold text-sm tracking-tight">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-gray-500 text-xs">{item.role}</p>
                  <span className="text-[10px] font-mono text-gray-600">
                    {item.site}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand-500/25"
          >
            <FaWhatsapp className="text-base" />
            <span>Start Your Project</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;