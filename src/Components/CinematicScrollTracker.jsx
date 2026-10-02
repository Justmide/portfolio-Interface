import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CinematicScrollTracker = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* 1. Cinematic Anamorphic Top Progress Beam (Laser Horizon Line) */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-brand-400 to-white origin-left relative shadow-[0_0_12px_#34d399]"
          style={{ scaleX: smoothProgress }}
        >
          {/* Laser Comet Head Glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#ffffff,0_0_20px_#34d399]" />
        </motion.div>
      </div>

      {/* 2. Cinematic Lens Vignette (Subtle 2.39:1 Anamorphic Movie Depth) */}
      <div 
        className="fixed inset-0 pointer-events-none z-[11] shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" 
        style={{ opacity: 0.6 }}
      />

      {/* 3. Movie HUD Telemetry Widget (Bottom-Left Corner) */}
      <div className="fixed bottom-5 left-5 z-40 pointer-events-none hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-gray-400 select-none shadow-2xl">
        <span className="flex h-1.5 w-1.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400"></span>
        </span>
        <span className="text-gray-300 font-bold">WARP DEPTH:</span>
        <span className="text-brand-400 font-bold tabular-nums min-w-[28px]">
          {scrollPercentage.toString().padStart(2, '0')}%
        </span>
      </div>
    </>
  );
};

export default CinematicScrollTracker;
