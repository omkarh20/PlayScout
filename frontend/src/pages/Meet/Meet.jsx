import React, { useState } from 'react'
import './Meet.css'
import MeetHeader from '../../components/MeetHeader/MeetHeader'
import PlayerDisplay from '../../components/PlayerDisplay/PlayerDisplay'

const Meet = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <MeetHeader />
      <PlayerDisplay category={category} />
    </div>
  )
}

export default Meet
