import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    
    <motion.div 
        initial={{opacity:0,}}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [1, 0.9, 0.9, 0.8, 0.9, 1.0],
            borderRadius: ['20%', '20%', '50%', '80', '20'],
        }}
        transition={{duration: 2.5,
                    repeat: Infinity,       
                    repeatType: "mirror",
                    repeatDelay: 3
        }}
    
        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[50px] w-[50px] mt-28 animate-ping
        sm:h-[200px] sm:w-[200px] sm:mt-52'/>
        <div className='rounded-full border border-[#333333] h-[100px] w-[100px] absolute mt-28 
        sm:h-[300px] sm:w-[300px] sm:mt-52'/>
        <div className='rounded-full border border-[#333333] h-[175px] w-[175px] absolute mt-28
        sm:h-[450px] sm:w-[450px] sm:mt-52'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[250px] w-[250px] absolute mt-28 animate-pulse
        sm:h-[600px] sm:w-[600px] sm:mt-52'/>
        <div className='rounded-full border border-[#333333] h-[325px] w-[325px] absolute mt-28
        sm:h-[750px] sm:w-[750px] sm:mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles