import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div>
      <div className='py-4 px-4 flex justify-between items-center mx-auto' >
        <img src="/public/primexopLogoBlue.a6dc87a3.svg" alt="" />
        <div className='text-xl font-thin flex items-center gap-4 tracking-wider' >
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
            <button className='bg-blue-600 py-3 px-4 flex items-center gap-1 font-normal text-white tracking-tight cursor-pointer hover:bg-blue-500' >Get A Quote <FaArrowRightLong className='font-thin' />
            </button>
        </div>
      </div>
      <div>
        <div className='absolute'>
            <img className='h-[420px] w-full object-cover' src="/public/hero.webp"  alt="" />
        </div>
        <div className="w-full  py-4 relative flex flex-col gap-2 items-center justify-center  h-[60vh] ">
            <h1 className='text-4xl font-bold' >Services</h1>
            <p>Home Services</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
