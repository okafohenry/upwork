import React from 'react'
import Image from "next/image";
import arrow from '../../../public/arrow4.svg'
import hassle from '../../../public/hassle-free.svg'

export default function HassleFree() {
  return (
        <div data-aos="fade-up" className=" lg:w-auto w-[15%] absolute bottom-[2rem] lg:left-[50%] left-[65%] ">
            <Image src={arrow} className="relative lg:-top-4 -top-2 -left-[7rem]" />
            <Image src={hassle} className="relative lg:-top-4 -top-1 lg:-right-[1.5rem] right-[100%] " />
        </div>
  )
}
