import React from "react";

import HomeSection from "./homeSection/HomeSection";
import AboutSection from "./aboutSection/AboutSection";
import ProjectsSection from "./projectsSection/ProjectsSection";
import ContactSection from "./contactSection/ContactSection";

const Content = () => {
  return (
    <main className="main" style={{ position: "relative" }}>
      <div className="cover"></div>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Content;
