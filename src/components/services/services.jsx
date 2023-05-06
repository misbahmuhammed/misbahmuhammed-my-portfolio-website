import React from 'react'
import './services.css'

import {AiOutlineCheck} from 'react-icons/ai'
function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>





        <article className="service">
          <div className="service_head">
            <h3>Video Editing</h3>
          </div>
          <ul className='service_list'>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service_head">
            <h3>Photo Editing</h3>
          </div>
          <ul className='service_list'>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
               <AiOutlineCheck className='service_list-icon'/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services