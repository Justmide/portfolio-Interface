import React from "react";
import HeroSection from "../Components/HeroSection";
import MyService from "../Components/MyService";
import ProjectLinks from "../Components/Projects/ProjectLinks";
import PricingPackages from "../Components/PricingPackages";
import Testimonials from "../Components/Testimonials";
import ClientTrustBanner from "../Components/ClientTrustBanner";
import FAQSection from "../Components/FAQSection";
import TechStack from "../Animations & Motions/TechStack";
import Installation from "../Animations & Motions/Installation";
import GitHubLatestProjects from "../Components/GitHubLatestProjects";
import ContactBox from "../Components/Contact/ContactBox";
import AppleScrollSection from "../Components/AppleScrollSection";
import AISuggestionsSection from "../Components/AISuggestionsSection";
import SEO from "../Components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO />
      <div className="w-full bg-black/90 text-white selection:bg-white selection:text-black relative">
        {/* 1. Hero Section with Clean Space Orbit Stage */}
        <HeroSection />

        {/* 2. SME Services with Apple Smooth Scroll Reveal */}
        <AppleScrollSection id="services">
          <MyService />
        </AppleScrollSection>

        {/* 3. Client Guarantee & Trust Banner */}
        <AppleScrollSection id="guarantee">
          <ClientTrustBanner />
        </AppleScrollSection>

        {/* 4. Featured Projects & Case Studies */}
        <AppleScrollSection id="projects">
          <ProjectLinks />
        </AppleScrollSection>

        {/* 5. Interactive AI Website Blueprint & Cost Estimator */}
        <AppleScrollSection id="ai-advisor">
          <AISuggestionsSection />
        </AppleScrollSection>

        {/* 6. Starting Investment Packages (NGN & USD) */}
        <AppleScrollSection id="packages">
          <PricingPackages />
        </AppleScrollSection>

        {/* 6. Social Proof / Client Reviews */}
        <AppleScrollSection id="testimonials">
          <Testimonials />
        </AppleScrollSection>

        {/* 7. Client FAQs with Schema.org SEO */}
        <AppleScrollSection id="faq">
          <FAQSection />
        </AppleScrollSection>

        {/* 8. Tech Stack & Infrastructure */}
        <AppleScrollSection id="tech">
          <TechStack />
          <Installation />
        </AppleScrollSection>

        {/* 9. Engineering Proof: GitHub Open Source & Activity */}
        <AppleScrollSection id="github">
          <GitHubLatestProjects />
        </AppleScrollSection>

        {/* 10. Contact & Conversion CTA */}
        <AppleScrollSection id="contact">
          <ContactBox />
        </AppleScrollSection>
      </div>
    </>
  );
}