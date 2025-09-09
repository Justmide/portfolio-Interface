import React from 'react';
import { 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiMail, 
  FiArrowUp,
  FiPhone, 
  FiMapPin
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import logo from '../assets/Images/interface_logo.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#0f172a] to-black text-white pt-5 pb-8 px-4 sm:px-8 lg:px-16 border-t border-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-pink-600 blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-center"
          >
            <h3 className="flex flex-col items-center text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              <img 
                src={logo}
                className="w-[70px] mb-2" 
                alt="" 
              />
              <p>SkryptByMide</p>
            </h3>
            <p className="text-gray-400">
              Crafting digital experiences that inspire and deliver results.
            </p>
            <div className="flex space-x-4 justify-center">
              <motion.a 
                href="https://github.com/justmmide" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourusername" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/interface-i-b15357253" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:contact@skryptbymide.com" 
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-center"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 flex flex-col items-center">
              <li>
                <motion.a 
                  href="/" 
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="/projects" 
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="/contact" 
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-center"
          >
            <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
            <ul className="space-y-3 flex flex-col items-center">
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                React & Next.js
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                Tailwind CSS
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                Node.js
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-pink-500 rounded-full mr-2"></span>
                MongoDB
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col items-center"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-start gap-3">
                <FiMail className="text-purple-400 mt-1 flex-shrink-0" />
                <a href="mailto:contact@skryptbymide.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@skryptbymide.com.ng
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+2347088136059</span>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Ibadan, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} SkryptByMide. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <FiArrowUp className="text-purple-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;