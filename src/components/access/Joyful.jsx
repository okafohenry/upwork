import Image from "next/image";
import roundImg from '../../../public/round-img1.png'
import arrow from '../../../public/arrow1.svg'
import joyful from '../../../public/joyful.svg'


export default function Joyful() {
    return (
        <div data-aos="fade-in" className="lg:w-auto w-[20%] absolute lg:-left-[5rem] -left-[2rem] lg:-mt-[2.5rem] -mt-[5rem]">
            <Image src={arrow} className="relative lg:-top-4 -top-2 lg:-right-[13rem] -right-[5rem]" />
            <Image src={joyful} className="relative lg:-top-3 lg:-right-[7.5rem] -right-[2rem] -top-1" />
            <Image src={roundImg} className="" />
        </div>
    )
}