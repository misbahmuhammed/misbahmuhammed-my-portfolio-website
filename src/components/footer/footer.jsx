import React from 'react'
import './footer.css'
import { ImLinkedin } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
function footer() {
  return (
  <footer>
    <a href="#" className='footer_logo'>Misbah A</a>
    <ul className='links'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>


    </ul>
    <div className='footer_social'>
      <a href="https://www.instagram.com/mxsbah_mhd_/"><BsInstagram/></a> 
      <a href="https://www.linkedin.com/in/misbahmuhammed/"><ImLinkedin/></a> 
      <a href="https://www.facebook.com/misbahmuhammed.misbahmuhammed.7"><BsFacebook/></a> 

    </div>
    <div className="footer_copyright">
      <small>&copy; Misbah A. All Rights reserved.</small>
    </div>
  </footer>
  )
}

export default footer