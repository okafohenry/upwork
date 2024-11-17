"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import scan from '../../../public/iconScan.svg';
import ai from '../../../public/iconAi.svg';
import cheers from '../../../public/iconCheers.svg';
import qrCode from '../../../public/gif2.gif';

export default function SlideTwo({ activeOne, activeThree, prevIndex }) {
    const [isContentVisible, setContentVisible] = useState(false);

    // Delay the content reveal until the animation completes
    useEffect(() => {
      const timer = setTimeout(() => {
        setContentVisible(true);
      }, 90); // Match this delay with the curtain animation duration
  
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);


  return (
    <div className='grid lg:grid-cols-10 grid-cols-1 gap-x-5 h-[430px] lg:mt-[6rem] mt-[2.5rem]'>
        <div onClick={activeOne} className='flex  cursor-pointer lg:col-span-1 rounded-[50px] h-full bg-white/[.3] items-start relative z-10 px-[20px] pt-[20px] '> 
            <Image src={ai} alt='ai' className='cursor-pointer'  />
        </div>

        <div className={`lg:col-span-8 col-span-1 rounded-[50px] relative z-10 h-full bg-white shadow-md shadow-[#00000040] py-[20px] lg:pl-[40px] pl-[20px] lg:pr-[5px] pr-[20px] overflow-hidden ${prevIndex === 1 ? 'origin-right' : 'origin-left'} transform scale-x-0 animate-curtain-close`}> {/** change origin based on current index */}
            <div className="flex items-center justify-between">
                <Image src={scan} alt='scan' className='lg:w-auto w-[12%]'  />
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-1 gap-x-2 relative">
                <div className="lg:col-span-4 col-span-1 lg:order-1 order-2 relative z-10">
                    <h2 className={`text-primary lg:text-[40px] font-[600] text-[24px] transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>Share with a Single QR Code</h2>
                    <p className={`lg:text-[21px] text-[15px] text-[#4F0D25] mt-5 transition-opacity duration-500 ${ isContentVisible ? 'opacity-100' : 'opacity-0'
                        }`}>
                    Once your hub is complete, receive a unique, shareable QR code and guest list link. <br /><br />

                    Simply send it to your guests, who can quickly register with just their <br /> phone number to access everything your celebration offers.
                    </p>
                </div>
                <div className={`col-span-2 flex lg:order-2 order-1 justify-center lg:-mt-3 -mt-6 lg:absolute right-9 transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <Image src={qrCode} alt="qr-code" className="lg:w-[89%] w-[45%] lg:rotate-40" />
                </div>
            </div>
        </div>

        <div onClick={activeThree} className='flex relative z-10 cursor-pointer lg:col-span-1 rounded-[50px] h-full bg-white/[.3] items-start px-[20px] pt-[20px]'>
            <Image src={cheers} alt='cheers' className='cursor-pointer'  />
        </div>
    </div>
  )
}
