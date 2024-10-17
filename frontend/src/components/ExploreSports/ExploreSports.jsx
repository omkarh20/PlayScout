import React, { useContext } from 'react';
import './ExploreSports.css';
import '../../assets/assets'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const ExploreSports = () => {
  const scrollLeft = () => {
    document.querySelector('.explore-sports-list').scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    document.querySelector('.explore-sports-list').scrollBy({
      left: 300, 
      behavior: 'smooth'
    });
  };


  const {sport_list} = useContext(StoreContext)

  return (
    <div className="explore-sports-card">
      <div className="explore-sports">
        <h1>Explore Sports</h1>
        <div className="explore-sports-container">
          <img className="scroll-icon left-icon" src={assets.leftIcon} alt="Scroll Left" onClick={scrollLeft} />
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
          <img className="scroll-icon right-icon" src={assets.rightIcon} alt="Scroll Right" onClick={scrollRight} />
        </div>
      </div>
    </div>
  );
};

export default ExploreSports;
