import React from 'react';
import './aboutcard.css'
const AboutCard = (props) => {
    const {name,icon,details} = props.info
    return (
        <div className="col-sm-4 about-single text-center">
        <h1 className="idea-icon" style={{color:'yellow'}}>{icon}</h1>            
        <h3 className="text-white">{name}</h3>
        <p className="text-white">{details}</p>
        </div>
    );
};

export default AboutCard;