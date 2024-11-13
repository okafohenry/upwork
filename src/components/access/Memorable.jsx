import Image from "next/image";
import roundImg from '../../../public/round-img3.png'
import arrow from '../../../public/arrow5.svg'
import memorable from '../../../public/memorable.svg'


export default function Memorable() {
    return (
        <div data-aos="fade-in" className=" lg:w-auto w-[17%] absolute lg:bottom-[6.5rem] bottom-[9rem] lg:right-[12%] right-[16%]">
            <div className="relative left-[65%]">
                <Image src={arrow} className="relative " />
                <Image src={memorable} className="relative -right-[30%] top-4" />
            </div>
            <Image src={roundImg} className="relative -top-7" />
        </div>
    )
}