import Image from "next/image";
import roundImg from '../../../public/round-img1.png'
import arrow from '../../../public/arrow1.svg'
import joyful from '../../../public/joyful.svg'


export default function Joyful() {
    return (
        <div data-aos="fade-in" className=" absolute lg:-left-[2rem] -left-[2rem] lg:-mt-[2.5rem] -mt-[5rem]">
            <Image src={arrow} className="relative lg:-top-4 -top-2 lg:-right-[13rem] -right-[5rem]" />
            <Image src={joyful} className="relative lg:-top-3 lg:-right-[8.5rem] -right-[rem] -top-1" />
            <Image src={roundImg} className="h-[200px] w-[200px] relative -top-2 left-8" />
        </div>
    )
}