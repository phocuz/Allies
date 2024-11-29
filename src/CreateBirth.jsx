function CreateBirth() {
    return (
        <div className="flex flex-col justify-center items-center px-6 py-10 bg-customPink w-[350px] md:w-[800px] lg:w-[1170px] h-[432px] text-customWhite rounded-xl mx-auto my-10">
            <h1 className="text-[40px] m-4 ">
                Ready to Create Your <span className="font-normal italic">Birth Plan?</span>
            </h1>
            <p className="text-center m-4">Join countless other mothers who have trusted our tool to create their perfect birth plan. <br /> Don’t wait—your perfect birth plan is just a few clicks away.</p>
            <button className="text-customPink bg-customWhite px-12 py-3 rounded-full text-[15px]">create your birth plan →</button>
        </div>
    )
}

export default CreateBirth
