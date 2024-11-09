import React from 'react'
import logo from '../../../public/logo.svg';
import Image from 'next/image';

export default function Footer() {

  const flexStyle = 'lg:flex grid items-center justify-between w-full'

  return (
    <footer className='bg-secondary w-full'>
      <div className='w-[90%] mx-auto'>
        <div className={`${flexStyle} gap-3 py-7 border-b-[.02px] border-gray-500`}>
          <div>
            <h2 className='text-[30px] font-[600]'>Join Our Newsletter</h2>
            <p>Keep up to date with our latest news</p>
          </div>
          <div className='flex gap-2 items-center lg:w-[35%]'>
            <input className='rounded-[50px] py-[10px] px-[20px] lg:w-[70%] text-[14px]' placeholder='Enter your email' type="text" />
            <div className='lg:w-[30%]'>
              <button className='rounded-[50px] py-[10px] lg:px-0 px-[20px] text-center w-full  bg-primary text-white text-[14px]'>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={`lg:flex grid items-start justify-between w-full pb-10 pt-[3rem] gap-5`}>
          <div>
            <div>
              <Image src={logo} alt="logo" />
              <h1></h1>
            </div>
            <p className='lg:w-[42%]'>
              We bring all your wedding essentials into one hassle-free, secure, and 
              budget-friendly platform designed to make your day as seamless as it is unforgettable.
            </p>
            <div className='flex flex-wrap items-center gap-3'></div>
          </div>

          <div className='flex flex-wrap lg:justify-evenly gap-10 lg:w-[50%]'>
            <ul className='grid gap-y-3'>
              <li>
                <p className='font-bold text-[18px]'>Platform</p>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>

            <ul>
              <li className='mb-3'>
                <p className='font-bold text-[18px]'>Company</p>
              </li>
              <li className='mb-3'>
                <a href="#">About</a>
              </li>
              <li className='mb-3'> 
                <a href="#">Careers</a>
              </li>
              <li className='mb-3'>
                <a href="#">Contact Us</a>
                <p>info@gathergram.app</p>
              </li>
            </ul>
            
            <ul>
            <li className='mb-3'>
                <p className='font-bold text-[18px]'>Legal</p>
              </li>
              <li className='mb-3'>
                <a href="#">Privacy Policy</a>
              </li>
              <li className='mb-3'>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-3 pb-5 border-t-[.02px] border-gray-500 copyright'>
          &copy; 2024  GatherGram, all rights reserved.
        </div>
      </div>
    </footer>
  )
}
