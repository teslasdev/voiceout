import React from 'react'
import './Contact.css'
import Button from '../../Button';
import img from '../../images/HomepageBackground.png'

const Contact = () => {
  return (
    <div>
      <div className="ng-contact">
        <div className="ng-s1das">
          <div className="ng-sfhs">
            <div className="ng-contact-details">
              <div className="ng-ssjfd">
                <h5>Contact</h5>
                <h2>Get In touch</h2>
              </div>
              <div className="ng-sfhs-form">
                <form action="" className='ng-contact-form'>
                  <input type="text" className='ng-form-input' placeholder='Name'/>
                  <input type="text" className='ng-form-input' placeholder='Email'/>
                  <input type="text" className='ng-form-input' placeholder='Phone Number'/>
                  <input type="text" className='ng-form-input ng-form-message' placeholder='Message'/>
                </form>
              </div>
              <Button value="Send Message" class="ng-ajshb" link="donate"/>
            </div>
              
          </div>

          <div className="ng-contact-img">
            <img src={img} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact