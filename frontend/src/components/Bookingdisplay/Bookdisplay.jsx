import React, { useContext } from 'react';
import './Bookdisplay.css'; 
import { StoreContext } from '../../context/StoreContext';
import Bookvenue from '../Bookvenue/Bookvenue'; 

const BookDisplay = ({ selectedSport, selectedLocation }) => {
  const { COURT_list } = useContext(StoreContext);

  // Filter courts based on selected sport and location
  const filteredCourts = COURT_list.filter((item) => {
    const sportMatch = selectedSport === 'Select Sport' || item.sport === selectedSport;
    const locationMatch = selectedLocation === 'Select Location' || item.courtLocation === selectedLocation;

    return sportMatch && locationMatch;
  });

  // If no courts match the criteria, return a message
  if (filteredCourts.length === 0) {
    return <div>No courts available for this category.</div>;
  }

  return (
    <div className='booking-display'>
      <div className="booking-display-list">
        {filteredCourts.map((item) => (
          <Bookvenue 
            key={item._id} 
            className='booking-display-list-item'
            courtName={item.courtName}
            courtLocation={item.courtLocation}
            courtsAvailable={item.courtsAvailable}
            price={item.price}
            courtImage={item.courtImage}
            game_icon={item.game_icon}
            sport={item.sport}
          />
        ))}
      </div>
    </div>
  );
}

export default BookDisplay;
