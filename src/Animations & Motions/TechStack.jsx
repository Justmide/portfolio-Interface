import React from 'react';
import tailwindIcon from '../assets/tech/tailwind.png';

const TechStack = () => {
  const techItems = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'cPanel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cpanel/cpanel-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const topRowItems = techItems.slice(0, Math.ceil(techItems.length / 2));
  const bottomRowItems = techItems.slice(Math.ceil(techItems.length / 2));

  return (
    <div className="w-full py-14 px-4 sm:px-8 lg:px-14 overflow-hidden bg-black relative">
      <div className="text-center mb-8" data-aos="fade-up">
        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-2">
          Engineering & Tools
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Modern Tech Stack & Infrastructure
        </h2>
      </div>

      {/* Top Row - Scrolls Right */}
      <div className="relative mb-6 overflow-hidden">
        <div className="flex animate-marquee-right whitespace-nowrap will-change-transform">
          {[...topRowItems, ...topRowItems].map((tech, index) => (
            <TechItem key={`top-${index}`} tech={tech} />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Bottom Row - Scrolls Left */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-left whitespace-nowrap will-change-transform">
          {[...bottomRowItems, ...bottomRowItems].map((tech, index) => (
            <TechItem key={`bottom-${index}`} tech={tech} />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

const TechItem = ({ tech }) => (
  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-3 flex-shrink-0 group">
    <div className="absolute inset-0 bg-[#0e1017] rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-200 shadow-md"></div>

    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 z-10">
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain group-hover:scale-105 transition-transform duration-200"
        loading="lazy"
      />
      <span className="text-[11px] sm:text-xs text-gray-300 mt-1.5 opacity-90 group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  </div>
);

export default TechStack;