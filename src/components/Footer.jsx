import React from "react";
import { CgMail } from "react-icons/cg";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import {
  FaAngleRight,
  FaArrowRightLong,
  FaLinkedin,
  FaLocationDot,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="relative bg-[#0F0D1D] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 lg:p-35 text-white mt-50">
        <div className="absolute -top-15 right-0 left-0 mx-auto bg-blue-500 z-10 text-black w-[90%] lg:w-[1300px] flex flex-col lg:flex-row items-center justify-between p-4 lg:p-10 py-10">
          <div></div>
          <div className="hidden lg:block absolute bottom-0">
            <img
              className="h-[240px]"
              src="/footerManWithLaptop.fa4afb88.png"
              alt=""
            />
          </div>
          <p className="text-xl lg:text-2xl font-bold text-center lg:text-left mb-4 lg:mb-0">
            Stay Connected With <br /> Cutting Edge IT
          </p>
          <button className="flex items-center gap-1 bg-white px-3 py-3 cursor-pointer hover:bg-gray-300">
            Get A Quote <FaArrowRightLong />
          </button>
        </div>

        <div className="absolute right-0 bottom-10 hidden lg:block">
          <img src="/footerNet.d7040eb2.png" alt="" />
        </div>
        <div className="absolute left-0 bottom-0 hidden lg:block">
          <img src="/footerWorldMap.b9290dd8.png" alt="" />
        </div>

        <div className="mx-auto text-center lg:text-left mb-8 lg:mb-0 mt-40 lg:mt-0">
          <img className="mx-auto lg:mx-0" src="/primexopLogoWhite.cf13571e.svg" alt="" />
          <p className="mt-4">
            Empowering Businesses with Cutting-edge <br /> Technology Solutions
          </p>
          <div className="flex gap-2 mt-8 text-2xl justify-center lg:justify-start">
            <FaYoutube className="cursor-pointer" />
            <FaInstagramSquare className="cursor-pointer" />
            <FaTelegram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaWhatsappSquare className="cursor-pointer" />
          </div>
        </div>

        <div className="mx-auto mb-8 lg:mb-0">
          <p className="flex items-center gap-2 text-2xl font-bold pb-4 justify-center lg:justify-start">
            <FaAngleRight />
            Quick Links
          </p>
          <hr className=" py-3" />
          <p className="flex items-center gap-2 justify-center lg:justify-start cursor-pointer hover:text-gray-300">
            <FaAngleRight />
            Our Services
          </p>
          <p className="flex items-center gap-2 justify-center lg:justify-start cursor-pointer hover:text-gray-300">
            <FaAngleRight />
            Contact Us
          </p>
        </div>

        <div className="mx-auto text-center lg:text-left">
          <p className="text-2xl font-bold pb-3">Contact Us</p>
          <hr className=" py-3" />
          <div className="">
            <p className="flex items-center gap-2 pb-2 justify-center lg:justify-start">
              <FaLocationDot />
              <span>
                Khamgaon, dist. Buldhana, <br /> Maharashtra, India 444303
              </span>
            </p>
            <p className="flex items-center gap-2 pb-2 justify-center lg:justify-start">
              <IoCall />
              +91 9834877006
            </p>
            <p className="flex items-center gap-2 justify-center lg:justify-start">
              <CgMail />
              support@primexop.com
            </p>
            <button className="flex items-center gap-1 bg-white px-3 py-3 cursor-pointer text-black hover:bg-gray-300 mt-8 mx-auto lg:mx-0">
              Get A Quote <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
