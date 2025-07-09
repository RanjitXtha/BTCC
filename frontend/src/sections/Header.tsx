import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <header className='fixed w-full z-50'>
            <div className='bg-dark-brown padding h-[2.5rem]'>
                <span className='flex h-full text-white text-sm gap-6 mb-6 items-center'>
                                <div className='flex gap-4 items-center'>
                                    <FiMail className='text-orange text-xl' />
                                    <span>
                        
                                        <p>info@btcciss.com</p>
                                    </span>
                                </div>
                
                                <div className='flex gap-4 items-center'>
                                    <FiPhone className='text-orange text-xl' />
                                    <span>
        
                                        <p>+977 9818646567</p>
                                    </span>
                                    
                                </div>
                
                                <div className='flex gap-4 items-center'>
                                    <MdOutlineLocationOn className='text-orange text-xl' />
                                    <span>
                       
                                        <p>Itahari, Nepal</p>
                                    </span>
                                 
                                </div>
                            </span>
            </div>
            <div className='flex items-center gap-2 md:gap-4 lg:gap-10 padding-left justify-between'>
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
           
        </header>
  )
}

export default Header