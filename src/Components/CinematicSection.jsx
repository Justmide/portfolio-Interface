import React from 'react';
import { motion } from 'framer-motion';

const CinematicSection = ({ children, className = '', id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ 
        opacity: 0, 
        y: 45, 
        scale: 0.97,
        filter: 'blur(6px)',
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cinematic camera ease
      }}
      className={`relative ${className}`}
    >
      {/* Subtle cinematic horizon lens flare wipe on entry */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: [0, 0.6, 0], scaleX: [0, 1, 1] }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: delay + 0.1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-400 to-transparent pointer-events-none"
      />

      {children}
    </motion.section>
  );
};

export default CinematicSection;
