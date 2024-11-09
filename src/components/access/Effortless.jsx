import Image from "next/image";
import roundImg from '../../../public/round-img2.png'
import arrow from '../../../public/arrow3.svg'
import efortless from '../../../public/effortless.svg'


export default function Effortless() {
    return (
        <div className="lg:block hidden absolute right-0 top-0">
            <Image src={roundImg} className="relative top-4" />
            <Image src={efortless} className="absolute right-8 mt-8" />
            <Image src={arrow} className="relative -top-[2.5rem] -left-[25%]" />
        </div>
    )
}