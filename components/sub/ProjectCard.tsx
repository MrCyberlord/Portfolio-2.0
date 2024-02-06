'use client'

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'

const directionRight: boolean = true

interface Props {
    src: string;
    title: string;
    description: string;
    techStack: string;
    appLink: string;
    gitLink: string;
  }
const ProjectCard = ({ src, title, description, techStack, appLink, gitLink }: Props) => {
  return (
    <motion.div 
    initial={{
      x: directionRight ? 200 : -200,
      opacity: 0}}
      transition={{duration: 1}}
    whileInView={{opacity:1, x: 0}}

    className='flex flex-col'>
      <div className='relative h-[16rem] w-[24rem] overflow-hidden rounded-2xl border-l-4 border-b-4 border-blue-500
      sm:h-[20rem] sm:w-[28rem] '>
        <div className='relative h-[164px] sm:h-[212px]'>
        <Image 
            src={src}
            alt={title}
            layout='fill'
            className='object-fill'
        />
        </div>

        <div className='p-[2px] px-2 sm:p-1'>
            <h1 className="text-[16px] text-center font-semibold text-blue-700 leading-[1]
            sm:text-xl sm:leading-tight">{title}</h1>
            <p className='text-[13px] text-gray-300 leading-none pb-1
            sm:text-sm sm:leading-[1]'>{description}</p>
            <p className='text-[13px] text-purple-500 leading-none
            sm:text-sm sm:leading-[1]'>{techStack}</p>
        </div>
      </div >
      <div className='flex justify-evenly p-5'>
      <a href={appLink} target="_blank" rel="noopener noreferrer" className='projectbutton'>App Link</a>
      <a href={gitLink} target="_blank" rel="noopener noreferrer" className='projectbutton'>Git Link</a>
      </div>
    </motion.div>

  )
}

export default ProjectCard