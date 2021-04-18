import React from 'react';
import './venudetail.css'
const VenueDetails = (props) => {
    const{name,seat,price,rating,img} = props.info
    return (
<div className="venuedetail-container">
 <div class="d-flex justify-content-center">
 <div>
 <img className="img-fluid" src={img} alt=""/>
 </div>
  <div class="card-body">
    <p class="venue-name text-white"><span>{rating}</span> star {name} Hotel</p>
    <p class="venue-seat text-white">Party Room {seat} seat</p>
    <p class="venue-price text-white">{price} / Per Night</p>
    
  </div>
</div>
        </div>
    );
};

export default VenueDetails;