import Button from "../components/Button"
import OrangeLine from "../components/OrangeLine";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {motion, type Variants} from 'framer-motion';

const responsive = {

  desktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1440, min: 1024 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 1023, min: 850 },
    items: 3
  },
  sm:{
    breakpoint: { max: 850, min: 650 },
    items: 2
  },
  xsm:{
  breakpoint: { max: 650, min: 0 },
    items: 1
  }
};

const styles = [
  {
    bgColor: 'bg-orange',
    buttonColor: 'bg-white',
    textColor: 'text-white',
    buttonTextColor: 'text-orange',
  },
  {
    bgColor: 'bg-white',
    buttonColor: 'bg-blue',
    textColor: 'text-blue',
    buttonTextColor: 'text-white',
  },
  {
    bgColor: 'bg-blue',
    buttonColor: 'bg-orange',
    textColor: 'text-white',
    buttonTextColor: 'text-white',
  },
];

const trainings = [
  {
    title: 'Cuplok & Scaffolding Training',
    description: 'Learn to erect, dismantle, and work safely with Cuplok systems used worldwide.'
  },
  {
    title: 'Practical Work at Height Training',
    description: 'Hands-on safety training for real-world height work and fall prevention.'
  },
  {
    title: 'Alloy Tower Training Program',
    description: 'Get hands-on training in the assembly, use, and safety practices.'
  },
   {
    title: 'Practical Work at Height Training',
    description: 'Hands-on safety training for real-world height work and fall prevention.'
  },
   {
    title: 'Practical Work at Height Training',
    description: 'Hands-on safety training for real-world height work and fall prevention.'
  },
   {
    title: 'Practical Work at Height Training',
    description: 'Hands-on safety training for real-world height work and fall prevention.'
  },
]

const ButtonGroup = ({ next, previous, goToSlide, ...rest }:any) => {
  const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;

    const atStart = currentSlide === 0;
  const atEnd = currentSlide + slidesToShow >= totalItems;
  return (
    <div className="absolute flex justify-between w-full  pr-[3rem] ">
      <button
     className={`slider-button custom-shadow ${
          atStart ? "opacity-0" : ""}`} 
     onClick={() => previous()}
  >
    <FaArrowLeft />
  </button>

     <button
     className={`slider-button custom-shadow ${
          atEnd ? "opacity-0" : ""}`} 
     onClick={() => next()}
  >
    <FaArrowRight />
  </button>

    </div>
  );
};

const fadeInUp:Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

const Training = () => {
  return (
    <div className="relative grid lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[1fr_1fr] gap-6 items-center justify-center text-white py-[7rem] h-full padding pr-0">

      <div className="flex">
        <motion.span custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}}>
          <OrangeLine />
        </motion.span>

        <div className="flex flex-col gap-10 items-start justify-center">
          <motion.p custom={1} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} className="text-large">Our Professional Training Programs</motion.p>
          <motion.p custom={2} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} >
            At BTCC International Scaffolding & Safety Training Center Itahari, we offer globally certified training programs designed to prepare individuals for real-world scaffolding and construction safety roles.
          </motion.p>

        <motion.div custom={3} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} >
        <Button content={'Explore'} />
        </motion.div>
         
        </div>
      </div>



      <Carousel containerClass="relative mt-[3rem] lg:mt-0 " 
       arrows={false} 
      autoPlay={ true }
  autoPlaySpeed={7000}
customButtonGroup={<ButtonGroup />}
      itemClass="px-2 grid justify-center" responsive={responsive}>
        {
          trainings.map((training, index) => {
            const style = styles[index % 3];

            return (
              <div key={index} className={`max-w-[19rem] shrink-0 h-full ${style.bgColor}`}>
                <div className="w-full h-[12rem] overflow-hidden">
                  <img className="translate-y-[-4rem]" src="/images/training1.jpg" alt="training" />
                </div>
                <div className={`flex flex-col items-start gap-4 px-[1.5rem] py-[2rem] ${style.textColor}`}>
                  <p className="font-bold">{training.title}</p>
                  <p className="text-sm">{training.description}</p>
                  <button className={`custom-shadow font-bold px-[2rem] py-[0.5rem] ${style.buttonColor} ${style.buttonTextColor}`}>
                    Learn More
                  </button>
                </div>
              </div>
            );
          })
        }
        </Carousel>



      <div className='overflow-clip absolute top-0 -z-1 left-0 w-full bg-black h-full'>
        <img className="absolute bg-image " src="/images/whatsapp/img1.jpg" alt="background-image" />
      </div>


    </div>
  )
}

export default Training