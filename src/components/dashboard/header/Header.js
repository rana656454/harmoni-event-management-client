import React,{useContext} from 'react';
import {UserContext} from '../../../App'
const Header = () => {
    const [loggedInUser,setloggedInUser]= useContext(UserContext)
    const {name} = loggedInUser
    return (
        <div className="container">
           <div className="d-flex justify-content-around">
           <h1 style={{color:'white'}} className="mt-3">Dashboard</h1>
           <h4 className="text-white mt-3">Hi... <span className="text-uppercase">{name}</span></h4>
           </div>
           
        </div>
    );
};

export default Header;