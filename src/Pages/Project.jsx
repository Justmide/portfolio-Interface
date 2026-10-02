import React from 'react';
import ProjectLinks from '../Components/Projects/ProjectLinks';
import SEO from '../Components/SEO';

const Project = () => {
  return (
    <>
      <SEO title="SkryptByMide | Projects & Demos" description="Selected client websites and case studies by Olumide Oyediran. Real projects across accounting, logistics, travel, healthcare, and commercial services." path="/projects" />
      <div className="w-full mt-[75px] min-h-screen bg-black/90">
        <ProjectLinks />
      </div>
    </>
  );
};

export default Project;