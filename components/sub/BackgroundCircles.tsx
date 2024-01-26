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
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 
        animate-ping'/>
        <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52'/>
        <div className='rounded-full border border-[#333333] h-[450px] w-[450px] absolute mt-52'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[600px] w-[600px] absolute mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#333333] h-[750px] w-[750px] absolute mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles