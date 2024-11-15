import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Upcoming.css';
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const Upcoming = () => {
  const [bookings, setBookings] = useState([]);
  const [plannedGames, setPlannedGames] = useState([]);
  const [requests, setRequests] = useState([]);
  const { url, fetchGameList } = useContext(StoreContext);
  const token = localStorage.getItem('token');

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${url}/api/bookings/list-bookings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setBookings(response.data.data);
      } else {
        console.error('Failed to fetch bookings');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchPlannedGames = async () => {
    try {
      const response = await axios.get(`${url}/api/game/list-planned-games`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setPlannedGames(response.data.data);
      } else {
        console.error('Failed to fetch planned games');
      }
    } catch (error) {
      console.error('Error fetching planned games:', error);
    }
  };

  const fetchRequests = async () => {
    try {
      const response = await axios.get(`${url}/api/join/get-request`, {
        headers: { Authorization: `Bearer ${token}`}
      });
      if(response.data.success) {
        setRequests(response.data.data);
      } else{
        console.error('Failed to get requests');
      }
    } catch (error) {
      console.error('Error fetching requests: ', error);
    }
  };

  const handleResponse = async (requestId, status) => {
    try {
      const response = await axios.post(
        `${url}/api/join/respond-request`,
        { requestId, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (response.data.success) {
        toast.success(response.data.message);
        setRequests(prevRequests => prevRequests.map(request => 
          request._id === requestId ? { ...request, status } : request
        ));
        fetchPlannedGames();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error responding to request:', error);
      toast.error("Error responding to request");
    }
  };
  

  const removeGame = async (gameID) => {
    try {
      const response = await axios.post(`${url}/api/game/remove-game`, { id: gameID });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchPlannedGames();
        fetchGameList();
      } else {
        toast.error("Error removing game");
      }
    } catch (error) {
      toast.error("Error");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchPlannedGames();
    fetchRequests();
  }, []);

  return (
    <div className="upcoming-container">
      <h2>Upcoming Games</h2>

      {/* Booked Section */}
      <div>
        <h3>Booked</h3>
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Preview</th>
              <th>Venue</th>
              <th>Location</th>
              <th>Sport</th>
              <th>Date</th>
              <th>Slot</th>
              <th className="small-column">Members Joined</th>
              <th className="small-column">Total Members</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="image-cell">
                    <img
                      src={`${url}/images/${booking.courtImage}${booking.courtImage.includes('.') ? '' : '.png'}`}
                      alt={booking.courtName}
                      className="court-image"
                    />
                  </td>
                  <td>{booking.courtName}</td>
                  <td>{booking.courtLocation}</td>
                  <td>{booking.sport}</td>
                  <td>{booking.date.split('T')[0]}</td>
                  <td>{booking.slot}</td>
                  <td className="small-column">{booking.membersJoined}</td>
                  <td className="small-column">{booking.totalMembers}</td>
                  <td>
                    <p onClick={() => cancelBooking(booking._id)} className="book-cancel">x</p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No upcoming bookings</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Planned Section */}
      <div>
        <h3>Planned</h3>
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Sport</th>
              <th>Date</th>
              <th>Level</th>
              <th>Court Name</th>
              <th>Location</th>
              <th>Members Joined</th>
              <th>Total Members</th>
              <th>Requests</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {plannedGames.length > 0 ? (
              plannedGames.map((game, index) => {
                const gameRequests = requests.filter(request => request.gameId === game._id);

                return(
                <tr key={index}>
                  <td>
                    <img src={`${url}/images/${game.sportIcon}${game.sportIcon.includes('.') ? '' : '.png'}`} alt="Game Icon" className="icon-image" />
                  </td>
                  <td>{game.date.split('T')[0]}</td>
                  <td>{game.level}</td>
                  <td>{game.courtName}</td>
                  <td>{game.location}</td>
                  <td>{game.membersJoined}</td>
                  <td>{game.totalMembers}</td>
                  <td>
                  {gameRequests.length > 0 
                  ? (
                    gameRequests.map((request, i) => (
                    <div key={i} className='request-details'>
                      <p>Request from:
                        <br/>Name: {request.senderId.name}
                        <br/>Mail:{request.senderId.email}
                        <br/>Status: {request.status}
                        <br/>
                        {request.status === 'pending' 
                        ? (<>
                            <span className='accept-request' onClick={() => handleResponse(request._id, 'accepted')}>√</span>
                            <span className='book-cancel' onClick={() => handleResponse(request._id, 'declined')}>x</span>
                          </>)
                        : <></>}
                      </p>
                    </div>
                    ))) 
                  : (
                  <p className='request-details'>No requests</p>
                )}</td>
                  <td>
                    <p onClick={() => removeGame(game._id)} className="book-cancel">x</p>
                  </td>
                </tr>
              )})
            ) : (
              <tr>
                <td colSpan="6">No planned games</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Upcoming;
