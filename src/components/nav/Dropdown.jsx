import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'

export default function Dropdown({ closeDropdown, isOpen }) {
  return (
    <div className='fixed overflow-hidden z-[1206] backdrop-blur-sm w-full h-full top-0 left-0 bottom-0 bg-[#747474]/[0.1] backdrop-brightness-50'>
        <div className={`h-[50vh] relative transition-all duration-300 ease-in-out transform bg-white rounded-b-[15px] ${
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
        </div>
    </div>
  )
}
