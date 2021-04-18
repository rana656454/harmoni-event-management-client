import React,{useState,useEffect} from 'react';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../testimonial/Testimonial';
import TestimonialsCard from '../testimonialscard/TestimonialsCard';


const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch(`https://secret-reef-97794.herokuapp.com/reviews`)
        .then(resp=>resp.json())
        .then(data=>{
            setReviews(data)
           // setorderproducts(myorder.products)
        })
    }
    ,[])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
           <h1>Testimonial</h1>
                   <h5 className="text-center pb-5 mb-5">What Our Customers Says </h5>
             

             <div className="row">
             {
                        reviews.map(testimonial => <TestimonialsCard testimonial={testimonial}></TestimonialsCard>)
                        
                    }
             </div>

           </div>
       </section>
    );
};

export default Testimonials;