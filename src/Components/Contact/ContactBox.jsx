import React, { useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactBox = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(192, 132, 252, 0.4)',
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div 
      ref={ref}
      className="w-full bg-gradient-to-br from-gray-900 to-black py-5 px-4 sm:px-8 lg:px-6 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-pink-600 blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-blue-500 blur-3xl opacity-15 animate-pulse delay-500"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Side - Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-2/5"
          >
            <motion.h2 
              className="text-[18px] text-center lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent mb-8"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Let's Create Something Extraordinary Together
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-black/20 backdrop-blur-md rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                whileHover={{ y: -5, backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20">
                  <FiMail className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">contact@skryptbymide.com.ng</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-black/20 backdrop-blur-md rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                whileHover={{ y: -5, backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20">
                  <FiPhone className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm">+2347088136059</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-black/20 backdrop-blur-md rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                whileHover={{ y: -5, backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-700/20">
                  <FiMapPin className="text-pink-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-300 text-sm">Ibadan, Nigeria</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Divider - Subtle gradient line */}
          <div className="hidden lg:block h-80 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>

          {/* Right Side - CTA */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-8"
          >
            <motion.h3 
              className="text-2xl font-bold text-white text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 text-center lg:text-left leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Have an idea you want to bring to life or need expert consultation? Let's discuss how we can turn your vision into reality.
            </motion.p>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full mt-4"
            >
              <button
                onClick={() => navigate('/contact')}
                className="group relative w-full px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl overflow-hidden shadow-lg shadow-purple-500/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FiMessageSquare className="text-lg" />
                  Start Conversation
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
              </button>
            </motion.div>

            <motion.div 
              className="mt-4 flex items-center gap-3 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-600/50"></div>
              <span className="text-[12px] lg:text-[15px]">Usually responds within 24 hours</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactBox;