import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // A short timeout is sometimes needed to allow the DOM to update.
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement; 