import React, {useState} from 'react';
import './sidebar.css'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa' 
import * as AiIcons from 'react-icons/ai' 
import {SidebarData} from'../sidebardata/SidebarData'

const Sidebar = (props) => {

    const admin = props.admin
     let admindata
  
  
    if(admin){
         admindata =  SidebarData.filter((admindata)=> {
            return admindata.type == 'admin';
        });
    }
    else {
        admindata =  SidebarData.filter((admindata)=> {
            return admindata.type == 'user';
        });
    }
    

    return (
        <div className="sidebar1">
        <nav className='nav-menu active'>
          <ul className="nav-menu-items">
   
   {
    admindata.map((item,index)=>{
           return(
               <li key={index} className={item.cName}>
  
                   <Link to = {item.path} className="text-white">
                       {item.icon}
                       <span>{item.title}</span>
                   </Link>
               </li>
           )
       })
   }
          </ul>
        </nav>
        </div>
       
    );
};

export default Sidebar;