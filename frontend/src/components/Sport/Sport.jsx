import React, { useState } from 'react';
import './Sport.css';
import { assets } from '../../assets/assets';

const Sports = ({ setSelectedSport }) => { // Accept setSelectedSport prop
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSport, setSelectedSportLocal] = useState('Select Sport');

  const sports = [
    'Badminton',
    'Cricket',
    'Volleyball',
    'Table Tennis',
    'Football',
    'Basketball',
    'Tennis',
    'Hockey',
    'Squash',
    'Baseball',
    'Golf',
    'Rugby',
    'Swimming'
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSportSelect = (sport) => {
    setSelectedSportLocal(sport);
    setSelectedSport(sport); // Update parent state
    setShowDropdown(false);
  };

  return (
    <div className="sports-wrapper">
      <button className="sports-btn-book" onClick={toggleDropdown}>
        <img src={assets.trophy_icon} alt="Sports" />
        <span>{selectedSport}</span>
      </button>
      {showDropdown && (
        <ul className="sports-dropdown">
          {sports.map((sport, index) => (
            <li key={index} onClick={() => handleSportSelect(sport)}>
              {sport}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sports;
