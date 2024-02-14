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

    className='flex flex-col items-center'>
      <div className='relative h-[14rem] w-[24rem] overflow-hidden rounded-2xl border-l-4 border-b-4 border-blue-500
      sm:h-[16rem] sm:w-[28rem] '>
        <div >
        {/* <div className='relative h-[164px] sm:h-[212px]'> */}
        <Image 
            src={src}
            alt={title}
            layout='fill'
            className='object-fill'
        />
        </div>
      </div >
      <div className='p-[2px] px-2  w-[25rem] sm:p-1 sm:w-[28rem] sm:h-[6.5rem]'>
            <h1 className="text-[16px] text-center font-semibold text-blue-700 leading-[1]
            sm:text-xl sm:leading-tight">{title}</h1>
            <p className='text-[14px] text-blue-300 leading-none pb-1
            sm:text-[16px] sm:leading-[1]'>{description}</p>
            <p className='text-[14px] text-blue-500 leading-none
            sm:text-[16px] sm:leading-[1]'>{techStack}</p>
        </div>
      <div className='flex w-full justify-evenly p-1 sm:p-4'>
      <a href={appLink} target="_blank" rel="noopener noreferrer" className='projectbutton'>App Link</a>
      <a href={gitLink} target="_blank" rel="noopener noreferrer" className='projectbutton'>Git Link</a>
      </div>
    </motion.div>

  )
}

export default ProjectCard