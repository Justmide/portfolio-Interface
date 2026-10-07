import React, { useState } from 'react';
import { FiChevronDown, FiHelpCircle, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { defaultFaqs } from './SEO';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const message = "Hello Mide! I have a question about getting a website built for my business.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-14 bg-black/90 relative overflow-hidden" id="faq">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-brand-400 font-medium mb-3">
            <FiHelpCircle />
            <span>Client Questions Answered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-quicksand">
            Everything you need to know about pricing, delivery timeline, WhatsApp integration, and business emails.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5" data-aos="fade-up">
          {defaultFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-300 overflow-hidden bg-white/[0.02] border-white/[0.08] hover:border-brand-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-brand-500 text-white rotate-180'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    <FiChevronDown className="text-base" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed font-quicksand border-t border-white/[0.04]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Unanswered Questions */}
        <div
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
          data-aos="fade-up"
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-quicksand">
              Message me directly on WhatsApp and get a prompt answer within a few hours.
            </p>
          </div>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-brand-500/25"
          >
            <FaWhatsapp className="text-base" />
            <span>Ask Mide on WhatsApp</span>
            <FiArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
