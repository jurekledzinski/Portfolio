import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import "./AboutSection.scss";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";

const AboutSection = () => {
  const aboutRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (aboutRef.current) {
      dispatch(addSingleSection(aboutRef.current));
    }
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <div className="about__wrapper">About section</div>
    </section>
  );
};

export default AboutSection;
