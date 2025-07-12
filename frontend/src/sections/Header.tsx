import React, { useState } from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
    const [isVisible,setVisible] = useState(false)

       const { scrollY } = useScroll();
  const [showHeader, setShowHeader] = useState(true);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastY && latest > 100) {
      setShowHeader(false); 
      setVisible(false);
    } else if (latest < lastY) {
      setShowHeader(true); 
    }
    setLastY(latest);
  });

    const toggleMenu = ()=>{
        setVisible(!isVisible);
    }

    return (
        <motion.header
          initial={{ y: 0 }}
  animate={{ y: showHeader ? 0 : -140 }}
  transition={{
    duration: 0.2,
  }}
         className='fixed w-full z-50'>
            <div className='bg-dark-brown  sm:block padding '>
                <span className='flex flex-wrap h-full py-[0.8rem] text-white text-sm gap-4 sm:gap-6  items-center'>
                    <div className='flex gap-4 items-center'>
                        <FiMail className='text-orange text-xl' />
                        <span>

                            <p>info@btcciss.com</p>
                        </span>
                    </div>

                    <div className='flex  gap-1 sm:gap-4 items-center'>
                        <FiPhone className='text-orange text-xl' />
                        <span>

                            <p>+977 9818646567</p>
                        </span>

                    </div>

                    <div className='flex  gap-1 sm:gap-4 items-center'>
                        <MdOutlineLocationOn className='text-orange text-xl' />
                        <span>

                            <p>Itahari, Nepal</p>
                        </span>

                    </div>
                </span>
            </div>

            <div className='hidden sm:flex items-center gap-2 md:gap-4 lg:gap-10 padding-left justify-between'>
                <img className='h-[3rem] hidden md:block drop-shadow-sm drop-shadow-black' src="/images/Logo.png" alt="logo" />
                <div className='bg-blue flex items-center gap-2 font-bold text-white justify-evenly w-full h-[4rem]'>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/courses">COURSES</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/products">PRODUCTS</Link>
                    <Link to="/book-training">BOOK A TRAINING</Link>
                </div>
            </div>


            <button onClick={toggleMenu} className='ml-[1rem] text-white text-4xl sm:hidden custom-shadow  p-2 flex justify-center items-center bg-blue'>
                <GiHamburgerMenu />
            </button>

            
                <div className={`${isVisible?'flex':'hidden'} absolute sm:hidden flex top-[2rem] h-screen py-[1rem] bg-blue  flex-col gap-10 padding font-bold text-white w-full `}>
                    <button onClick={toggleMenu}><FaArrowLeft /></button>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/courses">COURSES</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/products">PRODUCTS</Link>
                    <Link to="/book-training">BOOK A TRAINING</Link>
                </div>
            



        </motion.header>
    )
}

export default Header