import React from 'react'
import Image from "next/image";
import arrow from '../../../public/arrow4.svg'
import hassle from '../../../public/hassle-free.svg'

export default function HassleFree() {
  return (
        <div data-aos="fade-up" className=" absolute lg:bottom-[6.5rem] bottom-[8rem] lg:left-[53%] left-[65%] ">
            <Image src={arrow} className="relative lg:-top-4 -top-2 -left-[7rem] lg:w-auto w-[40%]" />
            <Image src={hassle} className="relative lg:-top-4 top-1 lg:-right-[1.5rem] right-[70%] lg:w-auto w-[50%]" />
        </div>
  )
}
