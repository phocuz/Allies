function Header() {
  return (
    <div className="flex justify-around items-center px-8 py-4 ">
      {/* Left Section */}
      <div className="sm:flex hidden gap-6">
        <h5 className="text-customPink transition duration-200 cursor-pointer">
          How it works
        </h5>
        <h5 className="text-customPink transition duration-200 cursor-pointer">
          About
        </h5>
      </div>

      {/* Logo Section */}
      <h1 className="text-[45px] text-customPink font-extrabold tracking-wide">
        allies
      </h1>

      {/* Right Section */}
      <div className="flex gap-6 items-center">
        <h3 className=" text-customPink transition duration-200 cursor-pointer">
          Contact
        </h3>
        <button className="hover:bg-customPink hover:text-white  text-customPink px-6 py-2 border-2 border-customPink rounded-lg transition duration-300">
          Button
        </button>
      </div>
    </div>
  );
}

export default Header;
