import React, { useContext,useState } from 'react';
import './PlayerObject.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import JoinPopup from '../JoinPopup/JoinPopup';

const PlayObject = ({ id, className,date, filterDate, sportIcon, sportName, userImage, userName, membersJoined, totalMembers, level, courtName, location }) => {
  const {url} = useContext(StoreContext);
  const [showJoinPopup, setShowJoinPopup] = useState(false);

  const handleJoinClick = (event) => {
    event.stopPropagation();
    setShowJoinPopup(true);
  };

  const handleConfirmJoin = () => {
    console.log("Join request confirmed");
  };
  
  return (
  <div className={`player-object ${className}`}>
    <div className="player-component">
      <div className="player-header">
        <p><img src={assets.calendar_icon} alt="calendar-icon" className="player-calendar-icon" /> {date}</p>
      </div>

      <div className="player-content">
        <div className="sport-info">
          <img src={`${url}/images/${sportIcon}${sportIcon.includes('.') ? '' : '.png'}`} className="sport-icon" alt={sportName} />
          <span>{sportName}</span>
        </div>

        <div className="user-info">
          <img src={`${url}/images/${userImage}${userImage.includes('.') ? '' : '.png'}`} className="user-image" alt={sportName} />
          <span>{userName}</span>
        </div>

        <p className="members-joined">{membersJoined}/{totalMembers} Joined</p>
        <p className={`skill-level ${level.toLowerCase()}`}>{level}</p>
        <p className='location'><img src={assets.location_icon} alt="location-icon" className="player-location-icon" /> {courtName+', '+location}</p>
      </div>

      <div className="player-buttons">
        <button className="join-button" onClick={handleJoinClick}>Join</button>
        <Link to='/chat'><button className="chat-button">Chat</button></Link>
      </div>
    </div>

    {showJoinPopup && <JoinPopup setShowJoinPopup={setShowJoinPopup} onConfirm={handleConfirmJoin} />}
  </div>
  );
}

export default PlayObject;
