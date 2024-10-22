import React from 'react'
import Bookheader from '../../components/Bookheader/Bookheader'
import Bookvenue from '../../components/Bookvenue/Bookvenue'
import BookingDisplay from '../../components/Bookingdisplay/Bookdisplay'
const Booking = () => {
  return (
    <div className='booking'>
      <Bookheader/>
      <Bookvenue/>
      <BookingDisplay/>
    </div>
  )
}

export default Booking
