import Image from "next/image";
import roundImg from '../../../public/round-img1.png'
import arrow from '../../../public/arrow1.svg'
import joyful from '../../../public/joyful.svg'


export default function Joyful() {
    return (
        <div data-aos="fade-in" className="lg:block hidden absolute -left-[5rem] -mt-[2.5rem]">
            <Image src={arrow} className="relative -top-4 -right-[13rem]" />
            <Image src={joyful} className="relative -top-3 -right-[7.5rem]" />
            <Image src={roundImg} className="" />
        </div>
    )
}