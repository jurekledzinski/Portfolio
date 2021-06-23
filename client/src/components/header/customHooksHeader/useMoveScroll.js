import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useMoveScroll = (setIndexBtnMenu) => {
  const [allSections, setAllSections] = useState([]);
  const dataSections = useSelector((store) => store.sectionsData);

  const moveScroll = () => {
    allSections.forEach((item, index) => {
      if (item.offsetTop - window.scrollY - 51 < 0) {
        setIndexBtnMenu(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", moveScroll);

    () => removeEventListener("scroll", moveScroll);
  }, [allSections]);

  useEffect(() => {
    if (dataSections.length > 0) {
      setAllSections(dataSections);
    }
  }, [dataSections]);
};

export default useMoveScroll;
