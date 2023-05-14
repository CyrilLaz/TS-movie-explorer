import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let allowSet = true;

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    function delayHandle() {
      if (allowSet) {
        allowSet = false;
        setTimeout(() => {
          handleScroll();
          allowSet = true;
        }, 500);
      }
    }
      window.addEventListener('scroll', delayHandle, { passive: true });
      return () => {
          window.removeEventListener('scroll', delayHandle);
      };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
