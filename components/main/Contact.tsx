import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faSquareXTwitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { Cursor } from 'react-simple-typewriter';


const Contact = () => {
  const email = "amanjain2691@gmail.com";
  const phoneNumber = "+91 8087491938";

  return (
    <div className='h-full w-screen'>
        <div className=' py-8 text-center'>
            <h3 className='uppercase tracking-[21px] text-gray-300 text-[32px] pt-10 pb-12' >
            Contact
            </h3>

            <h3 className=' text-orange-500 text-[38px] px-28 pb-10'>
            If you're in search of a problem solver who's eager to embrace new technologies and create innovative products, 
            I'm just a click away.<Cursor cursorColor='orange-500' />
            </h3>
            
        </div>

        <div className='flex flex-wrap justify-evenly pb-16' >    

          <a href={`mailto:${email}`}
          className='text-blue-700 '
          >
            <FontAwesomeIcon className='h-40 w-40 hover:text-sky-100' icon={faSquareEnvelope} />
          </a>
          
          <a
            href="https://twitter.com/MrCyberlord"
            target="_blank"
            rel="noopener noreferrer"
            className='text-blue-700 '
          >
            <FontAwesomeIcon className='h-40 w-40' icon={faSquareXTwitter} />
          </a>

          <a
            href="https://www.linkedin.com/in/theamanjain/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-blue-700'
          >
            <FontAwesomeIcon className='h-40 w-40' icon={faLinkedin} />
          </a>

          <a href={`tel:${phoneNumber}`}
          className='text-blue-700'
          >
            <FontAwesomeIcon className='h-40 w-40' icon={faSquarePhone} />
          </a>
        
        </div>
      

      <div className='w-screen h-[55px] mb-0 bg-[#e2e9e417] px-10 flex justify-around items-center'>
        <div>Made with Next.js</div>
        <div>Copyright © 2024 Aman</div>
      </div>
      
    </div>
  )
}

export default Contact

// bg-[#dfdde917] 