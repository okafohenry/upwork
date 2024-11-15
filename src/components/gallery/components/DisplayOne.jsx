import React from 'react';

export default function DisplayOne() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[730px] ${cardStyle} bg-1 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Capture Every Precious Moment</h3>
            <p className={`${absoluteBottom}`}>Your Guests, Your Memories</p>
            
            <div className="absolute object-cover w-full h-full inset-0 bg-[#FD7E72]  opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300">
                <p className='w-[70%] h-auto m-auto text-center lg:text-[23px]'>
                    Invite guests to share their favorite<br /> snapshots and videos of your big day <br /><br />
                    Relive every heartfelt moment with high<br />-quality downloads, preserving memories <br /> that last a lifetime
                </p>
            </div>
        </div>
    )
}
