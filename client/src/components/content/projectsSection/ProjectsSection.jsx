import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ProjectsSection.scss";

import Slider from "./ProjectsSlider";
import ProjectDetails from "./ProjectDetails";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";
import { hideDetailsProject } from "../../../reduxeStore/actions/actionHideShowDetailsProject";

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const dataVisibleDetails = useSelector(
    (store) => store.visibilityProjectDetailsData
  );
  const { isVisible } = dataVisibleDetails;
  const projectsRef = useRef(null);

  const handleBackToSlider = () => {
    dispatch(hideDetailsProject());
  };

  useEffect(() => {
    if (projectsRef.current) {
      dispatch(addSingleSection(projectsRef.current));
    }
  }, []);

  return (
    <section className="projects" ref={projectsRef}>
      {isVisible ? (
        <article className="projects__wrapper-details">
          <button
            className="projects__button-back"
            onClick={handleBackToSlider}
          >
            <i className="fas fa-chevron-left"></i> Back
          </button>
          <ProjectDetails />
        </article>
      ) : (
        <div className="projects__wrapper">
          <h3 className="projects__title">Projects</h3>
          <Slider />
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
