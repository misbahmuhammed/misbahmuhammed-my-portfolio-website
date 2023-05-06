import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
function Headersocial() {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" ><AiFillLinkedin/></a>
        <a href="https://github.com" ><AiFillGithub/></a>
        <a href="https://instagram.com" ><BsInstagram/></a>

    </div>
  )
}

export default Headersocial