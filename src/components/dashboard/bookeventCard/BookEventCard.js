import React from 'react';
import './bookeventcard.css'
const BookEventCard = (props) => {
    const {name,event,status} = props.info
    return (
        <div className="col-md-6">
        <div className="bookevent-container">
          <div className="d-flex justify-content-between mb-4">
          <h3 className="text-white text-bold">{event}</h3>  
          <h5 className="btn btn-outline-primary">{status}</h5>
          </div>
            
            <p className="text-white text-uppercase">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea impedit eaque atque pariatur quo error.</p>
            
        </div>
        </div>
    );
};

export default BookEventCard;