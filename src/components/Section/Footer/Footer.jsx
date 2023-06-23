import React from 'react'
import './Footer.css'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaRegEnvelope} from 'react-icons/fa'
import {ImFacebook2} from 'react-icons/im';
import {AiFillInstagram ,AiFillTwitterSquare} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="ng-footer">
        <div className="ng-sufns">
          <div className="ng-wika">
            <div className="ng-vkfd ng-bjhk">
              <h3>Contact</h3>
              <div className="ng-link-address">
                <span><MdOutlineLocationOn size={28} color='#fff'/><p>Address  of the main office</p></span>
                <span><BsFillTelephoneFill size={22} color='#fff'/><p>+234 903 788 9174</p></span>
                <span><FaRegEnvelope size={22} color='#fff'/><p>Voiceout53@gmail.com</p></span>
              </div>
            </div>

            <div className="ng-vkfd">
              <h3>Important Links</h3>
              <ul className="ng-link-footer">
                <Link to="/donate"  className='ng-link'>Donate Now</Link>
                <Link to="/donate"  className='ng-link'>Blog</Link>
                <Link to="/donate"  className='ng-link'>Events</Link>
                <Link to="/donate"  className='ng-link'>Contact</Link>
              </ul>
            </div>

            <div className="ng-sksdk">
              <div className='ng-fhahj'>
                  <p>Follow us</p>
                  <div className='ng-gsjr'>{" "}</div>
                  {/* Icons */}
                      <a href='#'><AiFillInstagram size={24}/></a>
                      <a href='#'><FaTwitterSquare size={21} /></a>
                      <a href='#'><ImFacebook2 size={18}/></a>
              </div>
              <div className="ng-csknfo">
                <img src="/images/logo.png" className="ng-logo ng-logo-footer" alt='logo' />
              </div>
            </div>
          </div>
          <div className="ng-eywq">
            <h5>Copyright 2022, Voice OUT</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer