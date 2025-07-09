import OrangeLine from '../components/OrangeLine'

const services = [
  {
    title: ['Scaffolding Planning', 'and Services'],
    image: '/images/about-us/1.png',
  },
  {
    title: ['Certified Training', 'Programs'],
    image: '/images/about-us/2.png',
  },
  {
    title: ['Experienced', 'Instructors'],
    image: '/images/about-us/3.png',
  },
  {
    title: ['Job Placement', 'Support'],
    image: '/images/about-us/4.png',
  },
]

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

      <div className='mt-[2rem] text-blue flex flex-wrap gap-10 items-center justify-evenly mid:justify-between'>
        {services.map((service, index) => (
          <div
            key={index}
            className='text-lg text-center font-bold flex flex-col items-center gap-6'
          >
            <img className='w-[40%]' src={service.image} alt="about-us" />
            <span>
              {service.title.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
