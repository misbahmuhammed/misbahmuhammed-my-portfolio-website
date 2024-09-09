import React from 'react';
import './about.css';
import MEE from '../../assets/my2.jpeg';
import { FaAward } from 'react-icons/fa';
import { BiBold, BiFolderOpen } from 'react-icons/bi';

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={MEE} alt='Misbah' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years of Experience</small>
            </article>
            <article className='about_card'>
              <BiFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
            <article className='about_card'>
              <BiFolderOpen className='about_icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
          </div>
          <p>
            I'm currently working as <span style={{color:'red'}}><b>Full Stack Developer</b></span> at <span style={{color:'red'}}><a href='https://guidehouse.com/'>Guidehouse</a></span> with 1+ year of experience in building modern, high-performance applications. 
            I specialize in Python, C#, .NET, and web technologies, with a strong focus on scalability and performance.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
