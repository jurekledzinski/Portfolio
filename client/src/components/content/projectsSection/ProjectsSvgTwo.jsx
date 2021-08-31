import React from "react";

import "./ProjectsSvgTwo.scss";

const ProjectsSvgTwo = () => {
  return (
    <svg
      className="projects__blob-svg-2"
      id="sw-js-blob-svg"
      viewBox="0 30 80 50"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <linearGradient id="sw-gradient-19" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stopColor="rgba(253, 200, 48, 0.55)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stopColor="rgba(243, 115, 53, 0.4)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        className="projects__blob-svg-2-1"
        fill="url(#sw-gradient-19)"
        d="M10.3,2.6C10.3,12.2,5.1,24.5,-5.3,24.5C-15.8,24.5,-31.6,12.2,-31.6,2.6C-31.6,-7,-15.8,-14.1,-5.3,-14.1C5.1,-14.1,10.3,-7,10.3,2.6Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default ProjectsSvgTwo;
