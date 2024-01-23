import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faSquareXTwitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { Cursor } from 'react-simple-typewriter';


const Contact = () => {
  const email = "amanjain2691@gmail.com";
  const phoneNumber = "+91 8087491938";

  return (
    <div className='h-screen'>
        <div className='pt-28 pb-20 text-center'>
            <h3 className='top-24 uppercase tracking-[21px] text-gray-300 text-[30px] pb-10 ' >
            Contact
            </h3>

            <h3 className=' text-orange-500 text-[40px] ml-28'>
            Let's get in touch! I, I'm just a click away...<Cursor cursorColor='orange-500' />
            </h3>
            
        </div>

        <div className='flex flex-wrap justify-evenly mx-48' >    
        {/* justify-between  */}

        <a href={`mailto:${email}`}
        className='text-blue-700 '
        >
          <FontAwesomeIcon className='h-44 w-44' icon={faSquareEnvelope} />
        </a>
        
        <a
          href="https://twitter.com/MrCyberlord"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-700 '
        >
          <FontAwesomeIcon className='h-44 w-44' icon={faSquareXTwitter} />
        </a>

        <a
          href="https://www.linkedin.com/in/theamanjain/"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-700'
        >
          <FontAwesomeIcon className='h-44 w-44' icon={faLinkedin} />
        </a>

        <a href={`tel:${phoneNumber}`}
        className='text-blue-700'
        >
          <FontAwesomeIcon className='h-44 w-44' icon={faSquarePhone} />
        </a>
        
        </div>
      
      
    </div>
  )
}

export default Contact
