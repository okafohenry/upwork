export default function Gallery() {

    const cardStyle = 'rounded-[32px] shadow-lg'

    return (
        <div className="bg-[#FAFAFA] lg:py-[160px] py-[100px]">
            <div className="w-[90%] mx-auto">
                <h1 className="lg:w-[65%] mx-auto lg:text-[65px] text-[45px] font-[600] text-center lg:leading-[100px] leading-[60px] text-[#0D0D0D]">Designed with You and Your Guests <span className="text-primary">in Mind</span></h1>
                <p className="lg:w-[65%] mx-auto lg:text-[30px] text-center text-[20px] mt-8  text-[#0D0D0D]">Explore the features that will bring your big day to life, making your wedding celebration unforgettable</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-[4.5rem]">
                    <div className="col-span-1 grid gap-y-5">
                        <div className={`lg:h-[828px] h-[400px] ${cardStyle} bg-1`}></div>
                        <div className={`h-[400px] ${cardStyle} bg-2`}></div>
                        <div className={`lg:h-[828px] h-[400px] ${cardStyle} bg-3`}></div>
                        <div className={`h-[400px] ${cardStyle} bg-4`}></div>
                    </div>
                    <div className="col-span-1 grid gap-y-5">
                        <div className={`h-[400px] ${cardStyle} bg-5`}></div>
                        <div className={`lg:h-[1250px] h-[400px] ${cardStyle} bg-6`}></div>
                        <div className={`lg:h-[828px] h-[400px] ${cardStyle} bg-7`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}