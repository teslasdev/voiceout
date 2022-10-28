import React from 'react'
import './Campaigns.css';
import img from '../../images/HomepageBackground.png'
import Button from '../../Button';

const Events = () => {
  return (
    <div>
        <div className="ng-campaigns">
            <div className="ng-edjsj">
                <h3>Live Events</h3>
                <div className="ng-compaigns-box">
                    <div className="ng-tag-box">
                        <div className="ng-tag-img">
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="ng-tag-text">
                            <h2>You can help raise a voice for the voiceless</h2>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.</p>
                           
                        </div>
                        <Button link="donate" class="ng-zgda" value="Donate Now"/>
                    </div>
                    <div className="ng-tag-box">
                        <div className="ng-tag-img">
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="ng-tag-text">
                            <h2>You can help raise a voice for the voiceless</h2>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.</p>
                           
                        </div>
                        <Button link="donate" class="ng-zgda" value="Donate Now"/>
                    </div>

                    <div className="ng-tag-box">
                        <div className="ng-tag-img">
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="ng-tag-text">
                            <h2>You can help raise a voice for the voiceless</h2>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.</p>
                           
                        </div>
                        <Button link="donate" class="ng-zgda" value="Donate Now"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events