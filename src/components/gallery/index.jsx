"use client"
import Image from 'next/image';
import anim1 from '../../../public/g-animation1.svg';
import anim2 from '../../../public/g-animation2.svg';
import anim3 from '../../../public/g-animation3.svg';
import anim4 from '../../../public/g-animation4.svg';
import DisplayOne from './components/DisplayOne';
import DisplayTwo from './components/DisplayTwo';
import DisplayThree from './components/DisplayThree';
import DisplayFour from './components/DisplayFour';
import DisplayFive from './components/DisplayFive';
import DisplaySix from './components/DisplaySix';
import DisplaySeven from './components/DisplaySeven';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import next from "../../../public/control-next.svg"
import previous from "../../../public/control-prev.svg"
import React, {  useState } from 'react';
import { gallery } from '@/utils/gallery';
import Card from './mobile/Card';

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (event) => {
      setActiveIndex(event.item);
    };
  
    const enhancedItems = gallery.map((item, index) => (
        <Card 
            key={index} 
            isActive={index === activeIndex} 
            index={index}
            {...item}
        />
    ));
    const responsive = {
        0: { items: 1 },
    }


    const slideTo = (index) => {
        setActiveIndex(index); // Update the state immediately
        if (carouselRef.current) {
            carouselRef.current.slideTo(index); 
        }
    };

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? gallery.length - 1 : prevIndex - 1;
            slideTo(newIndex); // Use the new calculated index
            return newIndex;
        });
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = prevIndex === gallery.length - 1 ? 0 : prevIndex + 1;
            slideTo(newIndex); // Use the new calculated index
            return newIndex;
        });
    };

    const carouselRef = React.useRef(null);

    return (
        <div id="gallery" data-aos="fade-down" className="bg-[#FFE5E3] lg:pt-[160px] lg:pb-[160px] pt-[100px] pb-[50px] relative overflow-hidden">
            <Image src={anim1} alt="anim1" className='absolute lg:block hidden bottom-[9%] right-0 z-10 lg:w-auto w-[20%] animate-bounce' />
            <Image src={anim2} alt="anim2" className='absolute lg:block hidden top-[15%] lg:-left-5 z-10 lg:w-auto w-[20%] animate-bounce' />
            <Image src={anim3} alt="anim3" className='absolute lg:block hidden top-[25%] -right-10 z-10 lg:w-auto w-[20%] animate-pulse' />
            <Image src={anim4} alt="anim4" className='absolute lg:block hidden top-[52.7%] lg:left-0 z-10 lg:w-auto w-[20%] animate-pulse' />
            <div className="lg:w-[85%] mx-auto">
                <h1 className="lg:w-full w-[90%] mx-auto lg:text-[65px] text-[#4F0D25]/[.9] text-[32px] font-[500] text-center lg:leading-[75px] tracking-normal leading-[40px]">Designed with You and Your<br className="lg:block hidden" /> Guests <span className="text-[#FD7E72]">in Mind</span></h1>
                <p className="lg:w-full w-[95%] mx-auto lg:text-[27px] text-center text-[16px] mt-8 text-[#4F0D25]/[.9] tracking-[2%]">Explore the features that will bring your big day to life, making<br className="lg:block hidden" /> your wedding celebration unforgettable</p>
                <div className="lg:grid hidden lg:grid-cols-2 grid-cols-1 gap-5 mt-[6rem]">
                    <div className="col-span-1 grid gap-y-5">
                        <DisplayOne />
                        <DisplayTwo />
                        <DisplayThree />
                        <DisplayFour />
                    </div>
                    <div className="col-span-1 grid gap-y-5">
                        <DisplayFive />
                        <DisplaySix />
                        <DisplaySeven />
                    </div>
                </div>
                <div className='lg:hidden max-w-screen-lg relative mx-auto py-6 flex items-center '>
                    <AliceCarousel
                        ref={carouselRef}
                        mouseTracking
                        responsive={responsive}
                        controlsStrategy="alternate"
                        autoPlay={false}
                        autoPlayInterval={5000}
                        infinite={true}
                        paddingLeft={28}
                        paddingRight={28}
                        items={enhancedItems}
                        disableDotsControls={true}
                        keyboardNavigation={true}
                        onSlideChange={handleSlideChange}
                        onSlideChanged={handleSlideChange}
                        renderPrevButton={() => {
                            return <Image onClick={handlePrevClick} src={previous} className="absolute top-[39.5%] bottom-[39.5%]" alt='previous' />
                        }}
                        renderNextButton={() => {
                            return <Image onClick={handleNextClick} src={next} className="absolute top-[40%] bottom-[40%] right-2" alt='next' />
                        }}
                    />
                </div>
            </div>
        </div>
    )
}