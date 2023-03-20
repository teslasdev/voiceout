import React from 'react'
import Team from '../../json/team.json'
import './team.css'
import {BiUserCircle} from "react-icons/bi"
import {MdLocationPin,MdOutlineWork} from "react-icons/md"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {FaHandsHelping} from 'react-icons/fa'

const Teammember = () => {
  return (
    <>
      <div className="ng-adfe">
        {
          Team.map((data) => {
            return (
            <div className="ng-ewiawj">
              <div className="ng-aksj">
                <img src={data.image} alt="" srcset="" />
              </div>
              <div className="ng-wusi">
                <div className='ng-iaiask'>
                  <span className='ng-icon-team'>
                    <BiUserCircle size={25}/>
                  </span>
                  <p>{data.name}</p>
                </div>

                <div className='ng-iaiask'>
                  <span className='ng-icon-team'>
                    <MdLocationPin size={25}/>
                  </span>
                  <p>{data.Location}</p>
                </div>

                <div className='ng-iaiask'>
                  <span className='ng-icon-team'>
                    <MdOutlineWork size={25}/>
                  </span>
                  <p>{data.Occupation}</p>
                </div>

                <div className='ng-iaiask'>
                  <span className='ng-icon-team'>
                    <FaHandsHelping size={25}/>
                  </span>
                  <p>{data.Reason}</p>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Teammember