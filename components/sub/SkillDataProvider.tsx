'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  src: string,
  width: number,
  height: number,
  name: string,
  index: number,
}

const directionBottom: boolean = true

const SkillDataProvider = ({src, width, height, name, index} : Props) => {

  const animationDelay = 0.1

  return (
    <motion.div
    initial={{
      y: directionBottom ? 100 : -100,
      opacity: 0}}
      transition={{delay: index * animationDelay}}
    whileInView={{opacity:1, y: 0}}
    className='text-center'
    >
      <div className='h-[52px] w-[52px] sm:h-24 sm:w-24'>
      <Image src={src} 
      width={width} 
      height={height}
      alt='skillImage'/>
      </div>

      <div className='pt-1 text-gray-500 text-[10px] font-semibold
      sm:text-base'>{name}</div>
      
    </motion.div>
  )
}

export default SkillDataProvider
