import React, { useState } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../Components/SEO';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SME Website',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      e.target.submit();
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '2347088136059';
    const message = "Hello Mide! I'd like to get in touch about a website for my business.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <SEO
        title="Contact Olumide Oyediran | Get a Website Quote · Skryptvolt"
        description="Get in touch with Olumide Oyediran for a fast, modern website for your business. Based in Ibadan, serving clients in Lagos, Abuja, UK, US & worldwide. Instant WhatsApp chat, email, and project brief form."
        path="/contact"
        keywords="hire web developer Ibadan, contact web designer Nigeria, website quote Nigeria, SME web design consultation, WhatsApp website developer"
      />
      <div className="w-full mt-[75px] pt-12 pb-20 bg-gradient-to-b from-black/90 via-[#090a0f]/90 to-black/90 text-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-14 relative min-h-screen">
      
      {/* Background accents (No pink) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-80px] left-1/3 w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
            Get in Touch With Mide
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-quicksand">
            Have a project in mind, need a quote, or want to modernize your company's online presence? I reply promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Fast WhatsApp Option */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            
            {/* Instant WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2">
                <FaWhatsapp className="text-base" />
                <span>Fastest Response Channel</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Prefer Instant Chat?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-quicksand mb-5">
                Nigerian business owners usually prefer quick WhatsApp updates. Send a direct message and let's get your questions answered.
              </p>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="group relative w-full overflow-hidden rounded-xl p-[1px] bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-600 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.55)] transition-all active:scale-[0.98]"
              >
                <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-[11px] bg-[#0c0e18] group-hover:bg-[#12162a] transition-colors">
                  <span className="font-mono text-brand-400 font-bold text-xs">❯_</span>
                  <FaWhatsapp className="text-emerald-400 text-lg group-hover:scale-110 transition-transform" />
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-white">
                    Connect on WhatsApp [+234 708 813 6059]
                  </span>
                </div>
              </button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 mt-3">
                <FiClock className="text-brand-400" />
                <span>Usually replies within a few hours on WhatsApp</span>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Official Brand Email</p>
                  <a href="mailto:oyediranolumide97@gmail.com" className="text-sm font-semibold text-white hover:text-brand-400 transition-colors">
                    oyediranolumide97@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Direct Phone Line</p>
                  <p className="text-sm font-semibold text-white">
                    +234 708 813 6059
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Headquarters</p>
                  <p className="text-sm font-semibold text-white">
                    Ibadan, Nigeria · Full-Stack Web Development
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <FaTiktok className="text-lg" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">TikTok</p>
                  <a 
                    href="https://www.tiktok.com/@skryptbymide" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-white hover:text-gray-300 transition-colors"
                  >
                    @skryptbymide
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Project Request Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="p-7 sm:p-9 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-500/30 text-brand-400 text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
                     Thank you. Your inquiry has been sent to oyediranolumide97@gmail.com. I will review it and reply shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-semibold text-xs"
                  >
                    <FaWhatsapp />
                    <span>Also Follow Up on WhatsApp</span>
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-1">Send a Detailed Project Brief</h3>
                  <p className="text-xs text-gray-400 mb-6">
                    Fill out the form below and it will be sent directly to my business email.
                  </p>

                  <form
                    action="https://formsubmit.co/oyediranolumide97@gmail.com"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Business Website Inquiry - Skryptvolt" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://skryptvolt.vercel.app/thankYou" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Full Name *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <FiUser />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Tunde Adeyemi"
                            required
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white transition-colors`}
                          />
                        </div>
                        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <FiMail />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. tunde@company.com"
                            required
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white transition-colors`}
                          />
                        </div>
                        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">Phone / WhatsApp Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <FiPhone />
                          </div>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. +234 801 234 5678"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Category */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">Service Needed</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#12141c] border border-white/10 text-white text-sm focus:outline-none focus:border-white transition-colors"
                        >
                          <option value="SME Business Website">SME Business Website</option>
                          <option value="Logistics Website">Logistics / Transport Website</option>
                          <option value="School / Hotel Portal">School / Hotel / Hospitality Website</option>
                          <option value="E-Commerce / Online Store">E-Commerce / Online Store</option>
                          <option value="Website Redesign & Speed Optimization">Website Redesign & Speed Optimization</option>
                          <option value="cPanel & Business Email Setup">cPanel & Business Email Setup</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Project Details / Message *</label>
                      <div className="relative">
                        <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                          <FiMessageSquare />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Tell me about your business, what pages or features you need, and any launch target date..."
                          required
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white transition-colors`}
                        ></textarea>
                      </div>
                      {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.3)] hover:shadow-[0_0_35px_rgba(0,102,255,0.6)] transition-all duration-200 mt-2 disabled:opacity-50 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>[ EXEC ] Transmitting Brief...</span>
                      ) : (
                        <>
                          <span className="text-emerald-300">❯_</span>
                          <FiSend className="text-base" />
                          <span>Transmit Message [yediranolumide97@gmail.com]</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-400 text-center pt-2">
                      🔒 Your details are 100% private. Usually replies within a few hours on WhatsApp.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  );
};

export default ContactUs;