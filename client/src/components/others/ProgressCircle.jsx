import React, { Fragment, useState } from "react";

import "./ProgressCircle.scss";

const ProgressCircle = ({ progress }) => {
  const [radius, setRadius] = useState(10);
  const [stroke, setStroke] = useState(2);
  const [normalizedRadius, setNormalizedRadius] = useState(radius - stroke * 2);
  const [circumference, setCircumference] = useState(
    normalizedRadius * 2 * Math.PI
  );

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  console.log(radius, " radius");
  console.log(circumference, " circumference");
  console.log(progress);
  console.log(strokeDashoffset, "strokeDashoffset");

  return (
    <Fragment>
      {progress ? (
        <svg className="progressCircle" height={radius * 2} width={radius * 2}>
          <circle
            className="progressCircle__circle"
            stroke="white"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      ) : null}
    </Fragment>
  );
};

export default ProgressCircle;
