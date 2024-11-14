import Image from "next/image";
import roundImg from '../../../public/round-img2.png'
import arrow from '../../../public/arrow3.svg'
import efortless from '../../../public/effortless.svg'


export default function Effortless() {
    return (
        <div data-aos="fade-up" className="lg:block hidden absolute right-0 top-0">
            <Image src={roundImg} className="relative top-[3rem] h-[200px] w-[200px]" />
            <Image src={efortless} className="absolute right-8 mt-[4rem]" />
            <Image src={arrow} className="relative top-0 -left-[70%]" />
        </div>
    )
}