import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import "./AboutSection.scss";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";

import { skillsData } from "./AboutData";

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
      <div className="about__wrapper">
        <div className="about__left">
          <h3 className="about__title">About me</h3>
          <div className="about__text-wrapper">
            <p className="about__text">
              Doesn’t matter if you’re creating a serious app thatcalls for a
              German philosopher from the 1800s or some Back to the Future
              quotes – the internet is a wonderful place, and it has endless
              alternatives to Lorem Ipsum. We just thought you would definitely
              want to hear about these 10 awesome ones firstThe Rate of Low Type
              The Rate of Low Type The Rate of Low Type
            </p>
          </div>
          <div className="about__skills-wrapper">
            <h4 className="about__skills-title">Skills</h4>
            <div className="about__skills-inner-wrapper">
              <div className="about__skills-left">
                {skillsData.map((item, index) => (
                  <p className="about__skill-name" key={index}>
                    {item.skill}
                  </p>
                ))}
              </div>
              <div className="about__skills-right">
                {skillsData.map((item, index) => (
                  <p className="about__skill-stars" key={index}>
                    {item.stars.map((item1, index) => {
                      if (item1 === 1) {
                        return <i className="fas fa-star" key={index}></i>;
                      } else {
                        return <i className="far fa-star" key={index}></i>;
                      }
                    })}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="about__icons-wrapper">
            <span className="about__icon">
              <i className="far fa-file"></i>
            </span>
            <span className="about__icon">
              <i className="far fa-file"></i>
              <i className="fas fa-certificate"></i>
            </span>
            <span className="about__icon">
              <i className="fab fa-linkedin"></i>
            </span>
          </div>
        </div>
        <div className="about__right"></div>
      </div>
    </section>
  );
};

export default AboutSection;
