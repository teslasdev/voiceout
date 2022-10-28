import React from 'react'
import {Link} from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className="ng-kwjaw">
            <nav className='ng-amknaB'>
                <Link to="/" className='ng-link'>Home</Link> 
                <Link to="about" className='ng-link'>About</Link>
                <Link to="events" className='ng-link'>Events</Link>
                <Link to="blog" className='ng-link'>Blog</Link>
                <Link to="contact" className='ng-link'>Contact Us</Link>
            </nav>
        </div>
    </div>
  )
}

export default Navigation