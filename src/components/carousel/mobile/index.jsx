"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import scan from '../../../../public/iconScan.svg';
import ai from '../../../../public/iconAi.svg';
import cheers from '../../../../public/iconCheers.svg';
import robot from '../../../../public/gif1.gif';
import cheersGif from '../../../../public/gif3.gif';
import qrCode from '../../../../public/gif2.gif';


export default function CelebrateSectionMobile() {
  const [currentIndexMobile, setCurrentIndexMobile ] = useState(1)

    return (
        <div className='grid gap-y-4 mt-[2.5rem]'>
            {/* ai  */}
            <div className={` shadow-md shadow-[#00000040] transition-all duration-500 ease-in-out ${currentIndexMobile === 1 ? 'py-[20px] pl-[20px] pr-[20px] bg-white rounded-[32px] max-h-auto' : 'py-[10px] pl-[15px] pr-[20px] bg-white/[.6] rounded-[50px] max-h-[80px]  overflow-hidden' } relative z-10`}>
                <div onClick={() => setCurrentIndexMobile(1)} className="flex items-center justify-start w-full">
                    <Image src={ai} alt='ai' className='lg:w-auto md:w-[7%] w-[12%]' /> 
                </div>
                <div className={`grid grid-cols-1 gap-x-2 relative ${currentIndexMobile === 1 ? 'block' : 'hidden'}`}>
                    <div className=" col-span-1 order-2 relative z-10">
                        <h2 className={`text-primary text-[24px] font-[600] transition-opacity duration-500 `}>
                            Create Your Celebration Hub
                        </h2>
                        <p className={` text-[15px] text-[#4F0D25] mt-5 transition-opacity duration-500 `}>
                        Start by signing up and setting up your wedding day details. <br /><br />

                        Easily fill in everything—from your event itinerary and trivia questions <br /> to your gift list and love story, with AI assistance making it even easier to share your journey!
                        </p>
                    </div>
                    <div className={`col-span-2 order-1 flex justify-center -mt-6 right-9 transition-opacity duration-500 `}>
                        <Image src={robot} alt="robot" className="lg:w-[89%]  w-[45%]" />
                    </div>
                </div>
            </div>

            {/* scan  */}
            <div className={` h-full  shadow-md shadow-[#00000040] transition-all duration-500 ease-in-out relative z-10   ${currentIndexMobile === 2 ? 'py-[20px] pl-[20px] pr-[20px] bg-white rounded-[32px] max-h-auto' : 'py-[10px] pl-[15px] pr-[20px] bg-white/[.6] rounded-[50px] max-h-[80px] ' }`}> 
                <div className="flex items-center justify-start w-full" onClick={() => setCurrentIndexMobile(2)} >
                    <Image src={scan} alt='scan' className='lg:w-auto md:w-[7%] w-[12%]'  />
                </div>
                <div className={`grid grid-cols-1 gap-x-2 relative ${currentIndexMobile === 2 ? 'block' : 'hidden'}`}>
                    <div className="lg:col-span-4 col-span-1 lg:order-1 order-2 relative z-10">
                        <h2 className={`text-primary lg:text-[40px] font-[600] text-[24px] transition-opacity duration-500 `}> 
                            Share with a Single QR Code
                        </h2>
                        <p className={`lg:text-[21px] text-[15px] text-[#4F0D25] mt-5 transition-opacity duration-500 `}> 
                        Once your hub is complete, receive a unique, shareable QR code and guest list link. <br /><br />

                        Simply send it to your guests, who can quickly register with just their <br /> phone number to access everything your celebration offers.
                        </p>
                    </div>
                    <div className={`col-span-2 flex lg:order-2 order-1 justify-center lg:-mt-3 -mt-6 lg:absolute right-9 transition-opacity duration-500 `}> 
                        <Image src={qrCode} alt="qr-code" className="lg:w-[89%] w-[45%] lg:rotate-40" />
                    </div>
                </div>
            </div>

            {/* celebrate */}
            <div className={`h-full shadow-md shadow-[#00000040] transition-all duration-500 ease-in-out relative z-10  ${currentIndexMobile === 3 ? 'py-[20px] pl-[20px] pr-[20px] bg-white rounded-[32px]  max-h-auto' : 'py-[10px] pl-[15px] pr-[20px] bg-white/[.7] rounded-[50px]  max-h-[80px]' }`}>
                <div className="flex items-center justify-start" onClick={() => setCurrentIndexMobile(3)}>
                    <Image src={cheers} alt='cheers' className='lg:w-auto md:w-[7%] w-[12%]' />
                </div>
                <div className={`grid grid-cols-1 gap-x-2 relative ${currentIndexMobile === 3 ? 'block' : 'hidden'}`}>
                    <div className="lg:col-span-4 col-span-1 lg:order-1 order-2 relative z-10">
                        <h2 className={`text-primary lg:text-[40px] text-[24px] font-[600] transition-opacity duration-500 `}>Let the Celebration Begin!</h2>
                        <p className={`lg:text-[21px] text-[15px] text-[#4F0D25] mt-5 transition-opacity duration-500 `}> 
                        Guests can now fully interact with your wedding day! They can message, contribute gifts, play trivia games, share photos and videos, and view all event details. <br /><br />

                        After the event, everything remains accessible, including a personalized photo album and high-quality downloads for all to relive the day’s magic.
                        </p>
                    </div>
                    <div className={`col-span-2 flex lg:order-2 order-1 justify-center lg:-mt-3 -mt-6 lg:absolute right-9 transition-opacity duration-`}> 
                        <Image src={cheersGif} alt="cheers-gif" className="lg:w-[89%] w-[45%] lg:rotate-40" />
                    </div>
                </div>
            </div>
        </div>
    )
}