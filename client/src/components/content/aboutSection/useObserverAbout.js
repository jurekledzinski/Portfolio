import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const useObserverAbout = () => {
  const dataFeatureRefs = useSelector((store) => store.featureRefsData);
  const isMounted = useRef(null);

  useEffect(() => {
    const featuresObserver = new IntersectionObserver((entries) => {
      if (isMounted.current) {
        entries.forEach((item) => {
          switch (true) {
            case item.isIntersecting &&
              item.target.dataset.name === "feature-1":
              item.target.style.animation = `animate1 0.5s ${item.target.dataset.delay} forwards linear`;
              break;
            case item.isIntersecting &&
              item.target.dataset.name === "feature-2":
              item.target.style.animation = `animate2 0.5s ${item.target.dataset.delay} forwards linear`;
              break;
            case item.isIntersecting &&
              item.target.dataset.name === "feature-3":
              item.target.style.animation = `animate3 0.5s ${item.target.dataset.delay} forwards linear`;
              break;
            case item.isIntersecting &&
              item.target.dataset.name === "feature-4":
              item.target.style.animation = `animate4 0.5s ${item.target.dataset.delay} forwards linear`;
              break;
            case item.isIntersecting &&
              item.target.dataset.name === "feature-5":
              item.target.style.animation = `animate5 0.5s ${item.target.dataset.delay} forwards linear`;
              break;
            case item.isIntersecting &&
              item.target.dataset.name === "feature-6":
              item.target.style.animation = `animate6 0.5s ${item.target.dataset.delay} forwards linear`;
              break;
            default:
              item.target.style.animation = "none";
              break;
          }
        });
      }
    });

    if (Boolean(dataFeatureRefs[0])) {
      dataFeatureRefs.forEach((item) => featuresObserver.observe(item));
    }
  }, [dataFeatureRefs]);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
};

export default useObserverAbout;
