import Image from 'next/image'
import logoMobile from "../../../public/logo-mobile.svg"
import React from 'react'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'

export default function Dropdown({ closeDropdown, isOpen }) {

    const h4Style = "text-[#4F0D25] text-[24px] leading-[40px]"

    const close = () => closeDropdown()

    return (
        <div className='h-screen bg-[#FED4D0] fixed w-full z-[1027] px-[15px]'>
            <div className="flex items-center justify-between py-4">
                <Image src={logoMobile} alt="logo-mobile" className='h-[40px] w-[160px]' />
                <IoClose onClick={close} className="text-[28px] text-[#FD7E72]" />
            </div>
            <div className='grid gap-y-6 mt-10'>
                <h4 onClick={close} className={h4Style}>
                    <Link href="/">Home</Link>
                </h4>
                <h4 onClick={close} className={h4Style}>
                    <Link href="#gallery">Features</Link>
                </h4>
                <h4 onClick={close} className={h4Style}>
                    <Link href="#how-it-works">How it Works</Link>
                </h4>
                <h4 onClick={close} className={h4Style}>
                    <Link href="#faq">FAQ’s</Link>
                </h4>
                <h4 onClick={close} className={h4Style}>
                    <Link href="">Contact</Link>
                </h4>
            </div>

            <div className="w-full mx-auto  mt-[15rem]">
                <button onClick={() => {}} className="free-access-btn w-full mx-auto  text-[14px] rounded-[50px] bg-[#FD7E72] py-[12px] text-center">
                    Register for Free Access
                </button>
            </div>
            {/* <div className={`h-[50vh] relative transition-all duration-300 ease-in-out transform bg-white rounded-b-[15px] ${
            isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
                <IoClose onClick={closeDropdown} className="text-[32px] text-[#0d0d0d] absolute right-2 top-2 lg:hidden block" />

                <ul className='grid gap-y-2 text-primary pt-11'>
                    <li className='py-2.5 text-center'>
                        <Link href="#gallery" className='text-[18px]'>Features</Link>
                    </li>
                    <li className='py-2.5 text-center'>
                        <Link href="#how-it-works" className='text-[18px]'>How it works</Link>
                    </li>
                    <li className='py-2.5 text-center'>
                        <Link href="#faq" className='text-[18px]'>FAQs</Link>
                    </li>
                    <li className='py-2.5 text-center'>
                        <Link href="" className='text-[18px]'>Contact</Link>
                    </li>
                </ul>

                <button 
                    onClick={() => {}} 
                    className="text-[16px] mt-6 w-[90%] mx-auto flex justify-center text-center bg-primary hover:bg-primary/[.5] py-[8px] rounded-[16px]">
                    Get Started
                </button>
            </div> */}
        </div>
    )
}
