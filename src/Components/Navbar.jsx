import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import interfaceLogo from '../assets/Images/interface_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // FIX: call useNavigate as a function

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const gotoHome = () => {
    navigate('/');
  };

  const handleClick = () => {
    const phoneNumber = '2347088136059';
    const message = 'Hello! I came across your portfolio and wanted to connect...';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <nav className="lg:px-[60px] w-full fixed top-0 left-0 flex justify-between items-center p-4 bg-black backdrop-blur-lg z-50 border-b border-gray-800 shadow-lg">
      <div className="flex items-center">
        <img 
          src={interfaceLogo}
          alt="SkryptByMide Logo"
          className="h-[90px] w-auto mr-2 cursor-pointer"
          onClick={gotoHome}
        />
        <h1 
          onClick={gotoHome}
          className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
        >
          SkryptByMide
        </h1>
      </div>
      <button
        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`relative text-white/80 hover:text-white transition-colors duration-300 ${
                location.pathname === link.path ? 'text-white font-medium' : ''
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              )}
            </Link>
          </li>
        ))}
        <li>
          <button
          onClick={handleClick}
           className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
            Hire Me
          </button>
        </li>
      </ul>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[125px] left-0 w-full bg-gray-900/95 backdrop-blur-md text-white flex flex-col gap-4 p-6 md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-3 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-l-4 border-pink-500'
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
          onClick={handleClick}
           className="mt-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;