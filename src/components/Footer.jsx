import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa'
import { FaAngleRight, FaArrowRightLong, FaLinkedin, FaLocationDot, FaTelegram, FaYoutube } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'

const Footer = () => {
  return (
    <div>
      <div className='relative'>
        <div className='relative bg-blue-500 max-w-[1300px] h mx-auto flex items-center justify-between p-10 py-10 mt-34'>
          <div></div>
            <div className='absolute bottom-0'>
              <img className='h-[240px]' src="/public/footerManWithLaptop.fa4afb88.png" alt="" />

            </div>
            <p className='text-2xl font-bold'>Stay Connected With <br /> Cutting Edge IT</p>
            <button className='flex items-center gap-1 bg-white px-3 py-3 cursor-pointer hover:bg-gray-300'>Get A Quote <FaArrowRightLong/></button>
        </div>
      </div>

      <div className='bg-blue-950 grid grid-cols-3 p-35 text-white'>
        <div className='mx-auto'>
            <img src="/primexopLogoWhite.cf13571e.svg" alt="" />
            <p className=''>Empowering Businesses with Cutting-edge <br /> Technology Solutions</p>
            <div className='flex gap-2 mt-8 text-2xl'>
              <FaYoutube/>
              <FaInstagramSquare/>
              <FaTelegram/>
              <FaLinkedin/>
              <FaWhatsappSquare />
            </div>
        </div>

        <div className='mx-auto'>
          <p className='flex items-center gap-2 text-2xl font-bold pb-4'><FaAngleRight />Quick Links</p>
          <hr className='w-30 py-3' />
          <p className='flex items-center gap-2'><FaAngleRight />Our Services</p>
          <p className='flex items-center gap-2'><FaAngleRight />Contact Us</p>
        </div>

        <div className='mx-auto'>
          <p className='text-2xl font-bold pb-3'>Contact Us</p>
          <hr className='w-30 py-3' />
          <div className=''>
          <p className='flex items-center gap-2 pb-2'>
          <FaLocationDot />
          <p> Khamgaon, dist. Buldhana, <br />  Maharashtra, India 444303</p>
          </p>
          <p className='flex items-center gap-2 pb-2'>
            <IoCall/>
            +91 9834877006
          </p>
          <p className='flex items-center gap-2 '>
          <CgMail  />
          support@primexop.com
          </p>
          <button className='flex items-center gap-1 bg-white px-3 py-3 cursor-pointer text-black hover:bg-gray-300 mt-8'>Get A Quote <FaArrowRightLong/></button>

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
