import React from 'react';

export default function DisplaySeven() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[730px] ${cardStyle} bg-7 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Personalized Photo Album</h3>
            <p className={`${absoluteBottom}`}>Where Your Wedding Moments Live On</p>
            
            <div className="absolute object-cover w-full h-full inset-0 bg-[#FD7E72]  opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300">
                <p className='w-[70%] h-auto m-auto text-center lg:text-[23px]'>
                    With facial recognition, guests effortlessly <br />receive every photo they’re part of— <br />whether shared in the event feed or <br />captured by the photographer
                </p>
            </div>
        </div>
    )
}

