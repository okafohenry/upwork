"use client"
import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from "next/link";
import React, { useState } from "react";
import ContactForm from "../contact-form";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Dropdown from "./Dropdown";
import ContactFormMobile from "../contact-form/FormMobile";
import SuccessNotification from "../contact-form/SuccessNotification";

export default function Nav({ isModalOpen, closeModal, openModal }) {
    const [ toggleDropdown, setToggleDropdown ] = useState(false)
    const [ isEmailSent, setIsEmailSent ] = useState(false)

    return (
        <>
            <nav className="w-full lg:h-[120px] lg:py-0 py-4 z-20 absolute top-0 flex items-center bg-transparent backdrop-blur-sm">
                <div className="mx-auto w-full lg:pl-[50px] lg:pr-[50px] pl-[7px] pr-[12px]">
                    <div className="flex items-center justify-between">
                        <Link href='/' >
                            <Image src={logo} alt="logo" className="hover:cursor-pointer lg:w-auto lg:h-auto h-[40px] w-[155px]" />
                        </Link>

                        <div className="lg:flex hidden w-[40%] items-center gap-x-5 ">      
                            <Link href="#gallery" className="text-[17px] p-[10px]">Features</Link>         
                            <Link href="#how-it-works" className="text-[17px] p-[10px]">How it works</Link>                      
                            <Link href="#faq" className="text-[17px] p-[10px]">FAQs</Link>                      
                            <p className="text-[17px] p-[10px] cursor-pointer" onClick={openModal}>Contact</p>
                        </div>
                        <button 
                        onClick={openModal} 
                        className="lg:text-[18px] text-[12px]  w-[12.5%] lg:block hidden text-center bg-primary hover:bg-primary/[.5] lg:py-[14px] py-[8px] lg:px-0 px-[16px] rounded-[50px]">
                            Get Started
                        </button>
                        <HiOutlineMenuAlt4  onClick={() => setToggleDropdown(true)} className="text-[28px] text-white lg:hidden block" />
                    </div>
                </div>    
            </nav>
            {isModalOpen &&
                <React.Fragment>
                    <ContactForm 
                    closeModal={closeModal} 
                    openNotificationModal={() => setIsEmailSent(true)}
                    />
                    <ContactFormMobile 
                        closeModal={closeModal} 
                        openNotificationModal={() => setIsEmailSent(true)}
                    />
                </React.Fragment>
            }
            {toggleDropdown &&
                <Dropdown 
                closeDropdown={() => setToggleDropdown(false)} 
                isOpen={toggleDropdown} 
                openContactModal={openModal}
                />
            }
            {isEmailSent &&
            <SuccessNotification closeModal={() => setIsEmailSent(false)} />
            }
        </>
    )
}