import Image from "next/image";
import roundImg from '../../../public/round-img3.png'
import arrow from '../../../public/arrow5.svg'
import arrowMobile from '../../../public/memorable-mobile.svg'
import memorable from '../../../public/memorable.svg'


export default function Memorable() {
    return (
        <div data-aos="fade-in" className="absolute lg:bottom-[12rem] bottom-[3rem] lg:right-[12%] -right-[1rem]">
            <div className="relative lg:left-[65%]">
                <Image src={arrow} className="relative lg:block hidden lg:w-auto w-[35%]" />
                <Image src={memorable} className="relative lg:-right-[60%] -right-[4rem] lg:top-4 -top-7 lg:w-auto w-[37%]" />
                <Image src={arrowMobile} className="relative lg:hidden block lg:w-auto w-[25%] -right-[4.3rem] -top-4" />
            </div>
            <Image src={roundImg} className="relative -top-7 lg:h-[200px] h-[80px] lg:w-[200px] w-[80px]" />
        </div>
    )
}