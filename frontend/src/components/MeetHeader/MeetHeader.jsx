import React, {useContext, useState} from 'react';
import './MeetHeader.css';
import { assets } from '../../assets/assets'
import Location from '../Location/location'
import Date from '../Date/Date'
import Sports from '../Sport/Sport'
import PlayerDisplay from '../PlayerDisplay/PlayerDisplay';
import { StoreContext } from '../../context/StoreContext';

const MeetHeader = () => {
  const {setSelectedMeetLocation, selectedMeetSport, setSelectedMeetSport, setStartDate} = useContext(StoreContext);

  return (
    <div className="meet-header">
        <div className="meet-title">
            <h2>Find Players Nearby</h2>
        </div>
        <div className="meet-bar">
        <Location setSelectedLocation={setSelectedMeetLocation} />
        <Date setStartDate={setStartDate}/>
        <Sports selectedSport={selectedMeetSport} setSelectedSport={setSelectedMeetSport} />
        </div>
        <div className="meet-line"></div>
    </div>
  )
}

export default MeetHeader