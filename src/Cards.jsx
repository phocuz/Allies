import image1 from "./assets/Image1.png"
 import image from "./assets/Image.png"
 import image3 from "./assets/Image3.png"
 import image2 from "./assets/Image2.png"
 import image6 from "./assets/Image6.png"

function Cards() {
    return (
        <div>
            <div className=" flex flex-col gap-4 items-center justify-center text-customPink my-10">
               <div>
                 <h1 className="text-[42px] font-bold leading-10">
                    Choose the Perfect Birth Plan for You
                </h1>

                <p className="text-center my-4">Browse our customizable templates to find the one that fits your vision. We’re here to <br /> support your journey to motherhood, making it stress-free and enjoyable.</p>
               </div>

                <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2">
                    <div className="flex  flex-col gap-4" >
                    <div className="bg-customDeepPink w-[270px] h[270px] relative">
                        <img src={image1} alt="image" />
                        <button className="rounded-full px-2 py-1 border-2 border-customPink absolute bottom-4 right-0">→</button>
                    </div>
                    <div className="text-start flex justify-center flex-col gap-2 font-semibold">
                        <h3>Template</h3>
                        <h6>Donec sagittis viverra varius a. <br /> Egestas porttitor sem per malesuad...</h6>
                    </div>
                </div>

                <div className="flex  flex-col gap-4" >
                    <div className="bg-customHarsh w-[270px] h[270px] relative">
                        <img src={image3} alt="image" />
                        <button className="rounded-full px-2 py-1 border-2 border-customPink absolute bottom-4 right-0">→</button>
                    </div>
                    <div className="text-start flex justify-center flex-col gap-2 font-semibold">
                        <h3>Template</h3>
                        <h6>Donec sagittis viverra varius a. <br /> Egestas porttitor sem per malesuad...</h6>
                    </div>
                </div>

                <div className="flex  flex-col gap-4" >
                    <div className="bg-customDeepPink w-[270px] h[270px] relative">
                        <img src={image2} alt="image" />
                        <button className="rounded-full px-2 py-1 border-2 border-customPink absolute bottom-4 right-0">→</button>
                    </div>
                    <div className="text-start flex justify-center flex-col gap-2 font-semibold">
                        <h3>Template</h3>
                        <h6>Donec sagittis viverra varius a. <br /> Egestas porttitor sem per malesuad...</h6>
                    </div>
                </div>

                <div className="flex  flex-col gap-4" >
                    <div className="bg-customHarsh w-[270px] h[270px] relative">
                        <img src={image} alt="image" />
                        <button className="rounded-full px-2 py-1 border-2 border-customPink absolute bottom-4 right-0">→</button>
                    </div>
                    <div className="text-start flex justify-center flex-col gap-2 font-semibold">
                        <h3>Template</h3>
                        <h6>Donec sagittis viverra varius a. <br /> Egestas porttitor sem per malesuad...</h6>
                    </div>
                </div>

                <div className="flex  flex-col gap-4 relative" >
                    <div className="bg-customHarsh w-[270px] h[270px] relative">
                        <img src={image1} alt="image" />
                        <button className="rounded-full px-2 py-1 border-2 border-customPink absolute bottom-4 right-0">→</button>
                    </div>
                    <div className="text-start flex justify-center flex-col gap-2 font-semibold">
                        <h3>Template</h3>
                        <h6>Donec sagittis viverra varius a. <br /> Egestas porttitor sem per malesuad...</h6>
                    </div>
                </div>

                <div className="flex  flex-col gap-4" >
                    <div className="bg-white w-[270px] h[270px] relative rounded-lg">
                        <img src={image6} alt="image" />
                        <button className="rounded-full px-2 py-1 border-2 border-customPink absolute bottom-4 right-0">→</button>
                    </div>
                    <div className="text-start flex justify-center flex-col gap-2 font-semibold">
                        <h3>Template</h3>
                        <h6>Donec sagittis viverra varius a. <br /> Egestas porttitor sem per malesuad...</h6>
                    </div>
                </div>
                
                </div>
                <div className="flex justify-center gap-4">
                    <span className="w-[48px] h-[4px] bg-customPink rounded-xl"></span>
                    <span className="w-[48px] h-[4px] bg-customWine"></span>
                    <span className="w-[48px] h-[4px] bg-customWine"></span>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
