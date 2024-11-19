"use client"
import React, { useEffect, useState } from 'react'
import logo from '../../../public/logo-footer.svg';
import Image from 'next/image';
import Link from 'next/link';
import SuccessNotification from '../contact-form/SuccessNotification';
import { toast } from 'react-toastify';

const initialValues = {
  email: "",
  type: 'subscribe'
}

export default function Footer() {
  const [ formData, setFormData ] = useState(initialValues);
  const [loading, setLoading] = useState(false)
  const [ showNotification, setShowNotification] = useState(false)


  const handleSubmit = async(event) => {
      event.preventDefault();
      if(!formData.email) {
        toast.error('Email is required!') 
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
          setShowNotification(true);
        } else {
            toast.error(`Failed to send message: ${result.error}`);
        }
      } catch (error) {
        setLoading(false)
      }
      
  }

  
  const flexStyle = 'lg:flex grid items-center justify-between w-full'

  return (
    <footer id="contact" className='lg:bg-[#0d0d0d] bg-[#1A040C] w-full lg:pt-0 pt-5'>
      <div className='w-[90%] mx-auto'>
        <div className={`${flexStyle} gap-x-3 gap-y-5 py-7 lg:border-b border-[#fafafa] border-opacity-30`}>
          <div>
            <h2 className='lg:text-[32px] text-[24px] font-[600]'>Join Our Newsletter</h2>
            <p className='text-[#fafafa] lg:text-[18px] text-[14px] text-opacity-60'>Keep up to date with our latest news</p>
          </div>
          <div className='flex gap-2 items-center lg:w-[35%]'>
            <input 
              className='rounded-[50px] py-[10px] px-[16px] lg:w-[70%] text-[14px] placeholder-[#4D4D4D] bg-[#FAFAFACC] text-[#0d0d0d] outline-primaryLight' 
              placeholder='Enter your email'
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              value={formData.email}
              type="email" 
              />
            <div className='lg:w-[30%]'>
              <button onClick={handleSubmit} className='rounded-[50px] py-[10px] lg:px-0 px-[20px] text-center w-full  bg-primary text-white text-[14px]'>
                {loading ? 'Processing..' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:flex grid items-start justify-between w-full pb-10 lg:pt-[3rem] pt-[1rem] lg:gap-5 gap-10`}>
          <div>
            <div>
              <Image src={logo} alt="logo" className='lg:w-auto w-[80%]' />
            </div>
            <p className='lg:w-[50%] lg:text-[16px] text-[14px] lg:mt-[2rem] mt-1 text-[#FAFAFA99]'>
              We bring all your wedding essentials into one hassle-free, secure, and 
              budget-friendly platform designed to make your day as seamless as it is unforgettable.
            </p>
            <div className='flex flex-wrap items-center gap-3'></div>
          </div>

          <div className='flex flex-wrap lg:justify-evenly gap-10 lg:w-[50%]'>
            <ul className='grid gap-y-4'>
              <li>
                <p className='font-bold text-[18px]'>Platform</p>
              </li>
              <li className='text-[#fafafa] text-opacity-60'>
                <Link href="#home">Home</Link>
              </li>
              <li className='text-[#fafafa] text-opacity-60'>
                <Link href="#access">Register</Link>
              </li>
              <li className='text-[#fafafa] text-opacity-60'>
                <Link href="#gallery">Features</Link>
              </li>
              <li className='text-[#fafafa] text-opacity-60'>
                <Link href="#access">How It Works</Link>
              </li>
              <li className='text-[#fafafa] text-opacity-60'>
                <Link href="#faq">FAQs</Link>
              </li>
            </ul>

            <ul>
              <li className='mb-4'>
                <p className='font-bold text-[18px]'>Company</p>
              </li>
              <li className='mb-4 text-[#fafafa] text-opacity-60'>
                <a href="#">About</a>
              </li>
              <li className='mb-4 text-[#fafafa] text-opacity-60'> 
                <a href="#">Careers</a>
              </li>
              <li className='mb-4 text-[#fafafa] text-opacity-60'>
                <a href="#">Contact Us</a>
                <p>info@gathergram.app</p>
              </li>
            </ul>
            
            <ul>
            <li className='mb-4'>
                <p className='font-bold text-[18px]'>Legal</p>
              </li>
              <li className='mb-4 text-[#fafafa] text-opacity-60'>
                <a href="#">Privacy Policy</a>
              </li>
              <li className='mb-4 text-[#fafafa] text-opacity-60'>
                <a href="#">Terms of Service</a>
              </li>
              <li className='text-[#fafafa] text-opacity-60'>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-3 pb-5 border-t border-[#fafafa] border-opacity-30 copyright text-[#fafafa] text-opacity-60'>
          &copy; 2024  GatherGram, all rights reserved.
        </div>
      </div>

      {showNotification &&
        <SuccessNotification closeModal={() => setShowNotification(false)} />
      }
    </footer>
  )
}
