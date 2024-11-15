import Image from 'next/image'
import React from 'react'
import openIcon from '../../../../public/collapsible-open.svg';
import closeIcon from '../../../../public/collapsible-closed.svg';

export default function Accordion({ id, title, body, isOpen, setIsOpen }) {
  return (
    <div className={`w-full lg:px-[25px] px-[15px] lg:py-[13px] py-[8px] rounded-[32px] ${isOpen.status && isOpen.id === id ? 'shadow-lg shadow-[#4F0D2540] bg-[#FDF0DB]' : 'shadow-none bg-[#FFE5E3BF]/[.75]'}`} onClick={setIsOpen}>
        <div className='flex items-center lg:gap-x-5 gap-x-1'>
            <Image 
            src={isOpen.status && isOpen.id === id ? openIcon : closeIcon } 
            alt="dropdown-icon" 
            className={`transform transition-transform duration-300 `} 
            style={{
              transform: isOpen.status && isOpen.id === id ? 'rotate(360deg)' : 'rotate(0deg)',
            }}
            />
            <h4 className='text-[#4F0D25] lg:text-[25px] text-[16px] hover:cursor-pointer'>{title}</h4>
        </div>
        {isOpen.status && isOpen.id === id ? 
        <div className='lg:ml-[4.59rem] ml-[3.5rem] pb-2 mt-2 transition ease-in duration-300'>
            <p className='lg:text-[20px] text-[13px] text-[#0D0D0D]'>{body}</p>
        </div> 
        : null}
    </div>
  )
}
