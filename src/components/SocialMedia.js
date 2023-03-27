import React from 'react';
import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/mauricio-bo/' target="_blank" rel='noopener noreferrer'>
              <BsLinkedin/></a>
        </div>
        <div>
          <a href='https://github.com/Mauricio-1979' target="_blank" rel='noopener noreferrer'>
            <BsGithub/></a>
        </div>
        <div>
          <a href='mailto:mauricio_bo@hotmail.com'>
            <BsMailbox/>
            </a>
        </div>

    </div>
  )
}

export default SocialMedia