import React, { useState, useEffect, useContext } from 'react'
import './Meet.css'
import MeetHeader from '../../components/MeetHeader/MeetHeader'
import PlayerDisplay from '../../components/PlayerDisplay/PlayerDisplay'
import CreateGame from '../../components/CreateGame/CreateGame'
import { StoreContext } from '../../context/StoreContext'

const Meet = () => {
  const {selectedMeetLocation, selectedMeetSport, startDate, setSelectedMeetSport} = useContext(StoreContext);
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      setSelectedMeetSport('Select Sport');
    };
  }, []);

  const [category,setCategory] = useState("All");

  return (
    <div>
      <MeetHeader />
      <PlayerDisplay selectedMeetSport={selectedMeetSport} startDate={startDate} selectedMeetLocation={selectedMeetLocation}/>
    </div>
  )
}

export default Meet