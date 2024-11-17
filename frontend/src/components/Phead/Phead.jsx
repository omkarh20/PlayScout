import React from 'react';
import './Phead.css';
import { assets } from '../../assets/assets';

const Phead = () => {
    return (
        <div className='main'>
            <div className='Phead'>
                <div className="right">
                    <p><strong>Games in Bangalore</strong></p>
                </div>

                <div className="left">
                    <p>
                        Don't shy, rack up your games...!
                       
                    </p>
                </div>
            </div>
            <div className="bottom">
                <p className="sort">Filter & Sort By</p>
                <p className="sport">Sports</p>
                <p className="date">Date</p>
            </div>
        </div>
    );
};

export default Phead;
