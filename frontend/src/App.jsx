import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Meet from './pages/Meet/Meet'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Privacy from './pages/Privacy/Privacy'
import Booking from './pages/Booking/Booking'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app' style={{backgroundColor:'#f1f1f1'}}>
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Booking/>}/>
          <Route path='/meet' element={<Meet />} />
          <Route path='/privacy-policy' element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App