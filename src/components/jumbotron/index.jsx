import Image from "next/image";
import arrowDown from "../../../public/arrow-down.png";
import arrowDownMobile from "../../../public/arrow-down-mobile.svg";
import Link from "next/link";


export default function Jumbotron() {
    return (
        <div className="hero-bg lg:h-[140vh] h-fit" id="home">
            <div className="mx-auto lg:w-[80%] w-[90%]">
                <div data-aos="fade-down">
                    <h1 className="lg:text-[95px] text-[40px] text-center lg:pt-[20rem] pt-[15rem] lg:leading-[105px] leading-[45px]">Celebrate, Share, Remember<br className="lg:hidden block" /> All in One Place</h1>
                </div>
                <p data-aos="fade-down"  className="lg:text-[30px] text-[16px] text-center mt-7">From photo sharing to guest messages and interactive games, transform your<br className="lg:block hidden" /> wedding day into an unforgettable experience for friends and family</p>
                <div data-aos="fade-down" className="text-center w-auto mx-auto lg:mt-[7rem] mt-[13.5rem] grid gap-y-10">
                    <p className="lg:text-[25px] text-[16px]">Register for free</p>
                    <Link href="#access">
                        <Image src={arrowDown} alt="down" className="animate-bounce mx-auto lg:block hidden" />
                        <Image src={arrowDownMobile} alt="down-mobile" className="animate-bounce mx-auto lg:hidden block" />
                    </Link>
                </div>
            </div>
        </div>
    )
}