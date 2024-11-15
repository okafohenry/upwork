import Image from "next/image";
import roundImg from '../../../public/round-img1.png'
import arrow from '../../../public/arrow1.svg'
import joyful from '../../../public/joyful.svg'


export default function Joyful() {
    return (
        <div data-aos="fade-in" className=" absolute lg:-left-[2rem] -left-[2rem] lg:-mt-[2.5rem] -mt-[7rem]">
            <Image src={arrow} className="relative lg:-top-4 top-[4.5rem] -right-[13rem] lg:rotate-0 rotate-45 lg:w-auto w-[35%]" />
            <Image src={joyful} className="relative lg:-top-3 lg:-right-[8.5rem] -right-[11rem] top-6 lg:w-auto w-[20%]" />
            <Image src={roundImg} className="lg:h-[200px] h-[80px] lg:w-[200px] w-[80px] relative lg:-top-2 -top-[1.5rem] lg:left-8 left-[3rem]" />
        </div>
    )
}