'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SkewBackground from '../sub/SkewBackground'

const directionLeft: boolean = true
const directionRight: boolean = true

const About = () => {

  return (
     
      <section 
        className='h-screen w-screen flex flex-col justify-center px-2 pt-14 overflow-hidden
        
        sm:px-36'>

      <SkewBackground/>
        <motion.div 
        
          initial={{
            x: directionRight ? 200 : -200,
            opacity: 0}}
            transition={{duration: 1}}
          whileInView={{opacity:1, x: 0}}
          
          className='font-semibold uppercase tracking-[15px] text-gray-500 text-2xl text-center
          
          sm:tracking-[21px] sm:text-[33px]'>
            About Me
          </motion.div>
       
        <motion.div 
           
           initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
            transition={{duration: 1}}
          whileInView={{opacity:1, x: 0}}
        
          className='font-sans text-[23px] pt-16 leading-6
          sm:text-[30px] sm:leading-10' 
        >
          <span>
            Hi! Aman here. I am a Software Engineer.
            I love creating user-friendly applications that are engaging and responsive. 
            I am enthusiastic about transforming ideas into 
          </span>
            <span className='text-transparent bg-clip-text font-bold  bg-gradient-to-r from-purple-600 to to-blue-600'>
              {" "} 
              digital products
              </span>. 
            I have an Engineering degree in Electronics and Telecommunications Engineering. 
            I have over 2 years of experience in software development. 
            I believe in writing 
            <span className='font-bold font-mono  text-orange-400 ] '>
              {" "} 
              &lt;clean and efficient code/&gt;</span>.
             Apart from technology, I am into fitness and love watching sci-fi movies & series.
         
        
        </motion.div>
       
    </section>
    
  )
}

export default About