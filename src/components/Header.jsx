import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaYoutube, FaInstagramSquare, FaTelegram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


function Header() {
  return (
    <div>
      <div className="bg-black py-2 px-4 flex justify-between " >
        <div className='text-white text-xl flex gap-3 items-center' >
        <CgMail  />
        <p>support@primexop.com</p>
        <IoCall/>
        <p >+91 9834877006</p>
        </div>

        <div className='text-white text-xl flex gap-3 items-center'>
            <p >Follow Us:</p>
            <FaYoutube/>
            <FaInstagramSquare/>
            <FaTelegram/>
            <FaLinkedin/>
            <FaWhatsappSquare />
        </div>
      </div>
    </div>
  )
}

export default Header
