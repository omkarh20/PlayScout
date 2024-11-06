import React, { useState } from 'react';
import './Bookingvenue.css'; 
import { assets } from '../../assets/assets'; 
import Bookpop from '../Bookpop/Bookpop'; // Import the Bookpop component

const Bookvenue = ({ id, className, courtName, courtLocation, courtsAvailable, price, courtImage, game_icon, sport }) => {
  const [showBooking, setShowBooking] = useState(false); // State to manage the booking pop-up

  if (!courtName || !courtLocation || !courtImage || courtsAvailable <= 0 || price === undefined) {
    return null; 
  }

  const courtDetails = {
    courtName,
    courtLocation,
    price,
    game_icon,
    sport
  };

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
            <img src={game_icon} className="game_icon" alt={sport} /> 
            <p className="sport-name">{sport}</p>
            <p className="court-location">{courtLocation}</p>
            <p className="court-price">Price: ₹{price}/hr</p>
          </div>
        </div>

        <div className="court-buttons">
          <button className="book-button" onClick={() => setShowBooking(true)}>Book</button>
        </div>
      </div>

      {showBooking && <Bookpop setShowBooking={setShowBooking} courtDetails={courtDetails} />}
    </div>
  );
}

export default Bookvenue;
