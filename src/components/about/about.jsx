import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { BiFolderOpen } from 'react-icons/bi'

function about() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article>
              <div className='about_card'>
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </div>
            </article>
            <article>
              <div className='about_card'>
                <BiFolderOpen className='about_icon' />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </div>
            </article>
            <article>
              <div className='about_card'>
                <BiFolderOpen className='about_icon' />
                <h5>Clients</h5>
                <small>10+ World wide</small>
              </div>
            </article>
          </div>
          <p>
          I'm currently pursuing my final year of B.Tech in Computer Science and Engineering from MEA Engineering College, Malappuram. I have a specialization in Python and web technologies,and have completed several projects on this area.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default about
