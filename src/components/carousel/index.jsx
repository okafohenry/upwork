
import React, { useState, useEffect } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

const Carousel = ({ autoPlay = false, delay = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const setActiveOne = () => setCurrentIndex(1);
    const setActiveTwo = () => {
      setPrevIndex(currentIndex);
      setCurrentIndex(2);
    };
    const setActiveThree = () => setCurrentIndex(3);
  
    // Function to automatically go to the next slide
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 3 ? 1 : prevIndex + 1));
    };
  
    // Track screen width and set up interval if width <= 900px
    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
  
      // Listen for screen resize
      window.addEventListener('resize', handleResize);
  
      // Set up interval if screen width is 900px or less
      let interval;
      if (screenWidth <= 900) {
        interval = setInterval(() => {
          nextSlide();
        }, 10000); // 10 seconds
      }
  
      // Clean up on component unmount or when screen width changes
      return () => {
        window.removeEventListener('resize', handleResize);
        if (interval) clearInterval(interval);
      };
    }, [screenWidth, currentIndex]);


  // Set up automatic slide transition if autoPlay is true
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, delay);
      return () => clearInterval(interval); 
    }
  }, [currentIndex, autoPlay, delay]);


  return (
    <div>
        {currentIndex === 1 && 
        <SlideOne 
            activeTwo={setActiveTwo}
            activeThree={setActiveThree}
        />
        }
        {currentIndex === 2 && 
        <SlideTwo
            activeOne={setActiveOne}
            activeThree={setActiveThree}
            prevIndex={prevIndex}
        />
        }
        {currentIndex === 3 && 
        <SlideThree
            activeOne={setActiveOne}
            activeTwo={setActiveTwo}
        />
        }
    </div>
  );
};

export default Carousel;
