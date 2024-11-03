import React, {useContext, useEffect} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const { menu, setMenu, token, setToken } = useContext(StoreContext)
  const location = useLocation();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

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
        {!token
        ?<button onClick={() => setShowLogin(true)} className='login_button'><span className="login_text">Login / SignUp</span></button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              <hr />
            </ul>
         </div>}
        
      </div>
    </div>
  )
}

export default Navbar
