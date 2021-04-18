import React from 'react';
import'./about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { faBiohazard } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

import AboutCard from '../aboutCard/AboutCard';


const venueIcon = <FontAwesomeIcon icon={faIgloo} />
const friendlyIcon = <FontAwesomeIcon icon={faHandshake} />
const cheersIcon = <FontAwesomeIcon icon={faGlassCheers} />
const unforgetableIcon = <FontAwesomeIcon icon={faBiohazard} />
const timeIcon = <FontAwesomeIcon icon={faCommentDots} />
const ideaIcon = <FontAwesomeIcon icon={faLightbulb} />

const aboutData = [
  {
    name:'Friendly Team',
    icon:friendlyIcon,
    details:'More than 200 Teams'

},
{
  name:'Perfect Venues',
  icon:venueIcon,
  details:'More than 200 Teams'

},
{
  name:'Unique Scrainerio',
  icon:cheersIcon,
  details:'More than 200 Teams'

},
{
  name:'Unforgetable Time',
  icon:unforgetableIcon,
  details:'More than 200 Teams'

},
{
  name:'24/7 Hours Support',
  icon:timeIcon,
  details:'anytime anywhere'

},
{
  name:'Briliant Idea',
  icon:ideaIcon,
  details:'We have millons of idea'

} 
]

const About = () => {
  
    return (
        <div className="about-container">
        <h1 className="text-center mb-5 about-head">About Harmoni</h1>
            <div className="container mt-5">
             <div className="row">
             <div className="col-md-5">
               <h5 className="text-white text-bold">We are Harmoni Event Management</h5>
               <h2 className="text-white text-bold"><span>No.1</span> Event Management</h2>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In enim labore blanditiis ut beatae praesentium?</p>
               <button className="btn btn-primary">About More</button>
             </div>
             <div className="col-md-7">
             <div class="container">
  <div class="row">

  {
     aboutData.map(info=><AboutCard info={info}></AboutCard>)
  } 

  </div>
</div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;