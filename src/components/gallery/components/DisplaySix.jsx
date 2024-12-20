import Image from 'next/image';
import React from 'react';
import aiTech from '../../../../public/ai-tech.svg';
import animation from '../../../../public/gallery-anim6.svg'

export default function DisplaySix() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[1170px] ${cardStyle} bg-6 relative overflow-hidden group`}>
            <div className='absolute top-10 ml-10'>
                <div className="flex items-center gap-x-3">
                    <Image src={aiTech} alt="ai" className='md:w-auto w-[15%]' />
                    <p className={`lg:text-[25px] text-[18px] font-[400] text-white/[.8]`}>AI Assisted</p>
                </div>
                <h3 className={`lg:text-[37px] text-[27px]`}>Your Personalized Love Story,<br className='lg:block hidden' /> Beautifully Told</h3>
            </div>
            <p className={`${absoluteBottom}`}>A Journey Worth Sharing</p>
            
            <div 
                className={`overflow-hidden absolute object-cover w-full h-full inset-0 bg-[#FD7E72] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 flex items-center justify-center transition-all duration-300`}
                >
                    <Image src={animation} alt="anim" className="absolute mx-auto top-[6rem] transition-transform duration-500 ease-out group-hover:-rotate-180" />
                    <p className='w-[70%] h-auto m-auto text-center lg:text-[23px]'>
                        Share your unique story with a <br className='lg:block hidden' />personalized profile that reflects your <br className='lg:block hidden' />journey together, from your first date <br className='lg:block hidden' />to the big day<br className='lg:block hidden' /><br className='lg:block hidden' />
                        Let your guests feel the magic that <br className='lg:block hidden' />brought you here 
                    </p>
                    <Image src={animation} alt="anim" className="absolute mx-auto bottom-[6rem] transition-transform duration-500 ease-out rotate-180 group-hover:rotate-0" />
            </div>
        </div>
    )
}

