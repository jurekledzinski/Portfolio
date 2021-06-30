import React from "react";

const AboutSvg = () => {
  return (
    <svg
      className="about__svg-1"
      viewBox="0 0 1366 82"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>Created with Lunacy</desc>
      <defs>
        <linearGradient x1="0" y1="1" x2="0" y2="0" id="gradient_1">
          <stop offset="0" stopColor="rgba(253, 200, 48, 0.55)" />
          <stop offset="1" stopColor="rgba(243,115,53,0.4)" />
        </linearGradient>
        <path d="M0 0L1371 0L1371 82L0 82L0 0Z" id="path_1" />
        <clipPath id="mask_1">
          <use xlinkHref="#path_1" />
        </clipPath>
      </defs>
      <g id="wave(19)" transform="translate(-4.580078 0)">
        <path
          d="M0 0L1371 0L1371 82L0 82L0 0Z"
          id="Background"
          fill="none"
          stroke="none"
        />
        <g clipPath="url(#mask_1)">
          <path
            d="M0 65.6L1371 0L2742 73.8L4113 57.4L5484 57.4L6855 73.8L8226 73.8L9597 0L10968 32.8L12339 0L13710 49.2L15081 49.2L16452 73.8L17823 16.4L19194 16.4L20565 8.2L21936 16.4L23307 0L24678 57.4L26049 49.2L27420 57.4L28791 73.8L30162 65.6L31533 73.8L32904 16.4L32904 82L31533 82L30162 82L28791 82L27420 82L26049 82L24678 82L23307 82L21936 82L20565 82L19194 82L17823 82L16452 82L15081 82L13710 82L12339 82L10968 82L9597 82L8226 82L6855 82L5484 82L4113 82L2742 82L1371 82L0 82L0 65.6Z"
            id="Shape"
            fill="url(#gradient_1)"
            stroke="none"
          />
        </g>
      </g>
    </svg>
  );
};

export default AboutSvg;
