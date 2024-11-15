import Image from "next/image";
import Carousel from "../carousel";
import bigCircle from "../../../public/circleBg.svg"
import left from "../../../public/header-left.svg"
import right from "../../../public/header-right.svg"
import sparkle from "../../../public/animation-sparkle.svg"
import comet from "../../../public/animate-comet.svg"

export default function Celebrate(){
    return (
        <div className="h-[142vh] bg-[#FFE5E3] pt-[8rem] overflow-hidden relative" id="how-it-works">
            <Image src={sparkle} alt="circle-bg" className="absolute top-0 animate-pulse" />
            <Image src={comet} alt="circle-bg" className="absolute right-0 top-[25%] animate-bounce z-10" />
            <Image src={bigCircle} alt="circle-bg" className="absolute -left-[5%] scale-90 bottom-0" />
            <Image src={bigCircle} alt="circle-bg" className="absolute -right-[13%] -top-[20%] scale-[32%] rotate-180" />
            <div className="w-[83%] mx-auto">
                <div className="flex items-center justify-between w-[82%] mx-auto">
                    <Image src={left} alt="circle-bg" className="" data-aos="fade-right" />
                    <h1 data-aos="fade-down" className="lg:text-[65px] relative top-9 text-[#4F0D25]/[.9] text-[45px] font-[500] text-center lg:leading-[75px] tracking-wide leading-[60px]">Celebrate With <span className="text-[#FD7E72]">Ease</span></h1>
                    <Image src={right} alt="circle-bg" className="" data-aos="fade-left" />
                </div>
                <p data-aos="fade-down" className="lg:text-[27px] text-center text-[20px] mt-3 text-[#4F0D25]/[.9] tracking-[2%]">From setup to celebration, here’s how we make your wedding day <br /> hassle-free</p>
                <Carousel />
            </div>
        </div>
    )
}