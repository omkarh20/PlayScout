import React, { useContext } from 'react'; 
import './Bookdisplay.css'; 
import { StoreContext } from '../../context/StoreContext';
import Bookvenue from '../Bookvenue/Bookvenue'; 

const BookingDisplay = ({ category }) => {
  const { COURT_list } = useContext(StoreContext);

  if (!COURT_list || COURT_list.length === 0) {
    return <div>No courts available for this category.</div>;
  }

  return (
    <div className='booking-display'>
      <div className="booking-display-list">
        {COURT_list.map((item) => (
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

export default BookingDisplay;
