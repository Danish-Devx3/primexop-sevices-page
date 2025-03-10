import React, { useState } from 'react'
import { FaAngleRight, FaTimes } from 'react-icons/fa'
import { FaArrowRightLong, FaBars, } from 'react-icons/fa6'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      
      <div className='py-4 px-4 lg:px-8 flex justify-between items-center mx-auto relative bg-white'>
        <img 
          src="/primexopLogoBlue.a6dc87a3.svg" 
          alt="Logo" 
          className="w-32 md:w-40 lg:w-auto" 
        />
        
        
        <button 
          className="lg:hidden text-2xl z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        
        <div 
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row fixed lg:relative top-0 lg:top-auto left-0 right-0 bottom-0 lg:bottom-auto bg-white lg:bg-transparent z-10 lg:z-auto justify-center lg:justify-end items-center gap-8 lg:gap-12 p-4 lg:p-0 text-center lg:text-left`}
        >
          <p className="text-lg hover:text-blue-600 cursor-pointer transition-colors">Home</p>
          <p className="text-lg hover:text-blue-600 cursor-pointer transition-colors">Services</p>
          <p className="text-lg hover:text-blue-600 cursor-pointer transition-colors">Contact</p>
          <button className='bg-blue-600 py-2.5 px-6 flex items-center gap-2 text-white tracking-tight cursor-pointer hover:bg-blue-700 transition-colors rounded-sm'>
            Get A Quote <FaArrowRightLong className='text-sm' />
          </button>
        </div>
      </div>

      
      <div className='relative h-[300px] md:h-[400px] lg:h-[500px]'>
       
        <div className='absolute inset-0'>
          <img 
            className='h-full w-full object-cover brightness-[.3]' 
            src="/hero.webp" 
            alt="Hero" 
          />
        </div>

       
        <div className='absolute inset-0 bg-gradient-to-r from-transparent to-[#0c50fc82]'>
          <div className='flex flex-col items-center justify-center h-full text-white'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-center px-4'>
              Services
            </h1>
            <p className='font-bold flex items-center gap-2 text-lg'>
              Home <FaAngleRight className="text-sm" /> Services
            </p>
          </div>
        </div>

        <div className='absolute left-0 bottom-0 hidden lg:block'>
          <img 
            src="/left-bannerimg.2f0900ac.png" 
            alt="" 
            className="max-w-full"
          />
        </div>
        <div className='absolute right-0 top-0 h-full hidden lg:block'>
          <img 
            className='h-full' 
            src="/right-bannerimg.ffe2e1f3.png" 
            alt="" 
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
