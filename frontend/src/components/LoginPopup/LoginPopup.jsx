import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({setShowLogin}) => {
  const {url, setToken} = useContext(StoreContext);

    const [profileState, setProfileState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
      event.preventDefault();
      let newUrl = url;
      if (profileState==="Login") {
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl, data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("isAdmin", response.data.isAdmin);
        setShowLogin(false);
        toast.success(response.data.message);
      }
      else{
        toast.error(response.data.message);
      }
    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
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
                <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />
             </div>
            }
            <div className="email-input">
                <img src={assets.email_icon} alt="" />
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            </div>
            <div className="password-input">
                <img src={assets.password_icon} alt="" />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
            </div>
        </div>
        <button type='submit'>{profileState==="Sign Up"?"Create account":"Login"}</button>
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