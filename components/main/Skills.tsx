import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import { skillData } from '../constants'

const Skills = () => {
  return (
    <section className='h-screen pt-32'>
      <div>
        <h1 className='font-semibold uppercase tracking-[21px] text-gray-300 text-[30px] text-center'>
          Skills
        </h1>
      </div>
      <div className='flex flex-row justify-center items-center flex-wrap gap-7 px-80 pt-14'>
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
