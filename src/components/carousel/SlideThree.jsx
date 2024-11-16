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
    <div className='grid lg:grid-cols-10 grid-cols-1 gap-x-5 lg:h-[430px] lg:mt-[6rem] mt-[2.5rem] '>
        <div onClick={activeOne} className='lg:flex hidden cursor-pointer lg:col-span-1 rounded-[50px] h-full bg-white/[.3] items-start relative z-10 px-[20px] pt-[20px]'>
            <Image src={ai} alt='ai' className='cursor-pointer' />
        </div>

        <div onClick={activeTwo} className='lg:flex cursor-pointer hidden lg:col-span-1 rounded-[50px] h-full bg-white/[.6] items-start px-[20px] pt-[20px]'>
            <Image src={scan} alt='scan' className=''  />
        </div>

        <div className='lg:col-span-8 col-span-1 lg:rounded-[50px] rounded-[24px] h-full bg-white shadow-xl py-[20px] lg:pl-[40px] pl-[20px] lg:pr-[5px] pr-[20px] origin-right transform scale-x-0 animate-curtain-close overflow-hidden'>
            <div className="flex items-center justify-between">
                <Image src={cheers} alt='cheers' className='lg:w-auto w-[12%]' />
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-1  gap-x-2 relative">
                <div className="lg:col-span-4 col-span-1 lg:order-1 order-2 relative z-10">
                    <h2 className={`text-primary lg:text-[40px] text-[24px] font-[600] transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>Let the Celebration Begin!</h2>
                    <p className={`lg:text-[21px] text-[15px] text-[#4F0D25] mt-5 transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>
                    Guests can now fully interact with your wedding day! They can message, contribute gifts, play trivia games, share photos and videos, and view all event details. <br /><br />

                    After the event, everything remains accessible, including a personalized photo album and high-quality downloads for all to relive the day’s magic.
                    </p>
                </div>
                <div className={`col-span-2 flex lg:order-2 order-1 justify-center lg:-mt-3 -mt-6 lg:absolute right-9 transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <Image src={cheersGif} alt="cheers-gif" className="lg:w-[89%] w-[45%] lg:rotate-40" />
                </div>
            </div>
        </div>

    </div>
  )
}
