import React from 'react'
import './footer.css'
import { ImLinkedin } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
function footer() {
  return (
  <footer>
    <a href="#home" className='footer_logo'>Misbah A</a>
    <ul className='links'>
      <li><a href="#home" rel="noreferrer" target="_blank">Home</a></li>
      <li><a href="#about" rel="noreferrer" target="_blank">About</a></li>
      <li><a href="#experience" rel="noreferrer" target="_blank">Experience</a></li>
      <li><a href="#services" rel="noreferrer" target="_blank">Services</a></li>
      <li><a href="#portfolio" rel="noreferrer" target="_blank">Portfolio</a></li>
      <li><a href="#contact" rel="noreferrer" target="_blank">Contact</a></li>


    </ul>
    <div className='footer_social'>
      <a href="https://www.instagram.com/mxsbah_mhd_/" rel="noreferrer" target="_blank"><BsInstagram/></a> 
      <a href="https://www.linkedin.com/in/misbahmuhammed/" rel="noreferrer" target="_blank"><ImLinkedin/></a> 
      <a href="https://www.facebook.com/misbahmuhammed.misbahmuhammed.7" rel="noreferrer" target="_blank"><BsFacebook/></a> 

    </div>
    <div className="footer_copyright">
      <small>&copy; Misbah A. All Rights reserved.</small>
    </div>
  </footer>
  )
}

export default footer