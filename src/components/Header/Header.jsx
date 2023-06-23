import React ,{useState,useEffect} from 'react'
import Button from '../Button'
import Navigation from '../Navigation/Navigation'
import './Header.css'
import {useMediaQuery} from 'react-responsive'
import {FaBars} from 'react-icons/fa'
import {IoCloseSharp} from 'react-icons/io5'

import { Link } from 'react-router-dom'




const Header = (props) => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 544px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const [toggleOption, setToggleOption] = useState(false)
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isOpen,setOpen] = useState(false)
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    var  direction;
    direction = lastScrollY > 10 ? 'down' : 'up';
    setScrollDirection(direction);
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      direction = scrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
      // lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);


  return (
    <div className='header'>
        <div className={`ng-djakn ${props.type === 'sticky' ? 'ng-rtwww' : '' } ${ scrollDirection === "down" ? "ng-rtwww" : ""}`}>
          <div className="ng-csknfo">
            <img src="images/logo.png" className="ng-logo" alt='logo' />
          </div>
          {!isPortrait ? 
          <div className="ng-ajsdjs">
            <div className="ng-nav">
              <Link to="/">Home</Link>
              <Link to="/donation">Donate</Link>
              <Link to="/our-team">Our Team</Link>
              <Link to="/">Contact Us</Link>
            </div>
            <div className='ng-button'>
              <Button value="Donate Now" class="ng-ajshb" link="donation"/>
            </div>
          </div>
            :
            <>
              <div onClick={() => setOpen(!isOpen)} className='ng-sjwj5' style={{paddingRight: 5}}>{!isOpen ? <FaBars color="#fff" size={25} /> : <IoCloseSharp color="#fff" size={25} /> }</div>
              {
              isOpen && 
              <div className='ng-wssjsj'>
                <div className="ng-nav-2">
                  <Link to="/">Home</Link>
                  <Link to="/donation">Donate</Link>
                  <Link to="/our-team">Our Team</Link>
                  <Link to="/">Contact Us</Link>
                </div>
              </div>}
            </>
            
          }
        </div>


    </div>
  )
}

export default Header