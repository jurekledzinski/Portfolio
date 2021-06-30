import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import "./HomeSection.scss";

import HomeSvg from "./HomeSvg";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";

const HomeSection = () => {
  const homeRef = useRef(null);
  const numInterval = useRef(window.scrollY);
  const timeInterval = useRef(null);
  const dispatch = useDispatch();

  const handleScrollToAbout = () => {
    numInterval.current = window.scrollY;
    timeInterval.current = setInterval(function () {
      window.scrollTo(0, numInterval.current);
      numInterval.current += 10;
      if (numInterval.current >= homeRef.current.offsetHeight) {
        numInterval.current = 10;
        clearInterval(timeInterval.current);
      }
    }, 5);
  };

  useEffect(() => {
    if (homeRef.current) {
      dispatch(addSingleSection(homeRef.current));
    }
  }, []);

  return (
    <section className="home" ref={homeRef}>
      <HomeSvg />
      <div className="home__wrapper">
        <div className="home__left">
          <div className="home__left-inner-wrapper">
            <h1 className="home__title-1">Hi,</h1>
            <h1 className="home__title-2">I'm Jurek</h1>
            <button className="home__button-more" onClick={handleScrollToAbout}>
              More ...
            </button>
          </div>
        </div>
        <div className="home__right">
          <div className="home__right-inner-wrapper"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
