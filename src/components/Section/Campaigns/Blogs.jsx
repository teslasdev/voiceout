import React from 'react'
import './Blogs.css'
import './Campaigns.css'
import Button from '../../Button';

const Blogs = () => {
  const blog = [
    {
        "name": "Heritage Food gift",
        "image" : "/images/voice  out-2.jpg",
        "slug" : "Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.",
        "writer" : "Abigeil",
        "date" : "02"
    },
    {
        "name": "Heritage Food gift",
        "image" : "/images/voice  out-1-2.jpg",
        "slug" : "Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.",
        "writer" : "Abigeil",
        "date" : "02"
    },
    {
        "name": "Heritage Food gift",
        "image" : "/images/voice  out-50.jpg",
        "slug" : "Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.",
        "writer" : "Abigeil",
        "date" : "02"
    },
    {
        "name": "Heritage Food gift",
        "image" : "/images/voice  out-2.jpg",
        "slug" : "Lörem ipsum nyrän. Oska. Tull pivull i vutit hexarer. Trengen svenskad.  Oska. Tull pivull i vutit hexarer. Trengen svenskad.",
        "writer" : "Abigeil",
        "date" : "02"
    }
  ]
  return (
    <div>
        <div className="ng-campaigns">
            <div className="ng-edjsj">
                <h3>Blogs</h3>
                <div className="ng-compaigns-box">
                    {blog.map((item , index) => {
                        return (
                        <div className="ng-blogs ng-tag-box">
                            <div className="ng-blog-img ng-tag-img">
                                <div className="ng-label">
                                    <h4>{item.date}</h4>
                                    <h5>AUG</h5>
                                </div>
                                <img src={item.image} alt="" srcset="" style={{width:"100%",height:"100%"}} />
                            </div>
                            <div className="ng-blog-text ng-tag-text">
                                <h4>Writer : {item.writer}</h4>
                                <h3>{item.name}</h3>
                                <p>{item.slug}</p>
                               
                            </div>
                            <Button link="donate" class="ng-dsjdf ng-zgda" value="Read More >>>"/>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs