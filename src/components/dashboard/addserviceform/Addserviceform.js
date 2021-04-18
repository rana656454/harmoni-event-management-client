import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form'
const Addserviceform = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL,setimageURL] = useState(null)
    
    const handleImageUpload = (event) =>{
//        console.log(event.target.files[0])
        const imgData= new FormData()
        imgData.set('key','3a73b23e77fa7ae43b6e4fd4920182bf')
        imgData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imgData)
         .then(function (response) {
           setimageURL(response.data.data.display_url);
        //   console.log(response.data.data.display_url)
         })
         .catch(function (error) {
           console.log(error);
         });
         
    }

    
    const onSubmit = data =>{
        //setReviewInfo(data)
        

        const newData = {
            serviceName:data.sname,
            serviceDetail:data.servicedetails,
            img:imageURL
        }
        console.log(newData)  
        fetch('https://secret-reef-97794.herokuapp.com/addservice',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Your New Service is Added')
            }
        })
    

    }

    return (
        <div className="review-form text-center">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
        <div className="form-group col-md-6">
        <label htmlFor="sname">Service Name</label>
        <input type="text" id="sname" name="sname" {...register("sname",{required:true})} required placeholder="Service Name" className="form-control"  />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="photo">Select Photo</label>
        <input className="form-control" id="photo" type="file" onChange={handleImageUpload} />
      </div>
    
      <div className="form-group col-md-12">
        <label htmlFor="servicedetails">Service-Details</label>
        <textarea className="form-control" id="servicedetails" name="servicedetails" {...register("servicedetails",{required:true})} placeholder="Service Details" rows="5" />
      </div>
      <div className="form-group col-md-12">
        <input type="submit" id="submit" name="event" className="form-control btn btn-success"  />
      </div>

      </div>

        </form>

    </div>
    );
};

export default Addserviceform;