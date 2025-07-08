import { Link } from 'react-router-dom'
import OrangeLine from '../components/OrangeLine'
import Button from '../components/Button'
import Header from './Header'

const Hero = () => {
  return (
    <div className='relative h-screen max-h-[1080px]'>
       <Header />

        <section className='padding pt-[5.5rem] text-white h-full w-2/3 flex flex-col items-start gap-10 justify-center'>
           <div className='font-bold text-6xl'>
                <p className='text-white'>Professional international</p>
                <p className='text-orange'>scaffolding services</p>
           </div>
          
            <div className='flex'>
                <OrangeLine />
                <p className='text-sm'>Specializing in domestic and international scaffolding services, with a strong focus on safety, reliability, and adherence to global industry standards.</p>
               
            </div>

              <Button content={'Explore'} />
  

        </section>

        

        
        <div className='overflow-clip absolute top-0 -z-1 left-0 w-full bg-black h-screen'>
            <img src='/images/Hero.jpg' alt="hero-image" className='bg-image' />
            
        </div>


        <div className='bg-orange text-white px-[2rem] py-[1rem] absolute right-0 -bottom-[3rem] mr-[3rem]'>
            <p className='font-bold text-5xl'>15+</p>
            <p className='font-light text-xl mt-4'>Years of Experience</p>
        </div>
       
    </div>
  )
}

export default Hero
