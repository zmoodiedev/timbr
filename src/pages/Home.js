import React from 'react';
import Marquee from '../components/marquee';
import Suggestions from '../components/suggestions';
import ActivityDisplay from '../components/activityDisplay';

import '../styles/home.css';


const Home = () => {
    return (
        <>
            <Marquee />
            <div className="home-body">
                <Suggestions />
                <ActivityDisplay />
            </div>
        </>
    )
}

export default Home;