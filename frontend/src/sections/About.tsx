import { motion } from 'framer-motion';
import OrangeLine from '../components/OrangeLine';
import type { Variants } from "framer-motion";

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
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

const About = () => {
  return (
    <div className='padding flex flex-col gap-[2rem] padding-y'>
      <motion.div
        className='flex '
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <span>
          <OrangeLine />
        </span>
        <p className='text-lg font-bold'>ABOUT US</p>
      </motion.div>

      <motion.p
        className='text-large max-w-[36rem]'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      >
        CERTIFIED SERVICES AND TRAINING
      </motion.p>

      <motion.p
        className='max-w-[36rem]'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
      >
        BTCC International Scaffolding Services Pvt. Ltd. is a Nepal-based company offering professional scaffolding solutions for construction, maintenance, and industrial projects.
      </motion.p>

      <motion.div
        className='mt-[2rem] text-blue flex flex-wrap gap-10 items-center justify-evenly mid:justify-between'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4
            }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            className='text-lg text-center font-bold flex flex-col items-center gap-6'
          >
            <img className='w-[50%] lg:w-[60%]' src={service.image} alt="about-us" />
            <span>
              {service.title.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
