import React from 'react';
import Addserviceform from '../addserviceform/Addserviceform';
import DynamicSidebar from '../dashboard/dynamicsidbar/DynamicSidebar';
import Header from '../header/Header';
import Sidebar from'../sidebar/Sidebar'
const Addservice = () => {
    return (
        <div>
           <div className="dashboard-header">
            <Header></Header>
            </div>
            
            <div className="row">
            <DynamicSidebar></DynamicSidebar>
               

            <div className="col-md-10 book-container">
                 <Addserviceform></Addserviceform>
            </div>

            </div>
        </div>
    );
};

export default Addservice;