/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [showHamburgerIcon, setShowHamburgerIcon] = useState(true);
  return (
    <div className={`  w-full flex justify-between shadow-sm  items-center h-28 max-lg:h-16 px-16 fixed top-0 bg-backgroundColor z-10 max-sm:px-5 ${showHamburgerIcon &&  'max-lg:fixed'} `}>
      <div className= {`w-1/3 box-border  text-lg text-gray-800 font-medium max-sm:w-1/2`}>C A R E N T</div>
      <div className={`w-2/3  flex justify-between items-center  max-lg:absolute max-lg:top-28 max-lg:left-0 max-lg:right-0 max-lg:z-30 max-lg:w-full max-lg:h-screen max-lg:justify-start max-lg:bg-backgroundColor  max-lg:flex-col ${showHamburgerIcon && 'max-lg:hidden'} max-lg:-mt-1 max-lg:border-t-2 max-sm:overflow-y-scroll`}>
        <div className={`flex gap-6 max-xl:w-2/3  max-lg:flex-col max-lg:w-full max-lg:px-16 ${showHamburgerIcon && 'max-lg:hidden'} max-lg:gap-0 max-sm:px-10`}>
          <span className="text-gray-800 max-lg:border-b max-lg:py-7">Home</span>
          <span className="font-medium max-lg:border-b max-lg:py-7">Car Catalogue</span>
          <span className="text-gray-800 max-lg:border-b max-lg:py-7">Contact Us</span>
          <span className="text-gray-800 max-lg:border-b max-lg:py-7">Help</span>
        </div>
        <div className="flex justify-end gap-6 max-xl:w-1/3 max-lg:flex-col max-lg:w-full max-lg:px-16 max-lg:gap-0 max-sm:px-10">
          <button
            disabled
            className="text-blue-800  font-medium pointer-events-none max-lg:border-b max-lg:py-7 max-lg:w-full max-lg:text-start "
          >
            Register
          </button>
          <button
            className="px-7 py-2  max-xl:px-5 font-medium border border-blue-700 border-opacity-50 rounded-2xl text-blue-800 pointer-events-none max-lg:border-0 max-lg:border-b max-lg:rounded-none max-lg:border-inherit max-lg:text-start max-lg:py-7 max-lg:px-0"
            disabled
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="hidden max-lg:block max-sm:1/2 " onClick={()=>{
        setShowHamburgerIcon(!showHamburgerIcon);
      }}>
        {showHamburgerIcon ? (
          <div className="bg-primaryColor p-3 text-black rounded-md cursor-pointer">
            <GiHamburgerMenu size="20" />
          </div>
        ) : (
          <div className="bg-primaryColor p-2 text-black rounded-md cursor-pointer">
            <MdClose size="28" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
