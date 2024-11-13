"use client"
import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from "next/link";
import { useState } from "react";
import ContactForm from "../contact-form";
import { IoClose, IoMenu } from "react-icons/io5";
import Dropdown from "./Dropdown";

export default function Nav({ isModalOpen, closeModal, openModal }) {
    const [ toggleDropdown, setToggleDropdown ] = useState(false)

    return (
        <>
            <nav className="w-full lg:h-[100px] lg:py-0 py-4 z-20 absolute top-0 bg-transparent backdrop-blur-sm">
                <div className="mx-auto w-full lg:px-[50px] px-5">
                    <div className="flex items-center justify-between">
                        <Link href='/'>
                            <Image src={logo} alt="logo" className="lg:w-auto w-[60%] h-auto hover:cursor-pointer" />
                        </Link>
                        <ul className="lg:flex hidden w-[40%] items-center gap-x-5 ">
                            <li>
                                <Link href="#gallery" className="text-[17px] p-[10px]">Features</Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-[17px] p-[10px]">How it works</Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-[17px] p-[10px]">FAQs</Link>
                            </li>
                            <li>
                                <p className="text-[17px] p-[10px] cursor-pointer" onClick={openModal}>Contact</p>
                            </li>
                        </ul>
                        <button 
                        onClick={openModal} 
                        className="lg:text-[18px] text-[12px]  w-[12.5%] lg:block hidden text-center bg-primary hover:bg-primary/[.5] lg:py-[14px] py-[8px] lg:px-0 px-[16px] rounded-[50px]">
                            Get Started
                        </button>
                        <IoMenu onClick={() => setToggleDropdown(true)} className="text-[32px] lg:hidden block" />
                    </div>
                </div>    
            </nav>
            {isModalOpen &&
                <ContactForm closeModal={closeModal} />
            }
            {toggleDropdown &&
                <Dropdown closeDropdown={() => setToggleDropdown(false)} isOpen={toggleDropdown} />
            }
        </>
    )
}