import React from 'react';
import { motion } from 'framer-motion';

const AppleScrollSection = ({ children, className = '', id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ 
        opacity: 0, 
        y: 40,
        scale: 0.98,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple signature smooth ease
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default AppleScrollSection;
