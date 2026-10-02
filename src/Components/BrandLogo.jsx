import React from 'react';

const BrandLogo = ({ size = 'md', className = '' }) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const iconDim = isSmall ? 'w-8 h-8' : isLarge ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl';

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      <div className={`relative ${iconDim} flex-shrink-0 flex items-center justify-center`}>
        <div className="absolute inset-0 rounded-xl bg-[#0044FB]/20 blur-sm group-hover:blur-md transition-all duration-300" />
        <div className="relative w-full h-full rounded-xl bg-[#0c0d12] border border-[#0044FB]/40 group-hover:border-[#0044FB] flex items-center justify-center shadow-lg shadow-black/50 overflow-hidden transition-all duration-300 group-hover:scale-105">
          <img src="/logo.png" alt="SkryptByMide" className="w-full h-full object-contain p-1" />
        </div>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span className={`${titleSize} font-extrabold tracking-tight text-white group-hover:text-gray-100 transition-colors`}>
            SKRYPT
          </span>
          <span className={`${titleSize} font-light tracking-wider text-gray-300`}>
            BY MIDE
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0044FB] animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
            Ibadan · Web Dev
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
