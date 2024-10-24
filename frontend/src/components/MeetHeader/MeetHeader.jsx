import React from 'react';
import './MeetHeader.css';
import { assets } from '../../assets/assets'
import Location from '../Location/Location'
import Date from '../Date/Date'
import Sports from '../Sport/Sport'

const MeetHeader = () => {
  return (
    <div className="meet-header">
        <div className="meet-title">
            <h2>Find Players Nearby</h2>
        </div>
        <div className="meet-bar">
            <Location />
            <Date />
            <Sports />
        </div>
        <div className="meet-line"></div>
    </div>
  )
}

export default MeetHeader