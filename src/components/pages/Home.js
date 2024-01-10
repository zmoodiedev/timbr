import React from 'react';
import Marquee from '../marquee';
import AmenityFilter from '../amenityFilter';
import Suggestions from '../suggestions';
import HomeCards from '../layout/homeCards';

import '../../styles/home.css';


const Home = () => {
    return (
        <div>
            <Marquee />
            <div className="container home-body">
                <AmenityFilter />
                <hr />
                <Suggestions />
                <HomeCards />
            </div>
        </div>
    )
}

export default Home;