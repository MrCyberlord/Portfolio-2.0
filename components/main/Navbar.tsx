import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[70px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 flex justify-between items-center'>

      <div></div>
      <div>
        <Link href='#hero'>
          <button className='navbarbutton'>Home</button>
        </Link>
        <Link href='#about'>
        <button className='navbarbutton'>About me</button>
        </Link>
        <Link href='#skills'>
          <button className='navbarbutton'>Skills</button>
        </Link>
        <Link href='#projects'>
          <button className='navbarbutton'>Projects</button>
        </Link>
        <Link href='#contact'>
          <button className='navbarbutton'>Contact</button>
        </Link>
      
      </div>
    </div>  
  )
}

export default Navbar