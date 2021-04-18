import React from 'react';
import venue from '../../../images/venue.jpg'
import venue1 from '../../../images/venue1.jpg'
import venue2 from '../../../images/venue2.jpg'
import venue3 from '../../../images/venue3.jpg'
import VenueDetails from '../venuedetails/VenueDetails';
import './venue.css'


const venueData = [
    {
        name:"Chocolate",
        seat: "2500",
        price: '$500',
        rating: '5',
        img:venue1
    },
    {
        name:"Chocolate",
        seat: "2500",
        price: '$500',
        rating: '5',
        img:venue2
    },
    {
        name:"Chocolate",
        seat: "2500",
        price: '$500',
        rating: '5',
        img:venue3
    },
]

const Venue = () => {
    return (
        <div className="venue-container pt-5 bg-dark pb-5 mb-5">
        <div>
        <h1 className="text-white text-center mb-5"> Our Hotel/Community Center</h1>
        </div>
            <div className="container">
               <div className="row">
               <div className="col-md-7 venue-hotel">
                {
                    venueData.map(info=><VenueDetails info ={info}></VenueDetails>)
                }
               </div>
               <div className="col-md-5 ">
                <img style={{height:'400px' , width:'500px'}} className=" img-fluid" src={venue} alt=""/>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Venue;