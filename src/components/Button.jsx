import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

const Button = (props) => {
  return (
    <div className='button'>
        <div className="ng-asfda">
          <Link to={props.link} className={props.class}>{props.value}</Link>
        </div>
    </div>
  )
}

export default Button