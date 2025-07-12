import React from 'react'
import OrangeLine from '../components/OrangeLine'

const Courses = () => {
  return (
    <div className=''>
        <section className='relative flex flex-col gap-6 pt-[10rem] pb-[2rem] text-white padding'>
            <div className='flex'>
                <OrangeLine />
                 <p className='font-bold text-3xl'>Our Training Programs</p>
            </div>
           
            <p>
                At BTCC International Scaffolding & Safety Training Center  Itahari, we offer UK-certified training programs approved by Highfield International, designed to prepare individuals for careers in the global construction and scaffolding industry. Our hands-on courses are led by experienced industry professionals and focus on practical, real-world applications. 
            </p>

            <div className='overflow-hidden absolute top-0 -z-1 left-0  right-0 bg-black h-full'>
                    <img className='object-fill w-full -translate-y-10 opacity-50' src="/images/Home/img3.jpg" alt="heading-section" />
            </div>
            
        </section>


        <section>
            <div className='grid grid-cols-2 grid-rows-4'>
                <div className='bg-black'></div>
                 <div className="bg-orange-500 text-white flex flex-col justify-center items-start p-6">
            <h2 className="text-lg font-bold mb-2">UK Certified Training (Highfield International)</h2>
          </div>

                <div className='bg-black'></div>
                
          <div className="bg-blue-800 text-white flex justify-center items-center p-6 md:col-span-3">
            <p className="text-lg font-semibold">Get Trained by Industry Experts</p>
          </div>

            </div>
        </section>
    </div>
  )
}

export default Courses
