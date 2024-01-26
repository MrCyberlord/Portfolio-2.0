'use client'

import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import { skillData } from '../constants'
import { motion } from 'framer-motion'

const directionTop: boolean = true

const Skills = () => {
  return (
    <section className='h-full w-screen pt-32 pb-56'>
      <div>
        <motion.div 
        initial={{
          y: directionTop ? -100 : 100,
          opacity: 0}}
          transition={{duration: 1}}
        whileInView={{opacity:1, y: 0}}

        className='font-semibold uppercase tracking-[21px] text-gray-500 text-[33px] text-center'>
          Skills
        </motion.div>
      </div>
      <div className='flex flex-row justify-center items-center flex-wrap gap-x-9 gap-y-5 px-72 pt-14'>
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
