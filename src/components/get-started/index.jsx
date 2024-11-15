
export default function GetStarted({ openModal }) {
    return (
        <div className="get-started-bg">
            <div className="w-[90%] mx-auto">
                <div className="lg:w-[65%] w-[80%] grid gap-y-10 pt-[10rem]">
                    <h1 data-aos="fade-up" className="lg:text-[85px] text-[50px] font-[600] lg:leading-[104px] leading-[60px]">Ready for an <span className="text-[#FED4D0]">Unforgettable</span><br /> Wedding?</h1>
                    <p data-aos="fade-up" className="lg:text-[30px] text-[20px] lg:w-[85%] text-white">Begin your journey to a stress-free, beautifully organized celebration today with GatherGram</p>
                    <div data-aos="fade-up" className="lg:w-[40%] w-[75%] mt-10">
                        <button 
                        onClick={openModal}
                        className="w-full text-center rounded-[50px] bg-[#FD7E72] lg:text-[18px] text-[16px] text-white font-[400] py-[18px]">
                            Let’s get started!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}