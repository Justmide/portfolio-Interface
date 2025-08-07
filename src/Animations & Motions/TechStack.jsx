import React from 'react';
import tailwindIcon from '../assets/tech/tailwind.png';

const TechStack = () => {
    const techItems = [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: tailwindIcon },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'cPanel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cpanel/cpanel-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ];

    // Split techItems into two rows
    const topRowItems = techItems.slice(0, Math.ceil(techItems.length / 2));
    const bottomRowItems = techItems.slice(Math.ceil(techItems.length / 2));

    return (
        <div className="w-full py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
               <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">My Tech Stack</span>
            </h2>

            {/* Top Row - Scrolls Right */}
            <div className="relative mb-8 overflow-hidden">
                <div className="flex animate-marquee-right whitespace-nowrap">
                    {[...topRowItems, ...topRowItems].map((tech, index) => (
                        <TechItem key={`top-${index}`} tech={tech} index={index} />
                    ))}
                </div>
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>

            {/* Bottom Row - Scrolls Left */}
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee-left whitespace-nowrap">
                    {[...bottomRowItems, ...bottomRowItems].map((tech, index) => (
                        <TechItem key={`bottom-${index}`} tech={tech} index={index} />
                    ))}
                </div>
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>

            {/* Add this to your global CSS or Tailwind config */}
            <style jsx>{`
                @keyframes marquee-right {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-left {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-right {
                    animation: marquee-right 20s linear infinite;
                }
                .animate-marquee-left {
                    animation: marquee-left 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

const TechItem = ({ tech, index }) => (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 group mx-4">
        {/* Glassmorphism Card */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 
            group-hover:bg-white/10 transition-all duration-300 ease-out shadow-lg
            group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] transform">
        </div>

        {/* Tech Icon */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
            <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain filter drop-shadow-lg 
                    group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xs sm:text-sm text-white mt-2 opacity-80 transition-opacity">
                {tech.name}
            </span>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
            bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-opacity duration-300">
        </div>

    </div>
);

export default TechStack;