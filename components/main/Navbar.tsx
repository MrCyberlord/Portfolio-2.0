'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className='w-full h-[70px] fixed top-0 shadow-[#2A0E61]/50
     bg-[#03001417] backdrop-blur-md flex justify-between items-center z-50 
     
      sm:h-[70px] sm:px-20'>     

      <div>
        <h1 className='neon-text font-semibold text-lg px-5 sm:text-xl'>Made with Next.js</h1>
      </div>

      <div className='text-[45px] text-blue-700 cursor-pointer px-5 sm:hidden'>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} onClick={toggleMenu} />  
      </div>

      <div className=
      {`${isOpen ? 
      'flex flex-col items-center justify-center absolute top-[60px] left-0 right-0 w-full'
      :'hidden'} 
      sm:flex sm:flex-row sm:justify-end sm:bg-bg-[#03001417] sm:backdrop-blur-md sm:shadow-[#2A0E61]/50`}>
        <Link href='#hero'>
          <button className='navbarbutton' onClick={closeMenu}>Home</button>
        </Link>
        <Link href='#about'>
          <button className='navbarbutton' onClick={closeMenu}>About me</button>
        </Link>
        <Link href='#skills'>
          <button className='navbarbutton' onClick={closeMenu}>Skills</button>
        </Link>
        <Link href='#projects'>
          <button className='navbarbutton' onClick={closeMenu}>Projects</button>
        </Link>
        <Link href='#contact'>
          <button className='navbarbutton' onClick={closeMenu}>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
