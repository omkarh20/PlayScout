import React, {useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("book")} className={menu==="book"?"active":""}>Book</li>
        <li onClick={()=>setMenu("meet")} className={menu==="meet"?"active":""}>Meet</li>
        <li onClick={()=>setMenu("chat")} className={menu==="chat"?"active":""}>Chat</li>
        <li onClick={()=>setMenu("news")} className={menu==="news"?"active":""}>News</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.profile_icon} alt="" className='profile_icon' />
        <button onClick={() => setShowLogin(true)} className='login_button'><span className="login_text">Login / SignUp</span></button>
      </div>
    </div>
  )
}

export default Navbar
