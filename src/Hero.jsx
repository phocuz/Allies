function Hero() {
    return (
        <div className="flex justify-center items-center mx-auto rounded-lg bg-customLightPink w-[350px] h-auto p-8 lg:h-[450px]">
            <div className="flex flex-col justify-center items-center text-center space-y-6">
                <h1 className="text-4xl lg:text-5xl text-customPink font-bold tracking-wide">
                    Create <span className="font-light"><i>Beautiful</i></span> Birth Plans with <br />
                    <span className="text-center">
                        our Free AI Birth Plan Builder
                    </span>
                </h1>

                <h3 className="text-lg lg:text-xl text-gray-700">
                    Say goodbye to Canva or Google Sheets. Choose from our lovely templates and let us help you turn your birthing dreams into a well-organized, cherished birth plan.
                </h3>

                <button className="px-6 py-3 bg-customPink text-white rounded-lg text-lg font-medium shadow-lg transition">
                    Create Your Free Birth Plan → 
                </button>
            </div>
        </div>
    );
}

export default Hero;
