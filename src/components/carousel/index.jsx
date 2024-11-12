
import React, { useState, useEffect } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

const Carousel = ({ autoPlay = false, delay = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(0);

    const setActiveOne = () => setCurrentIndex(1)
    const setActiveTwo = () => {
        setPrevIndex(currentIndex)
        setCurrentIndex(2)
    }
    const setActiveThree = () => setCurrentIndex(3)


  // Set up automatic slide transition if autoPlay is true
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, delay);
      return () => clearInterval(interval); // Clear interval on component unmount
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
