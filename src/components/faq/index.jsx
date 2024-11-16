"use client"
import { faq } from "@/utils/faq";
import Accordion from "./components/Accordion";
import { useState } from "react";
import Image from "next/image";
import svg1 from "../../../public/faq-svg1.svg"
import svg2 from "../../../public/faq-svg2.svg"
import svg3 from "../../../public/faq-svg3.svg"

export default function FAQ() {
    const [isOpen, setIsOpen] = useState({
        id: null,
        status: false
    })

    const handleClick = (id) => {
        if(isOpen.id === id && isOpen.status){
            setIsOpen({ id: null, status: false })
        }else {
            setIsOpen({ id, status: true })
        }
    }

    return (
        <div id="faq" className="bg-white lg:py-[160px] py-[120px] relative overflow-hidden">
            <Image src={svg1} alt="svg1" className="lg:w-auto w-[70%] absolute lg:-right-[2%] -right-[20%] scale-75 lg:-top-[4rem]" />
            <Image src={svg2} alt="svg2" className="lg:w-auto w-[20%] absolute right-[11%] top-[15rem] lg:block hidden" />
            <Image src={svg3} alt="svg3" className="lg:w-auto w-[20%] absolute lg:left-10 top-10" />
            <div className="lg:w-[70%] w-[90%] mx-auto text-center text-[#0D0D0D]">
                <h1 data-aos="fade-up" className="lg:text-[65px] relative top-9 text-[#4F0D25]/[.9] text-[32px] font-[500] text-center lg:leading-[75px] tracking-wide leading-[40px]">Got Questions?</h1>
                <h1 data-aos="fade-up" className="lg:text-[65px] relative top-9 text-[#4F0D25]/[.9] text-[32px] font-[500] text-center lg:leading-[75px] tracking-wide leading-[40px]">We've Got <span className="text-primary">Answers</span></h1>
                <p data-aos="fade-up" className="lg:text-[27px] text-center text-[16px] mt-[4rem] text-[#4F0D25]/[.9] tracking-[2%]">Find quick answers to the most common questions</p>
            </div>

            <div data-aos="fade-up" className="lg:w-[65%] w-[95%] mx-auto grid lg:gap-y-7 gap-y-3 lg:mt-[5.5rem] mt-[3rem]">
                {faq.map(({id, title, body }) => (
                    <Accordion 
                    key={id} 
                    id={id}
                    title={title} 
                    body={body} 
                    isOpen={isOpen}
                    setIsOpen={() => handleClick(id)}
                    />
                ))}
            </div>

            {/* <div data-aos="fade-up" className="lg:w-[32%] w-[90%] mx-auto lg:mt-[6rem] mt-[4rem]">
                <button className="free-access-btn w-full lg:text-[16px] text-[14px] rounded-[50px] bg-primary py-[16px] text-center">View More FAQ’s</button>
            </div> */}
        </div>
    )
}