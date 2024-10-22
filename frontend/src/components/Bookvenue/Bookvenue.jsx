import React from 'react';
import './Bookingvenue.css'; 
import { assets } from '../../assets/assets'; 

const Bookvenue = ({ id, className, courtName, courtLocation, courtsAvailable, price, courtImage ,game_icon,sport}) => {
  if (!courtName || !courtLocation || !courtImage || courtsAvailable <= 0 || price === undefined) {
    return null; 
  }

  return (
    <div className={`court-object ${className}`}>
      <div className="court-component">
        <div className="court-header">
          <img 
            src={courtImage} 
            alt={courtName} 
            className="court-image" 
          />
        </div>

        <div className="court-content">
          <div className="court-info">
          
            <span className="court-name">{courtName}</span><br/>
            <img src={game_icon}  className="game_icon" /> <p className="sport-name">{sport}</p>
           
            <p className="court-location">{courtLocation}</p>
            <p className="court-price">Price: ₹{price}/hr</p>
          </div>
        </div>

        <div className="court-buttons">
          <button className="book-button">Book</button>
        </div>
      </div>
    </div>
  );
}

export default Bookvenue;
