import Image from "next/image";
import img1 from '../../../public/cs-1.png';
import robot from '../../../public/robot.png';
import card from '../../../public/card.png';
import card2 from '../../../public/card-2.png';

export default function Celebrate(){
    return (
        <div className="celebrate-bg">
            <div className="w-[90%] mx-auto">
                <h1 data-aos="fade-down" className="text-center lg:text-[60px] lg:leading-[90px] leading-[50px] text-[45px] pt-[5rem] text-white">Celebrate With Ease</h1>
                <p data-aos="fade-down" className="mt-4 text-center lg:text-[28px] text-[16px]">From setup to celebration, here’s how we make your wedding day <br /> hassle-free</p>
                <div data-aos="fade-down" className="w-full flex items-center lg:gap-x-5 mt-[4rem]">
                    <div className="bg-white rounded-[50px] pt-[30px] px-[30px] pb-[70px] w-full shadow-lg">
                        <Image src={img1} alt="image1" />
                        <div className="grid lg:grid-cols-6 grid-cols-1">
                            <div className="lg:col-span-4 col-span-1">
                                <h2 className="text-primary lg:text-[35px] text-[27px] font-[600]">Create Your Celebration Hub</h2>
                                <p className="lg:text-[18px] text-[14px] text-[#0D0D0D] mt-5">
                                Start by signing up and setting up your wedding day details. <br /><br />

                                Easily fill in everything—from your event itinerary and trivia questions <br /> to your gift list and love story, with AI assistance making it even easier to share your journey!
                                </p>
                            </div>
                            <div className="col-span-2 lg:flex hidden justify-center -mt-3">
                                <Image src={robot} alt="image1" className="w-[70%]" />
                            </div>
                        </div>
                    </div>
                    <Image src={card} alt="card" className="lg:block hidden" />
                    <Image src={card2} alt="card2" className="lg:block hidden" />
                </div>
            </div>
        </div>
    )
}