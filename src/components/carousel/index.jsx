
"use client"
import React, { useState, useEffect } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import CelebrateSectionMobile from './mobile';

const Carousel = ({ autoPlay = false, delay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);

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

 

  // Set up automatic slide transition if autoPlay is true
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, delay);
      return () => clearInterval(interval); 
    }
  }, [currentIndex, autoPlay, delay]);

  return (
    <>
    {/* web view  */}
      <div className='w-auto lg:block hidden  mx-auto'>
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

      {/* mobile view */}
      <div className='lg:hidden block w-[95%] mx-auto'>
        <CelebrateSectionMobile />
      </div>
    </>
  );
};

export default Carousel;
