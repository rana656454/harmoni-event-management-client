import React , {useEffect,useState} from 'react';
import DynamicSidebar from '../dashboard/dynamicsidbar/DynamicSidebar';
import Header from '../header/Header';
import Order from '../order/Order';
import Sidebar from'../sidebar/Sidebar'
import './orderlist.css'

const Orderlist = () => {
    const [order,setOrder] = useState([])
    useEffect(() => {
        fetch('https://secret-reef-97794.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
      }, [])

    //console.log(order)
    return (
        <div>
        <div className="dashboard-header">
         <Header></Header>
         </div>
         
         <div className="row">
         <DynamicSidebar></DynamicSidebar>

         <div className="col-md-10 book-container">
         <div className="table-container text-center">
         <h1 className="text-center mb-5 " style={{color:'violet',fontWeight:'bold',}}>Customer's Order List</h1>
             <table className="table">
             <thead>
    <tr className="table-head">
      <th scope="col" className="td-head">Name</th>
      <th scope="col" className="td-head">Email</th>
      <th scope="col" className="td-head">Event Name</th>
      <th scope="col" className="td-head">Status</th>
    </tr>
  </thead>
        <tbody>
              {
               // order.map((info,index)=><h1 key={index}>{info.email}</h1>)
           order.map(info=><Order info={info}></Order>)
              }
                
        </tbody>
             </table>
             </div>
         </div>

         </div>
     </div>
    );
};

export default Orderlist;