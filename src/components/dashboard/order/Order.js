import React,{useEffect} from 'react';
import './order.css'

const Order = (props) => {
    const {firstname,lastname,email,event,paymentId,status,_id} = props.info
    
      const name = firstname+lastname
      const handleStatus = (e) =>{
        console.log(_id)
        const chStatus = (e.target.value)
          const status = {
            id:_id,
            status:chStatus
          }
         fetch(`https://secret-reef-97794.herokuapp.com/updateorder/${_id}`,{
           method:'PATCH',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(status)
         })
         .then(res=>res.json())
         .then(data=>{
           console.log('updated')
         })
        
      }
    let status2
    let status3

    //useEffect(() => {
      if(status==='pending'){
        status2="ongoing"
        status3='done'    
       }
       else if(status==="ongoing"){
         status2="pending"
         status3='done'    
       }
 
       else if(status==="done"){
         status2="pending"
         status3='ongoing'    
       }
 
 
   // }, [status])

    return (
        <tr className="tr-order">
          <td className="td-orer">{name}</td>            
          <td className="td-orer">{email}</td>
          <td className="td-orer">{event}</td>
          <td className="td-orer">
          <select onChange={handleStatus} class="form-select" aria-label="Default select example">
  <option value={status} selected>{status}</option>
  <option value={status2}>{status2}</option>
  <option value={status3}>{status3}</option>
  
</select>
          </td>
        </tr>
    );
};

export default Order;