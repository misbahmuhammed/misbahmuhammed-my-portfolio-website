import React from 'react'
import CV from '../../assets/Misbah_Resume.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' rel="noreferrer" target="_blank">Download CV</a>
        <a href="#contact" className='btn btn-primary' rel="noreferrer" target="_blank">Let's Talk!</a>
    </div>
  )
}

export default CTA