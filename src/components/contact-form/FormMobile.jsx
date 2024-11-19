"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logoMobile from "../../../public/logo-mobile.svg"
import { IoClose } from 'react-icons/io5'
import { usertype } from '@/utils/utils'
import { FaEnvelope, FaFacebook } from 'react-icons/fa'
import bg1 from "../../../public/contact-form-mobile-bg2.svg"
import bg2 from "../../../public/contact-form-mobile-bg.svg"
import { toast } from 'react-toastify';

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  role: "bride",
  type: 'register'
}

export default function ContactFormMobile({ closeModal, openNotificationModal }) {
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

  const inputStyle = 'border-0 outline-none lg:border-b-2 border-b border-[#4F0D25] focus:border-b-[#4F0D25] px-2 py-1 w-full placeholder-[#4F0D25] lg:placeholder:text-md placeholder:text-sm font-[Maian] bg-transparent'

  return (
    <div className='h-screen lg:hidden block bg-[#FFE5E3] fixed w-full overflow-y-auto overflow-x-hidden z-[1027] px-[15px]'>
      <Image src={bg1} alt="bg-1" className='absolute top-[5.3rem] right-5' />
      <Image src={bg2} alt="bg-2" className='absolute bottom-[3.5rem] -right-10' />
      <div className="flex items-center justify-between py-4 relative z-10">
          <Image src={logoMobile} alt="logo-mobile" className='h-[40px] w-[160px]' />
          <IoClose onClick={closeModal} className="text-[28px] text-[#FD7E72]" />
      </div>
      <div className='relative z-10'>
          <h4 className='text-[#4F0D25]  text-[20px] mb-2 mt-3 leading-[24px]'>Let’s Connect and Get You Started</h4>
          <h2 className='text-[#FD7E72]  text-[32px] leading-[40px]'>Simply share a few details with us</h2>
          <p className='text-[#4F0D25] text-[16px] leading-[24px] mt-4'>And we’ll personally reach out to guide you through all that GatherGram has to offer!</p>
      </div>
      <div className='mt-8 relative z-10'>
        <p className='text-primary lg:text-[16px]'>I am the...</p>
        <ul className='flex items-center flex-wrap gap-x-3.5 gap-y-2 mt-3'>
            {Object.values(usertype).map((user, index) => (
                <li 
                key={index}
                onClick={() => setFormData({...formData, role: user })} 
                className={`text-[13px] hover:cursor-pointer hover:bg-[#ED266F] hover:text-white py-[8px] px-[24px] rounded-[50px] border-2 border-[#ED266F] capitalize ${formData.role === user ? 'bg-[#ED266F] text-white' : 'text-[#ED266F]'}`}>
                    {user}
                </li>
            ))}
        </ul>
        <div className='grid lg:gap-y-10 gap-y-5 lg:mt-[3.5rem] mt-7 text-[#4F0D2580] relative z-10'>
            <div className='w-full flex'>
                <span className='text-[20px] text-primary'>*</span>
                <input 
                    type="text" 
                    placeholder="Name" 
                    className={`${inputStyle}`} 
                    onChange={(e) => setFormData({...formData, name: e.target.value })} 
                />
            </div>
            <div className='w-full flex'>
                <span className='text-[20px] text-primary'>*</span>
                <input 
                    type="email" 
                    placeholder="Email" 
                    className={`${inputStyle}`} 
                    style={{ '::placeholder': { fontSize: '0.875rem' } }}
                    onChange={(e) => setFormData({...formData, email: e.target.value })} 
                />
            </div>
            <div className='w-full flex'>
                <span className='text-[20px] text-[#FFE5E3]'>*</span>
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className={`${inputStyle}`} 
                    style={{ '::placeholder': { fontSize: '0.875rem' } }}
                    onChange={(e) => setFormData({...formData, phone: e.target.value })} 
                />
            </div>
            <div className='w-full mt-1'>
                <label className='text-[15px] text-[#4F0D2580] font-[Maian] '>Message</label>
                <textarea 
                    type="text" 
                    rows={2}
                    placeholder="Write your message..." 
                    className={` bg-[#fed4d0] rounded-[16px] mt-1 outline-[#fed4d0] focus:outline-[#fed4d0] p-[1rem] placeholder:text-[#4F0D2580] placeholder-text-lg font-[Maian] text-[14px] w-full`} 
                    style={{ '::placeholder': { fontSize: '0.875rem' } }}
                    onChange={(e) => setFormData({...formData, message: e.target.value })} 
                />
            </div>
            <button 
            className="text-[14px] w-[40%] mt-[.5rem] text-center bg-primary py-[13px] text-white  px-[10px] rounded-[50px]"
            onClick={handleSubmit}
            >
              {loading ? 'Sending...' : 'Submit' }
            </button>
        </div>
        <div className='py-10 relative z-10'>
            <p className='lg:mt-10 mt-3 flex items-center gap-3 text-[#4F0D25]'>
                <FaEnvelope size={18} />
                <span className='text-[14px] underline'>info@gathergram.app</span>
            </p>
            <p className='flex mt-3 items-center gap-3 text-[#4F0D25]'>
                <FaFacebook size={18} />
                <span className='text-[14px] underline'>@GatherGram</span>
            </p>
        </div>
      </div>
    </div>
  )
}




