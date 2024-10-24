import React, { useState } from 'react';
import './Bookheader.css';
import { assets } from '../../assets/assets';
import Location from '../Location/Location';
import Sports from '../Sport/Sport';
import BookDisplay from '../Bookingdisplay/Bookdisplay';


const Bookheader = () => {
  const [selectedSport, setSelectedSport] = useState('Select Sport');
  const [selectedLocation, setSelectedLocation] = useState('Select Location');

  return (
    <div className="book-header">
        <div className='first-text'>
            <p className="left-text">Hello Player!</p>
            <p className="right-text">Don't be.....lazy, rack up!</p>
        </div>
        <div className="book-bar">
           <Location setSelectedLocation={setSelectedLocation} />
           <Sports setSelectedSport={setSelectedSport} />
        </div>
        <br/>
        <div className="book-line"></div>

       <BookDisplay selectedSport={selectedSport} selectedLocation={selectedLocation}/>
    </div>
  );
};

export default Bookheader;
