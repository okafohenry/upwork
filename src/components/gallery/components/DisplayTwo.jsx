import Image from 'next/image'
import animation from '../../../../public/gallery-anim2.svg'


export default function DisplayTwo() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[400px] ${cardStyle} bg-2 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Event Details & Itinerary</h3>
            <p className={`${absoluteBottom}`}>Every Detail in One Place</p>
            
            <div className="absolute object-cover w-full h-full inset-0 bg-[#FD7E72] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 ease-in-out">
                {/* First Image Animation - Angle 135 Degrees */}
                <Image
                    src={animation}
                    alt="anim"
                    className="absolute -top-5 -right-5 opacity-0 translate-x-[50%] translate-y-[50%] rotate-180 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                />
                {/* Center Text */}
                <p className="w-[70%] h-auto m-auto text-center lg:text-[23px]">
                    Guests can access a beautifully<br className='hidden lg:block' /> organized event schedule and<br  className='hidden lg:block' /> venue information, from ceremony<br  className='hidden lg:block' />
                    timings to reception details,<br  className='hidden lg:block' /> ensuring they’re informed and on<br  className='hidden lg:block' /> time throughout the day
                </p>
                {/* Second Image Animation - Angle -45 Degrees */}
                <Image
                    src={animation}
                    alt="anim"
                    className="absolute -bottom-5 -left-5 opacity-0 translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-in-out"
                />
            </div>

        </div>
    )
}

