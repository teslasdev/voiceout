import React from 'react'
import Button from '../Button'
import Navigation from '../Navigation/Navigation'
import logo from '../images/logo.png'
import './Header.css'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
        <div className="ng-djakn">
          <div className="ng-csknfo">
            <img src={logo} className="ng-logo" alt='logo' />
          </div>
          <div className="ng-ajsdjs">
            <div className="ng-nav">
              {/* <Navigation /> */}
            </div>
            <div className='ng-button'>
              <Button value="Donate Now" class="ng-ajshb" link="donation"/>
            </div>
            <FaBars color="#fff" size={25} />
          </div>
        </div>


    </div>
  )
}

export default Header