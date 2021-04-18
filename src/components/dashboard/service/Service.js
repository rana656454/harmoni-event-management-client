import React from 'react';

const Service = (props) => {
    const {serviceName,_id} = props.info
    const handleDelete =() =>{
       console.log(_id)
       
       fetch(`https://secret-reef-97794.herokuapp.com/deleteservice/${_id}`,{
           method: 'DELETE',
           headers: {
             'Content-Type': 'application/json'
           },
           
         })
       .then(resp=>resp.json())
       .then(data=>console.log(data))
      // history.push('/manageproducts');
    }
    return (
        <tr className="tr-order">
        <td className="td-orer">{serviceName}</td>
        <td className="td-orer"><button className="btn btn-success" onClick={handleDelete} >Delete</button></td>
        </tr>
    );
};

export default Service;