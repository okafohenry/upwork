import React from 'react'
import Image from 'next/image'
import success from '../../../public/success2.gif'
import { FaTimesCircle } from 'react-icons/fa'

export default function SuccessNotification({ closeModal }) {
  return (
    <div className='fixed z-[1020] backdrop-blur-sm w-full h-full top-0 left-0 bottom-0 bg-[#747474]/[0.1] backdrop-brightness-50'>
        <div className='lg:w-[60%] relative w-[90%] bg-[#FFE5E3] lg:rounded-[32px] rounded-[24px] lg:mt-[5rem] mt-[5rem] mx-auto lg:px-[48px] py-[48px] px-[20px]'>                     
            <FaTimesCircle 
                className='text-primary absolute lg:top-8 -top-3 cursor-pointer lg:right-7 -right-2 z-50' 
                size={30} 
                onClick={closeModal} 
            />
            <div>
                <Image src={success} alt="success-gif" className='mx-auto lg:w-auto w-[100px] lg:h-auto h-[100px]' />
                <h2 className='lg:text-[64px] lg:mt-7 lg:leading-[72px] text-[32px] leading-[40px] text-[#4F0D25] text-center'>
                We’ve <span className='text-[#FD7E72]'>Received</span> Your Request
                </h2>
                <p className='lg:w-[65%] mx-auto w-auto lg:text-[32px] text-[16px] text-[#FD7E72] leading-[24px] lg:leading-[40px] lg:mt-[2rem] mt-[1rem] text-center'>
                    We’ll be in touch very soon Exciting wedding planning awaits!
                </p>
            </div>
            <button onClick={closeModal} className='flex items-center justify-center lg:h-[72px] h-[48px] lg:w-[181px] w-[118px] mx-auto text-center lg:text-[24px] text-[16px] text-white bg-[#ED266F] mt-[3rem] lg:mt-[5rem] lg:rounded-[50px] rounded-[32px]'>close</button>
        </div>
    </div>
  )
}
