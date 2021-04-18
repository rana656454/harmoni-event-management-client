import React,{useState,useEffect} from 'react';
import Bookform from '../bookform/Bookform';
import DynamicSidebar from '../dashboard/dynamicsidbar/DynamicSidebar';
import Header from '../header/Header';
import {useParams} from "react-router-dom";
import './book.css'

const Book = () => {
    let { id } = useParams();
    const [services,setServices] = useState([])
    const [selectservice,setselectservice] = useState({})
    let obj
    useEffect(()=>{
        fetch(`https://secret-reef-97794.herokuapp.com/services`)
        .then(resp=>resp.json())
        .then(data=>{
            setServices(data)
            
           // setorderproducts(myorder.products)
        })
    }
    ,[])

    obj = services.find(o => o._id === id);
    const obj2 = {
        ...obj,
    }  
const {serviceName} = obj2
     
    return (
        <div>
           <div className="dashboard-header">
     
     
            <Header></Header>
            </div>
            
            <div className="row">
           <DynamicSidebar></DynamicSidebar>
            <div className="col-md-10 book-container">
            <Bookform service={serviceName}></Bookform>
            </div>

            </div>
        </div>
    );
};

export default Book;