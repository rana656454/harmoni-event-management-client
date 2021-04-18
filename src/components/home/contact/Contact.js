import React from 'react';
import './contact.css'
const Contact = () => {
    
    return (
        <div className="contact-container p-5">
        <h1 className="text-center">Contact us</h1>
        <div className="container">
        <form id="contact-form" >
        <div className="row">
        <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          
          <div className="form-group col-md-12">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" />
          </div>
          <div className="form-group col-md-12">
          <button type="submit" className="form-control btn btn-primary">Submit</button>
          </div>
        </div>
       
          
        </form>
        </div>
         
        </div>
    );
};

export default Contact;