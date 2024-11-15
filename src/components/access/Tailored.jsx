import Image from "next/image";
import roundImg from '../../../public/round-img4.png'
import arrow from '../../../public/arrow2.svg'
import tailored from '../../../public/tailored-just-for-you.svg'
import tailoredMobile from '../../../public/tailored-just-for-you-mobile.svg'


export default function TailoredForYou() {
    return (
        <div data-aos="fade-up" className=" absolute top-[50%] lg:left-[4.7rem] -left-[.5rem] ">
            <Image src={arrow} className="relative lg:-top-4 top-[6.5rem] lg:rotate-0 -rotate-12 lg:-right-[9rem] -right-[1rem] lg:w-auto w-[35%]" />
            <Image src={tailored} className="lg:block hidden relative lg:-top-1 -top-1 lg:-right-[1.5rem] lg:w-auto w-[30%]" />
            <Image src={tailoredMobile} className="lg:hidden block relative top-[7rem] left-3 lg:w-auto w-[30%]" />
            <Image src={roundImg} className="lg:h-[200px] h-[80px] lg:w-[200px] w-[80px] relative lg:left-10 left-0 lg:top-5 top-[7.5rem]" />
        </div>
    )
}