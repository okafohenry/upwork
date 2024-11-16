import Image from 'next/image'
import logoMobile from "../../../public/logo-mobile.svg"
import React from 'react'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'

export default function Dropdown({ closeDropdown, openContactModal }) {

    const h4Style = "text-[#4F0D25] text-[24px] leading-[40px]"

    const close = () => closeDropdown()

    const handleGetAccess = () => {
        close()
        openContactModal()
    }

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
                <button 
                onClick={handleGetAccess} 
                className="free-access-btn w-full mx-auto  text-[14px] rounded-[50px] bg-[#FD7E72] py-[12px] text-center"
                >
                    Register for Free Access
                </button>
            </div>
        </div>
    )
}
