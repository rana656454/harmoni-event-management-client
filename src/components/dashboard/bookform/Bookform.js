import React,{useContext,useState} from 'react';
import './bookform.css'
import { useForm } from "react-hook-form";
import Processpayment from '../processpayment/Processpayment';
import{UserContext} from '../../../App'
const Bookform = (props) => {
  const [loggedInUser,setloggedInUser]= useContext(UserContext)
    const {name,email} = loggedInUser
  const [customerInfo,setCustomerInfo] = useState(null)
  const status="pending"
  const handlePaymentSuccess = (paymentId) =>{
    
    const bookDetails = {
      ...customerInfo,
      paymentId,
      status,
      bookingTime:new Date()}

      console.log(bookDetails)
     
      fetch('https://secret-reef-97794.herokuapp.com/addbooking',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookDetails)
      })
      .then(resp=>resp.json())
      .then(data=>{
        if(data){
          alert("order placed successfully")
        }
      })
      
  }



   const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const {register,handleSubmit} = useForm()
    const onSubmit = data => setCustomerInfo(data);
    return (
        <div>
            
                    
        <div className="bookform-container">

        
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" {...register("firstname",{required:true})} required placeholder="First Name" className="form-control"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" {...register("lastname",{required:true})} id="lastname" required placeholder="Last Name" className="form-control"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" {...register("email",{required:true})} defaultValue={email} placeholder="Your Email"  className="form-control"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="event">Type of Event</label>
            <input type="text" id="event" {...register("event",{required:true})} defaultValue={props.service} placeholder="Your Event"  name="event" className="form-control"  />
          </div>

          <div className="form-group col-md-12">
            <input type="submit" id="submit" name="event" className="form-control btn btn-success"  />
          </div>

          </div>

            </form>


            <div className="col-md-12" style ={{display: customerInfo ? 'block' : 'none'}} >            
            <Processpayment handlePayment={handlePaymentSuccess}></Processpayment>
            </div>
          
        </div>
        

        </div>
    );
};

export default Bookform;