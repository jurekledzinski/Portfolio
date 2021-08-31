import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ProjectsSection.scss";

import Slider from "./ProjectsSlider";
import ProjectDetails from "./ProjectDetails";
import ProjectsSvg from "./ProjectsSvg";
import ProjectsSvgTwo from "./ProjectsSvgTwo";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";
import { hideDetailsProject } from "../../../reduxeStore/actions/actionHideShowDetailsProject";
import {
  hideCoverImage,
  showCoverImage,
} from "../../../reduxeStore/actions/actionHideCoverImage";
import { showImageLoaderSlider } from "../../../reduxeStore/actions/actionLoaderImagesSlider";

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const dataVisibleDetails = useSelector(
    (store) => store.visibilityProjectDetailsData
  );
  const { isVisible } = dataVisibleDetails;

  const projectsRef = useRef(null);
  const cleanTime = useRef(null);

  const handleBackToSlider = () => {
    dispatch(hideDetailsProject());
    dispatch(hideCoverImage());
    dispatch(showImageLoaderSlider());
    cleanTime.current = setTimeout(() => {
      dispatch(showCoverImage());
    }, 300);
  };

  useEffect(() => {
    if (projectsRef.current) {
      dispatch(addSingleSection(projectsRef.current));
    }
    return () => clearTimeout(cleanTime.current);
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
          <div className="projects__wrapper-title">
            <ProjectsSvg />
            <h3 className="projects__title">Projects</h3>
          </div>
          <ProjectsSvgTwo />
          <Slider />
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
