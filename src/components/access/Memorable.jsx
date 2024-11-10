import Image from "next/image";
import roundImg from '../../../public/round-img3.png'
import arrow from '../../../public/arrow5.svg'
import memorable from '../../../public/memorable.svg'


export default function Memorable() {
    return (
        <div className="lg:block hidden lg:w-auto w-[15%] absolute bottom-[6.5rem] lg:right-[12%] ">
            <div className="relative left-[65%]">
                <Image src={arrow} className="relative " />
                <Image src={memorable} className="relative -right-[30%] top-4" />
            </div>
            <Image src={roundImg} className="relative -top-7" />
        </div>
    )
}