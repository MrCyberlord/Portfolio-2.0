'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SkewBackground from '../sub/SkewBackground'

const directionLeft: boolean = true
const directionRight: boolean = true

const About = () => {

  return (
     
      <section 
        className='h-screen w-screen flex flex-col justify-center px-36 pt-10 overflow-hidden'>

      <SkewBackground/>
        <motion.div 
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
            transition={{duration: 1}}
          whileInView={{opacity:1, x: 0}}
          
          className='font-semibold uppercase tracking-[21px] text-gray-500 text-[32px] text-center'>
            About Me
          </motion.div>
       
        <motion.div 
           initial={{
            x: directionRight ? 200 : -200,
            opacity: 0}}
            transition={{duration: 1}}
          whileInView={{opacity:1, x: 0}}
        
          className='font-sans text-[30px] pt-10 ' 
        >
          <span>
            I love creating awesome user interfaces that are engaging and aesthetically pleasing. 
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