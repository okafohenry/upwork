export default function DisplayTwo() {
    const cardStyle = 'rounded-[32px] shadow-lg relative'
    const absoluteTop = 'absolute text-white top-10 lg:text-[37px] text-[27px] ml-10'
    const absoluteBottom = 'absolute bottom-10 lg:text-[25px] text-[18px] ml-10 font-[400] text-white/[.8]'


    return (
        <div className={`h-[400px] ${cardStyle} bg-2 relative overflow-hidden group`}>
            <h3 className={`${absoluteTop}`}>Event Details & Itinerary</h3>
            <p className={`${absoluteBottom}`}>Every Detail in One Place</p>
            
            <div className="absolute object-cover w-full h-full inset-0 bg-[#FD7E72]  opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 flex items-center justify-center transition-all duration-300">
                <p className='w-[70%] h-auto m-auto text-center lg:text-[23px]'>
                Guests can access a beautifully<br /> organized event schedule and<br /> venue information, from ceremony<br /> timings to reception details,<br /> ensuring they’re informed and on<br /> time throughout the day
                </p>
            </div>
        </div>
    )
}

