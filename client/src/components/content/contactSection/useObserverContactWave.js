import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const useObserverContactWave = () => {
  const dataWaveRefsContact = useSelector((store) => store.contactRefsWaveData);
  const isMounted = useRef(null);

  useEffect(() => {
    const contactWaveObserver = new IntersectionObserver((entries) => {
      if (isMounted.current) {
        entries.forEach((item) => {
          console.log(item);
          switch (true) {
            case item.isIntersecting &&
              item.target.dataset.namewave === "waveContact-1":
              item.target.style.animation = `animateWaveContact 1s forwards cubic-bezier(0.23, 1, 0.32, 1)`;
              break;
            case item.isIntersecting &&
              item.target.dataset.namewave === "waveContact-2":
              item.target.style.animation = `animateWaveContactTwo 2s forwards cubic-bezier(0.23, 1, 0.32, 1)`;
              break;
            case item.isIntersecting &&
              item.target.dataset.namewave === "waveContact-3":
              item.target.style.animation = `animateWaveContactThree 3s forwards cubic-bezier(0.23, 1, 0.32, 1)`;
              break;
            case item.isIntersecting &&
              item.target.dataset.namewave === "waveContact-4":
              item.target.style.animation = `animateWaveContactFour 4s forwards cubic-bezier(0.23, 1, 0.32, 1)`;
              break;
            default:
              item.target.style.animation = "none";
              break;
          }
        });
      }
    });

    if (Boolean(dataWaveRefsContact[0])) {
      dataWaveRefsContact.forEach((item) => contactWaveObserver.observe(item));
    }
  }, [dataWaveRefsContact]);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
};

export default useObserverContactWave;
