import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.search_icon} alt="" />
    </div>
  )
}

export default Navbar
