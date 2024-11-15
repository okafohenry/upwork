
import Image from 'next/image';
import aiTech from '../../../../public/ai-tech.svg';

export default function DisplayFive() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'

    return (
        <div className={`h-[400px] ${cardStyle} bg-5 relative overflow-hidden group`}>
            <div className='absolute top-10 ml-10'>
                <div className="flex items-center gap-x-3">
                    <Image src={aiTech} alt="ai" className='md:w-auto w-[15%]' />
                    <p className={`lg:text-[25px] text-[18px] font-[400] text-white/[.8]`}>AI Assisted</p>
                </div>
                <h3 className={`lg:text-[37px] text-[27px]`}>Virtual Guestbook</h3>
            </div>
            <p className={`${absoluteBottom}`}>A Digital Keepsake of Love & Laughter</p>
            
            <div className="absolute object-cover w-full h-full inset-0 bg-[#FD7E72]  opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300">
                <p className='w-[70%] h-auto m-auto text-center lg:text-[23px]'>
                With our easy-to-use digital <br />guestbook, guests can leave <br />heartfelt notes with the help of AI<br /> to craft the perfect words, making<br /> each message unique and<br /> memorable
                </p>
            </div>
        </div>
    )
}
