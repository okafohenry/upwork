import Image from "next/image";
import roundImg from '../../../public/round-img2.png'
import arrow from '../../../public/arrow3.svg'
import efortless from '../../../public/effortless.svg'


export default function Effortless() {
    return (
        <div data-aos="fade-up" className="absolute right-0 top-0">
            <Image src={roundImg} className="relative lg:right-0 -right-[5rem] top-[3rem] lg lg:h-[200px] lg:w-[200px] w-[80px] h-[80px]" />
            <Image src={efortless} className="absolute lg:right-8 right-4 lg:mt-[4rem] mt-[9.5rem] lg:w-auto w-[30%]" />
            <Image src={arrow} className="relative lg:top-0 top-[8rem] lg:-left-[70%] -right-10 lg:w-auto w-[35%]" />
        </div>
    )
}