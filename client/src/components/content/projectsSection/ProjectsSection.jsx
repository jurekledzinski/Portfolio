import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import "./ProjectsSection.scss";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";

const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projectsRef.current) {
      dispatch(addSingleSection(projectsRef.current));
    }
  }, []);

  return (
    <section className="projects" ref={projectsRef}>
      <div className="projects__wrapper">Project section</div>
    </section>
  );
};

export default ProjectsSection;
