import React from 'react';
import './PlayerObject.css';
import { assets } from '../../assets/assets';

const PlayObject = ({ id, className,date, sportIcon, sportName, userImage, userName, membersJoined, totalMembers, level, location }) => {
  return (
  <div className={`player-object ${className}`}>
    <div className="player-component">
      <div className="player-header">
        <p><img src={assets.calendar_icon} alt="calendar-icon" className="player-calendar-icon" /> {date}</p>
      </div>

      <div className="player-content">
        <div className="sport-info">
          <img src={sportIcon} alt="sport-icon" className="sport-icon" />
          <span>{sportName}</span>
        </div>

        <div className="user-info">
          <img src={userImage} alt="user-profile" className="user-image" />
          <span>{userName}</span>
        </div>

        <p className="members-joined">{membersJoined}/{totalMembers} Joined</p>
        <p className={`skill-level ${level.toLowerCase()}`}>{level}</p>
        <p className='location'><img src={assets.location_icon} alt="location-icon" className="player-location-icon" /> {location}</p>
      </div>

      <div className="player-buttons">
        <button className="join-button">Join</button>
        <button className="chat-button">Chat</button>
      </div>
    </div>
  </div>
  );
}

export default PlayObject;
