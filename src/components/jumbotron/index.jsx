import Image from "next/image";
import arrowDown from "../../../public/arrow-down.png";
import Link from "next/link";


export default function Jumbotron() {
    return (
        <div className="hero-bg" id="home">
            <div className="mx-auto lg:w-[80%] w-[90%]">
                <div data-aos="fade-down">
                    <h1 className="lg:text-[95px] text-[45px] text-center pt-[14rem] lg:leading-[105px] leading-[60px]">Celebrate, Share, Remember All in One Place</h1>
                </div>
                <p data-aos="fade-down"  className="lg:text-[30px] text-[18px] text-center mt-7">From photo sharing to guest messages and interactive games, transform your wedding <br className="lg:block hidden" /> day into an unforgettable experience for friends and family</p>
                <div data-aos="fade-down" className="text-center w-auto mx-auto mt-[7rem] grid gap-y-10">
                    <p className="lg:text-[25px] text-[18px]">Register for free</p>
                    <Link href="#access">
                        <Image src={arrowDown} alt="down" className="animate-bounce mx-auto" />
                    </Link>
                </div>
            </div>
        </div>
    )
}