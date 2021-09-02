import React from "react";
import { useDispatch } from "react-redux";

import "./Content.scss";

import HomeSection from "./homeSection/HomeSection";
import AboutSection from "./aboutSection/AboutSection";
import ProjectsSection from "./projectsSection/ProjectsSection";
import ContactSection from "./contactSection/ContactSection";

import { hideMobileMenu } from "../../reduxeStore/actions/actionOpenHideMobileMenu";

const Content = () => {
  const dispatch = useDispatch();

  const handleCloseMobileMenu = () => {
    dispatch(hideMobileMenu());
  };

  return (
    <main className="main" onClick={handleCloseMobileMenu}>
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
