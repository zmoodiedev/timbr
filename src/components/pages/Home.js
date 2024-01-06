import React from 'react';
import Marquee from '../marquee';
import CardGrid from '../cardGrid';
import Suggestions from '../suggestions';


const Home = () => {
    return (
        <div>
            <Marquee />
            <div className="container">
                <CardGrid />
                <hr />
                <Suggestions />
            </div>
        </div>
    )
}

export default Home;