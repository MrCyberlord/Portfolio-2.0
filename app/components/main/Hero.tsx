'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../sub/BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi I am Aman Jain",
            "<An Engineer who loves to code. />",
            "Driven by creativity and curiosity.",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <div className='z-20'>
            <h2>Software Engineer</h2>
            <h1 className='text-5xl '>
                <span className=''>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <h2>Digital Craftsman</h2>
        </div>
    </div>
  )
}