import Image from 'next/image';
import aiTech from '../../../public/ai-tech.svg';
import anim1 from '../../../public/g-animation1.svg';
import anim2 from '../../../public/g-animation2.svg';
import anim3 from '../../../public/g-animation3.svg';
import overlay1 from '../../../public/overlay-1.svg';
import overlay2 from '../../../public/overlay-2.svg';
import overlay3 from '../../../public/overlay-3.svg';
import overlay4 from '../../../public/overlay-4.svg';
import overlay5 from '../../../public/overlay-5.svg';
import overlay6 from '../../../public/overlay-6.svg';
import overlay7 from '../../../public/overlay-7.svg';

export default function Gallery() {

    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'

    return (
        <div id="gallery" data-aos="fade-down" className="bg-[#FAFAFA] lg:py-[160px] py-[100px] relative overflow-hidden">
            <Image src={anim1} alt="anim1" className='absolute bottom-[9%] right-0 z-10 lg:w-auto w-[20%] animate-bounce' />
            <Image src={anim2} alt="anim2" className='absolute top-[13%] lg:-left-10 z-10 lg:w-auto w-[20%] animate-bounce' />
            <Image src={anim3} alt="anim3" className='absolute top-[60%] lg:-left-[3rem] z-10 lg:w-auto w-[20%] animate-pulse' />
            <div className="w-[90%] mx-auto">
                <h1 className="lg:w-[65%] mx-auto lg:text-[75px] text-[45px] font-[600] text-center lg:leading-[100px] leading-[60px] text-[#0D0D0D]">Designed with You and Your Guests <span className="text-primary">in Mind</span></h1>
                <p className="lg:w-[65%] mx-auto lg:text-[30px] text-center text-[20px] mt-8  text-[#0D0D0D]">Explore the features that will bring your big day to life, making your wedding celebration unforgettable</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[4.5rem]">
                    <div className="col-span-1 grid gap-y-5">
                        <div className={`lg:h-[750px] h-[350px] ${cardStyle} bg-1 relative overflow-hidden group`}>
                            <h3 className={`${absoluteTop}`}>Capture Every Precious Moment</h3>
                            <p className={`${absoluteBottom}`}>Your Guests, Your Memories</p>

                            <Image 
                                src={overlay1} 
                                alt="overlay-1" 
                                className="absolute object-cover w-full h-full inset-0 bg-black bg-opacity-70 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300" 
                            />
                        </div>
                        <div className={`h-[350px] ${cardStyle} bg-2 relative overflow-hidden group`}>
                            <h3 className={`${absoluteTop}`}>Event Details & Itinerary</h3>
                            <p className={`${absoluteBottom}`}>Every Detail in One Place</p>

                            <Image 
                                src={overlay5} 
                                alt="overlay-5" 
                                className="absolute object-cover w-full h-full inset-0 bg-black bg-opacity-70 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300" 
                            />
                        </div>
                        <div className={`lg:h-[750px] h-[350px] ${cardStyle} bg-3 relative overflow-hidden group`}>
                            <h3 className={`${absoluteTop}`}>Gifts from the Heart,<br /> Sent Securely</h3>
                            <p className={`${absoluteBottom}`}>Easy Contributions, Lasting Gratitude</p>
                            <Image 
                                src={overlay7} 
                                alt="overlay-7" 
                                className="absolute object-cover w-full h-full inset-0 bg-black bg-opacity-70 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300" 
                            />
                        </div>
                        <div className={`h-[350px] ${cardStyle} bg-4 relative overflow-hidden group`}>
                            <h3 className={`${absoluteTop}`}>Fun & Laughter with Couple Trivia</h3>
                            <p className={`${absoluteBottom}`}>Engage Your Guests Like Never Before</p>
                            <Image 
                                src={overlay6} 
                                alt="overlay-6" 
                                className="absolute object-cover w-full h-full inset-0 bg-black bg-opacity-70 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300" 
                            />
                        </div>
                    </div>
                    <div className="col-span-1 grid gap-y-5">
                        <div className={`h-[350px] ${cardStyle} bg-5 relative overflow-hidden group`}>
                            <div className='absolute top-10 ml-10'>
                                <div className="flex items-center gap-x-3">
                                    <Image src={aiTech} alt="ai" className='md:w-auto w-[15%]' />
                                    <p className={`lg:text-[25px] text-[18px] font-[400] text-white/[.8]`}>AI Assisted</p>
                                </div>
                                <h3 className={`lg:text-[37px] text-[27px]`}>Virtual Guestbook</h3>
                            </div>
                            <p className={`${absoluteBottom}`}>A Digital Keepsake of Love & Laughter</p>
                            <Image 
                                src={overlay3} 
                                alt="overlay-3" 
                                className="absolute object-cover w-full h-full inset-0 bg-black bg-opacity-70 opacity-0 translate-x-full  group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300" 
                            />
                        </div>
                        <div className={`lg:h-[1120px] h-[350px] ${cardStyle} bg-6 relative overflow-hidden group`}>
                            <div className='absolute top-10 ml-10'>
                                <div className="flex items-center gap-x-3">
                                    <Image src={aiTech} alt="ai" className='md:w-auto w-[15%]' />
                                    <p className={`lg:text-[25px] text-[18px] font-[400] text-white/[.8]`}>AI Assisted</p>
                                </div>
                                <h3 className={`lg:text-[37px] text-[27px]`}>Your Personalized Love Story,<br className='lg:block hidden' /> Beautifully Told</h3>
                            </div>
                            <p className={`${absoluteBottom}`}>A Journey Worth Sharing</p>
                            <Image 
                                src={overlay4} 
                                alt="overlay-4" 
                                className="absolute object-cover w-full h-full inset-0 bg-black bg-opacity-70 opacity-0 translate-x-full  group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300" 
                            />
                        </div>
                        <div className={`lg:h-[750px] h-[350px] ${cardStyle} bg-7 relative overflow-hidden group`}>
                            <h3 className={`${absoluteTop}`}>Personalized Photo Album</h3>
                            <p className={`${absoluteBottom}`}>Where Your Wedding Moments Live On</p>
                            <Image 
                                src={overlay2} 
                                alt="overlay-2" 
                                className="absolute object-cover w-full h-full inset-0 bg-black bg-opacity-70 opacity-0 translate-x-full  group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}