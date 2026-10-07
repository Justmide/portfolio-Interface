import React from 'react';
import ProjectLinks from '../Components/Projects/ProjectLinks';
import SEO from '../Components/SEO';

const Project = () => {
  return (
    <>
      <SEO
        title="Client Websites & Case Studies | Skryptvolt · Software Developer"
        description="Explore live client websites and software engineered by Olumide Oyediran (Skryptvolt). Real projects across chartered accounting, international logistics, visa consulting, healthcare, and commercial cleaning."
        path="/projects"
        keywords="Olumide Oyediran, Skryptvolt, web developer portfolio Nigeria, SME website case studies, logistics website Nigeria, accounting website design, React developer Ibadan"
      />
      <div className="w-full mt-[75px] min-h-screen bg-black/90">
        <ProjectLinks />
      </div>
    </>
  );
};

export default Project;