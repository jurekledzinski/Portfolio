import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ProjectsSlider.scss";

import { ImagesData } from "./ProjectsData";

import { showDetailsProject } from "../../../reduxeStore/actions/actionHideShowDetailsProject";
import { addIndexCart } from "../../../reduxeStore/actions/actionGetIndexCart";
import {
  hideLoaderInDetails,
  showLoaderInDetails,
} from "../../../reduxeStore/actions/actionShowLoaderInDetailsProject";
import { hideImageLoaderSlider } from "../../../reduxeStore/actions/actionLoaderImagesSlider";

import CircleSpinner from "../../others/CircleSpinner";

const ProjectsSlider = () => {
  const dataLoader = useSelector((store) => store.loaderImageData);
  const dataColorCover = useSelector((store) => store.hideCoverImageData);
  const { isHideCover } = dataColorCover;
  const dispatch = useDispatch();
  const cleanTime = useRef(null);
  const cleanTimeThree = useRef(null);
  const isMounted = useRef(null);
  const slidesContainer = useRef(null);
  const [isActive, setIsActive] = useState(null);
  const [count, setCount] = useState(2);
  const [initialX, setInitialX] = useState(null);
  const [initialY, setInitialY] = useState(null);
  const [timeTransition, setTimeTransition] = useState(0.5);
  const [slides, setSlides] = useState(ImagesData);
  const [widthSlider, setWidthSlider] = useState(900);
  const [heightSlider, setHeightSlider] = useState(350);
  const valueTranslate = useRef(33.33);
  const timeClear = useRef(null);

  const events = {
    swipeUp: new Event("swipeUp"),
    swipeDown: new Event("swipeDown"),
    swipeLeft: new Event("swipeLeft"),
    swipeRight: new Event("swipeRight"),
  };

  const setSlideTransform = (sizeWindow) => {
    switch (true) {
      case sizeWindow > 700:
        valueTranslate.current = 33.33;
        break;
      case sizeWindow < 700 && sizeWindow > 500:
        valueTranslate.current = 50;
        break;
      case sizeWindow < 500:
        valueTranslate.current = 100;
        break;
      default:
        break;
    }
  };

  const handleMoveLeft = useCallback(() => {
    setIsActive(null);
    if (count === slides.length - 3) {
      return;
    }
    setTimeTransition(0.5);
    setCount((prevValue) => prevValue + 1);
  }, [count, slides.length]);

  const handleMoveRight = useCallback(() => {
    setIsActive(null);
    if (count === 0) {
      return;
    }
    setTimeTransition(0.5);
    setCount((prevValue) => prevValue - 1);
    if (count === 1) {
      cleanTime.current = setTimeout(() => {
        setTimeTransition(0);
        slidesContainer.current.style.transform = `translateX(-${
          slides.length * valueTranslate.current
        }%)`;

        setCount(slides.length - 4);
      }, 520);
    }
  }, [count, slides.length]);

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
    if (count === slides.length - 3) {
      timeClear.current = setTimeout(() => {
        setTimeTransition(0);
        slidesContainer.current.style.transform = `translateX(-${valueTranslate.current}%)`;
        setCount(1);
        clearTimeout(timeClear.current);
      }, 480);
      return;
    }
  }, [count, slides.length]);

  useEffect(() => {
    let imgs = copyImages();
    setSlides(imgs);
  }, []);

  const sizeSliderDefaultAndResizeLess1200 = (ratioHeight) => {
    let diff2 = (900 * 100) / window.innerWidth - (900 * 100) / 900;
    let px = (window.innerWidth / 100) * 100 - diff2 - 100;
    setWidthSlider(px + "px");
    setHeightSlider(ratioHeight + "px");
  };

  const sizeSliderDefaultAndResizeLess768 = (heightratio) => {
    setWidthSlider(90 + "%");
    setHeightSlider(heightratio + "px");
  };

  const sizeSliderResizeLess500 = (heightratio) => {
    setWidthSlider(92 + "%");
    setHeightSlider(heightratio + "px");
  };

  useEffect(() => {
    const widthInnerWindow = window.innerWidth;
    const heightInnerWindow = window.innerHeight;
    const ratio = Math.min(widthInnerWindow / heightInnerWindow);

    const sizePrecent = (900 * 100) / 900;
    setWidthSlider(sizePrecent + "%");

    if (window.innerWidth < 900 && isMounted.current) {
      let ratioHeight = (heightInnerWindow * ratio) / 2;
      sizeSliderDefaultAndResizeLess1200(ratioHeight);
    }

    if (window.innerWidth < 768 && isMounted.current) {
      let heightSliderWrapper = window.innerHeight;
      let heightratio = (heightSliderWrapper * ratio) / 1.8;
      sizeSliderDefaultAndResizeLess768(heightratio);
    }

    if (window.innerWidth <= 500 && isMounted.current) {
      let heightSliderWrapper = window.innerHeight;
      let heightratio = (heightSliderWrapper * ratio) / 1;
      sizeSliderResizeLess500(heightratio);
    }
  }, [heightSlider, widthSlider]);

  useEffect(() => {
    const resizeSlider = () => {
      let isTouch =
        "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
      document.documentElement.className = isTouch ? "touch" : "no-touch";

      setSlideTransform(window.innerWidth);
      setWidthSlider(900 + "px");
      setHeightSlider(350 + "px");

      let sizePrecent = (900 * 100) / 900;

      let widthWindowInner = window.innerWidth;
      let heightWindowInner = window.innerHeight;

      let ratio = Math.min(widthWindowInner / heightWindowInner);

      setWidthSlider(sizePrecent + "%");

      if (window.innerWidth < 900 && isMounted.current) {
        let ratioHeight = (heightWindowInner * ratio) / 2;
        sizeSliderDefaultAndResizeLess1200(ratioHeight);
      }

      if (window.innerWidth < 768 && isMounted.current) {
        let heightInnerWindow = window.innerHeight;
        let heightRatio = (heightInnerWindow * ratio) / 1.8;
        sizeSliderDefaultAndResizeLess768(heightRatio);
      }

      if (window.innerWidth <= 500 && isMounted.current) {
        let heightInnerWindow = window.innerHeight;
        let heightRatio = (heightInnerWindow * ratio) / 1;
        sizeSliderResizeLess500(heightRatio);
      }
    };
    window.addEventListener("resize", resizeSlider);

    return function cleanupListenerSlider() {
      window.removeEventListener("resize", resizeSlider);
    };
  }, []);

  useEffect(() => {
    const minusMargin = window.innerWidth / 8;
    if (window.innerWidth - 17 < 760) {
      setWidthSlider(window.innerWidth - 17);
    } else {
      setWidthSlider(window.innerWidth - minusMargin);
    }
  }, []);

  let widthScreen = window.innerWidth;

  useEffect(() => {
    setSlideTransform(window.innerWidth ? window.innerWidth : widthScreen);
  }, [widthScreen]);

  const startTouchDisplay = (e) => {
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    setInitialX(touchX);
    setInitialY(touchY);
  };

  useEffect(() => {
    const moveTouchDisplay = (e) => {
      if (!initialX || !initialY) {
        return;
      }

      const currenTouchX = e.touches[0].clientX;
      const currenTouchY = e.touches[0].clientY;

      const diffrenceX = initialX - currenTouchX;
      const diffrenceY = initialY - currenTouchY;

      if (Math.abs(diffrenceX) > Math.abs(diffrenceY)) {
        if (diffrenceX > 1) {
          slidesContainer.current.dispatchEvent(events.swipeLeft);
          setIsActive(null);
        } else if (diffrenceX < -0.4995) {
          slidesContainer.current.dispatchEvent(events.swipeRight);
          setIsActive(null);
        }
      } else {
        if (diffrenceY > 0) {
          slidesContainer.current.dispatchEvent(events.swipeUp);
        } else {
          slidesContainer.current.dispatchEvent(events.swipeDown);
        }
      }

      setInitialX(null);
      setInitialY(null);
    };

    if (slidesContainer.current) {
      slidesContainer.current.addEventListener("touchstart", startTouchDisplay);
      slidesContainer.current.addEventListener("touchmove", moveTouchDisplay);
    }

    let container = slidesContainer.current;
    return () => {
      if (container) {
        container.removeEventListener("touchstart", startTouchDisplay);
        container.removeEventListener("touchmove", moveTouchDisplay);
      }
    };
  }, [
    events.swipeLeft,
    events.swipeRight,
    events.swipeUp,
    events.swipeDown,
    initialX,
    initialY,
  ]);

  useEffect(() => {
    if (Boolean(slidesContainer.current)) {
      slidesContainer.current.addEventListener("swipeLeft", handleMoveLeft);
      slidesContainer.current.addEventListener("swipeRight", handleMoveRight);
    }

    let sliderWrapper = slidesContainer.current;

    return () => {
      if (sliderWrapper) {
        sliderWrapper.removeEventListener("swipeLeft", handleMoveLeft);
        sliderWrapper.removeEventListener("swipeRight", handleMoveRight);
      }
    };
  }, [handleMoveLeft, handleMoveRight]);

  const handleShowDetailsProject = (indexCart, imgPreview) => {
    dispatch(showLoaderInDetails());

    let img = new Image();
    img.src = imgPreview;
    img.onload = () => {
      dispatch(hideLoaderInDetails());
    };
    dispatch(showDetailsProject());
    dispatch(addIndexCart(indexCart));
  };

  const handleOnLoadImage = () => {
    cleanTimeThree.current = setTimeout(
      () => dispatch(hideImageLoaderSlider()),
      400
    );
  };

  const handleShowTitle = (index) => {
    setIsActive(index);
  };

  useEffect(() => {
    let isTouch =
      "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
    document.documentElement.className = isTouch ? "touch" : "no-touch";
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      clearTimeout(cleanTime.current);
      clearTimeout(cleanTimeThree.current);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setIsActive(2);
    }
  }, []);

  return (
    <div
      className="projects__slider-wrapper"
      style={{ width: widthSlider, height: heightSlider }}
    >
      <div
        className="projects__slider-content"
        style={{
          transform: `translateX(-${count * valueTranslate.current}%)`,
          transition: `${timeTransition}s linear`,
        }}
        ref={slidesContainer}
      >
        {slides.map((item, index) => (
          <div
            className={
              isActive === index
                ? "projects__slider-image projects__slider-image--mobile"
                : "projects__slider-image"
            }
            key={index}
            onTouchStart={() => handleShowTitle(index)}
          >
            <div
              className={
                index === 1 || index === 4
                  ? "projects__slider-img-frame projects__slider-img-frame--center"
                  : "projects__slider-img-frame"
              }
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              {!dataLoader.isLoadImg && (
                <div className="projects__slider-cover-loader">
                  <img
                    src={item.imgUrl}
                    alt="Image"
                    className="projects__dummy-img"
                    onLoad={handleOnLoadImage}
                  />
                  <CircleSpinner />
                </div>
              )}
            </div>
            <div
              className={
                isHideCover
                  ? "projects__slider-image-cover projects__slider-image-cover--change-color"
                  : "projects__slider-image-cover"
              }
            >
              <p className="projects__slider-image-title">{item.title}</p>

              <p
                className="projects__slider-image-more"
                onClick={() => handleShowDetailsProject(index, item.imgPreview)}
              >
                Read more ...
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={
          isHideCover
            ? "projects__slider-button-left projects__slider-button-left--hide"
            : "projects__slider-button-left"
        }
        onClick={handleMoveLeft}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className={
          isHideCover
            ? "projects__slider-button-right projects__slider-button-right--hide"
            : "projects__slider-button-right"
        }
        onClick={handleMoveRight}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ProjectsSlider;
