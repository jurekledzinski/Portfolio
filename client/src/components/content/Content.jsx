import React from "react";

import "./Content.scss";

import HomeSection from "./homeSection/HomeSection";
import AboutSection from "./aboutSection/AboutSection";
import ProjectsSection from "./projectsSection/ProjectsSection";
import ContactSection from "./contactSection/ContactSection";

const Content = () => {
  return (
    <main className="main">
      <div className="main__cover"></div>
      <div className="main__cover-bottom"></div>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Content;
