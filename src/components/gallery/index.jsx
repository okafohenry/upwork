import Image from 'next/image';
import anim1 from '../../../public/g-animation1.svg';
import anim2 from '../../../public/g-animation2.svg';
import anim3 from '../../../public/g-animation3.svg';
import anim4 from '../../../public/g-animation4.svg';
import DisplayOne from './components/DisplayOne';
import DisplayTwo from './components/DisplayTwo';
import DisplayThree from './components/DisplayThree';
import DisplayFour from './components/DisplayFour';
import DisplayFive from './components/DisplayFive';
import DisplaySix from './components/DisplaySix';
import DisplaySeven from './components/DisplaySeven';

export default function Gallery() {

    return (
        <div id="gallery" data-aos="fade-down" className="bg-[#FFE5E3] lg:py-[160px] py-[100px] relative overflow-hidden">
            <Image src={anim1} alt="anim1" className='absolute bottom-[9%] right-0 z-10 lg:w-auto w-[20%] animate-bounce' />
            <Image src={anim2} alt="anim2" className='absolute top-[15%] lg:-left-5 z-10 lg:w-auto w-[20%] animate-bounce' />
            <Image src={anim3} alt="anim3" className='absolute top-[25%] -right-10 z-10 lg:w-auto w-[20%] animate-pulse' />
            <Image src={anim4} alt="anim4" className='absolute top-[52.7%] lg:left-0 z-10 lg:w-auto w-[20%] animate-pulse' />
            <div className="w-[85%] mx-auto">
                <h1 className="mx-auto lg:text-[65px] text-[#4F0D25]/[.9] text-[32px] font-[500] text-center lg:leading-[75px] tracking-normal leading-[40px]">Designed with You and Your<br className="lg:block hidden" /> Guests <span className="text-[#FD7E72]">in Mind</span></h1>
                <p className="lg:text-[27px] text-center text-[16px] mt-8 text-[#4F0D25]/[.9] tracking-[2%]">Explore the features that will bring your big day to life, making<br className="lg:block hidden" /> your wedding celebration unforgettable</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[6rem]">
                    <div className="col-span-1 grid gap-y-5">
                        <DisplayOne />
                        <DisplayTwo />
                        <DisplayThree />
                        <DisplayFour />
                    </div>
                    <div className="col-span-1 grid gap-y-5">
                        <DisplayFive />
                        <DisplaySix />
                        <DisplaySeven />
                    </div>
                </div>
            </div>
        </div>
    )
}