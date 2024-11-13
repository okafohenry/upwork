import Image from "next/image";
import roundImg from '../../../public/round-img4.png'
import arrow from '../../../public/arrow2.svg'
import tailored from '../../../public/tailored-just-for-you.svg'


export default function TailoredForYou() {
    return (
        <div data-aos="fade-up" className=" lg:w-auto w-[20%] absolute lg:bottom-0 bottom-[6.7rem] lg:left-[4.7rem] -left-[.5rem] ">
            <Image src={arrow} className="relative lg:-top-4 -top-2 lg:-right-[9rem] -right-[1rem]" />
            <Image src={tailored} className="relative lg:-top-3 -top-1 lg:-right-[1.5rem]" />
            <Image src={roundImg} className="" />
        </div>
    )
}