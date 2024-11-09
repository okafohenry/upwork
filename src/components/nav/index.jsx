import Image from "next/image";
import logo from '../../../public/logo.svg';

export default function Nav() {
    return (
        <nav className="w-full lg:h-[100px] lg:py-0 py-4 fixed top-0 bg-transparent">
            <div className="mx-auto w-[90%]">
                <div className="flex items-center justify-between">
                    <Image src={logo} alt="logo" className="lg:w-auto w-[50%]" />
                    <ul className="lg:flex hidden items-center gap-x-5">
                        <li>
                            <a href="" className="text-[16px] p-[10px]">Features</a>
                        </li>
                        <li>
                            <a href="" className="text-[16px] p-[10px]">How it works</a>
                        </li>
                        <li>
                            <a href="" className="text-[16px] p-[10px]">FAQs</a>
                        </li>
                        <li>
                            <a href="" className="text-[16px] p-[10px]">Contact</a>
                        </li>
                    </ul>
                    <button className="lg:block hidden w-[10.5%] text-center bg-primary py-[15px] rounded-[50px]">Get Started</button>
                </div>
            </div>    
        </nav>
    )
}