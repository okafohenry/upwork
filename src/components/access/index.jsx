import Link from "next/link";
import Effortless from "./Effortless";
import HassleFree from "./Hassle";
import Joyful from "./Joyful";
import Memorable from "./Memorable";
import TailoredForYou from "./Tailored";

export default function Access({ openModal }) {
    return (
        <div id="access" data-aos="fade-up" className="lg:w-auto lg:mx-0 mx-auto lg:pt-[10rem] pt-[7rem] lg:pb-[20rem] pb-[7rem] bg-white relative overflow-hidden">
            <Joyful />
            <TailoredForYou />
            <HassleFree />
            <Memorable />
            <Effortless />
            <div className="lg:w-[65%] mx-auto">
                <h2 className="lg:text-[75px] text-[#0D0D0D] text-[45px] font-[500] text-center lg:leading-[100px] leading-[60px]">
                    Be Part of the Experience With <span className="text-primary">Our Exclusive Free Access!</span>
                </h2>
                <p className="w-[90%] mx-auto lg:text-[30px] text-center text-[20px] mt-8 text-[#0D0D0D]">Join GatherGram’s exclusive Free Access and explore everything our platform has to offer</p>
                <div className="lg:w-[40%] w-[80%] mx-auto lg:mt-[6rem] mt-[4.5rem]">
                    <button onClick={openModal} className="free-access-btn w-full mx-auto  lg:text-[18px] text-[16px] rounded-[50px] bg-primary py-[16px] text-center">
                        Register for Free Access
                    </button>
                </div>
            </div>
        </div>
    )
}