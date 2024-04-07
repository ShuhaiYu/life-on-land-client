import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on path change
// ref - https://stackoverflow.com/questions/57574181/how-to-add-scroll-to-top-in-react
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll to top if path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
