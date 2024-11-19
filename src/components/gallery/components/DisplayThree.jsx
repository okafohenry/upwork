import Image from 'next/image';
import React from 'react';
import animation from '../../../../public/gallery-anim3.svg'

export default function DisplayThree() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[730px] ${cardStyle} bg-3 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Gifts from the Heart,<br className='lg:block hidden' /> Sent Securely</h3>
            <p className={`${absoluteBottom}`}>Easy Contributions, Lasting Gratitude</p>

            <div
                className={`overflow-hidden absolute object-cover w-full h-full inset-0 bg-[#FD7E72] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 flex items-center justify-center transition-all duration-300`}
                >
                <Image
                    src={animation}
                    alt="anim"
                    className="absolute top-0 mx-auto opacity-0 translate-x-[50%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out"
                />
                <p className='w-[80%] h-auto m-auto text-center lg:text-[23px]'>
                    From secure financial contributions to <br className='lg:block hidden' />curated gift lists, we offer thoughtful ways <br className='lg:block hidden' />for guests to give, no awkward hand-offs or <br className='lg:block hidden' />gift tables required
                </p>
                <Image
                    src={animation}
                    alt="anim"
                    className="absolute bottom-0 mx-auto rotate-180 opacity-0 translate-x-[-50%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-in-out"
                />
            </div>
        </div>
    )
}
