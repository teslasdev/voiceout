import React from 'react'
import Button from '../Button'
import './Banner.css'
import {ImFacebook2} from 'react-icons/im';
import {AiFillInstagram ,AiFillTwitterSquare} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='banner'>
        <div className="ng-llaad">
            <div className="ng-jskaA">
                <div className="ng-ajnfsk">
                    ...
                </div>
            </div>
            <div className='ng-text'>
                <h1 className='ng-mqsdm'>Envisioning a world of good health and eradication of gender based violence</h1>
                <p className='ng-lfhw'>Voice out is a non-governmental that aims to combat all forms of gender-based violence and child abuse while producing support to survivors of such violence…</p>
            </div>

            <div className="ng-agvas">
                <Button value="Raise Your Voice" class="ng-ajshb" link="contact"/>
            </div>

            <div className='ng-lkfm'>
                <p>Follow us</p>
                <div className='ng-gsjr'>{" "}</div>
                {/* Icons */}
                    <a href='' ><AiFillInstagram size={24}/></a>
                    <a href=''><FaTwitterSquare size={21} /></a>
                    <a href=''><ImFacebook2 size={18}/></a>
            </div>
        </div>
    </div>
  )
}

export default Banner