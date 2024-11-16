import Image from "next/image";
import Carousel from "../carousel";
import bigCircle from "../../../public/circleBg.svg"
import left from "../../../public/header-left.svg"
import right from "../../../public/header-right.svg"
import sparkle from "../../../public/animation-sparkle.svg"
import comet from "../../../public/animate-comet.svg"

export default function Celebrate(){
    return (
        <div className="lg:h-[142vh] h-[100vh] bg-[#FFE5E3] lg:pt-[8rem] pt-[2rem] overflow-hidden relative" id="how-it-works">
            <Image src={sparkle} alt="circle-bg" className="absolute lg:block hidden top-0 animate-pulse" />
            <Image src={comet} alt="circle-bg" className="absolute lg:block hidden right-0 top-[25%] animate-bounce z-10" />
            <Image src={bigCircle} alt="circle-bg" className="absolute lg:-left-[5%] -left-[15%] lg:scale-90 scale-[70%] lg:bottom-0 -bottom-[3rem]" />
            <Image src={bigCircle} alt="circle-bg" className="absolute lg:-right-[13%] -right-[40%] lg:-top-[20%] -top-[30%] scale-[25%] rotate-180" />
            <div className="lg:w-[83%] w-full mx-auto">
                <div className="flex items-center justify-between lg:w-[82%] mx-auto">
                    <Image src={left} alt="circle-bg" className="lg:w-auto w-[15%]" data-aos="fade-right" />
                    <h1 data-aos="fade-down" className="lg:text-[65px] relative lg:top-9 top-4 text-[#4F0D25]/[.9] text-[30px] font-[500] text-center lg:leading-[75px] tracking-wide leading-[40px]">Celebrate With <span className="text-[#FD7E72]">Ease</span></h1>
                    <Image src={right} alt="circle-bg" className="lg:w-auto w-[15%]" data-aos="fade-left" />
                </div>
                <p data-aos="fade-down" className="lg:text-[27px] lg:w-auto w-[90%] mx-auto text-center text-[16px] lg:mt-3 mt-5 text-[#4F0D25]/[.9] tracking-[2%]">From setup to celebration, here’s how we make your wedding day <br className="lg:block hidden" /> hassle-free</p>
                <Carousel />
            </div>
        </div>
    )
}