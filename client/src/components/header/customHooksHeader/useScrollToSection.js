import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useScrollToSection = (setIndexBtnMenu) => {
  const [currentSection, setCurrentSection] = useState([]);
  const dataSections = useSelector((store) => store.sectionsData);

  const handleScrollToSection = (indexLink) => {
    setIndexBtnMenu(indexLink);
    sessionStorage.setItem("indexBtn", JSON.stringify(indexLink));

    const clickedSection = currentSection[indexLink];

    window.scrollTo({
      top: isNaN((indexLink * clickedSection.offsetTop) / indexLink)
        ? 0
        : (indexLink * clickedSection.offsetTop) / indexLink,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (dataSections.length > 0) {
      setCurrentSection(dataSections);
    }
  }, [dataSections]);

  return { handleScrollToSection };
};

export default useScrollToSection;
