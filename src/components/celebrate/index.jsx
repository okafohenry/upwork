import Carousel from "../carousel";

export default function Celebrate(){
    return (
        <div 
        className="celebrate-bg lg:h-[120vh] h-[100vh]" id="how-it-works">
            <div className="w-[90%] mx-auto">
                <h1 data-aos="fade-down" className="text-center lg:text-[60px] lg:leading-[90px] leading-[50px] text-[45px] pt-[5rem] text-white">Celebrate With Ease</h1>
                <p data-aos="fade-down" className="mt-4 text-center lg:text-[28px] text-[18px]">From setup to celebration, here’s how we make your wedding day <br /> hassle-free</p>
                <Carousel />
            </div>
        </div>
    )
}