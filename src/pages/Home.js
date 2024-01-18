import React from 'react';
import Marquee from '../components/marquee';
import AmenityFilter from '../components/amenityFilter';
import Suggestions from '../components/suggestions';
import HomeCards from '../components/layout/homeCards';

import '../styles/home.css';


const Home = () => {
    return (
        <>
            <Marquee />
            <div className="container home-body">
                <AmenityFilter />
                <hr />
                <Suggestions />
                <HomeCards />
            </div>
        </>
    )
}

export default Home;