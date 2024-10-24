import React, { useState } from 'react';
import './CreateGame.css';

const CreateGame = () => {
  const [showCreateGame, setShowCreateGame] = useState(false);

  const handleCreateGameClick = () => {
    setShowCreateGame(!showCreateGame);
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
                  {/* Add more sports here */}
                </select>
              </div>

              <div className="form-group">
                <label>Venue:</label>
                <input type="text" placeholder="Enter venue" />
              </div>

              <div className="form-group">
                <label>Number of Players:</label>
                <input type="number" min="1" max="20" />
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