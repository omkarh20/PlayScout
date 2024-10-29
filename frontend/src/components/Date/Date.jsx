import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for datepicker
import './Date.css';
import { assets } from '../../assets/assets';

const Date = ({ setStartDate }) => {
  const [startDateLocal, setStartDateLocal] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); // State to manage calendar visibility

  const handleDateChange = (date) => {
    setStartDateLocal(date);
    setStartDate(date); // Update the selected date in the parent component
    setShowCalendar(false); // Hide calendar after selecting a date
  };

  return (
    <div className="calendar-wrapper">
      <button className="date-btn-book" onClick={() => setShowCalendar(true)}>
        <img src={assets.calendar_icon} alt="Calendar" />
        <span>{startDateLocal ? startDateLocal.toLocaleDateString() : 'Select Date'}</span> {/* Display selected date */}
      </button>
      {showCalendar && ( // Only show the calendar when showCalendar is true
        <div className="calendar-container">
          <DatePicker
            selected={startDateLocal}
            onChange={handleDateChange}
            className="datepicker"
            inline // Show calendar inline
          />
        </div>
      )}
    </div>
  );
};

export default Date;

