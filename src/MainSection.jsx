
import image from "./assets/right.png"
function MainSection() {
    return (
       <div className="flex flex-col justify-center lg:flex-row items-center gap-10 lg:gap-16 px-6 lg:px-16 py-10">

         {/* Left Section */}
            <div className="flex   rounded-2xl p-6  lg:p-10">
                {/* Image */}
                <div className="w-[450px] lg:w-[570px] md:h-[450px] lg:h-[500px]">
                    <img src={image} alt="image" className="w-full h-auto rounded-xl " />
                </div>
            </div>

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

           
        </div>
    )
}

export default MainSection
