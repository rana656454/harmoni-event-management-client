import React from 'react';
import DynamicSidebar from '../dashboard/dynamicsidbar/DynamicSidebar';
import Header from '../header/Header';
import ReviewForm from '../reviewform/ReviewForm';


const Review = () => {
    return (
        <div>
        <div className="dashboard-header">
         <Header></Header>
         </div>
         
         <div className="row">
        <DynamicSidebar></DynamicSidebar>

         <div className="col-md-10 book-container">
             <ReviewForm></ReviewForm>
         </div>

         </div>
     </div>
    );
};

export default Review;