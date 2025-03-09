import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div>
      <div className='py-4 px-4 flex justify-between items-center mx-auto' >
        <img src="/primexopLogoBlue.a6dc87a3.svg" alt="" />
        <div className='text-xl font-thin flex items-center gap-4 tracking-wider' >
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
            <button className='bg-blue-600 py-3 px-4 flex items-center gap-1 font-normal text-white tracking-tight cursor-pointer hover:bg-blue-500' >Get A Quote <FaArrowRightLong className='font-thin' />
            </button>
        </div>
      </div>
      <div>
        <div className='relative h-[450px]'>
          <div className='absolute '>
              <img className='h-[100%] w-full object-cover' src="/hero.webp"  alt="" />

          </div>
          <div className='absolute '>
            <img src="/left-bannerimg.2f0900ac.png" alt="" />
           
          </div>
          <div className='absolute h-[100%] right-0 bg-linear-to-l from-blue-400 to-transparent'>
          <img className='' src="/right-bannerimg.ffe2e1f3.png" alt="" />
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Navbar
