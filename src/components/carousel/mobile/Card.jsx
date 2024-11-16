"uce client"
import Image from 'next/image';
import React from 'react';
import aiIcon from "../../../../public/ai-tech.svg";

export default function Card({ title, subTitle, description, ai, img, isActive, index }) {
    return (
        <div 
        className={`relative w-[300px] mx-auto h-auto rounded-[32px]  transition-all duration-300 ${isActive ? 'mt-0 shadow-b shadow-[#4F0D2540]' : 'mt-[23%]'}`}
        >
            {/* Image Section */}
            <div
                className={`${
                    isActive ? 'h-[530px]' : 'h-[420px]'
                } transition-all duration-300 w-full rounded-[32px] relative z-10 -bottom-[2.4rem]  px-3 ${img}`}
                
            >
                <div
                    className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,1)] rounded-[32px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.9) 100%)`,
                    }}
                />
                {ai && 
                <div className={`flex items-center gap-x-2 absolute left-4 z-20 ${index === 1 ? 'bottom-[5.2rem]' : 'bottom-[7rem]'}`}>
                    <Image src={aiIcon} alt="ai" className='w-[15%]' />
                    <p className='text-white/[.9] text-[12px]'>AI Assisted</p>
                </div>
                }
                <h4 className="absolute bottom-11 left-4 text-white text-[23px] leading-[32px] font-semibold z-20">
                    {title}
                </h4>
                <p className="absolute bottom-5 text-[14px] leading-[20px] text-white/[.7] left-4 text-white z-20">
                    {subTitle}
                </p>
            </div>

            {/* Description Section */}
            <div 
            className={`bg-[#FED4D0] h-auto pt-[65px] pb-[35px] px-[16px] rounded-b-[32px] shadow-md shadow-[#4F0D2540] transition-all ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-700 ${
                isActive ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
            }`}>
                <p className="text-[14px] text-[#4F0D25]">
                    {description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            <span className='leading-[50px] tracking-wide'>{line}</span>
                            {index < description.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
}
