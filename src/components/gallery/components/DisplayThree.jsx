import React from 'react';

export default function DisplayThree() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[730px] ${cardStyle} bg-3 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Gifts from the Heart,<br /> Sent Securely</h3>
            <p className={`${absoluteBottom}`}>Easy Contributions, Lasting Gratitude</p>
            
            <div className="absolute object-cover w-full h-full inset-0 bg-[#FD7E72]  opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300">
                <p className='w-[80%] h-auto m-auto text-center lg:text-[23px]'>
                    From secure financial contributions to <br />curated gift lists, we offer thoughtful ways <br />for guests to give, no awkward hand-offs or <br />gift tables required
                </p>
            </div>
        </div>
    )
}
