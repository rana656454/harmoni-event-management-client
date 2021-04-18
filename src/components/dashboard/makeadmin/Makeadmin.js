import React from 'react';
import DynamicSidebar from '../dashboard/dynamicsidbar/DynamicSidebar';
import Header from '../header/Header';
import Makeadminform from '../makeadminform/Makeadminform';


const Makeadmin = () => {
    return (
        <div>
        <div className="dashboard-header">
         <Header></Header>
         </div>
         
         <div className="row">
         <DynamicSidebar></DynamicSidebar>
         <div className="col-md-10 book-container">
             <Makeadminform></Makeadminform>
         </div>

         </div>
     </div>
    );
};

export default Makeadmin;