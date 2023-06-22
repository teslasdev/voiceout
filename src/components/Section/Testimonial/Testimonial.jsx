import React from 'react'
import './Testimonial.css'
import img from '../../images/voice  out-2-2.jpg'

const Testimonial = () => {
  return (
    <div>
        <div className="ng-testimonial">
            <div className="ng-asrfes">
                <h3>Testimonial</h3>
                <div className="ng-kajea">
                    <div className="ng-testimonial-img">
                        <img src={img} alt="" srcset="" style={{objectFit:"cover"}} />
                    </div>
                    <div className="ng-testimonial-text">
                        <h4>Heritage Orphan</h4>
                        <p>Dinde antide, metatet infrang dina. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga architecto illo optio accusantium, quos id aperiam atque. Nostrum, voluptatem vel veniam ex id molestias. Incidunt dolore magni esse nesciunt! Kumirar blixad. Spemor esa. Trebyra poktigt till hexaktiga laddstolpe o</p>
                        <div className="ng-arrows">
                            <div className="ng-arrows-icon ng-backward">
                              {"<"}
                            </div>
                            <div className="ng-arrows-icon ng-forward">
                              {">"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial