import React from 'react'
import './Section.css'
import vectoricon from '../../components/images/Vector.svg'
import missionImage from '../../components/images/Vector.svg'
import Button from '../Button'

const Section = () => {
  return (
    <div className='section'>
        <div className="ng-section">
            <div className="ng-about">
                <div className="ng-mission">
                    <div className="ng-ajfh">
                        <h5 className='ng-aagb'>OUR MISSION</h5>
                        <h1 className='ng-aheiol'>Help us amplify our efforts</h1>
                    </div>

                    <div className="ng-klaep">
                        <div className="ng-box">
                            <img src={vectoricon}/>
                            <h4>Gender Based Violenece</h4>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad. Dotregon ös. Dinde antide, metatet infrang</p>
                        </div>
                        <div className="ng-box">
                            <img src={vectoricon}/>
                            <h4>Gender Based Violenece</h4>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad. Dotregon ös. Dinde antide, metatet infrang</p>
                        </div>
                        <div className="ng-box">
                            <img src={vectoricon}/>
                            <h4>Gender Based Violenece</h4>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad. Dotregon ös. Dinde antide, metatet infrang</p>
                        </div>
                        <div className="ng-box">
                            <img src={vectoricon}/>
                            <h4>Gender Based Violenece</h4>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad. Dotregon ös. Dinde antide, metatet infrang</p>
                        </div>
                        <div className="ng-box">
                            <img src={vectoricon}/>
                            <h4>Gender Based Violenece</h4>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad. Dotregon ös. Dinde antide, metatet infrang</p>
                        </div>
                    </div>
                </div>

                <div className="ng-mission-1">

                    <div className="ng-jsnjn">
                    </div>
                    <div className="ng-akhvs">
                       
                    </div>

                    <div className='ng-kada'>
                        <div className="ng-sfffs">
                            <h5 className='ng-aagb'>OUR MISSION</h5>
                            <h1 className='ng-aheiol'>Help us amplify our efforts</h1>
                        </div>

                        <div className="ng-alajk">
                            <p className='ng-jakdn'> Our mission is to curb abuse in all forms through a partnership with the law enforcement agency, legal practitioners, medical practitioners as well as international organizations in other to ensure that survivors are not stigmatized by the members of the public but rather are helped to get justice at every level and also provide solutions to the immediate problems and needs of the survivors</p>
                        </div>

                        <div className="ng-laow">
                            <Button link="about" class="ng-zgda" value="Read More >>>" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section