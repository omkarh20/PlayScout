import React from 'react';
import './Bookheader.css';
import { assets } from '../../assets/assets';
import Location from '../Location/location';
import Date from '../Date/Date';
import Sports from '../Sport/Sport';
       // Import Sports component

const Bookheader = () => {
  return (
    <div className="book-header">
        <div className='first-text'>
            <p className="left-text">Hello Player!</p>
            <p className="right-text">Don't be.....lazy, rack up!</p>
        </div>
        <div className="book-bar">
           <Location/>
           <Sports/>
        </div>
        <br/>
        <div className="book-line"></div>
    </div>
  );
};

export default Bookheader;
