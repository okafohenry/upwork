"use client"
import { usertype } from '@/utils/utils'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaEnvelope, FaFacebook, FaTimesCircle } from "react-icons/fa";
import { toast } from 'react-toastify';

const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    role: "bride",
    type: 'register'
}

export default function ContactForm({ closeModal, openNotificationModal }) {
    const [ formData, setFormData ] = useState(initialValues);
    const [loading, setLoading] = useState(false)
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!formData.email) {
        toast.error('Email is required!') 
        return
      }
      if(!formData.name){
        toast.error('Name is required!') 
        return
      }
      if(!formData.message) {
        toast.error('Message is required!') 
        return
      }
  
      setLoading(true)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        setLoading(false)
        if (response.ok) {
          setFormData(initialValues)
          closeModal()
          openNotificationModal();
        } else {
            toast.error(`Failed to send message: ${result.error}`);
        }
      } catch (error) {
        setLoading(false)
      }
      
    }

    const inputStyle = 'border-0 outline-none lg:border-b-2 border-b border-[#4F0D25] focus:border-b-[#4F0D25] px-2 py-1 w-full placeholder-[#4F0D25] lg:placeholder:text-md placeholder:text-sm font-[Maian]'

    return (
        <div className='fixed lg:block hidden z-[1020] backdrop-blur-sm w-full h-full top-0 left-0 bottom-0 bg-[#747474]/[0.1] backdrop-brightness-50'>
            <div className='lg:w-[80%] w-full m-auto bg-[#FFE5E3] lg:rounded-[32px] rounded-[15px]  mt-[1.5rem] h-[95vh] grid lg:grid-cols-2 grid-cols-1 gap-x-10 lg:p-[2.5rem] p-[1.2rem] gap-y-7 relative overflow-y-auto'>
                <div className='col-span-1 grid relative'>
                    <div>
                        <h4 className='text-[#4F0D25] lg:text-[32px] text-[20px] lg:mb-5 mb-2 lg:mt-0 mt-3 leading-[40px]'>Let’s Connect and Get You Started</h4>
                        <h2 className='text-[#FD7E72] lg:text-[64px] text-[32px] lg:leading-[72px] leading-[40px]'>Simply share a few details with us</h2>
                        <p className='text-[#4F0D25] lg:text-[22px] leading-[32px] lg:mt-7 mt-4'>And we’ll personally reach out to guide you through all that GatherGram has to offer!</p>
                    </div>
                    <div className='flex flex-col absolute bottom-7'>
                        <p className='lg:mt-10 mt-3 flex items-center gap-5 text-[#4F0D25]'>
                            <FaEnvelope size={18} />
                            <span className='lg:text-[18px] text-[14px] underline'>info@gathergram.app</span>
                        </p>
                        <p className='lg:mt-5 mt-3 flex items-center gap-5 text-[#4F0D25]'>
                            <FaFacebook size={18} />
                            <span className='lg:text-[18px] text-[14px] underline'>@GatherGram</span>
                        </p>
                    </div>                
                </div>
                <div className='col-span-1 h-full bg-white rounded-[24px] shadow-md lg:p-[1.5rem] p-[1.5rem]'>                  
                    <FaTimesCircle 
                        className='text-primary absolute lg:top-8 top-0 cursor-pointer lg:right-7 right-0 z-50' 
                        size={30} 
                        onClick={closeModal} 
                    />
                    <p className='text-primary lg:text-[18px]'>I am the...</p>
                    <ul className='flex items-center flex-wrap lg:gap-3 gap-2 mt-3'>
                        {Object.values(usertype).map((user, index) => (
                            <li 
                            key={index}
                            onClick={() => setFormData({...formData, role: user })} 
                            className={`lg:text-[15px] text-[13px] hover:cursor-pointer hover:bg-primary hover:text-white py-[10px] lg:px-[40px] px-[15px] rounded-[50px] border border-[#EB87AB] capitalize ${formData.role === user ? 'bg-primary text-white' : 'text-[#EB87AB]'}`}>
                                {user}
                            </li>
                        ))}
                    </ul>

                    <div className='grid lg:gap-y-10 gap-y-5 lg:mt-[3.5rem] mt-7 text-[#4F0D2580]'>
                        <div className='w-full flex'>
                            <span className='text-[20px]'>*</span>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className={`${inputStyle}`} 
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
                        <div className='w-full -mt-4'>
                            <label className='text-[15px] text-[#4F0D2580] font-[Maian] '>Message</label>
                            <textarea 
                                type="text" 
                                rows={4}
                                placeholder="Write your message..." 
                                className={`border-[#FFE5E3] bg-[#FFE5E3] rounded-[16px] mt-1 outline-[#FFE5E3] p-[1rem] placeholder:text-[#4F0D2580] placeholder-text-lg font-[Maian] text-[14px] w-full`} 
                                style={{ '::placeholder': { fontSize: '0.875rem' } }}
                                onChange={(e) => setFormData({...formData, message: e.target.value })} 
                            />
                        </div>
                    </div>

                    <button 
                    onClick={handleSubmit}
                    className="lg:text-[15px] text-[12px] lg:w-[35%] w-[50%] lg:mt-[3rem] mt-[2rem] text-center bg-primary lg:py-[12px] py-[8px] lg:px-0 px-[13px] rounded-[50px]"
                    >
                        {loading ? 'Sending...' : 'Submit' }
                    </button>
                </div>
            </div>
        </div>
    )
}
