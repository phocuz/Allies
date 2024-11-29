
import consultation from "./assets/consultant.png"
function Consultation() {
    return (
       <div className="flex flex-col justify-center lg:flex-row items-center gap-10 lg:gap-16 px-6 lg:px-16 py-10">

            {/* Right Section */}
            <div className="flex flex-col justify-center gap-6 text-customPink max-w-[450px]">
                <h1 className="text-[25px] md:text-[36px] lg:text-[35px] font-semibold leading-tight tracking-normal">
                    <span className="font-normal italic">Share</span> Your Birth Plan with <br /> Your Doctor and Loved <br /> Ones  to Others in the Area
                </h1>
                <p className="text-customPink text-base leading-relaxed">
                    Easily share your birth plan with your healthcare team and loved ones. Ensure everyone is on the same page and ready to support you during your delivery. Sharing your journey brings comfort and confidence to those who care about you.
                </p>
                <button className="px-6 py-3 text-customPink  border-2 border-customPink rounded-full w-[140px]">
                    Get Started
                </button>
            </div>

            {/* Left Section */}
            <div className="flex  items-center p-6  rounded-lg h-[520px]">
                {/* Image */}
                {/* <div className="w-[450px]  md:h-[450px] lg:h-[450px]"> */}
                <div>
                    <img src={consultation} alt="consultation-image" className=" h-[520px]  lg:mb-20 rounded-xl w-[570px] " />
                </div>
            </div>

           
        </div>
    )
}

export default Consultation
