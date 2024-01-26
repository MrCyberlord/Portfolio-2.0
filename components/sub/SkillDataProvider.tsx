'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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

      <Image src={src} 
      width={width} 
      height={height}
      alt='skillImage'/>
      <div className='pt-1 text-gray-500'>{name}</div>
      
    </motion.div>
  )
}

export default SkillDataProvider
