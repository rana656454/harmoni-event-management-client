import React,{useState,useEffect} from 'react';
import personalevent from '../../../images/personalevent.jpg'
import birthdayevent from '../../../images/birthdayevent.jpg'
import marrigeevent from '../../../images/marrigeevent.jpg'
import ServiceDetail from '../servicedetail/ServiceDetail';


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch(`https://secret-reef-97794.herokuapp.com/services`)
        .then(resp=>resp.json())
        .then(data=>{
            setServices(data)
           // setorderproducts(myorder.products)
        })
    }
    ,[])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            
            {
                    services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
                <div className="col-md-12 text-center mt-5 mb-5">
                <button className="service-btn">More Explore</button>              
                </div>
              
            </div>
        </div>
        </section>
    );
};

export default Services;