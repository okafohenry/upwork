"use client"
import { usertype } from '@/utils/utils'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaEnvelope, FaTimesCircle } from "react-icons/fa";

const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    role: "bride"
}

export default function ContactForm({ closeModal }) {
    const [ formData, setFormData ] = useState(initialValues)

    const inputStyle = 'border-0 outline-none border-b-2 border-[#EB87AB] focus:border-b-primary px-2 py-1 w-full placeholder-[#EB87AB]'

    return (
        <div className='fixed z-[1020] backdrop-blur-sm w-full h-full top-0 left-0 bottom-0 bg-[#747474]/[0.1] backdrop-brightness-50'>
            <div className='lg:w-[80%] w-[95%] m-auto bg-primaryLight rounded-[32px]  mt-[1.5rem] h-[95vh] grid lg:grid-cols-2 grid-cols-1 gap-x-5 lg:p-[2rem] p-[1.2rem] gap-y-7 relative'>
                <div className='col-span-1'>
                    <h4 className='text-[#EB87AB] lg:text-[28px] text-[20px] mb-2'>Let’s Connect and Get You Started</h4>
                    <h2 className='text-primary lg:text-[60px] text-[35px] lg:leading-[60px]'>Simply share a few details with us</h2>
                    <p className='text-[#EB87AB] lg:text-[20px] mt-5'>And we’ll personally reach out to guide you through all that GatherGram has to offer!</p>
                    <p className='mt-10 flex items-center gap-5 text-primary'>
                        <FaEnvelope size={18} />
                        <span className='text-[18px] underline'>info@gathergram.app</span>
                    </p>
                </div>
                <div className='col-span-1 h-full overflow-y-scroll bg-white rounded-[24px] lg:p-[2rem] p-[1.5rem]'>

                    <FaTimesCircle 
                        className='text-primary absolute lg:top-5 top-0 cursor-pointer lg:right-6 right-0 z-50' 
                        size={30} 
                        onClick={closeModal} 
                    />

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
