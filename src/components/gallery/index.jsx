import Image from 'next/image';
import aiTech from '../../../public/ai-tech.svg';
import anim1 from '../../../public/g-animation1.svg';
import anim2 from '../../../public/g-animation2.svg';
import anim3 from '../../../public/g-animation3.svg';

export default function Gallery() {

    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'

    return (
        <div id="gallery" data-aos="fade-down" className="bg-[#FAFAFA] lg:py-[160px] py-[100px] relative">
            <Image src={anim1} alt="anim1" className='absolute bottom-[9%] right-0 z-10 lg:w-auto w-[10%] animate-bounce' />
            <Image src={anim2} alt="anim2" className='absolute top-[13%] lg:-left-10 z-10 lg:w-auto w-[10%] animate-bounce' />
            <Image src={anim3} alt="anim3" className='absolute top-[60%] lg:-left-[3rem] z-10 lg:w-auto w-[10%] animate-pulse' />
            <div className="w-[90%] mx-auto">
                <h1 className="lg:w-[65%] mx-auto lg:text-[75px] text-[45px] font-[600] text-center lg:leading-[100px] leading-[60px] text-[#0D0D0D]">Designed with You and Your Guests <span className="text-primary">in Mind</span></h1>
                <p className="lg:w-[65%] mx-auto lg:text-[30px] text-center text-[20px] mt-8  text-[#0D0D0D]">Explore the features that will bring your big day to life, making your wedding celebration unforgettable</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[4.5rem]">
                    <div className="col-span-1 grid gap-y-5">
                        <div className={`lg:h-[828px] h-[400px] ${cardStyle} bg-1`}>
                            <h3 className={`${absoluteTop}`}>Capture Every Precious Moment</h3>
                            <p className={`${absoluteBottom}`}>Your Guests, Your Memories</p>
                        </div>
                        <div className={`h-[400px] ${cardStyle} bg-2`}>
                            <h3 className={`${absoluteTop}`}>Event Details & Itinerary</h3>
                            <p className={`${absoluteBottom}`}>Every Detail in One Place</p>
                        </div>
                        <div className={`lg:h-[828px] h-[400px] ${cardStyle} bg-3`}>
                            <h3 className={`${absoluteTop}`}>Gifts from the Heart,<br /> Sent Securely</h3>
                            <p className={`${absoluteBottom}`}>Easy Contributions, Lasting Gratitude</p>
                        </div>
                        <div className={`h-[400px] ${cardStyle} bg-4`}>
                            <h3 className={`${absoluteTop}`}>Fun & Laughter with Couple Trivia</h3>
                            <p className={`${absoluteBottom}`}>Engage Your Guests Like Never Before</p>
                        </div>
                    </div>
                    <div className="col-span-1 grid gap-y-5">
                        <div className={`h-[400px] ${cardStyle} bg-5`}>
                            <div className='absolute top-10 ml-10'>
                                <div className="flex items-center gap-x-3">
                                    <Image src={aiTech} alt="ai" className='md:w-auto w-[15%]' />
                                    <p className={`lg:text-[25px] text-[18px] font-[400] text-white/[.8]`}>AI Assisted</p>
                                </div>
                                <h3 className={`lg:text-[37px] text-[27px]`}>Virtual Guestbook</h3>
                            </div>
                            <p className={`${absoluteBottom}`}>A Digital Keepsake of Love & Laughter</p>
                        </div>
                        <div className={`lg:h-[1250px] h-[400px] ${cardStyle} bg-6`}>
                            <div className='absolute top-10 ml-10'>
                                <div className="flex items-center gap-x-3">
                                    <Image src={aiTech} alt="ai" className='md:w-auto w-[15%]' />
                                    <p className={`lg:text-[25px] text-[18px] font-[400] text-white/[.8]`}>AI Assisted</p>
                                </div>
                                <h3 className={`lg:text-[37px] text-[27px]`}>Your Personalized Love Story,<br className='lg:block hidden' /> Beautifully Told</h3>
                            </div>
                            <p className={`${absoluteBottom}`}>A Journey Worth Sharing</p>
                        </div>
                        <div className={`lg:h-[828px] h-[400px] ${cardStyle} bg-7`}>
                            <h3 className={`${absoluteTop}`}>Personalized Photo Album</h3>
                            <p className={`${absoluteBottom}`}>Where Your Wedding Moments Live On</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}