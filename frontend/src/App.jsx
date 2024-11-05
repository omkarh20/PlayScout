import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Meet from './pages/Meet/Meet'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import AdminPopup from './components/AdminPopup/AdminPopup'
import Privacy from './pages/Privacy/Privacy'
import Booking from './pages/Booking/Booking'
import Facility from './pages/Facility/Facility'
import Admin from './pages/Admin/Admin'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    {showAdmin?<AdminPopup setShowAdmin={setShowAdmin}/>:<></>}
      <div className='app' style={{backgroundColor:'#f1f1f1'}}>
        <ToastContainer />
        <Navbar setShowLogin = {setShowLogin} setShowAdmin={setShowAdmin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Booking/>}/>
          <Route path='/meet' element={<Meet />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/facility/:id' element={<Facility/>}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App