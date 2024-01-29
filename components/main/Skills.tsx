'use client'

import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import { skillData } from '../constants'
import { motion } from 'framer-motion'

const directionTop: boolean = true

const Skills = () => {
  return (
    <section className='h-full w-screen pt-32 pb-56
    sm:pt-28'>
      <div>
        <motion.div 
        initial={{
          y: directionTop ? -100 : 100,
          opacity: 0}}
          transition={{duration: 1}}
        whileInView={{opacity:1, y: 0}}

        className='font-semibold uppercase tracking-[14px] text-gray-500 text-[26px] text-center
        
        sm:tracking-[21px] sm:text-[33px]'>
          Skills
        </motion.div>
      </div>
      <div className='flex flex-row justify-center items-center flex-wrap gap-x-10 gap-y-2 px-10 pt-14
      
      sm:px-64 sm:pt-10 sm:gap-x-9 sm:gap-y-5'
      >
        { skillData.map((skill, index) => (
          <SkillDataProvider 
          key={index}
          src={skill.Image}
          width={skill.width}
          height={skill.height}
          name={skill.skillName}
          index={index}
          />
        ))

        }
      </div>
    </section>
  )
}

export default Skills
