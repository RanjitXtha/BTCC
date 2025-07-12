import { motion, type Variants } from 'framer-motion';
import React from 'react';
import OrangeLine from '../components/OrangeLine';

const slideInLeft:Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const imageGridContainer:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const imageItem:Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Mission = () => {
  return (
    <div className='padding grid lg:grid-cols-[40%_1fr] items-center py-[2rem] gap-12'>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className='flex flex-col gap-10 h-full justify-center'
      >
        <h1 className='text-large'>WHY CHOOSE BTCC?</h1>
        <p className='font-semibold'>
          We provide high-quality scaffolding services in Nepal and abroad. With a strong emphasis on safety, compliance, and customer satisfaction, we’ve earned a reputation for excellence in scaffolding solutions.
        </p>

        <div className='flex items-center text-blue font-semibold'>
          <OrangeLine />
          <p className='text-nowrap mr-6 max-w-[17rem] text-blue text-lg font-bold'>OUR VISION</p>
          <p>To be a leading scaffolding services provider recognized for our integrity, safety practices, and global partnerships.</p>
        </div>

        <div className='flex items-center text-blue font-semibold'>
          <OrangeLine />
          <p className='text-nowrap mr-6 max-w-[17rem] text-blue text-lg font-bold'>OUR MISSION</p>
          <p>To be a leading scaffolding services provider recognized for our integrity, safety practices, and global partnerships.</p>
        </div>
      </motion.div>

      <motion.div
        variants={imageGridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className='lg:h-[45rem] w-full grid grid-cols-1 sm:grid-cols-2 gap-6 grid-rows-4 sm:grid-rows-[1fr_2fr_1fr] my-[3rem] mr-[3rem]'
      >
        {['img7', 'img5', 'img10', 'img9'].map((img, i) => (
          <motion.div
            key={i}
            variants={imageItem}
            className={`overflow-hidden ${i % 2 === 0 ? 'h-[25rem] sm:h-auto sm:row-span-2' : 'h-full min-h-[15rem] sm:h-[10rem]'}`}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='object-cover w-full h-full'
              src={`/images/Home/${img}.jpg`}
              alt={img}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Mission;
