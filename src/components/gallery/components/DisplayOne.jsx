import React from 'react';
import animation from '../../../../public/gallery-anim1.svg'
import Image from 'next/image';

export default function DisplayOne() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[730px] ${cardStyle} bg-1 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Capture Every Precious Moment</h3>
            <p className={`${absoluteBottom}`}>Your Guests, Your Memories</p>

            <div
                className={`overflow-hidden absolute object-cover w-full h-full inset-0 bg-[#FD7E72] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 flex items-center justify-center transition-all duration-300`}
                >
                <Image src={animation} alt="anim" className="absolute -top-[8rem] -right-[8rem] transition-transform duration-500 ease-out group-hover:-rotate-180" />
                <p className="w-[70%] h-auto m-auto text-center lg:text-[23px]">
                    Invite guests to share their favorite<br /> snapshots and videos of your big day <br /><br />
                    Relive every heartfelt moment with high<br />-quality downloads, preserving memories <br /> that last a lifetime
                </p>
                <Image src={animation} alt="anim" className="absolute -bottom-[8rem] -left-[8rem] transition-transform duration-500 ease-out group-hover:-rotate-180" />
            </div>
        </div>

    )
}
