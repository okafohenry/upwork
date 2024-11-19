
import Image from 'next/image';
import animation from '../../../../public/gallery-anim4.svg'

export default function DisplayFour() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'

    return (
        <div className={`h-[400px] ${cardStyle} bg-4 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Fun & Laughter with Couple Trivia</h3>
            <p className={`${absoluteBottom}`}>Engage Your Guests Like Never Before</p>
            
            <div className="absolute object-cover w-full h-full inset-0 bg-[#FD7E72]  opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300 overflow-hidden">
                <Image src={animation} alt="anim4" className='absolute -top-[23%] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-180 transition-all duration-500 ease-in-out' />
                <Image src={animation} alt="anim4" className='absolute -left-[16%] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-180 transition-all duration-500 ease-in-out' />
                <p className='w-[70%] h-auto m-auto text-center lg:text-[23px]'>
                    Our interactive trivia invites friends<br className='lg:block hidden' /> and family to test their knowledge<br className='lg:block hidden' /> about the couple and engage in a<br className='lg:block hidden' /> lighthearted way
                </p>
                <Image src={animation} alt="anim4" className='absolute -bottom-[23%]  opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-180 transition-all duration-500 ease-in-out' />
                <Image src={animation} alt="anim4" className='absolute -right-[16%] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-180 transition-all duration-500 ease-in-out' />
            </div>
        </div>
    )
}

