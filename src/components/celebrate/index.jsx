import Image from "next/image";
import img1 from '../../../public/cs-1.png';
import robot from '../../../public/robot.png';
import card from '../../../public/card.png';
import card2 from '../../../public/card-2.png';
import SlideOne from "../carousel/SlideOne";
import SlideTwo from "../carousel/SlideTwo";
import SlideThree from "../carousel/SlideThree";
import Carousel from "../carousel";

export default function Celebrate(){
    return (
        <div className="celebrate-bg" id="how-it-works">
            <div className="w-[90%] mx-auto">
                <h1 data-aos="fade-down" className="text-center lg:text-[60px] lg:leading-[90px] leading-[50px] text-[45px] pt-[5rem] text-white">Celebrate With Ease</h1>
                <p data-aos="fade-down" className="mt-4 text-center lg:text-[28px] text-[18px]">From setup to celebration, here’s how we make your wedding day <br /> hassle-free</p>
                <Carousel />
            </div>
        </div>
    )
}