import Image from "next/image";
import roundImg from '../../../public/round-img3.png'
import arrow from '../../../public/arrow5.svg'
import memorable from '../../../public/memorable.svg'


export default function Memorable() {
    return (
        <div data-aos="fade-in" className="absolute lg:bottom-[12rem] bottom-[9rem] lg:right-[12%] right-[16%]">
            <div className="relative left-[65%]">
                <Image src={arrow} className="relative " />
                <Image src={memorable} className="relative -right-[60%] top-4" />
            </div>
            <Image src={roundImg} className="relative -top-7 h-[200px] w-[200px]" />
        </div>
    )
}