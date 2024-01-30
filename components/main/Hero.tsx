'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../sub/BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Aman Jain.",
            "< A guy who loves to code />",
            "Driven by creativity and curiosity.",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center
                    sm:space-y-14'>
        <BackgroundCircles />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>Software Engineer</h2>
            <h1 className='text-2xl sm:text-5xl'>
                <span className=''>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <h2 className='text-sm uppercase text-gray-500 pt-3 tracking-[12px]'>Digital Craftsman</h2>
        </div>
    </div>
  )
}