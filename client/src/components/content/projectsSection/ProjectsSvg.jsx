import React from "react";

import "./ProjectsSvg.scss";

const ProjectsSvg = () => {
  return (
    <svg
      className="projects__blob-svg-1"
      id="sw-js-blob-svg"
      viewBox="0 25 80 50"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <linearGradient id="sw-gradient-18" x1="0" x2="1" y1="1" y2="0">
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
        className="projects__blob-svg-1-1"
        fill="url(#sw-gradient-18)"
        d="M21.6,-12.7C24.8,-6.8,22.2,2.3,17.7,8.6C13.1,14.9,6.6,18.4,0.8,17.9C-5,17.5,-9.9,13,-14.6,6.7C-19.2,0.4,-23.4,-7.8,-21,-13.3C-18.5,-18.7,-9.2,-21.4,-0.1,-21.4C9.1,-21.4,18.3,-18.6,21.6,-12.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
      ></path>
    </svg>
  );
};

export default ProjectsSvg;
