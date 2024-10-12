import React from 'react';
import './ExploreSports.css';
import { sport_list } from '../../assets/assets';
import leftIcon from '../../assets/shuttle_left.png'; 
import rightIcon from '../../assets/shuttle_right.png'; 

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

  return (
    <div className="explore-sports-card">
      <div className="explore-sports">
        <h1>Explore Sports</h1>
        <div className="explore-sports-container">
          <img className="scroll-icon left-icon" src={leftIcon} alt="Scroll Left" onClick={scrollLeft} />
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
          <img className="scroll-icon right-icon" src={rightIcon} alt="Scroll Right" onClick={scrollRight} />
        </div>
      </div>
    </div>
  );
};

export default ExploreSports;
