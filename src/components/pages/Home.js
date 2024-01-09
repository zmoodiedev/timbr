import React from 'react';
import Marquee from '../marquee';
import AmenityFilter from '../amenityFilter';
import Suggestions from '../suggestions';


const Home = () => {
    return (
        <div>
            <Marquee />
            <div className="container home-body">
                <AmenityFilter />
                <hr />
                <Suggestions />
            </div>
        </div>
    )
}

export default Home;