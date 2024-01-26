import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='h-full flex flex-col pt-36 pb-60'>
      <div>
        <h1 className='font-semibold uppercase tracking-[21px] text-gray-300 text-[32px] text-center'>
          Projects
        </h1>
      </div>
      <div className='flex flex-row flex-wrap justify-evenly gap-y-20 pt-16'>
        <ProjectCard 
          src="/ZEcommerceWebsite.png"
          title="E-Commerce Website"
          description="Used Firebase for Authentication and database functionality. The site can be surfed without authentication, but the user must be authenticated to place an order."
          techStack='Tech Stack: JavaScript, React, Redux Toolkit, Redux Thunk, Firebase, HTML, CSS'
        />
        <ProjectCard 
          src="/ZExpenseTracker.png"
          title="Expense Tracker App"
          description="Used Firebase for Authentication and database functionality. There's night mode and Expenses - csv file download option for premium users."
          techStack="Tech Stack: JavaScript, React, Redux Toolkit, Firebase, HTML, CSS"
        />
        <ProjectCard 
          src="/ZFoodOrderingApp.png"
          title="Food Delivery Website"
          description='This App displays the application of Context API. Data is passed through the component tree without passing props down manually at every level.'
          techStack='Tech Stack: JavaScript, React, Context API, HTML, CSS'
        />
      </div>
    </div>
  )
}

export default Projects
