import React from 'react';
import Footer from '../footer/Footer';
import Banner from './banner/Banner';
import Extra from './Extra/Extra';
import Services from './services/Services';

const Home = () => {
    return (
        <div className='container-fluid'>
            <h1 >Fitness Freak</h1>
            <hr className='w-25 mx-auto' />
            <Banner></Banner>
            <Extra></Extra>
            <Services></Services>
            <button className='btn btn btn-primary w-50'>See more Programs</button>


        </div>
    );
};

export default Home;