import React,{useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form'
import './reviewform.css'

const ReviewForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL,setimageURL] = useState(null)
    const handleImageUpload = (event) =>{
        console.log(event.target.files[0])
        const imgData= new FormData()
        imgData.set('key','3a73b23e77fa7ae43b6e4fd4920182bf')
        imgData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imgData)
         .then(function (response) {
           setimageURL(response.data.data.display_url);
           
         })
         .catch(function (error) {
           console.log(error);
         });
    }

    const onSubmit = data =>{
        //setReviewInfo(data)
        console.log(data)
        
        const newData = {
            name:data.name,
            quote:data.quote,
            from:data.from,
            email:data.email,
            img:imageURL
        }
          console.log('ddfdfd')
          
        fetch('https://secret-reef-97794.herokuapp.com/addreview',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Your Review is Added')
            }
        })
    

    }

     



    return (
        <div className="review-form text-center">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" {...register("name",{required:true})} required placeholder="Your Name" className="form-control"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="designation">Your Company/Designation</label>
            <input type="text" name="designation" id="designation" {...register("designation",{required:true})} placeholder="Your company/Designation"  className="form-control"  />
          </div>
          
          <div className="form-group col-md-6">
            <label htmlFor="from">Address</label>
            <input type="text" id="from" {...register("from",{required:true})} name="from" className="form-control"  />
          </div>
    
          <div className="form-group col-md-6">
            <label htmlFor="photo">Select Photo</label>
            <input className="form-control" id="photo" type="file" onChange={handleImageUpload} />
          </div>
        
          <div className="form-group col-md-12">
            <label htmlFor="quote">Your Review</label>
            <textarea className="form-control" id="quote" name="quote" {...register("quote",{required:true})} placeholder="Your Review" rows="5" />
          </div>
          <div className="form-group col-md-12">
            <input type="submit" id="submit" name="event" className="form-control btn btn-success"  />
          </div>

          </div>

            </form>

        </div>
    );
};

export default ReviewForm;