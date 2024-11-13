import React, { useState } from 'react';
import './CreateGame.css';

const CreateGame = () => {
  const [showCreateGame, setShowCreateGame] = useState(false);
  const [numPlayers, setNumPlayers] = useState(10); // Default value for number of players

  const handleCreateGameClick = () => {
    setShowCreateGame(!showCreateGame);
  };

  const handleRangeChange = (e) => {
    setNumPlayers(e.target.value);
  };

  return (
    <div>
      <button onClick={handleCreateGameClick}>Create Game</button>

      {showCreateGame && (
        <div className="create-game-overlay">
          <div className="create-game-form">
            <h2>Create a Game</h2>
            <form>
              <div className="form-group">
                <label>Sport:</label>
                <select>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  <option value="tennis">Tennis</option>
                  <option value="cricket">Cricket</option>
                  <option value="badminton">Badminton</option>
                  <option value="volleyball">Volleyball</option>
                  <option value="tabletennis">Table Tennis</option>
                  <option value="baseball">Baseball</option>
                  <option value="rugby">Rugby</option>
                  <option value="hockey">Hockey</option>
                  <option value="swimming">Swimming</option>
                  <option value="golf">Golf</option>
                </select>
              </div>

              <div className="form-group">
                <label>Venue:</label>
                <input type="text" placeholder="Enter venue" />
              </div>

              <div className="form-group">
                <label>Number of Players:</label>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={numPlayers} 
                  onChange={handleRangeChange}
                  id="range-input"
                />
                <div className="range-value">{numPlayers}</div> {/* Number shown with the slider */}
              </div>

              <button type="submit" className='create-btn-submit'>Create</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateGame;
