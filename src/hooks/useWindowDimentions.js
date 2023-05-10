import { useState, useEffect, useCallback } from 'react';

export default function useWindowDimensions() {
  const getWindowDimensions = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    let allowSet = true;

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    function delayHandle() {
      if (allowSet) {
        allowSet = false;
        setTimeout(() => {
          handleResize();
          allowSet = true;
        }, 500);
      }
    }
    window.addEventListener('resize', delayHandle);
    return () => window.removeEventListener('resize', delayHandle);
  }, [getWindowDimensions]);

  return windowDimensions;
}
