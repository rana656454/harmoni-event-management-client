import React,{useContext} from 'react';
import {UserContext} from '../../../App'
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './navbar.css'

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }

const Navbar = () => {
    const [loggedInUser,setloggedInUser]= useContext(UserContext)
    const {name} = loggedInUser
    let isLogIn = false; 
    if(loggedInUser.name){
           isLogIn = true;
    }
    const handleLogout = () =>{
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
          const signInUser = {
            name:"",
            email:""
          }
           setloggedInUser(signInUser)
        }).catch((error) => {
          // An error happened.
        });
      }
    
    return (

        <nav className=" nav-container navbar navbar-expand-lg navbar-light bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 text-white" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">About</a>
                    </li>
 
                    <li className="nav-item">
                    <Link to="/dashboard">
                        <a className="nav-link mr-5 text-white" href="#">Dashboard</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>

                    <li className="nav-item">
                   
                      {
                          isLogIn ?<button className="btn btn-secondary" onClick={handleLogout}>Log Out</button>: <Link to="/login"><button className="btn btn-secondary">Log In</button></Link>
                      }
                        
                        
                    </li>
                    {
                        isLogIn ?<li className="nav-item text-uppercase">{name}</li>: ''
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;