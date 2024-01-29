'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faSquareXTwitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { Cursor } from 'react-simple-typewriter';

import { motion } from 'framer-motion'

const Contact = () => {
  const email = "amanjain2691@gmail.com";
  const phoneNumber = "+91 8087491938";

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    transition={{duration: 7 }}
    whileInView={{ opacity: 1 }}

    className='h-full w-screen'>
        <div className=' py-2 '>
            <h3 className='uppercase tracking-[14px] text-gray-500 text-2xl font-semibold pb-10 text-center
            
            sm:tracking-[21px] sm:text-4xl' >
            Contact
            </h3>

            <h3 className=' text-orange-500 text-[23px] px-5 pb-12
            sm:text-[38px] sm:px-44 sm:pb-10'>
            If you&apos;re looking for someone passionate about turning ideas into reality with clean &amp; efficient code, 
            Let&apos;s connect:<Cursor cursorColor='orange-500' />
            </h3>
            
        </div>

        <div className='flex flex-wrap justify-evenly pb-32
        sm:pb-20' >    

          <a href={`mailto:${email}`}
          className='text-blue-700 '
          >
            <FontAwesomeIcon className='h-20 w-20 hover:text-blue-500
            sm:h-36 sm:w-36' icon={faSquareEnvelope} />
          </a>
          
          <a
            href="https://twitter.com/MrCyberlord"
            target="_blank"
            rel="noopener noreferrer"
            className='text-blue-700 '
          >
            <FontAwesomeIcon className='h-20 w-20 hover:text-blue-500
            sm:h-36 sm:w-36' icon={faSquareXTwitter} />
          </a>

          <a
            href="https://www.linkedin.com/in/theamanjain/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-blue-700'
          >
            <FontAwesomeIcon className='h-20 w-20 hover:text-blue-500
            sm:h-36 sm:w-36' icon={faLinkedin} />
          </a>

          <a href={`tel:${phoneNumber}`}
          className='text-blue-700'
          >
            <FontAwesomeIcon className='h-20 w-20 hover:text-blue-500
            sm:h-36 sm:w-36' icon={faSquarePhone} />
          </a>
        
        </div>
      

      <div className='w-screen h-[55px] mb-0 bg-[#e2e9e417] px-10 flex justify-around items-center'>
        <div>Copyright © 2024 Aman</div>
      </div>
      
    </motion.div>
  )
}

export default Contact