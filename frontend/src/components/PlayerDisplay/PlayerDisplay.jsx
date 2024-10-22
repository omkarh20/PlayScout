import React, { useContext } from 'react'
import './PlayerDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PlayerObject from '../PlayerObject/PlayerObject'

const PlayerDisplay = ({category}) => {

    const {player_list} = useContext(StoreContext)

  return (
    <div className='player-display'>
      <div className="player-display-list">
        {player_list.map((item,index)=>{
            return <PlayerObject 
                      key={index} 
                      id={item._id} 
                      className = 'player-display-list-item'
                      date={item.date}
                      sportIcon={item.sportIcon} 
                      sportName={item.sportName}
                      userImage={item.userImage} 
                      userName={item.userName} 
                      membersJoined={item.membersJoined} 
                      totalMembers={item.totalMembers} 
                      level={item.level}
                      location={item.location}
                    />
        })}
      </div>
    </div>
  )
}

export default PlayerDisplay