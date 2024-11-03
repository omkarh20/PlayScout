import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assetsAdmin'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <div className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Venue</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
