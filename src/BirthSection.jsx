import mark from "./assets/mark.png";
import mark1 from "./assets/mark2.png";
import mother from "./assets/mother.png";

function BirthSection() {
    return (
        <div className="flex flex-col justify-center lg:flex-row items-center gap-10 lg:gap-16 px-6 lg:px-16 py-10">
            {/* Left Section */}
            <div className="flex flex-col justify-center gap-6 text-customPink max-w-[450px]">
                <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-tight tracking-normal">
                    <span className="font-normal italic">Simplify</span> Your Birth Plan <br /> Creation
                </h1>
                <p className="text-gray-700 text-base leading-relaxed">
                    Creating your birth plan should be a joyous part of your journey, not a frustrating task. 
                    Our intuitive builder ensures you can easily craft a plan that reflects your wishes without 
                    the stress of complicated templates. Focus on the excitement of welcoming your baby, and let us handle the rest.
                </p>
                <button className="px-6 py-3 text-customPink  border-2 border-customPink rounded-full w-[140px]">
                    Get Started
                </button>
            </div>

            {/* Right Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10 bg-customLightPink rounded-2xl p-6  lg:p-10">
                {/* Image */}
                <div className="w-[200px] lg:w-[271px] md:h-[500px] lg:h-[573px]">
                    <img src={mother} alt="mother" className="w-full h-auto rounded-xl " />
                </div>

                {/* Features */}
                <div className="flex flex-col gap-6">
                    {/* Feature Item */}
                    <div className="flex items-center gap-4 p-4 bg-customWhite rounded-xl shadow-sm">
                        <img src={mark} alt="icon" className="w-[40px] h-[40px]" />
                        <h2 className="text-lg text-customPink font-medium">Environment Settings</h2>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-customBrown rounded-xl shadow-sm">
                        <img src={mark1} alt="icon" className="w-[40px] h-[40px]" />
                        <h2 className="text-lg text-customPink font-medium">Pain Management</h2>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-customWhite rounded-xl shadow-sm">
                        <img src={mark} alt="icon" className="w-[40px] h-[40px] " />
                        <h2 className="text-lg text-customPink font-medium">Delivery Options</h2>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-customBrown rounded-xl shadow-sm text-customPink">
                        <img src={mark1} alt="icon" className="w-[40px] h-[40px]" />
                        <h2 className="text-lg  font-medium">After Birth Planning</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BirthSection;
