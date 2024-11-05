import React, {useContext} from 'react';
import './AdminPopup.css';
import { assets } from '../../assets/assets';
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const AdminPopup = ({ setShowAdmin }) => {
    const { url, token } = useContext(StoreContext)
    let newUrl = url + "/api/user/make-admin"

    const handleYesClick = async (event) => {
        event.preventDefault();
        console.log("Admin registration process initiated");
            const response = await axios.post(
                newUrl, {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if(response.data.success){
                console.log("Admin status updated successfully");
                setShowAdmin(false);
                localStorage.setItem("isAdmin", response.data.isAdmin);
                toast.success(response.data.message)
            }
            else{
                toast.error(response.data.message);
            }
    }

    return (
        <div className='admin-popup'>
            <div className="admin-popup-container">
                <div className="admin-popup-logo">
                    <img src={assets.logo} id='admin-logo' alt="" />
                    <img onClick={() => setShowAdmin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="admin-popup-title">
                    <h2>Admin Registration</h2>
                </div>
                <div className="admin-popup-message">
                    <p>Do you want to register as an admin?</p>
                </div>
                <div className="admin-popup-actions">
                    <button onClick={handleYesClick}>Yes</button>
                    <button onClick={() => setShowAdmin(false)}>No</button>
                </div>
            </div>
        </div>
    );
}

export default AdminPopup;
