'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight,} from '../utils/motions'
import SkewBackground from '../sub/SkewBackground'

const About = () => {

  return (
     
      <motion.div 
        initial='hidden'
        animate='visible'
    
        className='h-screen flex flex-col justify-center px-36'>

      <SkewBackground/>
        <motion.div 
          variants={slideInFromRight(1)}

          className='font-semibold text-[30px] text-gray-500 tracking-[3px]'>
            About Me
          </motion.div>
       
        <motion.div 
          variants={slideInFromLeft(1)}
        
          className='font-sans text-[25px] mt-8' 
        >
          <span>
            I love creating awesome user interfaces that are engaging and aesthetically pleasing. 
            I am enthusiastic about transforming ideas into 
            <span className='text-transparent bg-clip-text font-bold  bg-gradient-to-r from-purple-600 to to-blue-600'>
              {" "} 
              digital products
              </span>. 
            I have an Engineering degree in Electronics and Telecommunications Engineering. 
            I have over 2 years of experience in software development. 
            I believe in writing 
            <span className='text-transparent bg-clip-text font-bold font-mono  text-[#D98D00] ] '>
              {" "} 
              &lt;clean and efficient code/&gt;</span>.
             Apart from technology, I am into fitness and love watching sci-fi movies & series.
         </span>
        
        </motion.div>
       
    </motion.div>
    
  )
}

export default About
