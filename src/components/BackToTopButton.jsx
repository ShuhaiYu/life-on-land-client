import React, { useState, useEffect } from 'react';


// Back to top button component
// ref - https://stackoverflow.com/questions/57574181/how-to-add-scroll-to-top-in-react
const BackToTopButton = () => {
  // Set visibility state
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down to certain distance
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 p-3 bg-light-green hover:bg-dark-green text-white rounded-full transition duration-300 ease-in-out px-4"
          aria-label="Back to top"
        >
        <i className="fi fi-rr-angle-small-up text-xl">   </i>     Back To Top 
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
