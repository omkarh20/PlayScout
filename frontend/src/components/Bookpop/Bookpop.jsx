import React, { useState } from 'react';
import './Bookpop.css'; 
import { assets } from '../../assets/assets'; 
import Date from '../Date/Date';
i// Import the Date component

const Bookpop = ({ setShowBooking, courtDetails }) => {
  const { courtName, courtLocation, price, game_icon, sport } = courtDetails;
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date

  const handleConfirmBooking = () => {
    if (selectedDate) {
      console.log(`Booking confirmed for ${courtName} on ${selectedDate.toLocaleDateString()}`);
      // Optionally close the popup after confirmation
      setShowBooking(false);
    } else {
      alert("Please select a date before confirming the booking.");
    }
  };

  return (
    <div className='book-popup'>
      <div className="book-popup-container">
        <div className="book-popup-header">
          <h2>Booking Confirmation</h2>
          <img 
            onClick={() => setShowBooking(false)} 
            src={assets.cross_icon} 
            alt="Close" 
          />
        </div>
        <div className="book-popup-content">
          <div className="book-popup-info">
            <h3>{courtName}</h3>
            <img src={game_icon} className="game_icon" alt={sport} />
            <p className="sport-name">{sport}</p>
            <p className="court-location">{courtLocation}</p>
            <p className="court-price">Price: ₹{price}/hr</p>
          </div>
        </div>
        <div className="date-selection">
         <Date  setDate={setSelectedDate}/> {/* Pass the setSelectedDate function to the Date component */}
        </div>
        <div className="book-popup-actions">
          <button className="confirm-button" onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}

export default Bookpop;
