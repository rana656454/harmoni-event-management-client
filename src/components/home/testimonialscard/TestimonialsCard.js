import React from 'react';
import { GiRoundStar } from 'react-icons/gi';
import './testimonialsCard.css'
const TestimonialsCard = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="col-md-4 text-center testmonials-col4">
            <div className="profile">
           <img src={img} alt="" className="img-fluid user-img"/>
           <blockquote className="text-uppercase text-justify p-4">
               {quote}
           </blockquote>
           <h3 className="text-uppercase">{name} <br/> <span className="test-from">{from}</span> </h3>
           <p style={{color:'#ff9800'}} className="test-rating"><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></p>
            </div>
        </div>
    );
};

export default TestimonialsCard;