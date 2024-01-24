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

const SkillDataProvider = ({src, width, height, name, index} : Props) => {
  const {ref, inView} = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }

  const animationDelay = 0.1

  return (
    <motion.div
    ref={ref}
    initial='hidden'
    variants={imageVariants}
    animate={inView ? 'visible' : 'hidden'}
    custom={index}
    transition={{delay: index * animationDelay}}
    className='text-center'
    >

      <Image src={src} 
      width={width} 
      height={height}
      alt='skillImage'/>
      <div className='mt-2 text-gray-500'>{name}</div>
      
    </motion.div>
  )
}

export default SkillDataProvider
