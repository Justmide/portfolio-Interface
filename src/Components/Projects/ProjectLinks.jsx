import React from 'react';
import { FiExternalLink, FiGithub, FiPhone } from 'react-icons/fi';
import Intervault from '../../assets/Projects/intervault.png';
import hearthy from '../../assets/Projects/hearthyLLC.png';
import CartPlex from '../../assets/Projects/cartPlex.png';
import NFTmide from '../../assets/Projects/NFTmide.png';
import LoungeMenu from '../../assets/Projects/loungeMenu.png'; 
import ChefBite from '../../assets/Projects/ChefBite.png';

const ProjectLinks = () => {
  const projects = [
    {
      title: "InterVault Bank",
      description: "A secure online banking platform with user authentication and transaction history.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://intervault.vercel.app/login",
      codeLink: "https://github.com/Justmide/InterVault-Bank-Frontend",
      image: Intervault
    },
    {
      title: "Hearthy Consulting LLC",
      description: "Professioal spedeveryday website about teachers traiing and special education.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Hosting", "cPanel", "SEO"],
      liveLink: "hearthyconsulting.com",
      codeLink: "#",
      image: hearthy
    },
    {
      title: "Cart-plex E-commerce",
      description: "A modern e-commerce platform with product listings, cart functionality, and user authentication.",
      tags: ["HTML", "CSS" , "JavaScript", "Firebase", "Firestore"],
      liveLink: "https://cart-plex.vercel.app/",
      codeLink: "https://github.com/Justmide/CartPlex",
      image: CartPlex
    },
    {
      title: "NFTmide Marketplace",
      description: "A decentralized NFT marketplace with smart contract integration and wallet support.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://justmide.github.io/nftMide/",
      codeLink: "https://github.com/Justmide/nftMide?tab=readme-ov-file",
      image: NFTmide
    },
    {
      title: "IQ Lounge Menu Price List",
      description: "A digital menu for a restaurant with interactive features and responsive design. STILL IN PROGRESS",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://iq-hive.vercel.app/",
      codeLink: "https://github.com/Justmide/lounge-menu",
      image: LoungeMenu
    },
    {
      title: "ChefBite Food Ordering Website ",
      description: "A food ordering website with a user-friendly interface and secure payment integration.",
      tags: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore"],
      liveLink: "#",
      codeLink: "#",
      image: ChefBite
    },
  ];

    // WhatsApp contact function
  const openWhatsApp = () => {
    const phoneNumber = '07088136059';
    const message = 'Hello! I came across your portfolio and wanted to connect...';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-16 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          My Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative group overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                >
                  <FiGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

     {/* Contact Buttons */}
      <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={openWhatsApp}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
        >
          <FiPhone /> WhatsApp Me
        </button>
      </div>
    </div>
  );
};

export default ProjectLinks;