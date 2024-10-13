import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [profileState, setProfileState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-logo">
            <img src={assets.logo} id='login-logo' alt="" />
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-title">
            <h2>{profileState}</h2>
        </div>
        <div className="login-popup-inputs">
            {profileState==="Login"
            ?<></>
            :<div className='name-input'>
                <img src={assets.profile_icon} alt="" />
                <input type="text" placeholder='Your Name' required />
             </div>
            }
            <div className="email-input">
                <img src={assets.email_icon} alt="" />
                <input type="email" placeholder='Your Email' required />
            </div>
            <div className="password-input">
                <img src={assets.password_icon} alt="" />
                <input type="password" placeholder='Password' required />
            </div>
        </div>
        <button>{profileState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {profileState==='Login'
        ?<p>Create a new account? <span onClick={() => setProfileState('Sign Up')}>Click here</span></p>
        :<p>Already have an account? <span onClick={() => setProfileState('Login')}>Click here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup