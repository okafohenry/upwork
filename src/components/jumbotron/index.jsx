import Image from "next/image";
import arrowDown from "../../../public/arrow-down.png";

export default function Jumbotron() {
    return (
        <div className="hero-bg">
            <div className="mx-auto lg:w-[80%] w-[90%]">
                <h1 className="lg:text-[90px] text-[45px] text-center pt-[17rem]">Celebrate, Share, Remember All in One Place</h1>
                <p className="lg:text-[31px] text-[18px] text-center mt-7">From photo sharing to guest messages and interactive games, transform your wedding day into an unforgettable experience for friends and family</p>
                <div className="text-center w-auto mx-auto mt-[7rem] grid gap-y-10">
                    <p className="lg:text-[25px] text-[18px]">Register for free</p>
                    <Image src={arrowDown} alt="down" className="animate-bounce mx-auto" />
                </div>
            </div>
        </div>
    )
}