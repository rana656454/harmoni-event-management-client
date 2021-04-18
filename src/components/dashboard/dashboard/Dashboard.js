import React,{useContext,useEffect,useState} from 'react';
import Header from '../header/Header';
import './dashboard.css'

import{UserContext} from '../../../App'
import DynamicSidebar from './dynamicsidbar/DynamicSidebar';

const Dashboard = () => {
    const [loggedInUser,setloggedInUser]= useContext(UserContext)
    const {name,email} = loggedInUser
         
    return (
        <div>
        
            <div className="dashboard-header">
            <Header></Header>
            </div>
            
           
            <div className="row">
         
        <DynamicSidebar></DynamicSidebar>
            <div className="col-md-10">
                <h1>Welcome to Dashboard</h1>
            </div>

            </div>
        </div>
    );
};

export default Dashboard;