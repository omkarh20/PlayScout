import React, { useState, useEffect } from 'react'
import Bookheader from '../../components/Bookheader/Bookheader'
import Bookvenue from '../../components/Bookvenue/Bookvenue'
import BookingDisplay from '../../components/Bookingdisplay/Bookdisplay'
const Booking = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='booking'>
      <Bookheader/>
      <Bookvenue/>
      <BookingDisplay/>
    </div>
  )
}

export default Booking
