import React from 'react';
import './Bookheader.css';
import { assets } from '../../assets/assets';

const Bookheader = () => {
  return (
    <div className="book-header">
        <div className='first-text'>
            <p className="left-text">Hello Player!</p>
            <p className="right-text">Dont be.....lazy rackup</p>
        </div>
        <div className="book-title">
        </div>
        <div className="book-bar">
            <button className="location-btn-book">
                <img src={assets.location_icon} alt="" />
                <span>Location</span>
            </button>
            <button className="date-btn-book">
                <img src={assets.calendar_icon} alt="" className="menu-bar-icons-b" />
                <span>Date</span>
            </button>
            <button className="sports-btn-book">
                <img src={assets.trophy_icon} alt="" className="menu-bar-icons-b" />
                <span>Sports</span>
            </button>
            <button className="filter-btn-book">
                <img src={assets.filter_icon} alt="" className="menu-bar-icons-b" />
                <span>Filter</span>
                
            </button>
          
        </div><br/>
          <div className="line"></div>
    </div>
  );
};

export default Bookheader;
