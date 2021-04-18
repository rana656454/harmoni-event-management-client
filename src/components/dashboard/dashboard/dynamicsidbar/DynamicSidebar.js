import React,{useContext,useEffect,useState} from 'react';
import Sidebar from'../../sidebar/Sidebar'
import{UserContext} from '../../../../App'

const DynamicSidebar = () => {
    const [loggedInUser,setloggedInUser]= useContext(UserContext)
    const {name,email} = loggedInUser
  
    const [admins,setAdmins] = useState([])
    useEffect(() => {
        fetch('https://secret-reef-97794.herokuapp.com/admins')
        .then(res=>res.json())
        .then(data=>{
            setAdmins(data)
        })
      }, [])


  let admin 
  let obj = admins.find(o => o.email === email);
  const obj2 ={
      ...obj,
  }
   //const {email} = obj2

  if(obj2.email===email){
      admin=true
  }
  else{
      admin=false
  }
    
     

    

    return (
        <div className="col-md-2 dashboard-sidebar">
        <Sidebar admin={admin}></Sidebar>
         </div>
    );
};

export default DynamicSidebar;