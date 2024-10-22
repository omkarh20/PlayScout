import React, { useState, useEffect } from 'react'
import './Meet.css'
import MeetHeader from '../../components/MeetHeader/MeetHeader'
import PlayerDisplay from '../../components/PlayerDisplay/PlayerDisplay'
import CreateGame from '../../components/CreateGame/CreateGame'

const Meet = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [category,setCategory] = useState("All");

  return (
    <div>
      <MeetHeader />
      <PlayerDisplay category={category} />
    </div>
  )
}

export default Meet