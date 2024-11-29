
import image1 from "./assets/Image1.png"
 import image from "./assets/Image.png"
 import image3 from "./assets/Image3.png"
 import image2 from "./assets/Image2.png"

function Explore() {
    return (
        <div className=" px-4 md:px-12 lg:px-20 py-10">

            {/* Header Section */}

            <div className="flex justify-center items-center flex-col gap-6 text-center text-customPink">
                <h1 className="text-[42px] font-semibold leading-snug">
                    Find the Perfect <span className="text-light italic">Birth Plan</span> for you
                </h1>
                <p className="text-lg text-customPink">
                    Explore our library of templates to express your birthing preferences confidently. Discover <br /> styles and  formats that fit your needs, making your journey smooth and enjoyable.
                </p>
            </div>

            <div className="flex justify-center items-center  p-4 rounded-lg mt-10">

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
                <img src={image1} alt="image" className="w-270px h-270px" />
                <img src={image3} alt="image" className="w-270px h-270px" />
                <img src={image2} alt="image" className="w-270px h-270px" />
                <img src={image} alt="image" className="w-270px h-270px" />
                <img src={image1} alt="image" className="w-270px h-270px" />
                <img src={image3} alt="image" className="w-270px h-270px" />
                <img src={image2} alt="image" className="w-270px h-270px" />
                <img src={image} alt="image" className="w-270px h-270px" />
                <img src={image1} alt="image" className="w-270px h-270px" />
                <img src={image3} alt="image" className="w-270px h-270px" />
                <img src={image2} alt="image" className="w-270px h-270px" />
                <img src={image} alt="image" className="w-270px h-270px" />
            </div>
            </div>
                <div>
                    <button className="flex mx-auto justify-center items-center border-2 bg-customPink rounded-full text-customWhite capitalize px-4 py-2">browse all template</button>
                </div>
            </div>
    )
}

export default Explore
