import React from 'react';
import { motion } from 'framer-motion';

const AppleScrollText = ({ 
  children, 
  className = '', 
  tag = 'h2',
  delay = 0 
}) => {
  const Component = motion[tag] || motion.h2;

  return (
    <Component
      initial={{ opacity: 0.25, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple signature ease
      }}
      className={`transition-colors duration-500 ${className}`}
    >
      {children}
    </Component>
  );
};

export default AppleScrollText;
