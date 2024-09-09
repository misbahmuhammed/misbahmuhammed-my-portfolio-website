import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG9 from '../../assets/home.png'
import IMG10 from '../../assets/todo.jpg'
import IMG11 from '../../assets/portfolio.jpg'
function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG9} alt="" />
          </div>
            <h3>Campus-E-Store-Ecommerce-Website-Django</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/misbahmuhammed/Campus-E-Store-Ecommerce-Website-Django" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/misbahmuhammed/Campus-E-Store-Ecommerce-Website-Django" className='btn btn-primary'target='_blank' >Live Demo</a>
            </div>
            
          
        </article>
      <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG10} alt="" />
          </div>
            <h3>ToDo List-Django</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/misbahmuhammed/TODO_LIST" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/misbahmuhammed/TODO_LIST" className='btn btn-primary'target='_blank' >Live Demo</a>
            </div>
            
          
        </article>

        
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG11} alt="" />
          </div>
            <h3>Personal Portfolio Website</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/misbahmuhammed/Personal-portfolio" className='btn' target='_blank'>Github</a>
            <a href="https://misbah-portfolio.netlify.app/" className='btn btn-primary'target='_blank' >Live Demo</a>
            </div>
            
          
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>This is the portfolio item</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary'target='_blank' >Live Demo</a>
            </div>
            
          
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>This is the portfolio item</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary'target='_blank' >Live Demo</a>
            </div>
            
          
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
            <h3>This is the portfolio item</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary'target='_blank' >Live Demo</a>
            </div>
            
          
        </article>
      </div>
    </section>
  )
}

export default portfolio