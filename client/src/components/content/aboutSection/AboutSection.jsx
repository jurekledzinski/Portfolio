import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./AboutSection.scss";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";
import { skillsData } from "./AboutData";

import AboutRight from "./AboutRight";
import ProgressCircle from "../../others/ProgressCircle";

import useFetchResume from "./useFetchResume";
import useFetchCertificates from "./useFetchCertificates";
import useObserverAbout from "./useObserverAbout";

const AboutSection = () => {
  const aboutRef = useRef(null);
  const dispatch = useDispatch();
  const dataErrFirebase = useSelector((store) => store.errorDateFirebase);

  const { downloadPrecentageResume, handleFetchResume } = useFetchResume();
  const { downloadPrecentaCertificates, handleFetchCertificates } =
    useFetchCertificates();
  useObserverAbout();

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
          {Boolean(dataErrFirebase) && (
            <p className="about__error-storage">{dataErrFirebase}</p>
          )}
          <div className="about__icons-wrapper">
            <button
              className="about__icon"
              onClick={handleFetchResume}
              disabled={
                downloadPrecentageResume || downloadPrecentaCertificates
                  ? true
                  : false
              }
            >
              {downloadPrecentageResume ? (
                <ProgressCircle progress={downloadPrecentageResume} />
              ) : (
                <i className="far fa-file"></i>
              )}
            </button>
            <button
              className="about__icon"
              onClick={handleFetchCertificates}
              disabled={
                downloadPrecentageResume || downloadPrecentaCertificates
                  ? true
                  : false
              }
            >
              {downloadPrecentaCertificates ? (
                <ProgressCircle progress={downloadPrecentaCertificates} />
              ) : (
                <Fragment>
                  <i className="far fa-file"></i>
                  <i className="fas fa-certificate"></i>
                </Fragment>
              )}
            </button>
            <a className="about__icon" href="https://www.linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="about__icon" href="https://github.com">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <AboutRight />
      </div>
    </section>
  );
};

export default AboutSection;
