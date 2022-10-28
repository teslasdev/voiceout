import React from 'react'
import './Blogs.css'
import './Campaigns.css'
import img from '../../images/HomepageBackground.png'
import Button from '../../Button';

const Blogs = () => {
  return (
    <div>
        <div className="ng-campaigns">
            <div className="ng-edjsj">
                <h3>Blogs</h3>
                <div className="ng-compaigns-box">
                    <div className="ng-blogs ng-tag-box">
                        <div className="ng-blog-img ng-tag-img">
                            <div className="ng-label">
                                <h4>02</h4>
                                <h5>AUG</h5>
                            </div>
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="ng-blog-text ng-tag-text">
                            <h4>Writer : David</h4>
                            <h3>Blog Title</h3>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.</p>
                           
                        </div>
                        <Button link="donate" class="ng-dsjdf ng-zgda" value="Read More >>>"/>
                    </div>
                    <div className="ng-blogs ng-tag-box">
                        <div className="ng-blog-img ng-tag-img">
                            <div className="ng-label">
                                <h4>02</h4>
                                <h5>AUG</h5>
                            </div>
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="ng-blog-text ng-tag-text">
                            <h4>Writer : David</h4>
                            <h3>Blog Title</h3>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.</p>
                           
                        </div>
                        <Button link="donate" class="ng-dsjdf ng-zgda" value="Read More >>>"/>
                    </div>

                    <div className="ng-blogs ng-tag-box">
                        <div className="ng-blog-img ng-tag-img">
                            <div className="ng-label">
                                <h4>02</h4>
                                <h5>AUG</h5>
                            </div>
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="ng-blog-text ng-tag-text">
                            <h4>Writer : David</h4>
                            <h3>Blog Title</h3>
                            <p>Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.</p>
                           
                        </div>
                        <Button link="donate" class="ng-dsjdf ng-zgda" value="Read More >>>"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs