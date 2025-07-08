import OrangeLine from '../components/OrangeLine'

const About = () => {
  return (
    <div className='padding flex flex-col gap-[2rem] padding-y'>
        <div className='flex'>
            <span>
                  <OrangeLine />
              </span>
            <p className='text-lg font-bold'>ABOUT US</p>
             
        </div>

        <p className='text-large max-w-[36rem]'>
            CERTIFIED SERVICES AND TRAINING
        </p>

        <p className='max-w-[36rem]'>
            BTCC International Scaffolding Services Pvt. Ltd. is a Nepal-based company offering professional scaffolding solutions for construction, maintenance, and industrial projects.
        </p>

        <div className='mt-[2rem] text-blue grid grid-cols-4 gap-10 items-center justify-between'>
          <div className='text-lg text-center font-bold flex flex-col items-center gap-6'>
            <img className='w-[40%]'  src="/images/about-us/1.png"  alt="about-us"/>
            <span>
               <p>Scaffolding Planning </p>
              <p>and Services</p>
            </span>
          
          </div>

          <div className='text-lg text-center font-bold flex flex-col items-center gap-6'>
            <img className='w-[40%]'  src="/images/about-us/2.png"  alt="about-us"/>
          
            <span>
            <p>Certified Training </p>
            <p>Programs</p>
            </span>
          </div>

          <div className='text-lg text-center font-bold flex flex-col items-center gap-6'>
            <img className='w-[40%]'  src="/images/about-us/3.png"  alt="about-us"/>
           <span>
             <p>Experienced</p>
            <p>Instructors</p>
           </span>
          </div>

          <div className='text-lg text-center font-bold  flex flex-col items-center gap-6'>
            <img className='w-[40%]'  src="/images/about-us/4.png"  alt="about-us"/>
            <span>
              <p>Job Placement</p>
              <p>Support</p>
            </span>
          
          </div>

          
        </div>
       
    </div>
  )
}
//Certified Training Programs Experienced Instructors  Job Placement Support
export default About