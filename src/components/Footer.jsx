import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-20 mb-20 px-16 grid grid-cols-5 max-xl:grid-cols-4 max-xl:gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:px-5 max-[500px]:grid-cols-1 ">
      <div className="flex flex-col gap-5 ">
        <div className="font-semibold">C A R E N T</div>
        <div className="flex flex-col">
          <span className="text-sm ">Carent 2020</span>
          <span className="text-sm ">All Right Reserved &#169;</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-semibold">Menu</span>
        <span className="text-sm text-gray-600">Home</span>
        <span className="text-sm text-gray-600">Car Catalogue</span>
        <span className="text-sm text-gray-600">Services</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-semibold">Company</span>
        <span className="text-sm text-gray-600">About us</span>
        <span className="text-sm text-gray-600">Careers</span>
        <span className="text-sm text-gray-600">Contact us</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-semibold">Further Information</span>
        <span className="text-sm text-gray-600">Terms & Conditions</span>
        <span className="text-sm text-gray-600">Privacy Policy</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-semibold">Contact us</span>
        <div className="flex gap-5">
          <span className="bg-blue-800 text-white flex justify-center items-center rounded-full w-7 h-7">
            <FaFacebookF />
          </span>
          <span className="bg-blue-800 text-white flex justify-center items-center rounded-full w-7 h-7">
            <BsTwitter />
          </span>
          <span className="bg-blue-800 text-white flex justify-center items-center rounded-full w-7 h-7">
            <BsInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
