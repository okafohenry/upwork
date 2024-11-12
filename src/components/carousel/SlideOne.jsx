"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import scan from '../../../public/iconScan.svg';
import ai from '../../../public/iconAi.svg';
import cheers from '../../../public/iconCheers.svg';
import robot from '../../../public/gif1.gif';

export default function SlideOne({ activeTwo, activeThree }) {
    const [isContentVisible, setContentVisible] = useState(false);

  // Delay the content reveal until the animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 90); // Match this delay with the curtain animation duration

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

    return (
        <div className='grid lg:grid-cols-10 grid-cols-1 gap-x-5 h-[430px] mt-[6rem]'>
            <div className='lg:col-span-8 col-span-1 rounded-[50px] h-full bg-white shadow-xl py-[20px] lg:pl-[40px] pl-[20px] lg:pr-[5px] pr-[20px] origin-left transform scale-x-0 animate-curtain-close'>
                <Image src={ai} alt='ai' />
                <div className="grid lg:grid-cols-6 grid-cols-1 gap-x-2 relative">
                    <div className="lg:col-span-4 col-span-1 relative z-10">
                        <h2 className={`text-primary lg:text-[40px] text-[27px] font-[600] transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>
                            Create Your Celebration Hub
                        </h2>
                        <p className={`lg:text-[21px] text-[14px] text-[#0D0D0D] mt-5 transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>
                        Start by signing up and setting up your wedding day details. <br /><br />

                        Easily fill in everything—from your event itinerary and trivia questions <br /> to your gift list and love story, with AI assistance making it even easier to share your journey!
                        </p>
                    </div>
                    <div className={`col-span-2 lg:flex hidden justify-center -mt-3 absolute right-9 transition-opacity duration-500 ${
                    isContentVisible ? 'opacity-100' : 'opacity-0'
                    } `}>
                        <Image src={robot} alt="robot" className="w-[89%] rotate-40" />
                    </div>
                </div>
            </div>

            <div className='lg:flex hidden lg:col-span-1 rounded-[50px] h-full bg-white/[.6] items-start px-[20px] pt-[20px]'>
                <Image src={scan} alt='scan' className='cursor-pointer' onClick={activeTwo} />
            </div>

            <div className='lg:flex hidden lg:col-span-1 rounded-[50px] h-full bg-white/[.3] items-start px-[20px] pt-[20px]'>
                <Image src={cheers} alt='cheers' className='cursor-pointer' onClick={activeThree} />
            </div>
        </div>
    )
}