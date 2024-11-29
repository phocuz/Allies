import right from "./assets/template.png";

function Templates() {
    return (
        <div className=" px-4 md:px-12 lg:px-20 py-10">
            {/* Header Section */}
            <div className="flex justify-center items-center flex-col gap-6 text-center text-customPink">
                <h1 className="text-[42px] font-semibold leading-snug">
                    How it <span className="text-light italic">works</span>
                </h1>
                <p className="text-lg text-customPink">
                    Our birth plan builder is designed to be simple and user-friendly.
                    <br />
                    Follow these three easy steps to create your personalized
                    <br />
                    birth plan.
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-center items-start mx-auto  gap-16 mt-10">
                {/* Vertical Timeline */}
                <div className="hidden lg:flex flex-col items-center">
                    <span className="w-[4px] h-[90px] rounded-md bg-customLightPink"></span>
                    <span className="w-[4px] h-[90px] rounded-md bg-customPink"></span>
                    <span className="w-[4px] h-[90px] rounded-md bg-customLightPink"></span>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-8 justify-center ">
                    {/* Step 1 */}
                    <div>
                        <h2 className="text-xl font-bold text-customPink">1. Choose your template</h2>
                        <p className="text-customPink mt-2">
                            Browse through our wide range of beautiful templates
                            <br />
                            and select the one that resonates with you.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div>
                        <h2 className="text-xl font-bold text-customPink">2. Select your preference</h2>
                        <p className="text-customPink mt-2">
                            Answer a series of thoughtful questions to customize
                            <br />
                            your birth plan according to your personal preferences
                            <br />
                            and needs. Choose a template that feels right for you and
                            <br />
                            your baby's arrival.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div>
                        <h2 className="text-xl font-bold text-customPink">3. Download & Share</h2>
                        <p className="text-customPink mt-2">
                            Once your plan is complete, download it and share it with
                            <br />
                            your care team and loved ones.
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <img
                        src={right}
                        alt="image"
                        className="w-[500px] lg:w-[550px] h-auto rounded-lg shadow-lg"
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Templates;
