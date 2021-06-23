import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setActiveHeaderWrapper,
  setInActiveHeaderWrapper,
} from "../../../reduxeStore/actions/actionIsActiveHeaderWrapper";

const useObserverSections = () => {
  const dispatch = useDispatch();
  const dataSections = useSelector((store) => store.sectionsData);
  const isMounted = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "-70px 0px 0px 0px",
    };

    const sectionHomeObserver = new IntersectionObserver((entries) => {
      if (isMounted.current) {
        entries.forEach((item) => {
          if (item.isIntersecting) {
            console.log("czyli menu na header");
            dispatch(setInActiveHeaderWrapper());
          } else {
            console.log("menu poza header wychodzi");
            dispatch(setActiveHeaderWrapper());
          }
        });
      }
    }, options);

    if (Boolean(dataSections[0])) {
      sectionHomeObserver.observe(dataSections[0]);
    }
  }, [dataSections]);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
};

export default useObserverSections;
