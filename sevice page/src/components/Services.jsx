import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='text-center py-16 md:py-30'>
        <p className='font-medium text-lg md:text-xl text-blue-500'>OUR SERVICES</p>
        <p className='text-2xl md:text-3xl font-bold mt-2 px-4'>We Provide The Best Quality</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-auto md:w-[80vw] mt-12 mb-16'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className='shadow-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='p-5'>
              <img className='w-16 md:w-auto' src="/app_dev.a047b1e1.svg" alt="" />
              <p className='text-xl md:text-2xl pt-8 md:pt-12 pb-4 font-bold'>Custom App Development</p>
              <p className='text-sm md:text-base'>
                Creating software applications for mobile devices focusing on user experience, and performance.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
