import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
      <div>
        <div className='relative bg-blue-500 max-w-[1300px] h mx-auto flex items-center justify-between p-10 py-10 mt-34'>
          <div></div>
            <div className='absolute bottom-0'>
              <img className='h-[240px]' src="/public/footerManWithLaptop.fa4afb88.png" alt="" />

            </div>
            <p className='text-2xl font-bold'>Stay Connected With <br /> Cutting Edge IT</p>
            <button className='flex items-center gap-1 bg-white px-3 py-3 cursor-pointer hover:bg-gray-300'>Get A Quote <FaArrowRightLong/></button>
        </div>
      </div>

      <div className='grid grid-cols-4 bg-gray-500'>
        <div>
            <img src="/primexopLogoWhite.cf13571e.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
