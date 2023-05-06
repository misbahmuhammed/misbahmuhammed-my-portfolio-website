import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

import Headersocial from './Headersocial'

const header = () => {
  return (
    <header>

      <div className='container header_container'>
      <h5>Hello     <span style={{color:'red'}}>I'm</span> </h5>
<h1>
  <span style={{color: 'white'}}>M</span>
  <span style={{color: 'white'}}>i</span>
  <span style={{color: 'white'}}>s</span>
  <span style={{color: 'white'}}>b</span>
  <span style={{color: 'white'}}>a</span>
  <span style={{color: 'white'}}>h </span>
  <span style={{color: 'w'}}>A</span>
</h1>

        <h5 className='text-light'>Python Full Stack Developer</h5>
        <CTA /> 
        <Headersocial/>
        

        <div className='me'>

            <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      </header>
  )
}

export default header