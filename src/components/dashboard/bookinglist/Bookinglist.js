import React,{useContext,useEffect,useState} from 'react';
import BookEventCard from '../bookeventCard/BookEventCard';
import DynamicSidebar from '../dashboard/dynamicsidbar/DynamicSidebar';
import Header from '../header/Header';
import{UserContext} from '../../../App'


const Bookinglist = () => {
    const [loggedInUser,setloggedInUser]= useContext(UserContext)
    const {name,email} = loggedInUser
    const [userOrder,setuserOrder] = useState([])
    const [order,setOrder] = useState([])
    useEffect(() => {
        fetch('https://secret-reef-97794.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
      }, [])


      useEffect(() => {
      const urOrder =  order.filter((order)=> {
        return order.email === email;
    });
    setuserOrder(urOrder)
}, [order])

        return (
        <div>
        <div className="dashboard-header">
         <Header></Header>
         </div>
         
         <div className="row">
        <DynamicSidebar></DynamicSidebar>

         <div className="col-md-10 book-container">
         <div class="container-fluid d-flex justify-content-center">
                <div className="row d-flex">
                     
                      {
                          userOrder==0 ? <h3 style={{color:'red'}}>Sorry! you have no Booking yet. plz booking if you have any event.</h3> : ''
                      }
                       {
                           userOrder.map(info=><BookEventCard info ={info}></BookEventCard>)
                       }


                     
                </div>
                </div>
         </div>

         </div>
     </div>
    );
};

export default Bookinglist;