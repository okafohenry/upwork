import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import scan from '../../../public/iconScan.svg';
import ai from '../../../public/iconAi.svg';
import cheers from '../../../public/iconCheers.svg';
import cheersGif from '../../../public/gif3.gif';

export default function SlideThree({ activeOne, activeTwo }) {
    const [isContentVisible, setContentVisible] = useState(false);

    // Delay the content reveal until the animation completes
    useEffect(() => {
      const timer = setTimeout(() => {
        setContentVisible(true);
      }, 90); // Match this delay with the curtain animation duration
  
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

  return (
    <div className='grid lg:grid-cols-10 grid-cols-1 gap-x-5 h-[430px] mt-[6rem] '>
        <div className='lg:flex hidden lg:col-span-1 rounded-[50px] h-full bg-white/[.3] items-start relative z-10 px-[20px] pt-[20px]'>
            <Image src={ai} alt='ai' className='cursor-pointer' onClick={activeOne} />
        </div>

        <div className='lg:flex hidden lg:col-span-1 rounded-[50px] h-full bg-white/[.6] items-start px-[20px] pt-[20px]'>
            <Image src={scan} alt='scan' className='cursor-pointer' onClick={activeTwo} />
        </div>

        <div className='lg:col-span-8 col-span-1 rounded-[50px] h-full bg-white shadow-xl py-[20px] lg:pl-[40px] pl-[20px] lg:pr-[5px] pr-[20px] origin-right transform scale-x-0 animate-curtain-close'>
            <Image src={cheers} alt='cheers' />
            <div className="grid lg:grid-cols-6 grid-cols-1 gap-x-2 relative">
                <div className="lg:col-span-4 col-span-1 relative z-10">
                    <h2 className={`text-primary lg:text-[40px] text-[27px] font-[600] transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>Let the Celebration Begin!</h2>
                    <p className={`lg:text-[21px] text-[14px] text-[#0D0D0D] mt-5 transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>
                    Guests can now fully interact with your wedding day! They can message, contribute gifts, play trivia games, share photos and videos, and view all event details. <br /><br />

                    After the event, everything remains accessible, including a personalized photo album and high-quality downloads for all to relive the day’s magic.
                    </p>
                </div>
                <div className={`col-span-2 lg:flex hidden justify-center -mt-3 absolute right-9 transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <Image src={cheersGif} alt="cheers-gif" className="w-[89%] rotate-40" />
                </div>
            </div>
        </div>

    </div>
  )
}
