import React, {useContext, useEffect} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const { menu, setMenu } = useContext(StoreContext)
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setMenu('home');
    } else if (currentPath === '/book') {
      setMenu('book');
    } else if (currentPath === '/meet') {
      setMenu('meet');
    } else if (currentPath === '/chat') {
      setMenu('chat');
    } else if (currentPath === '/news') {
      setMenu('news');
    } else if (currentPath === '/privacy-policy') {
      setMenu('privacy-policy');
    } else {
      setMenu('');
    }
  }, [location.pathname]);

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
      <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}><li>Home</li></Link>
      <Link to='/book' onClick={() => setMenu("book")} className={menu === "book" ? "active" : ""}><li>Book</li></Link>
      <Link to='/meet' onClick={() => setMenu("meet")} className={menu === "meet" ? "active" : ""}><li>Meet</li></Link>
      <Link to='/chat' onClick={() => setMenu("chat")} className={menu === "chat" ? "active" : ""}><li>Chat</li></Link>
      <Link to='/news' onClick={() => setMenu("news")} className={menu === "news" ? "active" : ""}><li>News</li></Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.profile_icon} alt="" className='profile_icon' />
        <button onClick={() => setShowLogin(true)} className='login_button'><span className="login_text">Login / SignUp</span></button>
      </div>
    </div>
  )
}

export default Navbar
