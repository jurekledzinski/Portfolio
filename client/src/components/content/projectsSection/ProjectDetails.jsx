import React, { useEffect, Fragment, useState } from "react";
import { useSelector } from "react-redux";

import "./ProjectDetails.scss";

import { ImagesData } from "./ProjectsData";
import CircleSpinner from "../../others/CircleSpinner";

const ProjectDetails = () => {
  const dataIndexCart = useSelector((store) => store.indexCartData);
  const dataLoader = useSelector((store) => store.showLoaderDetailsData);
  const [carts, setCarts] = useState([]);

  const copyImages = () => {
    let images = [];

    ImagesData.forEach((item) => {
      const singleItem = { ...item };
      images = [...images, singleItem];
    });

    let firstTwoImgs = images.slice(0, 2);
    let lastTwoImgs = images.slice(images.length - 2);

    images = [...images, ...firstTwoImgs];
    images = [...lastTwoImgs, ...images];

    return images;
  };

  useEffect(() => {
    let allProjects = copyImages();
    setCarts(allProjects);
  }, []);

  return (
    <Fragment>
      {carts.map((item1, index) => {
        if (index === dataIndexCart.index) {
          return (
            <div className="projects__inner-wrapper" key={index}>
              <div className="projects__inner-left">
                <h4 className="projects__project-title">{item1.title}</h4>
                <h5 className="projects__description-title">Description</h5>
                <p className="projects__description-text">
                  {item1.description}
                </p>
                <h5 className="projects__tech-title">Used technology:</h5>
                {item1.usedTech.map((item2, index) => (
                  <p className="projects__tech-used" key={index}>
                    {item2}
                  </p>
                ))}
              </div>
              <div className="projects__inner-right">
                <button className="projects__button-check-page">
                  Preview website online
                </button>
                <div
                  className="projects__image-devices-prewview"
                  style={{ backgroundImage: `url(${item1.imgPreview})` }}
                >
                  {dataLoader.isLoad && (
                    <div className="projects__cover-details-img">
                      <CircleSpinner />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }
      })}
    </Fragment>
  );
};

export default ProjectDetails;
