import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

function Headersocial() {
  return (
    <div className='header_social'>
      <a href="https://www.linkedin.com/in/misbahmuhammed" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
      <a href="https://github.com/misbahofficial" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
      <a href="https://instagram.com/misbah.muhammed" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
    </div>
  );
}

export default Headersocial;
