import React from 'react'
import Image from 'next/image';

interface Props {
    src: string;
    title: string;
    description: string;
    techStack: string;
  }
const ProjectCard = ({src, title, description, techStack }: Props) => {
  return (
    <div className='relative h-96 w-96 overflow-hidden rounded-2xl shadow-lg border-4 border-orange-500'>
        <div className='relative h-52'>
        <Image 
            src={src}
            alt={title}
            layout='fill'
            className='object-fill'
        />
        </div>

        <div className='p-2'>
            <h1 className="text-xl text-center font-semibold text-white">{title}</h1>
            <p className='text-sm text-gray-300'>{description}</p>
            <p className='text-sm text-blue-500'>{techStack}</p>
        </div>
    </div>
    

  )
}

export default ProjectCard