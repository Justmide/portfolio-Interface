import React, { useEffect, useLayoutEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import WhiteFlakesBackground from "./Components/WhiteFlakesBackground";
import AppleScrollSection from "./Components/AppleScrollSection";
import ChatBox from "./Components/ChatBox";
import { HelmetProvider } from "react-helmet-async";

// Lazy-load secondary routes to reduce initial bundle size on 3G networks
const Project = lazy(() => import("./Pages/Project"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const ThankYou = lazy(() => import("./Pages/ThankYou"));

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
    // Disable heavy AOS scroll calculations on mobile/3G devices to keep scrolling at 60 FPS
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    AOS.init({
      duration: isMobile ? 350 : 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 15,
      debounceDelay: 50,
      throttleDelay: 99,
      disable: isMobile ? 'mobile' : false,
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

        {/* Animated canvas / lightweight CSS glow — sits ABOVE the fixed black layer */}
        <WhiteFlakesBackground />

        {/* Content — sits ABOVE the canvas */}
        <div className="relative z-10 min-h-screen text-white flex flex-col justify-between selection:bg-white selection:text-black">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-screen bg-black/90 flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/10 border-t-brand-400 rounded-full animate-spin" /></div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/thankYou" element={<ThankYou />} />
              </Routes>
            </Suspense>
          </main>
          <AppleScrollSection>
            <Footer />
          </AppleScrollSection>

          {/* Floating Live Support & Inquiry Chatbox (Bottom Right) */}
          <ChatBox />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;