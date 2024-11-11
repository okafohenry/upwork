import Image from "next/image";
import logo from '../../../public/logo.svg';
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full lg:h-[100px] lg:py-0 py-4 z-20 fixed top-0 bg-transparent">
            <div className="mx-auto w-[90%]">
                <div className="flex items-center justify-between">
                    <Link href='/'>
                        <Image src={logo} alt="logo" className="lg:w-auto w-[50%] hover:cursor-pointer" />
                    </Link>
                    <ul className="lg:flex hidden items-center gap-x-5">
                        <li>
                            <Link href="#gallery" className="text-[17px] p-[10px]">Features</Link>
                        </li>
                        <li>
                            <Link href="#access" className="text-[17px] p-[10px]">How it works</Link>
                        </li>
                        <li>
                            <Link href="#faq" className="text-[17px] p-[10px]">FAQs</Link>
                        </li>
                        <li>
                            <Link href="/get-started" className="text-[17px] p-[10px]">Contact</Link>
                        </li>
                    </ul>
                    <button className="lg:text-[15px] text-[12px]  lg:w-[10.5%] w-[40%] text-center bg-primary hover:bg-primary/[.5] lg:py-[12px] py-[8px] lg:px-0 px-[13px] rounded-[50px]">
                        <Link href="/get-started">Get Started</Link>
                    </button>
                </div>
            </div>    
        </nav>
    )
}