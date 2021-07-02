import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { aboutFeatures } from "./AboutData";

import { addFeatureAbout } from "../../../reduxeStore/actions/actionFeaturesRef";

const AboutRight = () => {
  const dataFeatureRefs = useSelector((store) => store.featureRefsData);
  const dispatch = useDispatch();

  const addRefs = (element) => {
    if (element !== null && !dataFeatureRefs.includes(element)) {
      dispatch(addFeatureAbout(element));
    }
  };

  return (
    <div className="about__right">
      <div className="about__right-wrapper">
        {aboutFeatures.map((item, index) => (
          <div
            className={item.nameClass}
            data-delay={item.dataDelay}
            data-name={item.dataId}
            key={index}
            ref={addRefs}
          >
            <h4 className={item.nameClassH5}>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutRight;
