import React, { useState } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) 
      newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) 
      newErrors.message = 'Message is required';
    
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

  return (
    <div className="w-full mt-[118px] p-4 bg-gradient-to-b from-black via-[#0f172a] to-black text-white flex flex-col lg:flex-row items-center justify-center px-6 py-10 relative overflow-hidden min-h-screen">
      {/* Animated Gradient Light Beams */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl animate-pulse top-20 left-[-100px] rounded-full" />
        <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-20 blur-2xl animate-pulse delay-200 top-[60%] right-[-100px] rounded-full" />
      </div>

      {/* Left Side - Contact Info */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center z-10 mb-10 lg:mb-0"
      >
        <div className="text-center lg:text-left max-w-md">
          <h2 className="text-[20px] lg:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-300 mb-8 text-[16px]">
            Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-500/20">
                <FiPhone className="text-purple-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call me at</p>
                <p className="text-white">+2347088136059</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-pink-500/20">
                <FiMail className="text-pink-400 text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email me at</p>
                <p className="text-white">info@skryptbymide.com</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 p-2 lg:p-8 flex justify-center z-10"
      >
        <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-3 lg:p-8 shadow-xl">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">I'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Me a Message</h3>
              <form 
                action="https://formsubmit.co/oyediranolumide97@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Hidden Fields */}
                <input type="hidden" name="_subject" value="New message from portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className={`pl-10 w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.name ? 'border-red-500/50' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500`}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className={`pl-10 w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500/50' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pt-3 pl-3 flex items-start pointer-events-none">
                      <FiMessageSquare className="text-gray-500" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Your Message"
                      required
                      className={`pl-10 w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.message ? 'border-red-500/50' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500`}
                    ></textarea>
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;