import React from 'react';
import { Link } from 'react-router-dom';
import './servicedetail.css'
const ServiceDetail = (props) => {
    const {_id,serviceName,img} = props.service
    return (
        <div className="col-md-4 service-detail mb-5">
        <Link to={`/dashboard/book/${_id}`}>
        <div className="card text-center">
        <div className="overflow">
            <img style={{height:"200px"}} className="card-img-top" src={img} alt=""/>
        </div>
        <div className="card-body text-dark">
         <h4 className = "card-title text-uppercase text-primary">
          {serviceName}
         </h4>
         <p className="card-text text-secondary text-justify text-uppercase p-3">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi nulla voluptatem ratione, debitis praesentium.
         </p>
         <a href="" className="btn btn-primary">Booking Now</a>
        </div>

     
        </div>
        </Link>
        </div>
    );
};

export default ServiceDetail;