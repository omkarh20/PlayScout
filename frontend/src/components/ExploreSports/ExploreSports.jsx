import React, { useContext } from 'react';
import './ExploreSports.css';
import '../../assets/assets'
import { assets, scroll } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const ExploreSports = () => {
  const scrollLeftSports = () => scroll('explore-sports-list', -300);
  const scrollRightSports = () => scroll('explore-sports-list', 300);

  const {sport_list} = useContext(StoreContext)

  return (
    <div className="explore-sports-card">
      <div className="explore-sports">
        <h1>Explore Sports</h1>
        <div className="explore-sports-container">
          <img className="scroll-icon left-icon" src={assets.leftIcon} alt="Scroll Left" onClick={scrollLeftSports} />
          <div className="explore-sports-list">
            {sport_list.map((item, index) => {
              return (
                <div key={index} className="explore-sports-list-item">
                  <img src={item.sport_image} alt={item.sport_name} />
                  <p>{item.sport_name}</p>
                </div>
              );
            })}
          </div>
          <img className="scroll-icon right-icon" src={assets.rightIcon} alt="Scroll Right" onClick={scrollRightSports} />
        </div>
      </div>
    </div>
  );
};

export default ExploreSports;
