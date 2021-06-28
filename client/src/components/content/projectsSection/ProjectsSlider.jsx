import React, { useCallback, useEffect, useState, useRef } from "react";

import "./ProjectsSlider.scss";

import { ImagesData } from "./ProjectsData";

const App = () => {
  const cleanTime = useRef(null);
  const cleanTimeTwo = useRef(null);
  const isMounted = useRef(null);
  const slidesContainer = useRef(null);
  const [count, setCount] = useState(2);
  const [initialX, setInitialX] = useState(null);
  const [initialY, setInitialY] = useState(null);
  const [timeTransition, setTimeTransition] = useState(0.5);
  const [slides, setSlides] = useState(ImagesData);
  const [widthSlider, setWidthSlider] = useState(900);
  const [heightSlider, setHeightSlider] = useState(350);
  const valueTranslate = useRef(33.33);

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
    console.log("Click left", count);
    clearHover();
    if (count === slides.length - 3) {
      return;
    }
    setTimeTransition(0.5);
    setCount((prevValue) => prevValue + 1);
  }, [count, slides.length]);

  const handleMoveRight = useCallback(() => {
    clearHover();
    console.log("click right", count);
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
    // console.log(count, "real time");

    if (count === slides.length - 3) {
      setTimeout(() => {
        setTimeTransition(0);
        slidesContainer.current.style.transform = `translateX(-${valueTranslate.current}%)`;
        setCount(1);
      }, 480);
      return;
    }
  }, [count, slides.length]);

  useEffect(() => {
    let imgs = copyImages();
    setSlides(imgs);
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      clearTimeout(cleanTime.current);
    };
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
      let heightratio = (heightSliderWrapper * ratio) / 2;
      sizeSliderDefaultAndResizeLess768(heightratio);
    }

    if (window.innerWidth <= 500 && isMounted.current) {
      let heightSliderWrapper = window.innerHeight;
      let heightratio = (heightSliderWrapper * ratio) / 1.6;
      sizeSliderResizeLess500(heightratio);
    }
  }, [heightSlider, widthSlider]);

  useEffect(() => {
    const resizeSlider = () => {
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
        let heightRatio = (heightInnerWindow * ratio) / 2;
        sizeSliderDefaultAndResizeLess768(heightRatio);
      }

      if (window.innerWidth <= 500 && isMounted.current) {
        let heightInnerWindow = window.innerHeight;
        let heightRatio = (heightInnerWindow * ratio) / 1.6;
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

  const clearHover = () => {
    let arraySlides = [...slidesContainer.current.children];

    arraySlides.forEach((item) => {
      if (item.classList.contains("projects__slider-image--mobile")) {
        item.classList.remove("projects__slider-image--mobile");
        return;
      }
      return;
    });
  };

  const startTouchDisplay = (e) => {
    e.preventDefault();
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    setInitialX(touchX);
    setInitialY(touchY);
  };

  useEffect(() => {
    const moveTouchDisplay = (e) => {
      e.preventDefault();

      if (!initialX || !initialY) {
        return;
      }

      const currenTouchX = e.touches[0].clientX;
      const currenTouchY = e.touches[0].clientY;

      const diffrenceX = initialX - currenTouchX;
      const diffrenceY = initialY - currenTouchY;

      console.log(diffrenceX, " diffrence");

      if (Math.abs(diffrenceX) > Math.abs(diffrenceY)) {
        if (diffrenceX > 1) {
          slidesContainer.current.dispatchEvent(events.swipeLeft);
          clearHover();
        } else if (diffrenceX < -0.4995) {
          slidesContainer.current.dispatchEvent(events.swipeRight);
          clearHover();
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

  const handleShowTextOnImage = (e) => {
    e.preventDefault();
    e.target.parentElement.classList.add("projects__slider-image--mobile");
  };

  useEffect(() => {
    cleanTimeTwo.current = setTimeout(() => {
      let arraySlides = [...slidesContainer.current.children];
      arraySlides.forEach((item) => {
        item.addEventListener("touchstart", handleShowTextOnImage);
      });
    }, 100);

    return () => clearTimeout(cleanTimeTwo.current);
  }, []);

  const handleShowDetailsProject = (indexCart) => {
    console.log(indexCart);
  };

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
            className={`projects__slider-image projects__slider-image--${
              index + 1
            }`}
            key={index}
          >
            <div
              className="projects__slider-img-frame"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            ></div>
            <div className="projects__slider-image-cover">
              <p className="projects__slider-image-title">{item.title}</p>

              <p
                className="projects__slider-image-more"
                onClick={() => handleShowDetailsProject(index)}
              >
                Read more ...
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="projects__slider-button-left" onClick={handleMoveLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="projects__slider-button-right"
        onClick={handleMoveRight}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default App;
