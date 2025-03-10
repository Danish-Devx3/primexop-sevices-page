import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaYoutube, FaInstagramSquare, FaTelegram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className="bg-black py-2 px-4 flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className='text-white text-base md:text-xl flex flex-wrap gap-3 items-center justify-center md:justify-start'>
          <CgMail />
          <p className="text-sm md:text-base">support@primexop.com</p>
          <IoCall/>
          <p className="text-sm md:text-base">+91 9834877006</p>
        </div>

        <div className='text-white text-base md:text-xl flex gap-3 items-center justify-center md:justify-start'>
          <p className="text-sm md:text-base">Follow Us:</p>
          <FaYoutube className="cursor-pointer hover:text-gray-300"/>
          <FaInstagramSquare className="cursor-pointer hover:text-gray-300"/>
          <FaTelegram className="cursor-pointer hover:text-gray-300"/>
          <FaLinkedin className="cursor-pointer hover:text-gray-300"/>
          <FaWhatsappSquare className="cursor-pointer hover:text-gray-300"/>
        </div>
      </div>
    </div>
  )
}

export default Header
