import React,{useState,useEffect} from 'react';
import Service from '../service/Service';
import Header from '../header/Header';
import Sidebar from'../sidebar/Sidebar'
import DynamicSidebar from '../dashboard/dynamicsidbar/DynamicSidebar';
const Manageservice = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://secret-reef-97794.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
      }, [])

    return (
        <div>
        <div className="dashboard-header">
         <Header></Header>
         </div>
         
         <div className="row">
         <DynamicSidebar></DynamicSidebar>

         <div className="col-md-10 book-container">
         <div className="table-container text-center">
         <h1 className="text-center mb-5 " style={{color:'violet',fontWeight:'bold',}}>Services</h1>
             <table className="table">
             <thead>
    <tr className="table-head">
      <th scope="col" className="td-head">Name</th>
      <th scope="col" className="td-head">Status</th>
    </tr>
  </thead>
        <tbody>
              {
               // order.map((info,index)=><h1 key={index}>{info.email}</h1>)
              services.map(info=><Service info={info}></Service>)
              }
                
        </tbody>
             </table>
             </div>
         </div>

         </div>
     </div>
    );
};

export default Manageservice;