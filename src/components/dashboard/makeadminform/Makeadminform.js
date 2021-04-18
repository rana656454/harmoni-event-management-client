import React from 'react';
import { useForm } from "react-hook-form";

const Makeadminform = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{
        console.log(data);
           
        fetch('https://secret-reef-97794.herokuapp.com/addadmin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('New Admin is Added')
            }
        })
    
    }
    return (
        <div>
         <div className="bookform-container">
         <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="form-group col-md-12">
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" {...register("email",{required:true})} placeholder="Your Email"  className="form-control"  />
          </div>

          <div className="form-group col-md-12">
            <input type="submit" id="submit" name="event" className="form-control btn btn-success"  />
          </div>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Makeadminform;