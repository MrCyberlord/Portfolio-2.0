'use client'

import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const directionLeft: boolean = true

const Projects = () => {
  return (
    <div className='h-full flex flex-col pt-24 pb-60 overflow-hidden
    sm:pt-[145px]'>
      <motion.div 
       initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
        transition={{duration: 1}}
      whileInView={{opacity:1, x: 0}}>
        <h1 className='font-semibold uppercase tracking-[15px] text-gray-500 text-[26px] text-center pt-10 pb-10
        sm:text-[32px] sm:tracking-[20px] sm:pt-0 sm:pb-0 '>
          Projects
        </h1>
      </motion.div>

      <motion.div 
      className='flex flex-row flex-wrap justify-evenly gap-y-20 pt-14
      sm:pt-[65px]'>
        <ProjectCard 
          src="/ZEcommerceWebsite.png"
          title="E-Commerce Website"
          description="An streamlined e-commerce platform, where you can Quickly add items to your cart, sign up for secure purchasing, 
          and enjoy a seamless checkout experience."
          techStack='Tech Stack: JavaScript, React, Redux Toolkit, Redux Thunk, Firebase, HTML, CSS'
          appLink='https://ecommerce-website2.vercel.app/'
          gitLink='https://github.com/MrCyberlord/EcommerceWebsite2'
        />
        <ProjectCard 
          src="/ZExpenseTracker.png"
          title="Expense Tracker App"
          description="Used Firebase for Authentication and database functionality. There's night mode and Expenses - csv file download option for premium users."
          techStack="Tech Stack: JavaScript, React, Redux Toolkit, Firebase, HTML, CSS"
          appLink='https://stirring-axolotl-b60d7c.netlify.app/'
          gitLink='https://github.com/MrCyberlord/ExpenseTracker'
        />
        <ProjectCard 
          src="/ZFoodOrderingApp.png"
          title="Food Delivery Website"
          description='This App displays the application of Context API. Data is passed through the component tree without passing props down manually at every level.'
          techStack='Tech Stack: JavaScript, React, Context API, HTML, CSS'
          appLink='https://restaurantapp11.netlify.app'
          gitLink='https://github.com/MrCyberlord/FoodOrderingApp'
        />
      </motion.div>
    </div>
  )
}

export default Projects
