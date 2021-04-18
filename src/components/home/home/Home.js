import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Services from '../services/services';
import Testimonials from '../testimonials/Testimonials';
import Venue from '../venue/Venue';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <About></About>
            <Venue></Venue>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;