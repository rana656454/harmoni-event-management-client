import React from 'react';
import './header.css'
import headerbg from '../../../images/headerbg.jpg'
const Header = () => {
    return (
        <div className="">
        <div className="row header-container">
            <div className="col-md-6 header-content">
              <h1 className="">Harmoni</h1>
              <h2>We are No.1 Event Management</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima ipsam, voluptas quia debitis doloremque?</p>
              <button className="btn-head">Booking Now</button>
            </div>
            <div className="col-md-6">
           <img className="header-img img-fluid" src={headerbg} alt="" srcset=""/>
            </div>
        </div>
        </div>
    );
};

export default Header;