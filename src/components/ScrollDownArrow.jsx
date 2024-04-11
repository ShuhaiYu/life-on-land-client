import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollDownArrow = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // check if the page is scrollable
        const checkScrollable = () => {
            // threshold for scrollable page height
            const threshold = 300; 
            const isScrollable = document.documentElement.scrollHeight - window.innerHeight > threshold;
            setIsVisible(isScrollable);
        };

        // page scroll event handler
        const handleScroll = () => {
            // if user scrolls to the top half of the page, show the scroll down arrow
            if (window.pageYOffset < window.innerHeight / 2) {
                checkScrollable();
            } else {
                setIsVisible(false);
            }
        };

        checkScrollable();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkScrollable); // re-check on window resize

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkScrollable);
        };
    }, [location.pathname]); // re-check on route change

    return (
        isVisible && (
            <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bounce'>
                <i className='fi fi-rr-angle-small-down text-5xl text-dark-grey'></i>
            </div>
        )
    );
};

export default ScrollDownArrow;
