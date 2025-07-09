import React from 'react'
import OrangeLine from '../components/OrangeLine'

const Mission = () => {
  return (
    <div className='padding grid  lg:grid-cols-[40%_1fr] items-center py-[2rem] gap-12 '>
        <div className='flex flex-col gap-10 h-full justify-center'>
            <h1 className='text-large'>WHY CHOOSE BTCC?</h1>
            <p className='font-semibold'>
                We provide high-quality scaffolding services in Nepal and abroad. With a strong emphasis on safety, compliance, and customer satisfaction, we’ve earned a reputation for excellence in scaffolding solutions
            </p>

            <div className='flex items-center text-blue font-semibold'>
                <OrangeLine />
                <p className='mr-6 w-[17rem] text-blue text-lg font-bold'>OUR VISION</p>
                <p>To be a leading scaffolding services provider recognized for our integrity, safety practices, and global partnerships </p>
            </div>

            <div className='flex items-center text-blue font-semibold'>
                <OrangeLine />
                <p className='mr-6 w-[17rem] text-blue text-lg font-bold'>OUR MISSION</p>
                <p>To be a leading scaffolding services provider recognized for our integrity, safety practices, and global partnerships </p>
            </div>

            
        </div>

        <div className='lg:h-[35rem] w-full grid grid-cols-1 sm:grid-cols-2 gap-6 grid-rows-4  sm:grid-rows-[1fr_2fr_1fr] my-[3rem] mr-[3rem]'>
            <div className='bg-blue-300 h-[15rem] sm:h-auto  sm:row-span-2'></div>
            <div className='bg-blue-300  h-[15rem]sm:h-auto '></div>
            <div className='bg-blue-300  h-[15rem] sm:h-auto sm:row-span-2'></div>
            <div className='bg-blue-300  h-[15rem] sm:h-[10rem]'></div>
        </div>
      
    </div>
  )
}

export default Mission