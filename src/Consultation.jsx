
import consultation from "./assets/consultant.png"
function Consultation() {
    return (
       <div className="flex flex-col justify-center lg:flex-row items-center gap-10 lg:gap-16 px-6 lg:px-16 py-10">

            {/* Right Section */}
            <div className="flex flex-col justify-center gap-6 text-customPink max-w-[450px]">
                <h1 className="text-[28px] md:text-[36px] lg:text-[38px] font-semibold leading-tight tracking-normal">
                    See How Your Hospital <span className="font-normal italic">Compares</span>  to Others in the Area
                </h1>
                <p className="text-customPink text-base leading-relaxed">
                    Make informed decisions with our comprehensive hospital comparison tool. See ratings and reviews from other mothers and find the best hospital for your delivery based on quality of care, facilities, and more. Your peace of mind is our priority.
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
