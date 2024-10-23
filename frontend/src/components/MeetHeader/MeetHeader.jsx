import React from 'react';
import './MeetHeader.css';
import { assets } from '../../assets/assets'

const MeetHeader = () => {
  return (
    <div className="meet-header">
        <div className="meet-title">
            <h2>Find Players Nearby</h2>
        </div>
        <div className="meet-bar">
            <button className='location-btn'>
                <img src={assets.location_icon} alt="" />
                <span>Location</span>
            </button>
            <button className='date-btn'>
                <img src={assets.calendar_icon} alt="" className='menu-bar-icons' />
                <span>Date</span>
            </button>
            <button className="sports-btn">
                <img src={assets.trophy_icon} alt="" className='menu-bar-icons'/>
                <span>Sports</span>
            </button>
            <button className='filter-btn'>
                <img src={assets.filter_icon} alt="" className='menu-bar-icons' />
                <span>Filter</span>
            </button>
           
        </div>
    </div>
  )
}

export default MeetHeader