import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "./Pages/Project";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import ThankYou from "./Pages/ThankYou";
import WhiteFlakesBackground from "./Components/WhiteFlakesBackground";
import AppleScrollSection from "./Components/AppleScrollSection";
import { HelmetProvider } from "react-helmet-async";

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const aosTimer = setTimeout(() => {
      AOS.refresh();
    }, 150);
    return () => clearTimeout(aosTimer);
  }, [location.pathname, location.hash]);

  return null;
};

function App() {
  useLayoutEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 20,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        {/* Fixed black background layer */}
        <div className="fixed inset-0 -z-10 bg-black" />

        {/* Animated canvas — sits ABOVE the fixed black layer */}
        <WhiteFlakesBackground />

        {/* Content — sits ABOVE the canvas */}
        <div className="relative z-10 min-h-screen text-white flex flex-col justify-between selection:bg-white selection:text-black">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/thankYou" element={<ThankYou />} />
            </Routes>
          </main>
          <AppleScrollSection>
            <Footer />
          </AppleScrollSection>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;