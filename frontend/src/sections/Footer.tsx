import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine } from "react-icons/ri";

import { PiTwitterLogoBold } from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";

import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div className='grid grid-cols-[1.5fr_1fr_2.5fr] w-full padding justify-between gap-10 bg-[#022E55] text-white py-[5rem]'>
        <div>
            <span className='flex items-center font-bold text-lg gap-4'>
                <img className='w-24' src="/images/Logo.png" alt="logo" />
                <p>BTCC Pvt. Ltd.</p>
            </span>

            <p className='py-[2rem] text-sm'>
                Specializing in domestic and international scaffolding services with uncompromising quality and safety.
            </p>

            <span className='w-full flex gap-6 items-center text-orange'>
                <RiFacebookCircleLine className='text-3xl' />
                <PiTwitterLogoBold className='text-3xl' />
                <GrInstagram className='text-2xl'  />
            </span>
        </div>


        <div className='flex flex-col justify-between text-sm font-semibold w-full '>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/courses">COURSES</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/book-training">BOOK A TRAINING</Link>
        </div>

        <div className='flex flex-col '>
            <span className='flex gap-6 mb-6'>
                <div className='flex gap-4 items-center'>
                    <FiMail className='text-orange text-3xl' />
                    <span>
                        <p className='font-semibold'>Mail Us</p>
                        <p>info@btcciss.com</p>
                    </span>
                </div>

                <div className='flex gap-4 items-center'>
                    <FiPhone className='text-orange text-3xl' />
                    <span>
                        <p className='font-semibold'>Call Us</p>
                        <p>+977 9818646567</p>
                    </span>
                    
                </div>

                <div className='flex gap-4 items-center'>
                    <MdOutlineLocationOn className='text-orange text-3xl' />
                    <span>
                        <p className='font-semibold'>Location</p>
                        <p>Itahari, Nepal</p>
                    </span>
                 
                </div>
            </span>

            <span className='flex gap-4 justi  w-full'>
                <input type="text" placeholder='Your Name' className='bg-[#124F83] px-2 py-1 w-full ' />
                <input type="text" placeholder='Your Email' className='bg-[#124F83] px-2 py-1 w-full '  />
            </span>

            <textarea rows={5} placeholder='Your Message' className='bg-[#124F83] w-full my-6 px-2 py-1' />
            <Button content={'EXPLORE'} />


        </div>

    </div>
  )
}

export default Footer