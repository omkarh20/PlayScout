import React, {useState} from 'react';
import './MeetHeader.css';
import { assets } from '../../assets/assets'
import Location from '../Location/location'
import Date from '../Date/Date'
import Sports from '../Sport/Sport'

const MeetHeader = () => {
  const [selectedSport, setSelectedSport] = useState('Select Sport');
  const [selectedLocation, setSelectedLocation] = useState('Select Location');

  return (
    <div className="meet-header">
        <div className="meet-title">
            <h2>Find Players Nearby</h2>
        </div>
        <div className="meet-bar">
        <Location setSelectedLocation={setSelectedLocation} />
        <Sports setSelectedSport={setSelectedSport} />
        </div>
        <div className="meet-line"></div>
    </div>
  )
}

export default MeetHeader