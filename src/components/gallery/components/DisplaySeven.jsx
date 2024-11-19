import Image from 'next/image';
import React from 'react';
import animation from '../../../../public/gallery-anim7.svg'

export default function DisplaySeven() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[730px] ${cardStyle} bg-7 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Personalized Photo Album</h3>
            <p className={`${absoluteBottom}`}>Where Your Wedding Moments Live On</p>
            
            <div className={`overflow-hidden absolute object-cover w-full h-full inset-0 bg-[#FD7E72] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 flex items-center justify-center transition-all duration-300`}>
                <Image
                    src={animation}
                    alt="anim"
                    className="absolute mx-auto top-[30%] opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                />
                <p className='w-[70%] h-auto m-auto text-center lg:text-[23px]'>
                    With facial recognition, guests effortlessly <br className='lg:block hidden'/>receive every photo they’re part of— <br className='lg:block hidden'/>whether shared in the event feed or <br />captured by the photographer
                </p>
            </div>
        </div>
    )
}

