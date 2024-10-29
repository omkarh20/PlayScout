import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Facility_info.css';

const FacilityInfo = () => {
  const { id } = useParams();
  const [court, setCourt] = useState(null);
  const [error, setError] = useState(null);
  const { COURT_list } = useContext(StoreContext);

  useEffect(() => {
    if (COURT_list) {
      const foundCourt = COURT_list.find((item) => item._id === id);
      if (foundCourt) {
        setCourt(foundCourt);
      } else {
        setError(`Court with id ${id} not found.`);
      }
    } else {
      setError('COURT_list is not available in assets.');
      console.log(COURT_list);
    }
  }, [id, COURT_list]);

  if (error) {
    return <div className="facility-error">{error}</div>;
  }

  if (!court) {
    return <div className="facility-loading">Loading...</div>;
  }

  // Determine dynamic class based on available courts
  const availabilityClass = court.courtsAvailable <= 2 ? 'low-availability' : 'high-availability';

  // Common rule to render game details
  const renderGameDetail = (label, value) => (
    <p className="facility-detail">
      <span className="facility-detail-label">{label}:</span> {value}
    </p>
  );

  // Facility rules to be maintained
  const facilityRules = [
    "Respect the facility and fellow players.",
    "No outside food or drinks allowed.",
    "Always wear appropriate sports attire.",
    "Follow the designated court timings.",
    "Keep the area clean and dispose of trash properly.",
    "Report any damages or issues to the staff."
  ];

  return (
    <div className="facility-info-container">
      <div className="facility-details-box">
        <h2 className="facility-name">{court.courtName}</h2>
        <img className="facility-image" src={court.courtImage} alt={court.courtName} />
        {renderGameDetail('Location', court.courtLocation)}
        {renderGameDetail('Price', `₹${court.price}/hr`)}
        {renderGameDetail('Available Courts', court.courtsAvailable)}
        {renderGameDetail('Sport', court.sport)}
        <img className="facility-game-icon" src={court.game_icon} alt={court.sport} />
      </div>

      <div className="center">
        {court.courtsAvailable > 0 && (
          <div className={`available-courts-box ${availabilityClass}`}>
            <h3>Available Courts</h3>
            <div className="court-buttons">
              {[...Array(court.courtsAvailable)].map((_, index) => (
                <button key={index} className="court-button">Court {index + 1}</button>
              ))}
            </div>
          </div>
        )}

        {/* Rating Box */}
        <div className="rating-box">
          <h3>Rating</h3>
          <p className="facility-rating">{court.rating} ⭐</p>
        </div>

        {/* Facility Rules Section */}
        <div className="facility-rules">
          <h3>Facility Rules</h3>
          <ul className="rules-list">
            {facilityRules.map((rule, index) => (
              <li key={index} className="rule-item">{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacilityInfo;
