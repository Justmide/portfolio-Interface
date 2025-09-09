import React, { use } from "react";
import Me from "../assets/Images/me.png";
import arrow from "../assets/Images/arrow.png";
import { Typewriter } from 'react-simple-typewriter';
import MyService from "./MyService";
import PrimaryBtn from "./ButtonStyles/PrimaryBtn";
import TechStack from "../Animations & Motions/TechStack";
import Installation from "../Animations & Motions/Installation";
import ProjectLinks from "./Projects/ProjectLinks";
import ContactBox from "./Contact/ContactBox";


const HeroSection = () => {

  const handleClick = () => {
    const phoneNumber = '2347088136059'; // Add country code (234 for Nigeria)
    const message = 'Hello! I came across your portfolio and wanted to connect...';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const goToIg = () =>{
    const url = 'https://www.instagram.com/interface.iq/';
    window.open(url, '_blank')
  }

  return (
    <div className="w-full mt-[118px] p-4 bg-gradient-to-b from-black via-[#0f172a] to-black text-white flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      
      {/* Animated Gradient Light Beams */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl animate-pulse top-20 left-[-100px] rounded-full" />
        <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-20 blur-2xl animate-pulse delay-200 top-[60%] right-[-100px] rounded-full" />
      </div>

      {/* IMAGE  */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-10 z-10">
        
        {/* Glowing Circle Image with Aura Animation */}
        <div className="relative w-[280px] h-[280px]">
          {/* Aura Glow */}
          <div className="absolute inset-0 rounded-full 
            bg-[conic-gradient(from_180deg_at_50%_50%,#a855f7_0%,#ec4899_50%,#0ea5e9_100%)] 
            blur-[80px] animate-spin-slow opacity-20">
          </div>

          {/* Image Border with Pulse */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-600 animate-pulse" />

          {/* Profile Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img 
              src={Me}
              alt="Profile"
              className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* My Short details */}
        <div className="max-w-md text-center lg:text-left animate-fade-in-up">
           <p className="text-base sm:text-lg font-semibold animate-fade-in-up font-caveat">
          <Typewriter
            words={["I’m Olumide.", "Mern Stack Developer.", "Dreamer.", "I design.", "I code.", "I dream in Pixels."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
          <h1 
          className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 font-script"
          >
           Pixel to Production <br /> I Build It All
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed font-quicksand"
          data-aos="fade-up">
        From UI to backend, I build fast, scalable apps with the MERN stack.
          </p>

          <div 
          className="mt-5 w-100 flex gap-5 items-center justify-center lg:justify-start">
          <PrimaryBtn 
          text="Contact Me"
          onClick={handleClick}
          />
          
          <PrimaryBtn 
          text="Instagram"
          onClick={goToIg}
          />
         
          
        </div>
        </div>

        
      </div>

      {/* MY SERVICE  */}
       <div className="mt-[125px]"
     >
      <MyService />
    </div>

    {/* MY STACK */}
    <div className="mt-[100px]">
     <TechStack />
    </div>
    <div>
      <Installation />
    </div>

    {/* PROJECT */}
    <div className="mt-[40px]">
      {/* Add your project component here */}
     <ProjectLinks />
    </div>

    <div>
      <ContactBox />
    </div>

     </div>
  );
};

export default HeroSection;
