import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Upcoming.css';
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const Upcoming = () => {
  const [bookings, setBookings] = useState([]);
  const {url} = useContext(StoreContext);
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

  useEffect(() => {    
    fetchBookings();
  }, []);

  const cancelBooking = async (bookID) =>{
    const response = await axios.post(`${url}/api/bookings/cancel-booking`, {id:bookID});
    await fetchBookings();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error");
    }
  }

  return (
    <div className="upcoming-container">
      <h2>Upcoming Games</h2>
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
                <td><p onClick={()=>cancelBooking(booking._id)} className='book-cancel'>x</p></td>
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
  );
};

export default Upcoming;
