import { motion } from "framer-motion";
import OrangeLine from '../components/OrangeLine';
import Button from '../components/Button';
import Header from './Header';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


const Hero = () => {
  return (
    <div className='relative sm:h-screen max-h-[1080px]'>
      <section className='padding py-[8rem] sm:py-0 text-center sm:text-start sm:pt-[5.5rem] text-white h-full sm:w-2/3 w-full flex flex-col items-center sm:items-start gap-10 justify-center'>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='font-bold text-5xl sm:text-6xl'
        >
          <p className='text-white'>Professional international</p>
          <p className='text-orange'>scaffolding services</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className='flex'
        >
          <OrangeLine />
          <p className='text-sm ml-4'>
            Specializing in domestic and international scaffolding services, with a strong focus on safety, reliability, and adherence to global industry standards.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Button content={'Explore'} />
        </motion.div>
      </section>

      <motion.div
        className='overflow-clip absolute top-0 -z-1 left-0 w-full bg-black h-full'
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src='/images/Hero.jpg' alt="hero-image" className='bg-image' />
      </motion.div>

      <motion.div
        className='bg-orange text-white px-[2rem] py-[1rem] absolute 
        left-1/2 -translate-x-1/2 
        sm:left-auto
        sm:-translate-x-0
        sm:right-0 -bottom-[2rem] sm:-bottom-[3rem] mr-[1rem] sm:mr-[2rem] lg:mr-[3rem] xl:mr-[4rem] 2xl:mr-[5rem]'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <p className='font-bold text-5xl'>15+</p>
        <p className='text-nowrap font-light text-xl mt-4'>Years of Experience</p>
      </motion.div>
    </div>
  );
};

export default Hero;
