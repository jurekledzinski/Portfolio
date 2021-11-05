import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const useObserverContactWave = () => {
  const dataWaveRefsContact = useSelector((store) => store.contactRefsWaveData);
  const isMounted = useRef(null);

  useEffect(() => {
    const contactWaveObserver = new IntersectionObserver((entries) => {
      if (isMounted.current) {
        entries.forEach((item) => {
          if (
            item.isIntersecting &&
            item.target.dataset.namewave === 'waveContact-1'
          ) {
            item.target.classList.add('contact__svg-1--active');
          } else {
            item.target.classList.remove('contact__svg-1--active');
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
