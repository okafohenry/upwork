"use client"
import { usertype } from '@/utils/utils'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    role: "bride"
}

export default function Hero() {
    const [ formData, setFormData ] = useState(initialValues)

    const inputStyle = 'border-0 outline-none border-b-2 border-[#EB87AB] focus:border-b-primary px-2 py-1 w-full placeholder-[#EB87AB]'

    return (
        <div className='h-[100vh] w-full get-started-bg pt-[100px] pb-[50px]'>
            <div className='lg:w-[80%] w-[95%] m-auto bg-primaryLight rounded-[32px] h-[100%] grid lg:grid-cols-2 grid-cols-1 gap-x-5 lg:p-[3rem] p-[1.2rem] gap-y-7'>
                <div className='col-span-1'>
                    <Link href="/">
                        <IoArrowBackOutline className='text-primary' size={23}/>
                    </Link>
                    <h4 className='text-[#EB87AB] lg:text-[28px] text-[20px] mb-2'>Let’s Connect and Get You Started</h4>
                    <h2 className='text-primary lg:text-[60px] text-[35px] lg:leading-[60px]'>Simply share a few details with us</h2>
                    <p className='text-[#EB87AB] lg:text-[20px] mt-5'>And we’ll personally reach out to guide you through all that GatherGram has to offer!</p>
                    <p></p>
                </div>
                <div className='col-span-1 h-full overflow-y-scroll bg-white rounded-[24px] lg:p-[2rem] p-[1.5rem]'>
                    <p className='text-primary lg:text-[18px]'>I am the...</p>
                    <ul className='flex items-center flex-wrap lg:gap-3 gap-2 mt-3'>
                        {Object.values(usertype).map((user, index) => (
                            <li 
                            key={index}
                            onClick={() => setFormData({...formData, role: user })} 
                            className={`lg:text-[15px] text-[13px] hover:cursor-pointer hover:bg-primary hover:text-white py-[5px] lg:px-[25px] px-[15px] rounded-[50px] border border-[#EB87AB] capitalize ${formData.role === user ? 'bg-primary text-white' : 'text-[#EB87AB]'}`}>
                                {user}
                            </li>
                        ))}
                    </ul>

                    <div className='grid gap-y-7 mt-7 text-[#EB87AB]'>
                        <div className='w-full flex'>
                            <span className='text-[20px]'>*</span>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className={`${inputStyle}`} 
                                style={{ '::placeholder': { fontSize: '0.875rem' } }}
                                onChange={(e) => setFormData({...formData, name: e.target.value })} 
                            />
                        </div>
                        <div className='w-full flex'>
                            <span className='text-[20px]'>*</span>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className={`${inputStyle}`} 
                                style={{ '::placeholder': { fontSize: '0.875rem' } }}
                                onChange={(e) => setFormData({...formData, email: e.target.value })} 
                            />
                        </div>
                        <div className='w-full flex'>
                            <span className='text-[20px] text-white'>*</span>
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                className={`${inputStyle}`} 
                                style={{ '::placeholder': { fontSize: '0.875rem' } }}
                                onChange={(e) => setFormData({...formData, phone: e.target.value })} 
                            />
                        </div>
                        <div className='w-full flex'>
                            <span className='text-[20px] text-white'>*</span>
                            <input 
                                type="text" 
                                placeholder="Your message" 
                                className={`${inputStyle}`} 
                                style={{ '::placeholder': { fontSize: '0.875rem' } }}
                                onChange={(e) => setFormData({...formData, message: e.target.value })} 
                            />
                        </div>
                    </div>

                    <button 
                    className="lg:text-[15px] text-[12px] lg:w-[35%] w-[50%] mt-[4rem] text-center bg-primary lg:py-[12px] py-[8px] lg:px-0 px-[13px] rounded-[50px]"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
