import Link from "next/link";
import Effortless from "./Effortless";
import HassleFree from "./Hassle";
import Joyful from "./Joyful";
import Memorable from "./Memorable";
import TailoredForYou from "./Tailored";

export default function Access({ openModal }) {
    return (
        <div id="access" data-aos="fade-up" className="lg:w-[95%] lg:mx-0 mx-auto lg:pt-[10rem] pt-[8rem] lg:pb-[25rem] pb-[14rem] bg-white relative">
            <Joyful />
            <TailoredForYou />
            <HassleFree />
            <Memorable />
            <Effortless />
            <div className="">
                <h2 className="lg:text-[65px] text-[#4F0D25]/[.9] text-[32px] font-[500] text-center lg:leading-[75px] tracking-normal leading-[40px]">
                    Be Part of the Experience With<br className="lg:block hidden" /> <span className="text-primary">Our Exclusive Free Access!</span>
                </h2>
                <p className="lg:text-[27px] text-center text-[16px] mt-8 text-[#4F0D25]/[.9]">Join GatherGram’s exclusive Free Access and explore everything<br className="lg:block hidden" /> our platform has to offer</p>
                <div className="lg:w-[22%] w-[65%] mx-auto lg:mt-[7rem] mt-[4.5rem] relative z-10">
                    <button onClick={openModal} className="free-access-btn w-full mx-auto  lg:text-[18px] text-[16px] rounded-[50px] bg-primary py-[16px] text-center">
                        Register for Free Access
                    </button>
                </div>
            </div>
        </div>
    )
}